import { takeEvery,call,put} from 'redux-saga/effects';
import axios from 'axios';
import { addPeople, handlePeople } from './sagaactions';

export  function* rootSaga(){
    yield takeEvery("PEOPLE_READ_ACTION",handlePeople);
    yield takeEvery("ADD_PERSON",addPeople);
}

