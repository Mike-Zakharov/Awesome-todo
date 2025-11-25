import axios from "axios";
import { BASE_PATH } from "../config/constans";

type TLoginUserProps = {
  email: string;
  password: string;
};

export async function loginUser({ email, password }: TLoginUserProps) {
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
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || "Ошибка авторизации";
      throw new Error(message);
    } else if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}
