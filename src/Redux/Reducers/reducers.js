export const contactReducer= ()=>{
      return {
            contacts: [
                {address:"12 Main Road", city:"Chennai", pin: "600900"},
                {address:"13 Gandhi Road", city:"Mumbai", pin: "230900"},
                {address:"14 People Road", city:"Bangalore", pin: "534900"},
            ]
        }

}


export const PeopleReducer = (state={people:[]},action)=>{

    switch(action.type){
        case "PEOPLE_ACTION":
            return {people:action.records}
        default:
            return state;
    }
}