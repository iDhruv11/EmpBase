const setEmployee = (name, mail, contact, country, deptName, empType) => {
    const employee = {
        name, 
        deptName, 
        empType,
        mail, 
        contact,
        country,
    }
    return employee;
}
export { setEmployee }