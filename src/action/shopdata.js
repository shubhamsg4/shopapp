import {NAVDATA, NAVDATA_ERROR} from './type';
import axios from 'axios';
//Load User
console.log('in action');
export const navValues =() => async dispatch =>{
    console.log("action");
    try{
        const res = await axios.get("https://api.gyftr.net/smartbuyapi/smartbuyapi/hdfc/api/v1/home/categories");

         
        dispatch({
            type: NAVDATA,
            payload:res.data.data
        });

    }
    catch(err)
    {
         dispatch({
             type:NAVDATA_ERROR
         })
    }
}
