/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://agga-portfolio.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  exclude: ["/404"],

  additionalPaths: async (config) => [
    { loc: '/', changefreq: 'weekly', priority: 1.0 },
    { loc: '/projects', changefreq: 'weekly', priority: 0.8 },
    { loc: '/about', changefreq: 'monthly', priority: 0.7 },
    { loc: '/contact', changefreq: 'monthly', priority: 0.6 },
  ],
};


