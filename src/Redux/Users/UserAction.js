import { UserActionTypes } from './UserTypes'
import { LoadUserDataService, SignUpService, LoginUserServer } from '../../services/Users/UserServices'


export const LoadUserData = () => async dispatch => {
    try {
        dispatch(LoadUserLoaded(true))
        const ResponseData = await LoadUserDataService();
        if (ResponseData.id) {
            dispatch(SetUserData(ResponseData))
            dispatch(LoadUserLoaded(false))
        }
        dispatch(LoadUserLoaded(false))
    }
    catch (err) {
        dispatch(LoadUserLoaded(false))
        dispatch(LoadUserFailer(false))
    }
}
export const SetUserData = (userData) => {
    return {
        type: UserActionTypes.USER_LOADED_SUCCESS,
        payload: userData
    }
}

export const LoadUserLoaded = (boolean) => {
    return {
        type: UserActionTypes.USER_LOADED_LOADING,
        payload: boolean
    }
}
export const LoadUserFailer = (boolean) => {
    return {
        type: UserActionTypes.USER_LOADED_FAIL,
        payload: boolean
    }
}

export const SignUpUser = (data, history) => async (dispatch) => {
    try {
        dispatch(SIGNUP_LOADED(true));
        const ResponseService = await SignUpService(data);
        dispatch(SetSignUpUser(ResponseService));
        if (ResponseService.userId) {
            localStorage.setItem('auth-sky', ResponseService.token)
            history.push('/')
            dispatch(SIGNUP_LOADED(false));
        }
        dispatch(SIGNUP_LOADED(false));
    }
    catch (err) {
        console.log('hiiii');
        dispatch(SIGNUP_LOADED(false));
        dispatch(SignUpFailer(false));
    }
}

export const SetSignUpUser = (data) => {
    return {
        type: UserActionTypes.SIGNUP_SUCCESS,
        payload: data
    }
}

export const SignUpFailer = (boolean) => {
    return {
        type: UserActionTypes.SIGNUP_FAIL,
        payload: boolean
    }
}
export const SIGNUP_LOADED = (boolean) => {
    return {
        type: UserActionTypes.SIGNUP_LOADED,
        payload: boolean
    }
}

export const LoginUser = (data, history) => async dispatch => {
    try {
        dispatch(UserLoginLoading(true));
        const ResponseServer = await LoginUserServer(data)
        console.log(ResponseServer);
        dispatch(SetLoginUser('s', ResponseServer))
        if (ResponseServer.id) {
            localStorage.setItem("auth-sky", ResponseServer.token)
            history.push('/')
        }
        dispatch(UserLoginLoading(false));
    }
    catch (err) {
        dispatch(UserLoginLoading(false));
        dispatch(UserLoginFaiuler(true))
    }
}

export const SetLoginUser = (data) => {
    return {
        type: UserActionTypes.LOGIN_SUCCESS,
        payload: data
    }
}
export const UserLoginLoading = (boolean) => {
    return {
        type: UserActionTypes.LOGIN_LOADED,
        payload: boolean
    }
}
export const UserLoginFaiuler = (boolean) => {
    return {
        type: UserActionTypes.LOGIN_Fail,
        payload: boolean
    }
}