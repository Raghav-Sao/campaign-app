import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'router'
import store from './store'
import './App.css'
import './index.css'
import 'assets/fontello/css/fontello.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
registerServiceWorker()
