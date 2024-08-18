import axios from "axios";

const post = ( employee ) => {
    const url = "http://localhost:5757/saved";
    console.log(employee);    
    axios.post(url, employee)
        .then((res)=>{
            response = res;           
        })
        .catch((err)=>{
            response = res;            
        })
}
export { post };