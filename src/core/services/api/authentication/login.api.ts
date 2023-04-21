import Http from "../../interceptor/interceptor";
import { LoginApiType } from "@core/types/api-types/login/login-api.types";
import { FieldValues } from "react-hook-form";

const MainUrl = process.env.NEXT_PUBLIC_ACCOUNTING;

const loginUser = async (obj: FieldValues) => {
  try {
    const results = await Http.post(`${MainUrl}login`, obj);
    return results.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export { loginUser };
