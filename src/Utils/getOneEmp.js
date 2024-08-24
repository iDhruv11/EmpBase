import axios from "axios";

const getOneEmp = async (empId) => {
    try{
        const response = await axios.get(`http://localhost:5757/employees/${empId}`);
        console.log("fatched");
        
        return response.data;        
    }
    catch(err){        
        console.log(err);
        
        return "❌ Error Fetching Employee Details.";        
    }   

}
export {getOneEmp};