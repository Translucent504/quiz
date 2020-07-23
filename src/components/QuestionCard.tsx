import React from 'react'
import Option from './Option'
import Wrapper from './QuestionCard.styles'
type Props = question & {
    updateScore: { (num: number, correct:boolean): void };
    userAnswered: number;
}

const QuestionCard: React.FC<Props> = ({ questionText, correct, incorrect, options, updateScore, userAnswered }) => {

    const checkAnswer = (index: number) => {
        if (userAnswered===-1) {
            const ans = options[index]
            if (ans === correct) {
                updateScore(index, true)
            } else {
                updateScore(index, false)
            }
        }
    };

    return (
        <Wrapper>
            <p dangerouslySetInnerHTML={{__html: questionText}}/>
            <ul className="options">
                {options.map((option, index) => {
                    return (
                        <Option 
                        key={index} 
                        option={option} 
                        checkAnswer={checkAnswer} 
                        userAnswered={userAnswered} 
                        correct={correct}
                        index={index}
                        />
                    )
                })}
            </ul>
        </Wrapper>
    )
}

export default QuestionCard
