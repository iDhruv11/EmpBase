import axios from "axios";

const deleteEmp = (id) => {
    
    return axios.delete(`http://localhost:5757/delete/${id}`);
}
export { deleteEmp };