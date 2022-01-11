import {hideFilters, hideSidebar, setFilterName, sidebarReducer} from "../sidebarReducer";

describe('Sidebar should', () => {

    let state = {
        isSidebarOpen: false,
        isFiltersOpen: true,
        filterName: '',
        filterParam: '',
        price: "....",
        time: "....",
        liked: "....",
    }

    test('hide Sidebar', () => {
        let action = hideSidebar()

        let newState = sidebarReducer(state, action)

        expect(newState.isSidebarOpen).toBeFalsy()
    })

    test('hide Filters', () => {
        let action = hideFilters()

        let newState = sidebarReducer(state, action)

        expect(newState.isFiltersOpen).toBeFalsy()
    })

    test('configure filterName', () => {
        let action = setFilterName('price')
        let newState = sidebarReducer(state, action)

        expect(newState.filterName).toBe('price')
    })
})