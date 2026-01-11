const initialData = {
    data: null,
    isLoading: false,
    isError: false
}

export const LoginDetails = (state = initialData, action) => {
    switch(action.type) {
        case "LOGIN_DETAILS":
            return {
                ...state,
                data: action.payload
            }
        case "LOGIN_DETAILS_UPDATE":
            return {
                ...state,
                data: action.payload
            }
        case "RESET_ALL_DATA":
            return {
                ...state,
                data: null
            }
        default:
            return state
    }
}