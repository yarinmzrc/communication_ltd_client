const initialState = {
    user: {},
    authenticated: false
}

export const userReducer = (state=initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case "INITIALIZE_USER": 
            const {email, customers} = payload;
            return {
                ...state,
                user: {email, customers},
                authenticated: true
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
        default: 
            return state;
    }
}