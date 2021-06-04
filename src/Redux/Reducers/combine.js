
import { combineReducers } from 'redux';
import {contactReducer, PeopleReducer} from './reducers'

export const appstate= combineReducers({
    contactvalues:contactReducer,
    peoplevalues:PeopleReducer
})