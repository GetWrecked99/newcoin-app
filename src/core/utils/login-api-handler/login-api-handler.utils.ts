import { toast } from "react-toastify";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { FieldValues } from "react-hook-form";

import { RoutesEnum } from "@core/enums/routes/routes.enums";
import { ToastMessagesEnum } from "@core/enums/toast-messages/toast-messages.enums";
import { loggedIn } from "@core/redux/redux-store/auth/auth.slice";
import { loginUser } from "@core/services/api/authentication/login.api";
import { setItem } from "@core/services/storage/localStorage";

const loginApiHandler = async (
  data: FieldValues,
  dispatch: Dispatch<AnyAction>,
  router: AppRouterInstance
) => {
  const userLogin = await loginUser(data);
  console.log(userLogin);
  if (userLogin.success) {
    dispatch(loggedIn(userLogin.result));
    setItem("token", userLogin.token);
    router.push(RoutesEnum.DashboardPage);
    toast.success(ToastMessagesEnum.LoggedIn);
  } else {
    toast.error(userLogin.response.data.message);
  }
};

export { loginApiHandler };
