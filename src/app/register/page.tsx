import PrimaryButton from "@components/common/PrimaryButton/PrimaryButton";

export default function Register() {
  return (
    <div className="flex flex-col flex-grow">
      <div className="flex flex-col flex-grow">Form</div>
      <div className="flex flex-col">
        <div className="h-[1px] bg-[#D6D6D6]"></div>
        <div className="mt-8 flex items-end justify-end">
          <PrimaryButton>مرحله بعد</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
