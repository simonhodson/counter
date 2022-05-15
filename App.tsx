import { Provider } from 'react-redux';
import Main from './src/main';
import store from './src/app/store';

export default function App() {

    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}