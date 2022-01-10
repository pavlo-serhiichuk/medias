import React from 'react'
import '@testing-library/jest-dom'
import {Medias} from '../../index'
import {render, screen, cleanup} from '@testing-library/react'

afterEach(cleanup)

describe('App component', () => {
    it('renders', () => {
        const {getByText} = render(<Medias/>)

        expect(getByText(/medias/i)).toBeInTheDocument()
    })
})