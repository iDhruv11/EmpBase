const setEmployee = (name, mail, contact, country, deptName, empType) => {
    const employee = {
        fullName: name, 
        departmentName: deptName,
        employeeType: empType,
        emailId: mail, 
        phoneNo: contact,
        country: country
    }
    return employee;
}
export { setEmployee }
