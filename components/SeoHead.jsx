import React from "react";
import Head from "next/head";

function SeoHead({ title, description, url, image }) {
  return (
    <Head>
      <title>BESTDROPS.PL - {title}</title>
      <meta name="title" content={`BESTDROPS.PL - ${title}`} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={`BESTDROPS.PL - ${title}`} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={`BESTDROPS.PL - ${title}!`} />
      <meta property="twitter:description" content={description} />
      {image && <meta property="twitter:image" content={image} />}
    </Head>
  );
}

export default SeoHead;