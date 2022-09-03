const userDatareducer = (state, action) => {
    switch (action.type) {
        case "SIGN_IN":
            state = action.payload
            return state
        case "SIGN_OUT":
            state = {}
            return state
        case "GET_DATA":
            return state;
        default:
            return {}
    }
}
export default userDatareducer
