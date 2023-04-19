import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SVGEditor from "./components/svg-editor.jsx";
import APIComponent from "./api-component/apicallcomponent.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <APIComponent/>
  </React.StrictMode>,
)
