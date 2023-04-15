interface Props {
  currentFormStep: number;
  nextFormStep: () => void;
  prevFormStep: () => void;
}
export default function WizardForm({
  currentFormStep,
  nextFormStep,
  prevFormStep,
}: Props) {
  return (
    <>
      <div className="flex flex-col flex-grow">Form</div>
      <div className="flex flex-col">
        <div className="h-[1px] bg-[#D6D6D6]"></div>
        <div className="mt-8 flex items-end justify-end">
          {/* <PrimaryButton>مرحله بعد</PrimaryButton> */}
        </div>
      </div>
    </>
  );
}
