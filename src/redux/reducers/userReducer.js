const initialState = {
    user: {},
    authenticated: localStorage.getItem('token') ? true : false,
    loading: true,
}

export const userReducer = (state=initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case "INITIALIZE_USER": 
            const {email, customers} = payload;
            return {
                ...state,
                user: {email, customers: customers},
                authenticated: true,
                loading: false
            }
        case "LOG_OUT": 
            return {
                ...state,
                user: {},
                authenticated: false
            }
        case "CHANGE_PASSWORD": 
            const {password} = payload;
            return {
                ...state,
                user: {...state.user, password: password}
            }
        case "UPDATE_CUSTOMERS":
            const {newCustomers} = payload;
            return {
                ...state,
                user: {...state.user, customers: newCustomers}
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: true
            }
        case "STOP_LOADING": 
            return {
                ...state,
                loading: false
            }
        default: 
            return state;
    }
}