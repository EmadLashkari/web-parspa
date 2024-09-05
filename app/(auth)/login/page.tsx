import LoginData from "./components/login/LoginData";
import Title from "./components/login/Title";

export default function Login() {
  return (
    <div className="bg-secondary w-full h-[100vh] p-5 lg:p-0 ">
      <div className="flex flex-col-reverse justify-between items-center lg:flex-row h-full w-full bg-[#fff] rounded-2xl">
        <LoginPage />
      </div>
    </div>
  );
}

function LoginPage() {
  return (
    <>
      <Title />
      <LoginData />
    </>
  );
}
