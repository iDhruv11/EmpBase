const setEmployee = (name, mail, contact, country, deptName, empType) => {
    const employee = {
<<<<<<< HEAD
        fullName: name, 
        departmentName: deptName, 
        employeeType: empType,
        emailId: mail, 
        phoneNo: contact,
        country: country,
=======
        name, 
        deptName,
        empType,
        mail, 
        contact,
        country
>>>>>>> 42692eb31eb2cd8959ea02fe326f7b4105fa5857
    }
    return employee;
}
export { setEmployee }
