const EmployeeLoginForm = ({ login, setLogin }) => {
  const clickHandler = () => {
    setLogin(true);
  };

  return (
    <form action="">
      <div className="flex flex-col">
        <p className="font-bold text-xl md:pl-[560px] max-md:text-end mt-8">
          نام کاربری
        </p>
        <input
          type="text"
          placeholder="@username"
          className="mt-4 md:h-16 max-md:w-[326px] max-md:h-12 ml-20 pl-6 rounded-xl bg-[#EAEAEA]"
        />
        <p className="font-bold text-xl md:pl-[560px]  max-md:text-end mt-8">
          رمز عبور
        </p>
        <input
          type="password"
          placeholder="password"
          className="mt-4 md:h-16 max-md:w-[326px] max-md:h-12 ml-20 pl-6 rounded-xl  bg-[#EAEAEA]"
        />
        <button
          className="md:w-[187px] md:h-[58px] bg-[#C09015] rounded-[35px] mt-8 ml-20 text-white text-2xl pb-2"
          type="submit"
          onClick={clickHandler}
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
