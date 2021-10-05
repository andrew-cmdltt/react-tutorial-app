import React, {useEffect} from "react";
import {Layout} from "./components/Layout";
import "./main.global.css"
import {Header} from "./components/Header";
import {Content} from "./components/Content";
import {CardsList} from "./components/CardsList";
import {useToken} from "./hooks/useToken";
import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux'
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./store/reducer";
import thunk from "redux-thunk"
import {saveToken} from "./store/saveToken/actions";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"
import {Post} from "./components/Post";
import {RecoilRoot} from "recoil";

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))

function AppComponent() {
    const [token] = useToken()

    useEffect(() => {
        store.dispatch(saveToken({token: token}))
    }, [token])

    return (
        <Provider store={store}>
            <RecoilRoot>
                <BrowserRouter>
                    <Layout>
                        <Header/>
                        <Content>
                            <Switch>
                                <Route exact path="/">
                                    <CardsList/>
                                </Route>
                                <Route path="/posts">
                                    <CardsList/>
                                </Route>
                                <Route path="/auth">
                                    {token && (<Redirect to="/posts"/>)}
                                </Route>
                                <Route path="*">
                                    <h2 style={{textAlign: "center"}}>404 — страница не найдена</h2>
                                </Route>
                            </Switch>
                            <Route path="/posts/:id">
                                <Post/>
                            </Route>
                        </Content>
                    </Layout>
                </BrowserRouter>
            </RecoilRoot>
        </Provider>
    )
}


export const App = AppComponent