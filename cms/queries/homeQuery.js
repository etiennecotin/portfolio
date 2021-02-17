import seoFields from '~/cms/fields/seoFields'
export default `query homePage($lang: SiteLocale) {
  home(locale: $lang) {
    ${seoFields}
    _seoMetaTags {
      attributes
      content
      tag
    }
    entityTitle
    interactiveTitle {
      name(markdown: true)
      id
    }
    music {
      url
      filename
      format
      alt
      basename
      title
    }
    description
    vision {
      title
      content
    }
    myUnivers(markdown: true)
    hereIAmBackground {
      responsiveImage {
        webpSrcSet
        title
        srcSet
        src
        sizes
        height
        alt
        width
        base64
        aspectRatio
        sizes
      }
      title
    }
    callToAction
  }
}
`
