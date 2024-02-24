import ImageBlock from "../_components/image-block";
import FormBlock from "../_components/form-block";

import LoginForm from "./_components/login-form";

const LoginPage = () => {
  return (
    <div className="flex-grow flex gap-2.5 flex-col lg:flex-row lg:gap-4">
      <FormBlock>
        <LoginForm />
      </FormBlock>

      <ImageBlock />
    </div>
  );
};

export default LoginPage;
