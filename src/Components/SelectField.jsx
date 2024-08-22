
const SelectField = ({ id, value, user, setUser, putFocus }) => {

    const optionArray = (id == "departmentName") ? ["Tech", "Sales", "Marketing", "Management"] : ["Intern", "Part-Time", "Full-Time"];

    const updateUser = (e) => {
        const updatedValue = e.target.value; 
        setUser({...user, [id]: updatedValue})
               
    }
    return (putFocus) ? (
        <select className={`bg-[#121212] text-center focus:outline-none min-w-[12.15rem] ${(putFocus) ? `border-white border-b-[1px]` : ``}`}
            onChange={updateUser}
        >
            {
                optionArray.map(option => {
                    return (option == value) ? <option selected>{option}</option> : <option>{option}</option> 
                })
            }
        </select>
    ) : (
        <input
            type="text"
            className={` bg-[#121212] text-center focus:outline-none`}
            value={value}
            disabled={!putFocus}
        />
    )
    
}
export { SelectField }