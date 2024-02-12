import React, {useState} from 'react'


export default function TestText ( ) {
    const [inputText, setInputText] = useState<string>('')
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>):void =>{
        setInputText(event.target.value);
    }
    
  return (
    <div>
            <input type="text" value={inputText} onChange={changeHandler} placeholder='Input your text' />
            <p>{inputText}</p>
    </div>
  )
}


// 3. Задача: Форма с текстовым полем.

// Текст задачи: Создайте React-компонент, включающий текстовое поле и отображающий введенное в поле значение в отдельном параграфе.