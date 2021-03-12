import ProjectFragment from '@/cms/fragments/projectFragmentQuery'

export default `
  ${ProjectFragment}
  query projects {
    _allWebProjectsMeta {
      count
    }
    allWebProjects {
      ...WebProjectFragment
    }
  }
`
