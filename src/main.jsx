import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  MycontextProvider  from './MycontextProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
    <MycontextProvider> 
       <App />
    </MycontextProvider>
          
  
)
