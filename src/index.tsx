import * as React from 'react'
import { render } from 'react-dom'

import { Hello } from './Hello'

const App = () => (
  <div>
    <p>Pagepro best react team in the world</p>
    <Hello compiler="Parcel" framework={123} />
    <div className="icon" />
  </div>
)

render(<App />, document.getElementById('app'))
