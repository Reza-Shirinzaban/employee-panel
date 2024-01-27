import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-regular-svg-icons'
const EmployeeNav = ()=> {
    return(
        <>
            <div className='w-full h-[82px] bg-[#C09015] flex shadow-gray-500 shadow-md'>

                <div className='flex items-center'>
                    <svg className='ml-12 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 13 9" fill="none">
                        <path d="M11 7C11 7 6.875 2 6.5 2C6.125 2 2 7 2 7" stroke="#D5B666" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                    <div className='flex ml-24 items-center'>
                        <p className='text-white text-xl'>نام کاربر</p>
                        <div className='ml-6'>
                            <div className='w-12 h-12 rounded-full bg-[#D9D9D980] flex justify-center items-center'>
                                <FontAwesomeIcon className='w-6 h-6' icon={faUser} />
                            </div>
                        </div>
                    </div>
                    <div className='absolute right-12 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="8" fill="#D5B666"/>
                            <path
                                d="M8.27096 8C7.65074 8 7.14795 8.50279 7.14795 9.12301C7.14795 9.74322 7.65074 10.246 8.27095 10.246H23.993C24.6133 10.246 25.116 9.74322 25.116 9.12301C25.116 8.50279 24.6133 8 23.993 8H8.27096ZM8.27096 14.6707C7.65074 14.6707 7.14795 15.1734 7.14795 15.7937C7.14795 16.4139 7.65074 16.9167 8.27095 16.9167H23.993C24.6133 16.9167 25.116 16.4139 25.116 15.7937C25.116 15.1734 24.6133 14.6707 23.993 14.6707H8.27096ZM8.27096 21.4087C7.65074 21.4087 7.14795 21.9115 7.14795 22.5317C7.14795 23.1519 7.65074 23.6547 8.27095 23.6547H23.993C24.6133 23.6547 25.116 23.1519 25.116 22.5317C25.116 21.9115 24.6133 21.4087 23.993 21.4087H8.27096Z"
                                fill="black"/>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EmployeeNav;

//(212, 182, 102, 0.30);