
const getOneEmp = async (empId) => {
    try{
        const response = await axios.get(`http://localhost:5757/getEmployeeById/${empId}`);
        return response.data;        
    }
    catch(err){
        return "❌ " + "Erorr Fetching Employee Details.";        
    }   

}
export {getOneEmp};