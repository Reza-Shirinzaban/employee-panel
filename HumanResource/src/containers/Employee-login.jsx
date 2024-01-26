import EmployeeLoginForm from "../components/Employee-login-form.jsx";

const EmployeeLogin = () => {
    return(
        <>
            <div className='flex'>
                <div className='min-[1440px]:w-[720px] xl:w-[600px] lg:w-[450px] md:w-[150px] md:h-[1024px] md:bg-[#C09015]'></div>
                <div className='flex flex-col md:pt-80 max-md:pt-48'>
                    <p className='text-4xl font-bold pl-72 max-md:hidden'>پنل کارمندان</p>
                    <p className='text-4xl font-bold md:pl-72 text-center md:hidden'>ورود به پنل</p>
                    <div >
                        <EmployeeLoginForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeLogin;
// width: 720px;
// height: 1024px;
// flex-shrink: 0;