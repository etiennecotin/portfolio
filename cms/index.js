import { GraphQLClient } from 'graphql-request'
import { graphqlEndpoint, graphqlEndpointPreview } from '~/config/cms'

const token = process.env.datoToken
const NETLIFY_ENV = process.env.netlifyEnv
const endpoint =
  NETLIFY_ENV === 'production' ? graphqlEndpoint : graphqlEndpointPreview

export default function request({ query, variables }) {
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
  return client.request(query, variables)
}
