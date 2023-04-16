import { ReactNode } from "react";
import { ErrorMessage } from "@hookform/error-message";

interface Props {
  children: ReactNode;
  label: string;
  fieldName: string;
  fieldErrors: any /* not completed, fixing it tomorrow . . .  */;
}

export default function FormField({
  children,
  label,
  fieldName,
  fieldErrors,
}: Props) {
  return (
    <>
      <div className="relative rounded group">
        {children}
        <label className="absolute text-sm text-contentmd duration-300 transform origin-[0] bg-base-500 cursor-text right-0 pointer-events-none !z-0">
          {label}
        </label>
      </div>
      <div className="min-h-[45px]">
        <ErrorMessage
          name={fieldName}
          errors={fieldErrors}
          render={({ message }) => <p>{message}</p>}
        />
      </div>
    </>
  );
}

// className="block pt-2 text-xs font-bold text-red-500"
