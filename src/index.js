import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import reduxThunk from "redux-thunk";

import rootReducer from "./rootReducer";
import { LandingView } from "./components/Landing";

const createStoreWithMiddleware = compose(
  applyMiddleware(reduxThunk)(createStore)
);
const store = createStoreWithMiddleware(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={LandingView} />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
