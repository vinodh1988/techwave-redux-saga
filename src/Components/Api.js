
import React, { useState } from 'react';


const Api= ({people,storePeople})=>{
    let tdata=people.map(x=> (
        <tr key={x.id}>
             <td>{x.id}</td>
             <td>{x.name}</td>
             <td>{x.city}</td>
         </tr>
    ))

    let [id,setId] =useState()
    let [name,setName]=useState()
    let [city,setCity]=useState()

  return(
<div>
<table>
            <tr>
                <td>Id</td>
                <td><input type="text" onChange={(e)=>setId(e.target.value)} 
                value={id}/></td>
            </tr>
            <tr>
                <td>Name</td>
                <td><input type="text" onChange={(e)=>setName(e.target.value)}
                value={name}/></td>
            </tr>
            <tr>
                <td>City</td>
                <td><input type="text" onChange={(e)=>setCity(e.target.value)}
                value={city}/></td>
            </tr>
            <tr>
                <td style={{textAlign:'center'}} colspan="2"><button className="btn btn-danger"
                onClick={()=>storePeople(id,name,city)}>Store</button></td>
            </tr>
        </table>
    
    <table>
    <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>City</th>
       </tr>
    </thead>
    <tbody>
         {tdata}
    </tbody>
</table>
</div>  
  )
   
}

export default Api