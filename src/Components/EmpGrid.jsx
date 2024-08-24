import { useDispatch } from "react-redux";
import { EmpCard } from "./EmpCard";
import { clearList } from "../Utils/EmpSlice";

const EmpGrid = ({ empList }) => {
    const dispatcher = useDispatch();
    return (
        <div className="bg-black min-h-[90.8vh] flex flex-wrap justify-center items-center text-white gap-10 pt-52 relative">
            <div className={`flex px-5 py-1 text-xl font-medium gap-3 rounded-full hover:bg-[#161616] hover:cursor-pointer transition-all duration-150 ease-linear absolute top-[90%] ${(empList.length == 1) ? `top-[75%]` : `` }`}
                onClick={() => {
                    dispatcher(clearList());
                }}
            >
                <p className="">&lt;</p>
                <p>Back</p>
            </div>
            {
                empList.map(empInfo => {
                    const { id, fullName, departmentName, employeeType, country, phoneNo, emailId } = empInfo;
                    return <EmpCard id={id} name={fullName} deptName={departmentName} empType={employeeType} country={country} phoneNo={phoneNo} emailId={emailId} showOptions={true} />
                })
            }
        </div>
    )
}

export { EmpGrid };