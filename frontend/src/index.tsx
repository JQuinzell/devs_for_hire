import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import Main from './components/main/Main'
import client from './client'

const App = () => (
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>
)
ReactDOM.render(<App />, document.getElementById('app'))
