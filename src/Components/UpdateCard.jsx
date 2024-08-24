import { useState } from "react";
import { Pencil } from "../Utils/Icons";
import { InputField } from "./inputField";
import { SelectField } from "./SelectField";
import { showPopup } from "../Utils/showPopup";
import {validateEmail} from "../Utils/validateEmail"
import {validateNumber} from "../Utils/validateNumber"
import { useNavigate } from "react-router-dom";
import {post} from "../Utils/post"
const UpdateCard = ({ id, fullName, departmentName, employeeType, country, phoneNo, emailId }) => {

    const [user, setUser] = useState({
        id,
        departmentName,
        fullName,
        employeeType,
        country,
        phoneNo,
        emailId
    })
    const [errorMsg, setErrorMsg] = useState(null);
    const [beingEdited, setBeingEdited] = useState(null);
    const navigate = useNavigate();

    const handleEdit = (e) => {
        setBeingEdited(e.currentTarget.id);
    }

    const handleUpdateInfo = async () => {

        for (const key in user) {
            if(!user[key]){
                showPopup("❌ " + "One or More Fields are empty.", setErrorMsg);
                return ;
            }
        }
        const mailRes = validateEmail(user.emailId);
        const numRes = validateNumber(user.phoneNo);
        if(mailRes){
            showPopup("❌ " + mailRes, setErrorMsg);
            return ;
        }
        if(numRes){
            showPopup("❌ " + numRes, setErrorMsg);
            return ;
        }        
        console.log(user);        
        try{
            await post(user);
            showPopup("✅ Employee Info Updated Successfully", setErrorMsg);
                
        }
        catch(err){
            console.log(err);
            
            showPopup("❌ Error Updating Employee Info", setErrorMsg);
        }
        
    }

    return (
        <div className="inline-flex flex-col items-center border border-white px-10 py-7 gap-6 -mt-48">
            <img src={`/src/Images/${user.departmentName}.jpg`} className="w-32 rounded-full" />
            
            {/* error dropdown */}
            <div className={`absolute bg-gray-900 px-14 py-10 rounded-md text-lg ${errorMsg ? `opacity-100 top-5` : `opacity-0 -top-20`} transition-all duration-150 ease-linear`}>{errorMsg}</div>

            <section className="flex flex-col gap-3">

                <div className="w-full flex gap-6">
                    <p className="text-white text-lg font-medium flex-grow">Full Name: </p>
                    <InputField id={"fullName"} value={user.fullName} user={user} setUser={setUser} putFocus={(beingEdited == "name") ? true : false} />
                    <button className={`px-2 py-2 rounded-full hover:bg-[#161616] transition-all duration-150 ease-linear ${(beingEdited == "name") ? `bg-[#161616]` : ``}`}
                        onClick={handleEdit}
                        id="name"
                    >
                        <Pencil />
                    </button>
                </div>

                <div className="w-full flex gap-6">
                    <p className="text-white text-lg font-medium flex-grow">Department Name: </p>
                    <SelectField id={"departmentName"} value={user.departmentName} user={user} setUser={setUser} putFocus={(beingEdited == "deptName") ? true : false }/>
                    <button className={`px-2 py-2 rounded-full hover:bg-[#161616] transition-all duration-150 ease-linear ${(beingEdited == "deptName") ? `bg-[#161616]` : ``}`}
                        onClick={handleEdit}
                        id="deptName"
                    >
                        <Pencil />
                    </button>
                </div>

                <div className="w-full flex gap-6">
                    <p className="text-white text-lg font-medium flex-grow">Employee Type: </p>
                    <SelectField id={"employeeType"} value={user.employeeType} user={user} setUser={setUser} putFocus={(beingEdited == "empType") ? true : false}/>
                    <button className={`px-2 py-2 rounded-full hover:bg-[#161616] transition-all duration-150 ease-linear ${(beingEdited == "empType") ? `bg-[#161616]` : ``}`}
                        onClick={handleEdit}
                        id="empType"
                    >
                        <Pencil />
                    </button>
                </div>

                <div className="w-full flex gap-6">
                    <p className="text-white text-lg font-medium flex-grow">Country: </p>
                    <InputField id={"country"} value={user.country} user={user} setUser={setUser} putFocus={(beingEdited == "country") ? true : false} />
                    <button className={`px-2 py-2 rounded-full hover:bg-[#161616] transition-all duration-150 ease-linear ${(beingEdited == "country") ? `bg-[#161616]` : ``}`}
                        onClick={handleEdit}
                        id="country"
                    >
                        <Pencil />
                    </button>
                </div>

                <div className="w-full flex gap-6">
                    <p className="text-white text-lg font-medium flex-grow">Contact Number: </p>
                    <InputField id={"phoneNo"} value={user.phoneNo} user={user} setUser={setUser} putFocus={(beingEdited == "phoneNo") ? true : false} />
                    <button className={`px-2 py-2 rounded-full hover:bg-[#161616] transition-all duration-150 ease-linear ${(beingEdited == "phoneNo") ? `bg-[#161616]` : ``}`}
                        onClick={handleEdit}
                        id="phoneNo"
                    >
                        <Pencil />
                    </button>
                </div>

                <div className="w-full flex gap-6">
                    <p className="text-white text-lg font-medium flex-grow">Mail ID: </p>
                    <InputField id={"emailId"} value={user.emailId} user={user} setUser={setUser} putFocus={(beingEdited == "emailId") ? true : false} />
                    <button className={`px-2 py-2 rounded-full hover:bg-[#161616] transition-all duration-150 ease-linear ${(beingEdited == "emailId") ? `bg-[#161616]` : ``}`}
                        onClick={handleEdit}
                        id="emailId"
                    >
                        <Pencil />
                    </button>
                </div>

            </section>

            <button 
                className="px-6 py-2 rounded-md font-medium text-white hover:bg-white hover:text-black transition-all duration-200 ease-linear "
                onClick={handleUpdateInfo}    
            >Update</button>
        </div>
    )
}
export { UpdateCard };