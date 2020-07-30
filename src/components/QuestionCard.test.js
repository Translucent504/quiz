import {render } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import QuestionCard from './QuestionCard'

describe('<QuestionCard />', () => {

    test('should render the correct question text.', () => {
        const questionText = "Test Question"
        const options = ["option1", "option2", "option3", "option4"]
        const component = render(
            <QuestionCard questionText={questionText} options={options} />
        )
        const question = component.queryByText('Test Question')
        expect(question).toBeDefined()
    })
    
    test('should render the correct number of options.', () => {
        const options = ["option1", "option2", "option3", "option4"]
        const component = render(
            <QuestionCard options={options} />
        )
        const allOptions = component.queryAllByTestId('option')
        expect(allOptions).toHaveLength(options.length)
    })
    
})
