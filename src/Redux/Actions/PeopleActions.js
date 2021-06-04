import axios from 'axios'
import { PeopleReducer } from '../Reducers/reducers'


export const storePeopleApi=(id,name,city)=>{
  return {
     type: "ADD_PERSON",
     data: {id:id,name:name,city:city}
  }
   
}