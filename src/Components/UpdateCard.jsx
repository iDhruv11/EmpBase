import { useState } from "react";
import { Pencil } from "../Utils/Icons";
const UpdateCard = ({ name, deptName, empType, country, phoneNo, emailId }) => {
    deptName = "Tech"
    name = "Dhruv Sharma"
    empType = "Intern"
    country = "Australia"
    phoneNo = "6666666666"
    emailId = "drv@gmail.com"
    const [beingEdited, setBeingEdited] = useState(null);
    const handleEdit = (e) => {
        setBeingEdited(e.currentTarget.id);     
        e.currentTarget.parent.children[1].focus
    }
    return (
        <div className="inline-flex flex-col items-center border border-white px-10 py-7 gap-6 -mt-48">
            <img src={`/src/Images/${deptName}.jpg`} className="w-32 rounded-full"/>
            <section className="flex flex-col gap-3">
                <div className="w-full flex gap-6">
                    <p className="text-white text-lg font-medium flex-grow">Full Name: </p>
                    <input 
                        type="text"
                        className={`border-b-1 border-white bg-[#121212] text-center`}
                        value={name}
                        disabled={(beingEdited == "name") ? false : true } />
                    <button className="px-2 py-2 rounded-full hover:bg-[#161616] transition-all duration-150 ease-linear"
                        onClick={handleEdit}
                        id="name"
                    >
                        <Pencil />
                    </button>
                </div>
                <div className="w-full flex gap-6">
                    <p className="text-white text-lg font-medium flex-grow">Department Name: </p>
                    <input 
                        type="text"
                        className={`border-b-1 border-white bg-[#121212] text-center`}
                        value={deptName}
                        disabled={(beingEdited == "deptName") ? false : true } />
                    <button className="px-2 py-2 rounded-full hover:bg-[#161616] transition-all duration-150 ease-linear"
                        onClick={handleEdit}
                        id="deptName"
                    >
                        <Pencil />
                    </button>
                </div>
                <div className="w-full flex gap-6">
                    <p className="text-white text-lg font-medium flex-grow">Employee Type: </p>
                    <input 
                        type="text"
                        className={`border-b-1 border-white bg-[#121212] text-center`}
                        value={empType}
                        disabled={(beingEdited == "empType") ? false : true } />
                    <button className="px-2 py-2 rounded-full hover:bg-[#161616] transition-all duration-150 ease-linear"
                        onClick={handleEdit}
                        id="empType"
                    >
                        <Pencil />
                    </button>
                </div>
                <div className="w-full flex gap-6">
                    <p className="text-white text-lg font-medium flex-grow">Country: </p>
                    <input 
                        type="text"
                        className={`border-b-1 border-white bg-[#121212] text-center`}
                        value={country}
                        disabled={(beingEdited == "country") ? false : true } />
                    <button className="px-2 py-2 rounded-full hover:bg-[#161616] transition-all duration-150 ease-linear"
                        onClick={handleEdit}
                        id="country"
                    >
                        <Pencil />
                    </button>
                </div>
                <div className="w-full flex gap-6">
                    <p className="text-white text-lg font-medium flex-grow">Contact Number: </p>
                    <input 
                        type="text"
                        className={`border-b-1 border-white bg-[#121212] text-center`}
                        value={phoneNo}
                        disabled={(beingEdited == "phoneNo") ? false : true } />
                    <button className="px-2 py-2 rounded-full hover:bg-[#161616] transition-all duration-150 ease-linear"
                        onClick={handleEdit}
                        id="phoneNo"
                    >
                        <Pencil />
                    </button>
                </div>
                <div className="w-full flex gap-6">
                    <p className="text-white text-lg font-medium flex-grow">Mail ID: </p>
                    <input 
                        type="text"
                        className={`border-b-1 border-white bg-[#121212] text-center`}
                        value={emailId}
                        disabled={(beingEdited == "emailId") ? false : true } />
                    <button className="px-2 py-2 rounded-full hover:bg-[#161616] transition-all duration-150 ease-linear"
                        onClick={handleEdit}
                        id="emailId"
                    >
                        <Pencil />
                    </button>
                </div>

            </section>
        </div>
    )
}
export { UpdateCard };