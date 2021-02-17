export const defaultLocale = 'en'

/**
 * NOTE: Make sure that default locale is the last one!
 * SEE: https://nuxt-community.github.io/nuxt-i18n/routing.html#strategy
 */
export const locales = [
  { code: 'fr', iso: 'fr_FR' },
  { code: 'en', iso: 'en_US' },
]

// 🚦 Specific routes
// NOTE: You can use isProdEnv to set conditionnal routes (not showing on prod for example)

// export const getPagesList = (isProdEnv = process.env.isProdEnv) => ({
//   [routes.basicPage.i18nFormat]: {
//     fr: '/:slug?'
//   },
//   [routes.caseStudiesListPage.i18nFormat]: {
//     fr: '/case-studies'
//   },
//   [routes.caseStudyPage.i18nFormat]: {
//     fr: '/case-studies/:case_study?'
//   }
// });
