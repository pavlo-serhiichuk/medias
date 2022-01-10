import React from 'react'
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {render, cleanup} from '@testing-library/react'
import {cartReducer} from '../../redux/cartReducer';
import ProductsContainer from "./ProductsContainer";

afterEach(cleanup)

function renderWithRedux(component, {
    initialState,
    store = createStore(cartReducer, initialState)} = {}) {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

describe("Cart component", () => {

    test('render with redux', () => {

        const {getByTestId} = renderWithRedux(<ProductsContainer/>)

        expect(getByTestId('products')).toBeInTheDocument()
    })

})