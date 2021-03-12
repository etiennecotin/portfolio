<template>
  <div class="container-fluid">
    <Home :dato-data="datoData"></Home>
  </div>
</template>

<script>
import Home from '@/components/pages/Home/index'
import { toHead } from 'vue-datocms'
import homeQuery from '~/cms/queries/homeQuery'
import request from '~/cms'
import _siteQuery from '~/cms/queries/_siteQuery'
export default {
  components: {
    Home,
  },
  async asyncData({ app, error, route, store }) {
    const datoData = await request({
      app,
      store,
      query: homeQuery,
      variables: {
        limit: 3,
      },
    })
    const siteQuery = await request({ app, store, query: _siteQuery })
    if (!siteQuery) return error({ statusCode: 404 })

    return { datoData, siteQuery }
  },
  head() {
    if (!this.datoData) {
      return
    }
    return toHead(
      this.datoData.home._seoMetaTags,
      this.siteQuery._site.favicon,
      this.datoData.home.seo
    )
  },
}
</script>

<style></style>
