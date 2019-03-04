const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Tony Wahula Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Tony Wahula', // Alternative Site title for SEO
  siteTitleShort: 'Tony', // short_name for manifest
  siteHeadline: 'front-end web developer', // Headline for schema.org JSONLD
  siteUrl: 'https://tonywahula.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: 'src/images/avatar.jpg', // Used for SEO and manifest
  siteDescription: 'Playful & Colorful One-Page website with Parallax effect',
  author: 'Tony Wahula', // Author for schema.org JSONLD

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
