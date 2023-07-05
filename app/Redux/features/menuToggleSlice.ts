import { createSlice } from '@reduxjs/toolkit'




export interface menuToggleState{
    value:boolean
}


const initialState:menuToggleState={
    value:false
}


export const menuToggleSlice=createSlice({
    name:'menuToggle',
    initialState,
    reducers:{
        toggleMenu:(state)=>{
            state.value=!state.value
          
        }
    }
})



export const {toggleMenu}=menuToggleSlice.actions
export default menuToggleSlice.reducer