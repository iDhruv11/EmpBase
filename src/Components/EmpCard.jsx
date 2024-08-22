import { useNavigate } from "react-router-dom"
import { Bin, Mail, Pencil, Phone, Tick } from "../Utils/Icons"

const EmpCard = ({ id, name, deptName, empType, phoneNo, country, emailId, showOptions }) => {
    
    const navigate = useNavigate();

    return (
        <div className="border border-white-1 flex flex-col items-center gap-5 px-20 py-5 rounded-lg relative -mt-72">
            <img src={`src/Images/${deptName}.jpg`} className="rounded-full w-40" />
            <div className="flex flex-col items-center">
                <h1 className="text-white text-3xl font-medium">{name}</h1>
                <h2 className="text-xl">{empType}, {deptName} Dept.</h2>
                <h3>{country}</h3>
            </div>
            {
                (showOptions) ? (
                    <div className="absolute top-3 right-3 flex flex-col items-center gap-2">
                        <div className="px-2 py-2 rounded-full hover:bg-[#161616] transition-all duration-150 ease-linear"
                            onClick={
                                () => {
                                    navigate(`/update/${id}`);                                 
                                }
                            }
                        >
                            <Pencil />
                        </div>
                        <div className="px-2 py-2 rounded-full hover:bg-[#161616] transition-all duration-150 ease-linear">
                            <Bin />
                        </div>
                        <div className="px-2 py-2 rounded-full hover:bg-[#161616] transition-all duration-150 ease-linear">
                            <Mail/>
                        </div>
                        <div className="px-2 py-2 rounded-full hover:bg-[#161616] transition-all duration-150 ease-linear">
                            <Phone />
                        </div>
                    </div>

                ) : (
                    <div className="bg-green-300 flex items-center gap-2 font-medium text-green-800 rounded-md px-2 text-base py-1 absolute right-2 top-2">
                        <Tick /> Deleted
                    </div>
                )
            }
        </div>
    )
}
export { EmpCard }