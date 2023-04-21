import Http from "../../interceptor/interceptor";
import { RegisterApiType } from "@core/types/api-types/register/register-api.types";
import { FieldValues } from "react-hook-form";

const MainUrl = process.env.NEXT_PUBLIC_ACCOUNTING;

const registerUser = async (obj: FieldValues) => {
  try {
    const results = await Http.post(`${MainUrl}register`, obj);
    return results.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export { registerUser };
