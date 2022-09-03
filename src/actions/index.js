const signInAction = (data) => {
    return {
        type: "SIGN_IN",
        payload: data,
    }
}
const getDataAction = () => {
    return {
        type: "GET_DATA",
    }
}
const signOutAction = () => {
    return {
        type: "SIGN_OUT"
    }
}
export { signInAction, signOutAction, getDataAction }
