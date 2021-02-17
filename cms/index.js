import { GraphQLClient } from 'graphql-request'
import { graphqlEndpoint, graphqlEndpointPreview } from '~/config/cms'

const token = process.env.datoToken
const NETLIFY_ENV = process.env.netlifyEnv
const endpoint =
  NETLIFY_ENV === 'production' ? graphqlEndpoint : graphqlEndpointPreview

/**
 * I18n
 */
export const getLocaleIso = ({ app, store }) => {
  const { locale } = store.state.i18n
  const { locales } = app.i18n ? app.i18n : app.$i18n
  const [{ code }] = locales.filter(({ code }) => {
    return code === locale
  })
  return code
}

export default async function request({ app, store, query, variables }) {
  const local = await getLocaleIso({ app, store })
  variables = { ...variables, lang: local }

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
  return Object.freeze(client.request(query, variables))
}
