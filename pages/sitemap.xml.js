import { getDropsWithPagination, getAllArticles} from "../lib/graphCMS"

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://bestdrops.pl",
  }[process.env.NODE_ENV];

  const dynamicArticleUrls = await getAllArticles(99)
  const dynamicArticlePages = dynamicArticleUrls.map(({slug}) => ({ slug }));

  const dynamicDropsUrls = await getDropsWithPagination(100)
  const dynamicDropsPages = dynamicDropsUrls.map(({slug}) => ({ slug }))

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://bestdrops.pl/hotdrops</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://bestdrops.pl/drops</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://bestdrops.pl/news</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
      ${dynamicArticlePages
        .map(({slug}) => {
          return `
            <url>
              <loc>${baseUrl}/news/${slug}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.8</priority>
            </url>
          `;
        })
        .join("")}
      ${dynamicDropsPages
        .map(({slug}) => {
          return `
            <url>
              <loc>${baseUrl}/drops/${slug}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;