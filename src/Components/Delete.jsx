import { useRef, useState } from "react";
import { showPopup } from "../Utils/showPopup";
import { setEmployee } from "../Utils/setEmployee";
import { getOneEmp } from "../Utils/getOneEmp";
import { EmpCard } from "./EmpCard";
import { deleteEmp } from "../Utils/deleteEmp";

const Delete = () => {

    const empId = useRef();
    const [showSearch, setShowSearch] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null)

    const user = {
        id: 1,
        fullName: 'Dhruv sharma',
        departmentName: 'Tech',
        employeeType: 'Intern',
        country: 'Canada',
        emailId: 'drvsr@gmail.com',
        phoneNo: 3434343434,
    }

    const handleSearch = async () => {
        if (!empId.current.value) {
            showPopup("❌ Employee ID is required!", setErrorMsg);
            return;
        }
        const user = await getOneEmp(empId.current.value);
        if (user == "❌ Error Fetching Employee Details.") {
            showPopup("❌ Error Deleting Employee", setErrorMsg);
            return;
        }
        try {
            const deleteRes = await deleteEmp(empId.current.value);
            setWasDeleted(true);
        }
        catch (err) {
            showPopup("❌ Error Deleting Employee.", setErrorMsg)
        }

    }
    return (
        <div className="bg-black h-[90.8vh] text-white flex justify-center items-center relative">
            {/* Error PopUp */}
            <div className={`absolute bg-gray-900 px-14 py-10 rounded-md text-lg ${errorMsg ? `opacity-100 top-5` : `opacity-0 -top-20`} transition-all duration-150 ease-linear`}>{errorMsg}</div>
            {/* back button  */}
            {
                (!showSearch) && (
                    <div className="flex px-5 py-1 text-xl font-medium gap-3 rounded-full hover:bg-[#161616] hover:cursor-pointer transition-all duration-150 ease-linear absolute top-10 left-72"
                        onClick={() => {
                            setShowSearch(true)
                        }}
                    >
                        <p className="">&lt;</p>
                        <p>Back</p>
                    </div>
                )
            }
            {
                (showSearch) ? (

                    <div className="flex flex-row max-w-sm flex-wrap gap-4 -mt-96">
                        <p className="w-full text-center text-3xl">Enter Employee ID</p>
                        <input type="number" className={`rounded-[.2em] text-black font-medium px-2 flex-grow `}
                            ref={empId}
                        />
                        <button
                            className={`text-base px-3 font-medium rounded-[.2em] py-1 hover:bg-white hover:text-black transition-all duration-150 ease-linear`}
                            onClick={handleSearch}
                        >Delete</button>
                    </div>

                ) : (

                    (() => {
                        const { id, fullName, departmentName, employeeType, country, phoneNo, emailId } = user;
                        return <EmpCard id={id} name={fullName} deptName={departmentName} empType={employeeType} country={country} phoneNo={phoneNo} emailId={emailId} showOptions={true} />
                    })()
                )

            }

        </div>
    )
}
export { Delete };