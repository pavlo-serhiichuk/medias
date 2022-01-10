import React from "react";
import Provider from "react-redux";
import {createStore} from "redux";
import {render, screen, cleanup} from "@testing-library/react";
import {productsReducer} from "../../redux/productsReducer";
import {cartReducer} from "../../redux/cartReducer";
import HeaderContainer from "./HeaderContainer";

afterEach(cleanup)

function renderWithRedux(component, {
    initialState,
    store = createStore(productsReducer, initialState)} = {}) {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

describe("Header component", () => {

    it("renders", () => {
        renderWithRedux(<HeaderContainer />)

        const link = screen.getByTestId('header')

        expect(link).toBeInTheDocument()
    })
})