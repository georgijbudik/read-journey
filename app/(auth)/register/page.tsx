import ImageBlock from "../_components/image-block";
import FormBlock from "../_components/form-block";

import RegistrationForm from "./_components/registration-form";

const RegisterPage = () => {
  return (
    <div className="flex-grow flex gap-2.5 flex-col lg:flex-row lg:gap-4">
      <FormBlock>
        <RegistrationForm />
      </FormBlock>

      <ImageBlock />
    </div>
  );
};

export default RegisterPage;
