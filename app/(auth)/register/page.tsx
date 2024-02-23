import FormBlock from "../_components/form-block";
import ImageBlock from "../_components/image-block";
import RegistrationForm from "./_components/registration-form";

const RegisterPage = () => {
  return (
    <div className="lg:flex">
      <FormBlock>
        <RegistrationForm />
      </FormBlock>
      <ImageBlock />
    </div>
  );
};

export default RegisterPage;
