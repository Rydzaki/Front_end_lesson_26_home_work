import React, {useState, FormEvent } from 'react'


export default function HideText() {

    const [statustText, setText] = useState<boolean>(true)
    const changeHandler = ():void =>{
        setText(!statustText);
    }


  return (

        <div>
      <button onClick={changeHandler}>{statustText ? "hide text" : "show text"}
        </button>

        {statustText && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia perspiciatis exercitationem ipsam explicabo et, alias hic ut facilis, velit maxime delectus vitae nam eveniet corporis optio provident libero qui. Temporibus!</p>}
        
    </div>
  )
}

// _ && _ (выведит правый операнд если левый true)
// _ || _ (выведит правый операнд если левый false)
// _ ?? _ (оператор нулевого слияния) (выведит правый операнд если левый undefined или null)