import React, {useState, FormEvent } from 'react'


export default function HideText() {

    const [statustText, setText] = useState<boolean>(true)
    const changeHandler = ():void =>{
        setText(!statustText);
    }


  return (
    <div>
        {statustText && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia perspiciatis exercitationem ipsam explicabo et, alias hic ut facilis, velit maxime delectus vitae nam eveniet corporis optio provident libero qui. Temporibus!</p>}
        <button onClick={changeHandler}>{statustText ? "hide text" : "show text"}
        </button>
    </div>
  )
}