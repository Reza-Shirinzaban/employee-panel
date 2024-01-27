import EmployeeNav from "../components/Employee-nav.jsx";
import EmployeeLeftNav from "../components/Employee-left-nav.jsx";
import EmployeeHomeForm from "../components/Employee-home-form.jsx";
import EmployeeHomeForm2 from "../components/Employee-home-form2.jsx";

const EmployeeHome = ()=> {
    return(
        <>
                <EmployeeNav/>
                <EmployeeLeftNav/>
            <div dir='rtl' className='flex flex-col mr-48 mt-16'>
                <p className='text-3xl text-black font-bold'>درخواست مرخصی</p>
                <EmployeeHomeForm/>
                <p className='text-3xl text-black font-bold mt-8'>ورود و خروج</p>
                <EmployeeHomeForm2/>
            </div>

        </>
    )
}
export default EmployeeHome;