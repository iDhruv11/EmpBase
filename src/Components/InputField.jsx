
const InputField = ({ id, value, user, setUser, putFocus }) => {

    const updateUser = (e) => {
        const updatedValue = e.target.value; 
        setUser({...user, [id]: e.target.value})        
               
    }
    return (putFocus ? (
        <input
            type="text"
            className={`bg-[#121212] text-center focus:outline-none duration-500 ease-linear ${(putFocus) ? `border-white border-b-[1px]` : ``} border-smooth`}
            defaultValue={value}
            onChange={updateUser}
        />
    ) : (
        <input
            type="text"
            className={`bg-[#121212] text-center focus:outline-none`}
            value={value}
            disabled={!putFocus}
        />
    )
    )
}
export { InputField }