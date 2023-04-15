"use client";

import { useState } from "react";
import RegisterContent from "@components/Register/Content/RegisterContent";
import RegisterSidebar from "@components/Register/Sidebar/RegisterSidebar";
import PrimaryButton from "@components/common/PrimaryButton/PrimaryButton";
import WizardForm from "@components/Register/WizardForm/WizardForm";

export default function Register() {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <div className="h-full overflow-hidden grid grid-cols-5 rounded-2xl">
      <RegisterSidebar />
      <RegisterContent>
        <div className="flex flex-col flex-grow">
          <WizardForm
            currentFormStep={formStep}
            nextFormStep={nextFormStep}
            prevFormStep={prevFormStep}
          />
        </div>
      </RegisterContent>
    </div>
  );
}
