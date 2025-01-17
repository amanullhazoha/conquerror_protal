import GreenCheckStepper from "@/assets/icons/GreenCheckSteper";

const ActiveStep = ({ count }) => {
  return (
    <div class="w-8 h-8 flex items-center justify-center rounded-full bg-[#0E9F6E] text-white font-bold">
      {count}
    </div>
  );
};

const InactiveStep = ({ count }) => {
  return (
    <div class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-600 font-bold">
      {count}
    </div>
  );
};

const EmployStepper = ({ activeStep = 3 }) => {
  return (
    <div class="flex items-center justify-center px-1 mt-4">
      <div className="flex items-center justify-between">
        <div class="flex items-center space-x-2 w-fit">
          {activeStep > 1 && <GreenCheckStepper />}
          {activeStep === 1 && <ActiveStep count={1} />}
          {activeStep < 1 && <InactiveStep count={1} />}

          <span class="text-gray-700">Personal Info</span>
        </div>

        <div class="w-[64px] h-0.5 bg-gray-200"></div>
      </div>

      <div class="flex items-center space-x-2">
        <div class="flex items-center space-x-2 w-fit">
          {activeStep > 2 && <GreenCheckStepper />}
          {activeStep === 2 && <ActiveStep count={2} />}
          {activeStep < 2 && <InactiveStep count={2} />}

          <span class="text-gray-700">Family & Passport</span>
        </div>

        <div class="w-[36px] h-0.5 bg-gray-200"></div>
      </div>

      <div class="flex items-center">
        <div class="flex items-center space-x-2 w-full">
          {activeStep > 3 && <GreenCheckStepper />}
          {activeStep === 3 && <ActiveStep count={3} />}
          {activeStep < 3 && <InactiveStep count={3} />}

          <span class="text-gray-700">Address & Reference</span>
        </div>

        <div class="w-[22px] h-0.5 bg-gray-200"></div>
      </div>

      <div class="flex items-center">
        <div class="flex items-center space-x-2">
          {activeStep > 4 && <GreenCheckStepper />}
          {activeStep === 4 && <ActiveStep count={4} />}
          {activeStep < 4 && <InactiveStep count={4} />}

          <span class="text-gray-500">Documents & Job</span>
        </div>
      </div>
    </div>
  );
};

export default EmployStepper;
