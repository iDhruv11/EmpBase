const EmpCard = ({id, name, deptName, empType, phoneNo, country, emailId, showPencil}) => {
    console.log(deptName);
    
    return (
        <div>
            
            <img src={`src/Images/${deptName}.jpg`} className="rounded-full w-32"/>
            <div>
                
            </div>
        </div>
    )
}
export { EmpCard }