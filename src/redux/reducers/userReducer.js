const initialState = {
    user: {},
    authenticated: false
}

export const userReducer = (state=initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case "INITIALIZE_USER": 
            const {email} = payload;
            return {
                ...state,
                user: {email},
                authenticated: true
            }
        default: 
            return state;
    }
}