import React from 'react'
import useInput from '../hooks/useInput'
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${ "white"};
  color: ${ "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default function UserForm(){
    const [firstName,bindFirstName, resetfirstName] = useInput('')
    const [lastName,bindLastName,resetLastName] = useInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetfirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
            <label>FirstName</label>
            <Input 
            type="text"
           {...bindFirstName}
            />
            <label>LastName</label>
             <Input 
            type="text"
            {...bindLastName}
            inputColor="rebeccapurple"
            />
            <Button>submit</Button>
          </form>
        </div>
    )
}