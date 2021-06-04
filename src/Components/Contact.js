
import React from 'react';


const Contact= ({contacts})=>
{
    return(
      <div className="alert alert-info" style={{margin:"30px"}}>
          Contacts<br/>
          <hr/>
          <ul>
              {contacts.map(x=><li>{x.address}, {x.city}, {x.pin}</li>)}
          </ul>
      </div>
    )
}

export default Contact