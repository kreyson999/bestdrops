import { getAllDrops } from "../lib/graphCMS";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://bestdrops.pl",
  }[process.env.NODE_ENV];

  const dynamicDropsUrls = await getAllDrops(100);
  const dynamicDropsPages = dynamicDropsUrls.map(({ slug }) => ({ slug }));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${dynamicDropsPages
        .map(({ slug }) => {
          return `
            <url>
              <loc>${baseUrl}/drop/${slug}</loc>
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
