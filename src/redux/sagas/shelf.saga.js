import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";



function* fetchShelf(action){
    try {
        const shelfResponse = yield axios('/api/shelf')
        yield put({type: 'SET_SHELF', payload: shelfResponse.data})
    } catch (err) {
        console.log('Error in GET saga', err)
    }
}

function* sendShelf(action){
    try {
        yield axios.post('/api/shelf', action.payload)
        yield put({type: 'FETCH_SHELF'})

    } catch (err){
        console.log('Error in POST saga', err)
    }
}

function* dropItem(action){
    try {
        yield axios.delete(`/api/shelf/${action.payload}`)
        yield put({type: 'FETCH_SHELF'})
    } catch (err){
        console.log('Error in DELETE saga', err)
    }
}





function* shelfSaga(){
    yield takeLatest('FETCH_SHELF', fetchShelf)
    yield takeLatest('SEND_SHELF', sendShelf)
    yield takeLatest('DROP_ITEM', dropItem)
}

export default shelfSaga