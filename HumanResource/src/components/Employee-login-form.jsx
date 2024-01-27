import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginEmployee } from "../services";

const EmployeeLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login(env) {
    env.preventDefault();
    if (username.length == 0 || password.length == 0) {
      return alert("اینپوت ها نمی توانند خالی باشند");
    }
    loginEmployee(username, password)
      .then((result) => {
        if (result) {
          alert("ورود با موفقیت انجام شد");
          navigate("/home");
        }
      })
      .catch((err) => {
        alert("نام کاربری و یا رمز عبور اشتباه است");
      });
  }
  return (
    <form action="" onSubmit={login}>
      <div className="flex flex-col">
        <p className="font-bold text-xl md:pl-[560px] max-md:text-end mt-8">
          نام کاربری
        </p>
        <input
          value={username}
          onChange={(env) => {
            setUsername(env.target.value);
          }}
          type="text"
          placeholder="@username"
          className="mt-4 md:h-16 max-md:w-[326px] max-md:h-12 ml-20 pl-6 rounded-xl bg-[#EAEAEA]"
        />
        <p className="font-bold text-xl md:pl-[560px]  max-md:text-end mt-8">
          رمز عبور
        </p>
        <input
          value={password}
          onChange={(env) => {
            setPassword(env.target.value);
          }}
          type="password"
          placeholder="password"
          className="mt-4 md:h-16 max-md:w-[326px] max-md:h-12 ml-20 pl-6 rounded-xl  bg-[#EAEAEA]"
        />
        <button
          className="md:w-[187px] md:h-[58px] bg-[#C09015] rounded-[35px] mt-8 ml-20 text-white text-2xl pb-2"
          type="submit"
        >
          ورود
        </button>
      </div>
    </form>
  );
};

export default EmployeeLoginForm;

//width: 187px;
// height: 58px;
// flex-shrink: 0;
