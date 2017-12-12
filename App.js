/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import ReduxTest from './ReduxTest'

const reducer = (state = { field_A : 1 }, action) => {
  if ( action.type == "UPDATE_FIELD_A")
    return {...state, field_A: action.field_A}
  else
    return state
}

const store = createStore(reducer)

export default class App extends Component<{}> {
  render() {
    return (
        <Provider store={store}>
          <ReduxTest/>
        </Provider>
    );
  }
}
