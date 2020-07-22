import React from 'react'

type Props = {
    option: string;
    userAnswered: number;
    correct: string;
    index: number;
    checkAnswer: {(num: number) : void;}
    key: number;
}

const Option:React.FC<Props> = ({option, userAnswered, correct, index, checkAnswer}) => {
    const flag = correct === option
    let optionStyle = {}

    if(userAnswered === -1) {
        // Not answered yet
        optionStyle = {
            cursor: 'pointer',
            background: 'none'
        }
    } else {
        // User has answered something
        optionStyle = userAnswered===index? {
            // user chose this option
            cursor: 'not-allowed',
            background: flag? 'green' : 'red'
        } : {
            // user chose another option
            background: flag? 'green' : 'none'
        }

    }

    const handleClick = (e:any) => {
        e.preventDefault()
        checkAnswer(index)
    }
    
    return (
       <li onClick={handleClick} style={optionStyle} dangerouslySetInnerHTML={{__html:option}}/>
    )
}

export default Option
