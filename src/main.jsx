import React from 'react'
import ReactDOM from 'react-dom/client'
import ShoeStore from './ShoeStore.jsx'
import './assets/scss/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShoeStore />
  </React.StrictMode>,
)
