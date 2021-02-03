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
    description
    myUnivers
    interactiveTitle {
      name(markdown: true)
      id
    }
    vision {
      title
      content
    }
  }
}
`
