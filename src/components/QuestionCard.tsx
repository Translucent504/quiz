import React, { useEffect, useState } from 'react'

type Props = question & {
    updateScore: { (num: number): void };
    userAnswered: number;
}

const QuestionCard: React.FC<Props> = ({ questionText, correct, incorrect, options, updateScore, userAnswered }) => {

    const correctIndex = options.findIndex((v) => v === correct)

    const checkAnswer = (e: any) => {
        e.preventDefault()
        const current_choice = 5
        if (userAnswered===-1) {
            const ans = e.target.innerText
            if (ans === correct) {
                updateScore(current_choice)
            } else {
                updateScore(-2)
            }
        }
    };

    let correctOptionStyle = {
        cursor: userAnswered>=0 ? 'not-allowed' : 'pointer',
        background: userAnswered>=0 ? 'green' : ''
    }
    let incorrectOptionStyle = {
        cursor: userAnswered>=0 ? 'not-allowed' : 'pointer',
    }

    return (
        <div>
            {questionText}
            <ul className="options">
                {options.map((option, index) => {
                    const cor = index === correctIndex
                    return (
                        <li
                            onClick={checkAnswer}
                            style={cor ? correctOptionStyle : incorrectOptionStyle}
                            key={index}>
                            {option}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default QuestionCard
