export default `
  fragment WebProjectFragment on WebProjectRecord {
    description
    shortDescription
    customer
    projectName
    projectLink
    playStoreLink
    appStoreLink
    projectPicture {
      responsiveImage {
        webpSrcSet
        alt
        height
        src
        sizes
        title
        srcSet
        width
      }
      filename
      mimeType
    }
  }
`
