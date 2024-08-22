import { useRef, useState } from "react";
import { showPopup } from "../Utils/showPopup";
import { setEmployee } from "../Utils/setEmployee";
import { getOneEmp } from "../Utils/getOneEmp";
import { EmpCard } from "./EmpCard";

const Delete =  () => {

    const empId = useRef();
    const [showSearch, setShowSearch] = useState(false);
    const [wasDeleted, setWasDeleted] = useState(true); 
    const [errorMsg, setErrorMsg] = useState(null)
    const user = {
        id: 1,
        fullName: "Dhruv Sharma",
        departmentName : "Tech",
        employeeType : "Intern",
        country : "India",
        phoneNo : 3333333333,
        emailId : "dskl@gmail.com"
    }
    const handleSearch = async () => {
        if(!empId.current.value){
            showPopup("❌ Employee ID is required!", setErrorMsg);
            return ;
        }
        const user = await getOneEmp(empId.current.value);
        if(user == "❌ Error Fetching Employee Details."){
            showPopup("❌ Error Deleting Employee", setErrorMsg);
            return ;
        }
        setWasDeleted(true);
        
    }
    return (
        <div className="bg-black h-[90.8vh] text-white flex justify-center items-center">
            {/* Error PopUp */}
            <div className={`absolute bg-gray-900 px-14 py-10 rounded-md text-lg ${errorMsg ? `opacity-100 top-5` : `opacity-0 -top-20`} transition-all duration-150 ease-linear`}>{errorMsg}</div>
            {
                (!wasDeleted) ? (

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

                    (()=>{                        
                        const { id, fullName, departmentName, employeeType, country, phoneNo, emailId} = user; 
                        return <EmpCard id={id} name={fullName} deptName={departmentName} empType={employeeType} country={country} phoneNo={phoneNo} emailId={emailId} />
                    })()
                )
                
            }

        </div>
    )
}
export { Delete };