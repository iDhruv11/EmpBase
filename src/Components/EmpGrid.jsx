import { EmpCard } from "./EmpCard";

const EmpGrid = ({empList}) => {
    
    return (
        <div className="bg-black min-h-[90.8vh] flex flex-wrap justify-center items-center text-white gap-10 pt-52"> 
            {
                empList.map(empInfo => {
                    const {id, fullName, departmentName, employeeType, country, phoneNo, emailId} = empInfo;
                    return <EmpCard id={id} name={fullName} deptName={departmentName} empType={employeeType} country={country} phoneNo={phoneNo} emailId={emailId} showOptions={true} />
                })        
            }        
        </div>
    )
}

export { EmpGrid };