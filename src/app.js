import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import AppComponent from './modules/app.component'
import AppStore from './modules/app.store'

ReactDOM.render(
    <Provider store={AppStore}>
      <AppComponent/>
    </Provider>
  ,
  document.getElementById("root")
);