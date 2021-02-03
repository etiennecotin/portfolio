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
  async asyncData() {
    const datoData = await request({
      query: homeQuery,
    })
    const siteQuery = await request({ query: _siteQuery })
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

<style>
/*.container {*/
/*  margin: 0 auto;*/
/*  min-height: 100vh;*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  text-align: center;*/
/*}*/

/*.title {*/
/*  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,*/
/*    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;*/
/*  display: block;*/
/*  font-weight: 300;*/
/*  font-size: 100px;*/
/*  color: #35495e;*/
/*  letter-spacing: 1px;*/
/*}*/

/*.subtitle {*/
/*  font-weight: 300;*/
/*  font-size: 42px;*/
/*  color: #526488;*/
/*  word-spacing: 5px;*/
/*  padding-bottom: 15px;*/
/*}*/

/*.links {*/
/*  padding-top: 15px;*/
/*}*/
</style>
