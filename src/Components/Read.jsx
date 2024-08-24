import { useRef, useState } from "react";
import { showPopup } from "../Utils/showPopup";
import { getOneEmp } from "../Utils/getOneEmp";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../Utils/EmpSlice";
import { EmpGrid } from "./EmpGrid";
import axios from "axios";

const Read = () => {

    const empId = useRef();
    const [errorMsg, setErrorMsg] = useState(null);
    const dispatcher = useDispatch();
    const empList = useSelector(state => state.EmpSlice);

    const handleSearch = async () => {
        if (!empId.current.value) {
            showPopup("❌ Employee ID is required", setErrorMsg);
            return;
        }

        const singleEmp = await getOneEmp(empId.current.value);

        if (singleEmp == "❌ Error Fetching Employee Details.") {
            showPopup(singleEmp, setErrorMsg);
            return;
        }
        dispatcher(addEmployee([singleEmp]));

    }
    
    const listAllEmp = () => {
        axios.get('http://localhost:5757/employees')
            .then(response => {
                const empArray = [];
                response.data.forEach(emp => {
                    empArray.push(emp);
                });
                dispatcher(addEmployee(empArray));
            })
            .catch( err => {
                showPopup("❌ Erorr Fetching Employees List", setErrorMsg);
            })
    }

    {
        return (empList.length) ? (
            <EmpGrid empList={empList} />
        ) : (
            <div className="bg-black min-h-[90.8vh] text-white flex flex-col items-center">
                
                {/* error popup */}
                <div className={`absolute bg-gray-900 px-14 py-10 rounded-md text-lg ${errorMsg ? `opacity-100 top-5` : `opacity-0 -top-20`} transition-all duration-150 ease-linear`}>{errorMsg}</div>
                
                <div className="flex flex-col items-center gap-5 m-44 relative">
                    <div className="flex flex-row max-w-sm flex-wrap gap-4">
                        <p className="w-full text-center text-3xl">Search Employee By ID</p>
                        <input type="number" className=" rounded-[.2em] text-black font-medium px-2 flex-grow"
                            ref={empId}
                        />
                        <button
                            className="text-base px-3 font-medium rounded-[.2em] py-1 hover:bg-white hover:text-black transition-all duration-150 ease-linear"
                            onClick={handleSearch}
                        >Search</button>
                    </div>
                    <div className="text-3xl">Or</div>
                    <button
                        className="text-base px-3 font-medium rounded-[.2em] py-1 hover:bg-white hover:text-black transition-all duration-150 ease-linear"
                        onClick={listAllEmp}
                    >List All Employees
                    </button>

                </div>
            </div>
        )
    }
}
export { Read };