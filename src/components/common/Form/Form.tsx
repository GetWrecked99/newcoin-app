import {
  FC,
  ReactNode,
  Children,
  createElement,
  isValidElement,
  HTMLAttributes,
} from "react";

import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";

interface Props {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  className: HTMLAttributes<HTMLFormElement>["className"];
}

const Form: FC<Props> = ({
  handleSubmit,
  onSubmit,
  children,
  className,
}): JSX.Element => {
  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return child.props.name
            ? createElement(child.type, {
                ...{
                  ...child.props,
                  key: index,
                },
              })
            : child;
        }
      })}
    </form>
  );
};

export { Form };
