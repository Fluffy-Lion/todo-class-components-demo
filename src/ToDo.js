import { useState } from "react"

const ToDo = () => {
    const [userInput, setUserInput] = useState("")
    const [list, setList] = useState([])

    const addHandler = () => {
        let newList = [...list]
        newList.push(userInput)
        setList(newList)
        setUserInput("")
    }
    return (
        <div>
            <h1>tasks</h1>
            {list.map((item, index) => {
                return (
                    <div>    
                        <p key={index}>{item}</p>
                    </div>
                )
            })}
            <input 
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                />
            <p>{userInput}</p>
            <button onClick={addHandler}>add task</button>
        </div>
    )
}

export default ToDo