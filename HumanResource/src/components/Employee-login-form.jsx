import { useNavigate } from "react-router-dom";
import { useState } from "react";

const EmployeeLoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (env) => {
        env.preventDefault();
        if (username.length === 0 || password.length === 0) {
            return alert("اینپوت ها نمی توانند خالی باشند");
        }
        // فرض کنید تابع loginEmployee در اینجا استفاده می‌شود
        // loginEmployee(username, password).then(() => {
        // setLogin(true);
        // به محض ورود موفقیت‌آمیز، وضعیت ورود را تغییر دهید
        alert("ورود با موفقیت انجام شد");
        // }).catch(() => {
        //   alert("نام کاربری یا رمز عبور اشتباه است");
        // });
    };


    const navigate = useNavigate(); // برای هدایت به مسیرهای دیگر

    const nextPage = () => {
        // اینجا می‌توانید منطق ورود را اضافه کنید.
        // اگر ورود موفق بود، کاربر را به مسیر "/home" هدایت کنید.
        navigate("/home");
    };
    return (
        <form onSubmit={handleLogin} className="d-flex justify-center">
            <div className="w-full p-10">
                <div className="grid items-center justify-items-end w-full">
                    <p className="font-bold text-xl mt-8">نام کاربری</p>
                    <input
                        value={username}
                        onChange={(env) => setUsername(env.target.value)}
                        type="text"
                        placeholder="@username"
                        className="mt-4 h-16 p-5 rounded-xl bg-[#EAEAEA] w-full"
                    />
                </div>
                <div className="grid items-center justify-items-end w-full">
                    <p className="font-bold text-xl mt-8">رمز عبور</p>
                    <input
                        value={password}
                        onChange={(env) => setPassword(env.target.value)}
                        type="password"
                        placeholder="password"
                        className="mt-4 h-16 p-5 rounded-xl bg-[#EAEAEA] w-full"
                    />
                    <div className="grid items-center justify-items-start w-full">
                        <button
                            className="mt-8 bg-[#C09015] rounded-[35px] text-white text-2xl w-full h-10 sm:w-60"
                            onClick={nextPage}
                            type="submit"
                        >
                            ورود
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default EmployeeLoginForm;
