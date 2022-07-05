// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import App from './App';

// import { createStore } from 'redux';
// const counterReducer= (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1

//     case 'DECREAMENT':
//       return state - 1
//     case 'ZERO':
//       return 0
//     default:
//       return state
//   }
// }

// const store=createStore(counterReducer)
// // console.log(store)
// store.subscribe(() => {
//   const storeNow = store.getState()
//   console.log('change',storeNow)
// })
// console.log(store.getState())
// store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: 'INCREMENT'})
// console.log(store.getState())
// store.dispatch({type: 'ZERO'})
// store.dispatch({type: 'DECREAMENT'})
// console.log(store.getState())

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App />

// );







import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'ZERO':
      return 0
    default:
      return state
  }
}

const store = createStore(counterReducer)

const App = () => {
  return (
    <div>
      <div>
        {store.getState()}
      </div>

      <button
        onClick={e => store.dispatch({ type: 'INCREMENT' })}
      >
        plus
      </button>
      <button
        onClick={e => store.dispatch({ type: 'DECREMENT' })}
      >
        minus
      </button>
      <button
        onClick={e => store.dispatch({ type: 'ZERO' })}
      >
        zero
      </button>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(<App />)
}

renderApp()
store.subscribe(renderApp)