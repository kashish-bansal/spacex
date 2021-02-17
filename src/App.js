import React from 'react';
// import './App.css'
import Dashboard  from "./components/Dashboard/Dashboard";
import { StaticRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

const store = configureStore();

const appCls = {
  textAlign: 'center',
  backgroundColor: '#f2f2f2',
  fontSize: '11px'
}

function App() {
  return (
    <Provider store={store}>
    <div style={appCls}>
      <StaticRouter>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </StaticRouter>
    </div>
    </Provider>
  );
}

export default App;