import seoFields from '~/cms/fields/seoFields'
export default `query homePage {
  home {
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
    myUnivers
  }
}
`
