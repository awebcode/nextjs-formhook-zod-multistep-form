/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://nextjs-formhook-zod-multistep-form.vercel.app/",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 10000,
  generateRobotsTxt: true,
  exclude: ["/protected-page", "/awesome/secret-page"],
  alternateRefs: [
    {
      href: "https://nextjs-formhook-zod-multistep-form.vercel.app/es",
      hreflang: "es",
    },
    {
      href: "https://nextjs-formhook-zod-multistep-form.vercel.app/fr",
      hreflang: "fr",
    },
  ],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => [await config.transform(config, "/additional-page")],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "test-bot",
        allow: ["/path", "/path-2"],
      },
      {
        userAgent: "black-listed-bot",
        disallow: ["/sub-path-1", "/path-2"],
      },
    ],
    additionalSitemaps: [
      "https://nextjs-formhook-zod-multistep-form.vercel.app/my-custom-sitemap-1.xml",
    ],
  },
};