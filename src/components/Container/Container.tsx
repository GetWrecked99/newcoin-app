import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className="min-w-[480px] h-full flex flex-col flex-grow mx-auto max-w-[640px] sm:max-w-[768px] md:max-w-[1024px] lg:max-w-[1280px] xl:max-w-[1440px] 2xl:max-w-[1920px] p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-11">
      {children}
    </div>
  );
};

export { Container };
