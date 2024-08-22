import { useEffect, useRef, useState } from "react";
import { showPopup } from "../Utils/showPopup";
import { getOneEmp } from "../Utils/getOneEmp";
import { ShimmerUpdate } from "./ShimmerUpdate";
import { UpdateCard } from "./UpdateCard";
import { Outlet, useParams } from "react-router-dom";

const Update =  () => {
    const [showSearch, setShowSearch] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const [showShimmer, setShowShimmer] = useState(false);
    const [showUpdateCard, setShowUpdateCard] = useState(false);

    const [data, setData] = useState({
        id: 1, 
        fullName: "Dhruv Sharma",
        departmentName: "Tech",
        employeeType: "Intern",
        country: "USA",
        phoneNo: "3434343434",
        emailId: "Ddfsd@gmail.com"
    })

    const empId = useRef();
    const { userId }  = useParams();
    
    useEffect(()=>{
        if(userId){
            setShowSearch(false);
            setShowUpdateCard(true);
        }
    }, [])

    const handleSearch = async () => {
        if(!empId.current.value){
            showPopup("❌ " + "Employee ID is required", setErrorMsg);
            return ;
        }
        setShowSearch(false);
        setShowShimmer(true);
        // data = await getOneEmp(empId.current.value);
        if(data == "❌ " + "Erorr Fetching Employee Details."){
            showPopup(data, setErrorMsg);
            setShowSearch(true);
            setShowShimmer(false);
            return ;
        }
        setShowShimmer(false);
        setShowUpdateCard(true);

    }

    return (
        <div className="bg-black h-[90.8vh] text-white flex justify-center items-center">
            <div className={`absolute bg-gray-900 px-14 py-10 rounded-md text-lg ${errorMsg ? `opacity-100 top-5` : `opacity-0 -top-20`} transition-all duration-150 ease-linear`}>{errorMsg}</div>
            {
                (showSearch) && (
                    <div className="flex flex-row max-w-sm flex-wrap gap-4 -mt-96">
                        <p className="w-full text-center text-3xl">Enter Employee ID</p>
                        <input type="number" className=" rounded-[.2em] text-black font-medium px-2 flex-grow"
                            ref={empId}
                        />
                        <button 
                            className="text-base px-3 font-medium rounded-[.2em] py-1 hover:bg-white hover:text-black transition-all duration-150 ease-linear"
                            onClick={handleSearch}
                        >Search</button>
                    </div>
                ) 
            }
            {
                (showShimmer) && <ShimmerUpdate /> 
            }
            {

                (showUpdateCard) && (
                    (()=>{
                        const { id, fullName, departmentName, employeeType, country, phoneNo, emailId } = data;
                        console.log(id, fullName, departmentName, employeeType, country, phoneNo, emailId);
                        // return <UpdateCard id={id} fullName={fullName} departmentName={departmentName} employeeType={employeeType} country={country} phoneNo={phoneNo} emailId={emailId} />
                        return (userId) ? 
                        <Outlet /> : 
                        <UpdateCard id={id} fullName={fullName} departmentName={departmentName} employeeType={employeeType} country={country} phoneNo={phoneNo} emailId={emailId} />
                        
                    })() // had to use IIFE here because when you write js inside jsx, it's mendatory for the js to return an expression that evaluate to a value. IIFE here is immedietly executed and returns <UpdateCard /> which is justified in rules.
                ) 
            }
            
        </div>
    )
}
export { Update };