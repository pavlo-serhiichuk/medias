import React from 'react'
import userEvent from "@testing-library/user-event";
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import Cart from "./Cart.component";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "../../redux/rootReducer";

afterEach(cleanup)

function renderWithRedux(component, {
    initialState,
    store = createStore(rootReducer, initialState)} = {}) {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

describe("Cart component", () => {

    test('render with redux', () => {

        const {getByTestId} = renderWithRedux(<Cart/>)

        expect(getByTestId('cart')).toBeInTheDocument()
    })

})