import MDetailsStore from "../Stores/MDetailsStore";
import axios from "axios";

async function getBussinessData() {
    const res = await axios.get('http://localhost:8787/businessData')
    MDetailsStore.setBusinessData(res.data)
 }

 const updateBusinessData=(businessData)=>{
    axios.put('http://localhost:8787/businessData',businessData
    ).then(()=>{
        MDetailsStore.setBusinessData(businessData);
    }).catch((error)=>{
        console.log(error.statusText);
      })
 }
 export {getBussinessData,updateBusinessData}