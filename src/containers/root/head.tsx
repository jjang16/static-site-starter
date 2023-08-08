import React from 'react'
// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const HeadBase = () => {
  return (
    <>
      <html lang="en" />
      <body className="body" />
      <link rel="icon" sizes="16x16 32x32" href="/icons/favicon.ico" />
      <link
        rel="preload"
        href="/fonts/nanum-gothic/nanum-gothic-400.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/nanum-gothic/nanum-gothic-700.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/nanum-gothic/nanum-gothic-800.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <meta name="keywords" content="place, your, site, keywords, here" />
      <meta property="og:site_name" content="Place your siteName" />
      <meta key="og:locale" property="og:locale" content="en_US" />
    </>
  )
}
