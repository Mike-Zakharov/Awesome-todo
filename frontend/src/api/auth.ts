import axios from "axios";
import { BASE_PATH } from "../config/constans";

type TUserLoginProps = {
  email: string;
  password: string;
};

export async function userLogin({ email, password }: TUserLoginProps) {
  try {
    const res = await axios.post(
      `${BASE_PATH}/auth/login`,
      {
        email,
        password,
      },
      { withCredentials: true }
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
}
