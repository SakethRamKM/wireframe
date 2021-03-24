

const initialState={
    filteredUser:[]
}

const userReducer=(state=initialState, action)=>{
    switch(action.type){
        case "UPDATE_USER":
            return {filteredUser:action.payload}
        default:
            return {filteredUser:[]}
    }
}

export default userReducer;