import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducer';
import { Main } from './components/Main';
import { AdminLogin } from './components/AdminLogin';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AdminPanel } from './components/AdminPanel';
import 'antd/dist/antd.css';
import { GlobalStyle } from './styles/globalStyle';

export const store = createStore(rootReducer, composeWithDevTools());

const App = (
    <>
        <GlobalStyle />
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <ProtectedRoute exact path="/admin-panel" component={AdminPanel} />
                    <Route exact path="/admin" component={AdminLogin} />
                    <Route path="/" component={Main} />
                </Switch>
            </HashRouter>
        </Provider>
    </>
);

render(App, document.getElementById('app'));
