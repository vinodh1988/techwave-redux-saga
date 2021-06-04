import Contact from '../../Components/Contact'
import { connect } from'react-redux'


export const ContactHoc = connect((store)=>{
    return {contacts: store.contactvalues.contacts }
},null)(Contact)