import EmployeeLoginForm from "../components/Employee-login-form.jsx";

const EmployeeLogin = () => {

    return (
        <>
            <div className="grid grid-cols-1 h-full sm:grid-cols-2">
                <div className="bg-[#C09015] hidden sm:block"></div>
                <div className="grid items-center">
                    <EmployeeLoginForm/> {/* پاس دادن setLogin به فرم  setLogin={setLoginStatus}*/}
                </div>
            </div>
        </>
    );
};

export default EmployeeLogin;
