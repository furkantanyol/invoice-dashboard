import React from 'react'
import { hot } from 'react-hot-loader'
import Home from 'pages/Home'
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends React.Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Home />
      </div>
    )
  }
}

const hotFunction = hot(module)

export default hotFunction(App)
