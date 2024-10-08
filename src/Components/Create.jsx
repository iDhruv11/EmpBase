import { useRef, useState } from "react";
import { validateEmail } from "../Utils/validateEmail";
import { validateNumber } from "../Utils/validateNumber";
import { setEmployee } from "../Utils/setEmployee";
import { post } from "../Utils/post"
import { useNavigate } from "react-router-dom";
import { showPopup } from "../Utils/showPopup";

const Create = () => {
    // <---- State Variable && Declaration Section ---->
    const name = useRef();
    const mail = useRef();
    const country = useRef();
    const contactNum = useRef();
    const deptName = useRef();
    const empType = useRef();
    const [errorMsg, setErrorMsg] = useState(null);
    const navigate = useNavigate();
        
    // <---- Function to write data to database using API ---->
    const handleSubmit = async () => {

        const mailRes = validateEmail(mail.current.value);
        const numRes = validateNumber(contactNum.current.value);

        // <----- Info Validation ---->
        if(mailRes){
            showPopup("❌ " + mailRes, setErrorMsg);
            return ;
        }
        if(!name.current.value){
            showPopup("❌ " + "Name is empty", setErrorMsg);
            return ;
        }
        if(numRes){
            showPopup("❌ " + numRes, setErrorMsg);
            return ;
        }
        if(!country.current.value){
            showPopup("❌ " + "Please Enter your country", setErrorMsg);
            return ;
        }

        const employee = setEmployee(name.current.value, mail.current.value, contactNum.current.value, country.current.value, deptName.current.value, empType.current.value);

        // <---- API interaction Section ---->
        try{
            await post(employee);
            showPopup("✅ Employee Created Successfully", setErrorMsg);
            setTimeout(() => {
                navigate('/')
            }, 1500);
        }       
        catch(error){
            showPopup("❌ Error Creating Employee", setErrorMsg);
        }
          
    }
    return (

        <div className="bg-black h-[90.8vh] flex justify-center items-center text-white">

            <div className="flex flex-col bg-black border border-white-1 -mt-64 px-10 py-6 gap-7 items-center">

                <p className="text-3xl font-semibold text-center">Create Employee</p>

                {/* -------------------------------------Name Section--------------------------------------*/}

                <div className="flex flex-col">
                    <div className="flex py-3 gap-16 items-center">
                        <label 
                            htmlFor="name" 
                            className="text-xl w-[51%]"
                        >Full Name:</label>
                        <input 
                            type="text"
                            id="name" 
                            className="w-3/6 text-black py-1 px-1 font-semibold rounded-md"
                            placeholder=" i.e. John Doe"
                            ref={name}
                        />
                    </div>

                    {/* ------------------------------Department Name Section-------------------------------*/}

                    <div className="flex py-3 gap-16 items-center">
                        <label 
                            htmlFor="dept-name"
                            className="text-xl w-[51%]"
                        >Department Name:</label>
                        <select
                            name="dept-name"
                            id="dept-name"
                            className="w-3/6 text-black py-[0.35rem] px-1 font-semibold rounded-md"
                            ref={deptName}
                        >
                            <option value="Tech" selected>Tech</option>
                            <option value="Sales">Sales</option>
                            <option value="Management">Management</option>
                            <option value="Marketing">Marketing</option>
                        </select>
                    </div>

                    {/* ------------------------------Employee Type Section----------------------------------*/}

                    <div className="flex py-3 gap-16 items-center">
                        <label
                            htmlFor="emp-type"
                            className="text-xl w-[51%]"
                        >Employee Type:</label>
                        <select
                            name="emp-type"
                            id="emp-type"
                            className="w-3/6 text-black py-[0.35rem] px-1 font-semibold rounded-md"
                            ref={empType}
                        >
                            <option value="Intern">Intern</option>
                            <option value="Full-Time" selected>Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                        </select>
                    </div>

                    {/* -----------------------------------Mail ID Section------------------------------------*/}                    
                    <div className="flex py-3 gap-16 items-center">
                        <label
                            htmlFor="mail"
                            className="text-xl w-[51%]"
                        >Email:</label>
                        <input
                            type="text"
                            id="mail"
                            className="w-3/6 text-black py-1 px-1 font-semibold rounded-md"
                            placeholder=" i.e. John@gmail.com"
                            ref={mail}
                        />
                    </div>

                    {/* --------------------------------Contact Number Section---------------------------------*/}

                    <div className="flex py-3 gap-16 items-center">
                        <label
                            htmlFor="phone"
                            className="text-xl w-[51%]"
                        >Contact Number:</label>
                        <input
                            type="number"
                            id="phone"
                            className="w-3/6 text-black py-1 px-1 font-semibold rounded-md"
                            placeholder=" i.e. 9876543210"
                            ref={contactNum}
                        />
                    </div>

                    {/* --------------------------------Country Name Section-----------------------------------*/}

                    <div className="flex py-3 gap-16 items-center">
                        <label 
                            htmlFor="country" 
                            className="text-xl w-[51%]"
                        >Country:</label>
                        <input
                            type="text"
                            id="country"
                            className="w-3/6 text-black py-1 px-1 font-semibold rounded-md"
                            placeholder=" i.e. India"
                            ref={country}
                        />
                    </div>

                </div>

                {/* ------------------------------Submit Button-------------------------------*/}

                <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#c8c6c6] transition-all duration-100 ease-linear"
                    onClick={handleSubmit}
                >Submit</button>

            </div>

            {/* -------------------------------Pop-Up Error-----------------------------------*/}
            
            <div className={`absolute bg-gray-900 px-14 py-10 rounded-md text-lg ${errorMsg ? `opacity-100 top-5` : `opacity-0 -top-20`} transition-all duration-150 ease-linear`}>{errorMsg}</div>
        </div>
    )
}
export { Create };
