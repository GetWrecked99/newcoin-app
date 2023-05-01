import { toast } from "react-toastify";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { FieldValues } from "react-hook-form";

import { RoutesEnum } from "@core/enums/routes/routes.enums";
import { ToastMessagesEnum } from "@core/enums/toast-messages/toast-messages.enums";
import { registerUser } from "@core/services/api/authentication/register.api";

const registerApiHandler = async (
  requiredData: FieldValues,
  router: AppRouterInstance
) => {
  const userRegister = await registerUser(requiredData);
  if (userRegister.success) {
    router.push(RoutesEnum.RootPage);
    toast.success(ToastMessagesEnum.SignedUp);
  } else {
    userRegister.response.data.errors.map((err: string) => {
      toast.error(err);
    });
  }
};

export { registerApiHandler };
