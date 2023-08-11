import React, { useState } from 'react'
import './Module.css'


function Module(props) {
  const [count,setCount] =useState(0)
  const[isClicked,setIsClicked]=useState(true);
  
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
    setIsClicked(false)
    
  };
  const decrementCount = () => {
    // Update state with decremented value
    setCount(count -1);
    setIsClicked(true)
    
  };

  
  return (
       
  <div>
   
   <div className="box">
   
     <div className="container">
     
      <div ClassName="row">
        <div className="col-md-3">
         <div className="box-part">
            <div className="c1">Count:{count}</div>
           <div >
            <img src={props.img}></img>
           </div>
           <div>
            <h2>{props.name}</h2>
            <h4>{props.price}</h4>
    
           </div>
           <div>
           
        {isClicked ? <button className="b1" onClick={incrementCount}>Addtocart</button>  :
        
                     <button className="b2" onClick={decrementCount}>Remove</button>}
        
            </div>
           </div>
           </div>
           </div>
           </div>      
        </div>
</div>

      
     
  
  )
}

export default Module