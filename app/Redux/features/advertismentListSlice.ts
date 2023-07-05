import { createSlice } from "@reduxjs/toolkit"


import { advertisment } from "@/app/interfaces"


export interface advertismentInitState{
    value:advertisment[]
}


const initialState:advertismentInitState={
    value:[
        {title:'General English', description:`
         Основной курс, позволяющий освоить все основные концепции языка
        `},
        {title:'Practice Speaking', description:'Индивидуальные и групповые практики разговрного английского'},
        {title:'Pre-IELTS English', description:'Данный курс расчитан на тех, кто уже освоил все основы языка и готов перейти на более высокий уровень '},
        {title:'IELTS exam',description:'Курс основан на взаимодействии с опытными преподавателями для подготовки к экзамену IELTS'},
    ]
}


export const advertsimentListSlice=createSlice({
    name:'menuToggle',
    initialState,
    reducers:{
       
    }
})




export default advertsimentListSlice.reducer