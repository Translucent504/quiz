import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import App from './App'

describe('<App />', () => {
    let component;

    beforeEach(() => {
        component = render(
            <App />
        )
    })

    test('should render Quiz heading, New Game button and score', () => {
        const heading = component.getByText('ERU Quiz')
        expect(heading).toBeDefined()

        const newGame = component.getByText('New Game')
        expect(newGame).toBeDefined()

        // This is matching with regexp
        const score = component.getByText(/Score:/)
        expect(score).toBeDefined()
    })

    test('loading should not be visible before clicking New Game button', () => {        
        const loading = component.getByText('Loading...')
        expect(loading).not.toBeVisible()
    })

    test('should render loading when New Game button clicked', () => {
        const newGameButton = component.getByText('New Game')
        fireEvent.click(newGameButton)
        
        const loading = component.getByText('Loading...')
        expect(loading).toBeDefined()
    })
    

})
