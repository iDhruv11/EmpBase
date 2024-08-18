const setEmployee = (name, mail, contact, country, deptName, empType) => {
    const employee = {
        name, 
        mail, 
        deptName, 
        empType,
        country,
        contact
    }
    return employee;
}
export { setEmployee }