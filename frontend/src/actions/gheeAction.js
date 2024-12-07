import axios from 'axios'
import { gheeFail, gheeRequests, gheeSuccess } from '../slices/gheeSlice'

export const allProducts=()=>async(dispatch)=>{
    try {
        dispatch(gheeRequests())
        
        const {data}=await axios.get('/prasanth/ghee')
        
        dispatch(gheeSuccess(data))
    } catch (error) {
        dispatch(gheeFail(error.response.data.message))
    }
}