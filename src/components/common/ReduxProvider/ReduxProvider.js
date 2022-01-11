import { Provider } from 'react-redux'

const ReduxProvider = ({ children, store }) => (
    <Provider store={store}>{children}</Provider>
)

export default ReduxProvider