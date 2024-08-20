import axios from "axios";

const post = ( employee ) => {
    const url = "http://localhost:5757/saved";
    return axios.post(url, employee);
            
}
export { post };
