const initialState = {
    user: {}
}

export const userReducer = (state=initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case "INITIALIZE_USER": 
            const {email, password} = payload;
            return {
                ...state,
                user: {email, password}
            }
        default: 
            return state;
    }
}