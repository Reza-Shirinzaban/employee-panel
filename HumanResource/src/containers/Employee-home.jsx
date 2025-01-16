import EmployeeNav from "../components/Employee-nav.jsx";
import EmployeeLeftNav from "../components/Employee-left-nav.jsx";

const EmployeeHome = () => {
    return (
        <>
            <EmployeeNav />
            <EmployeeLeftNav />
            <div dir="rtl" className="flex flex-col mr-48 mt-16 pl-20">
                {/* درخواست مرخصی */}
                <div className="bg-[#FFF5E1] p-8 rounded-xl shadow-md">
                    <p className="text-3xl text-black font-bold mb-6">درخواست مرخصی</p>
                    <p className="text-lg mb-4">
                        بنده {`{نام کاربر}`} خواستار مرخصی:
                    </p>
                    <div className="flex gap-4 mb-4">
                        <label className="flex items-center gap-2">
                            <input type="radio" name="leaveType" value="hourly" />
                            <span>ساعتی</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" name="leaveType" value="daily" />
                            <span>روزانه</span>
                        </label>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-lg mb-2">از ساعت / روز</label>
                            <input
                                type="text"
                                className="w-full h-12 rounded-md border bg-white px-4"
                            />
                        </div>
                        <div>
                            <label className="block text-lg mb-2">تا ساعت / روز</label>
                            <input
                                type="text"
                                className="w-full h-12 rounded-md border bg-white px-4"
                            />
                        </div>
                    </div>
                    <button className="mt-4 px-8 py-2 bg-[#C09015] text-white rounded-lg">
                        ثبت و ارسال
                    </button>
                </div>

                {/* ورود و خروج */}
                <div className="bg-[#FFF5E1] p-8 rounded-xl shadow-md mt-8">
                    <p className="text-3xl text-black font-bold mb-6">ورود و خروج</p>
                    <p className="text-lg mb-4">در ساعت (نمایش ساعت به‌صورت لایو):</p>
                    <div className="flex gap-4 mb-4">
                        <label className="flex items-center gap-2">
                            <input type="radio" name="entryExit" value="entry" />
                            <span>ورود</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" name="entryExit" value="exit" />
                            <span>خروج</span>
                        </label>
                    </div>
                    <button className="mt-4 px-8 py-2 bg-[#C09015] text-white rounded-lg">
                        ثبت و ارسال
                    </button>
                </div>
            </div>
        </>
    );
};

export default EmployeeHome;