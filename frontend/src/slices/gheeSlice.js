import { createSlice } from "@reduxjs/toolkit";

const gheeSlice=createSlice({
    name:"ghee",
    initialState:{
        loading:false,
        ghee:[]
    },
    reducers:{
        gheeRequests(state,action){
            return{
                    loading:true
            }
        },
        gheeSuccess(state,action){
            return{
                loading:false,
                ghee:action.payload.ghee
            }
        },
        gheeFail(state,action){
            return{
                loading:false,
                error:action.payload
                
            }
        },
        getadminproductsrequest(state,action){
            return{
                    loading:true
                    
            }
        },
        getadminproductssuccess(state,action){
            return{
                loading:false,
                products:action.payload.products
            }
        },
        getadminproductsfailure(state,action){
            return{
                loading:false,
                error:action.payload,
                
                
            }
        }
    }
    

})

const {actions,reducer}=gheeSlice
export const {gheeRequests,gheeSuccess,gheeFail,
    getadminproductsfailure,getadminproductsrequest,getadminproductssuccess}=actions
export default reducer