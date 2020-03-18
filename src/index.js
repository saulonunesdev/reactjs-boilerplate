'use strict'

import React from 'react'
import { render } from 'react-dom'
import MainRoutes from './routes/Main.Routes'
import './styles/index.css'
import './assets/images/favicon.ico'

console.log('test')

render(<MainRoutes />, document.getElementById('root'))
