import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../reducers/userReducer'

async function LoginAPI(payload) {
    console.log('loginAPI 페이로드값은?', payload)
    return await axios.post('http://localhost:3500/api/auth/signin', payload)
}



function* LogIn(action) {
    console.log('saga login함수의 action값은? ', action)
    try {
        const result = yield call(LoginAPI, action.payload)
        console.log(result.data)

        if (result.data.status === false) {
            yield put({
                type: LOGIN_FAILURE,
                payalod: result.data.msg
            })
        } else {
            yield put({
                type: LOGIN_SUCCESS,
                payload: result.data.userData
            })
        }
    } catch (error) {
        yield put({
            type: LOGIN_FAILURE,
        })
    }
}

export default function* LoginSaga() {
    console.log('로그인사가 실행')
      yield takeLatest(LOGIN_REQUEST, LogIn)
}