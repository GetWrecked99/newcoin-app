import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  isModalOpen: boolean;
}

const CustomModal: FC<Props> = ({
  children,
  isModalOpen,
}: Props): JSX.Element => {
  return (
    <div
      className={
        "fixed flex items-center justify-center top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] " +
        (isModalOpen ? "z-[100] opacity-100" : "-z-[100] opacity-0")
      }
    >
      <div className="bg-white p-5 w-[40%] rounded-2xl">{children}</div>
    </div>
  );
};

export { CustomModal };
