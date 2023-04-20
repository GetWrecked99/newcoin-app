import { FieldValues } from "react-hook-form";
import Http from "../../interceptor/interceptor";

const MainUrl = process.env.NEXT_PUBLIC_ACCOUNTING;

const loginUser = async (obj: FieldValues) => {
  try {
    const results = await Http.post(`${MainUrl}login`, obj);
    return results.data;
  } catch (error: any) {
    console.log(error);
  }
};

export { loginUser };
