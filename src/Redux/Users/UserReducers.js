import { UserActionTypes } from "./UserTypes"


const initialState = {
    name: null,
    userId: null,
    email: null,
    UserLoadLoading: false,
    UserLoadFailer: false,
    UserSignUpLoading: false,
    UserSignUpFailer: false,
    UserLoginFauiler: '',
    UserLoginLoading: false,
}
const UserReducer = (state = initialState, action) => {
    console.log(action);
    console.log(action.payload);
    switch (action.type) {
        case UserActionTypes.USER_LOADED_SUCCESS:
            localStorage.setItem('id', action.payload.id)
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                userId: action.payload.id,
            }
        case UserActionTypes.USER_LOADED_FAIL:
            return {
                ...state,
                UserLoginFauiler: action.payload

            }
        case UserActionTypes.USER_LOADED_LOADING:
            return {
                ...state,
                UserLoginFauiler: action.payload
            }

        case UserActionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                userId: action.payload.userId
            }
        case UserActionTypes.SIGNUP_LOADED:
            return {
                ...state,
                UserSignUpLoading: action.payload
            }
        case UserActionTypes.SIGNUP_FAIL:
            return {
                ...state,
                UserSignUpFailer: action.payload
            }

        case UserActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                userId: action.payload.userId
            }
        case UserActionTypes.LOGIN_LOADED:
            return {
                ...state,
                UserLoginLoading: action.payload
            }
        case UserActionTypes.LOGIN_Fail:
            return {
                ...state,
                UserLoginFauiler: action.payload
            }
        default:
            return state;
    }
}

export default UserReducer;