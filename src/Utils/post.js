import axios from "axios";

const post = ( employee ) => {
    const url = "localhost:5757/saved";
    axios.post(url, employee)
        .then((res)=>{
            console.log(res);
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    
}
export { post };
