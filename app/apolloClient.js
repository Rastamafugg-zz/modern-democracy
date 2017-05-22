import ApolloClient from 'apollo-client';

const client = new ApolloClient({
  // networkInterface,
  reduxRootSelector: state => state.get('apollo'),
  shouldBatch: true,
});

export default client;
