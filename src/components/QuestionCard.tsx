import React from 'react'
import Option from './Option'

type Props = question & {
    updateScore: { (num: number): void };
    userAnswered: number;
}

const QuestionCard: React.FC<Props> = ({ questionText, correct, incorrect, options, updateScore, userAnswered }) => {

    const checkAnswer = (index: number) => {
        if (userAnswered===-1) {
            const ans = options[index]
            if (ans === correct) {
                updateScore(index)
            } else {
                updateScore(index)
            }
        }
    };

    return (
        <div>
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
        </div>
    )
}

export default QuestionCard
