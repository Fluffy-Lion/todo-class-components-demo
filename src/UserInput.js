import styled from 'styled-components'

const Input = styled.input `
    border: teal 4px dotted;
    width: 600px;
`

const UserInput = ({ userInput, updateInput }) => {
    return (
        <div>
            <Input value={userInput} onChange={(e) => updateInput(e) }/>
            <p>{userInput}</p>
        </div>
        
    )
}

export default UserInput