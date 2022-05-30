const initialState = {
    email: "",
    username: "",
    isLogin: "",
    isAdmin: "",
    loadding: false,
    error: null,
}


export const login_request = (payload) => ({
    type: 'LOGIN_REQUEST',
    payload
})



export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

const userReducer = (state = initialState, action) => {
    console.log('action.type값', action)
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loadding: false,
                error: null,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                me: {
                    ...action.payload,
                },
                isLogin: true,
                error: null,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLogin: false,
                me: {},
                error: action.error
            }
        default:
            return state
    }
}

export default userReducer