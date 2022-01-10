import React from "react";
import Provider from "react-redux";
import {createStore} from "redux";
import {render, screen, cleanup} from "@testing-library/react";
import {productsReducer} from "../../redux/productsReducer";
import HeaderContainer from "./HeaderContainer";

afterEach(cleanup)

function renderWithRedux(component, {
    initialState,
    store = createStore(productsReducer, initialState)
} = {}) {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

describe("Header component", () => {

    it("renders", () => {

        const {getByTestId} = renderWithRedux(<HeaderContainer/>)

        expect(getByTestId('header')).toBeInTheDocument()
    })
})