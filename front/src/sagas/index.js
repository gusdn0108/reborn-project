// side effects redux-saga/effects
import { all, fork } from 'redux-saga/effects'
import LoginSaga from './userSaga'


export default function* rootSaga() {
    console.log('루트사가 실행')
    yield all([
        LoginSaga()
    ])
}
