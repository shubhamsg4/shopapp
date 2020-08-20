import {NAVDATA,NAVDATA_ERROR,} from '../action/type';
const initialState={
    navData:[],
    error:{},
    loading:true

}
console.log('moviedata reducer')
export default function (state= initialState,action){
const {type,payload}=action;
switch(type){
 case NAVDATA:   
    console.log('working');
    return{
       ...state,
       navData:payload,
       loading:false
    }
    case NAVDATA_ERROR:
        return {
            ...state,
            error:payload,
            loading:false
    
        };
       
    default:
        return state;

}
}