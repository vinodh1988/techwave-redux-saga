import Api from '../../Components/Api'
import { connect } from'react-redux'
import { bindActionCreators } from 'redux'
import { storePeopleApi } from '../Actions/PeopleActions'

const stateToProps =(store)=>{
    return {people: store.peoplevalues.people}
}

const actionToProps = (dispatch)=>{
    return bindActionCreators({storePeople: storePeopleApi},dispatch)
}

export const APIHoc = connect(stateToProps,actionToProps)(Api)