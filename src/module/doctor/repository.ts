import { client } from "../../config/database";
import ThrowError from "../../middlware/error";
import { ObjectId } from "mongodb";

class DoctorRepository {
  static getAllAppointmentRepository = async () => {
    await client.connect(); // Always call connect before operations
    const queryResult = await client
      .db("master")
      .collection("appointment")
      .find({})
      .toArray();
    return queryResult;
  };

  static getUserAppointment = async (email: string) => {
    console.log("Repo Email: ", email);
    try {
      await client.connect();
      const query = { "details.email": email };
      const queryResult = await client
        .db("master")
        .collection("appointment")
        .find(query)
        .toArray();
      return queryResult;
    } catch (error) {
      throw new Error(`Failed to retrieve user appointments: ${error}`);
    }
  };

  static deleteAppointmentRepository = async (id: string) => {
    console.log("Id: ", id);
    await client.connect();
    const query = { _id: new ObjectId(id) };
    const queryResult = await client
      .db("master")
      .collection("appointment")
      .deleteOne(query);
    return queryResult;
  };

  static addAppointmentRepository = async (details: any) => {
    await client.connect();
    console.log("Repo Details:", details);
    const queryResult = await client
      .db("master")
      .collection("appointment")
      .insertOne({ details });
    return queryResult;
  };

  static registerUserRepository = async (userData: any) => {
    await client.connect();
    console.log("UserData Repo: ", userData);

    const existUser = await client
      .db("master")
      .collection("logindata")
      .findOne({ email: userData.email });

    if (existUser) {
      throw new ThrowError(
        409,
        "Email already exists",
        "Email already exists."
      );
    }

    const queryResult = await client
      .db("master")
      .collection("logindata")
      .insertOne(userData);

    return queryResult;
  };

  static loginUserRepository = async (userData: any) => {
    await client.connect();
    const query = { email: userData.email, password: userData.password };
    console.log("UserData Repo: ", userData);

    const queryResult = await client
      .db("master")
      .collection("logindata")
      .findOne(query);

    if (!queryResult) {
      throw new ThrowError(
        404,
        "Account Not Found",
        "Please create an account"
      );
    }

    return queryResult;
  };
}

export default DoctorRepository;
