export default `query _siteSeo {
  _site {
    favicon: faviconMetaTags {
      tag
      attributes
    }
  }
}
`
