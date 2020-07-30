import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Option from './Option'

describe('<Option />', () => {
    
    test('should call handler on click once', () => {
        let mockHandler = jest.fn()

        const component = render(
            <Option option='test' userAnswered={-1} correct='different test' index={1} checkAnswer={mockHandler} />
        )
        const option = component.getByText('test')
        fireEvent.click(option)
        expect(mockHandler).toBeCalledTimes(1)
    })

    test('should be green if this option is correct and user has selected different option', () => {
        const component = render(
            <Option option='test' userAnswered={3} correct='test' index={1} />
        )
        const option = component.getByText('test')
        expect(option).toHaveStyle('background: green')
    })

    test('should be red if this option is incorrect and user has selected this option', () => {
        const component = render(
            <Option option='test' userAnswered={3} correct='not test' index={3} />
        )
        const option = component.getByText('test')
        expect(option).toHaveStyle('background: red')
    })

    test('should be unchanged if this option is incorrect and user has selected different option', () => {
        const component = render(
            <Option option='test' userAnswered={3} correct='not test' index={1} />
        )
        const option = component.getByText('test')
        expect(option).toHaveStyle('background: none')
    })

    test('should be green if this option is correct and user has selected this option', () => {
        const component = render(
            <Option option='test' userAnswered={1} correct='test' index={1} />
        )
        const option = component.getByText('test')
        expect(option).toHaveStyle('background: green')
    })


    

    
    
    
})
