import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import userReducer from "./userReducer"



const persist = {
    key: "user", 
    storage, // 저장 방법 
    whitelist: ["user"] // localstorage 에 저장할 내용
}

console.log(persist)



const rootReducer = combineReducers({
    user: userReducer
})

export default persistReducer(persist,rootReducer)