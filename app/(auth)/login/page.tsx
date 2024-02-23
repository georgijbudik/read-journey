import FormBlock from "../_components/form-block";
import ImageBlock from "../_components/image-block";
import LoginForm from "./_components/login-form";

const RegisterPage = () => {
  return (
    <div className="lg:flex">
      <FormBlock>
        <LoginForm />
      </FormBlock>
      <ImageBlock />
    </div>
  );
};

export default RegisterPage;
