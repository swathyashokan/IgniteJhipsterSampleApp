// Simple React Native specific changes

export default {
  apiUrl: 'https://ignite-jhipster.jruddell.com/',
  appUrlScheme: 'jwtapp',
  // these are sample values and will not work by default
  social: {
    google: {
      appId: '227777777779-hddmrjhipsterfanhere5tt.apps.googleusercontent.com',
      callback: 'com.googleusercontent.apps.227777777779-hddmrjhipsterfanhere5tt:/oauth2redirect'
    },
    facebook: {
      appId: '1104619382567621',
      callback: 'fb1104619382567621://authorize'
    },
    twitter: {
      appId: '2v2sd1ldN2CsxdSdfRyFJB9Ek',
      appSecret: 'dIffNnLRsi1BQ9ahYdJHIPSTER0tN67JGzEDSR1lwyh76tW9o0GTssv0',
      callback: 'ignitesocial://authorize'
    }
  },
  // font scaling override - RN default is on
  allowTextFontScaling: true
}
