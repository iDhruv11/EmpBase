import axios from "axios";

const post = ( employee ) => {
<<<<<<< HEAD
    const url = "http://localhost:5757/saved";
    console.log(employee);    
    axios.post(url, employee)
        .then((res)=>{
            response = res;           
        })
        .catch((err)=>{
            response = res;            
        })
=======
    const url = "localhost:5757/saved";
    axios.post(url, employee)
        .then((res)=>{
            console.log(res);
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    
>>>>>>> 42692eb31eb2cd8959ea02fe326f7b4105fa5857
}
export { post };
