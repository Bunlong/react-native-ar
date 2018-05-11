import React, {Component} from 'react'
import { Stack, Scene, Router } from 'react-native-router-flux'
import {Provider, connect} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import Home from './Home'
import Gallery from './Gallery'

const RouterWithRedux = connect()(Router)
const store = createStore(() => {})

export default class App extends Component { 
  render () {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Stack key="root">
            <Scene 
              key='home' 
              component={Home} 
              title='Home' 
            />
            <Scene 
              key='gallery' 
              component={Gallery} 
              title='Gallery' 
            />
          </Stack>
        </RouterWithRedux>
      </Provider>
    )
  }
}
