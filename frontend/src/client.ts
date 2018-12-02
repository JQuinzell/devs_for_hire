import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  clientState: {
    defaults: {
      currentUser: 'jared'
    },
    resolvers: {}
  }
})

export default client
