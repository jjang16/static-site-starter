import type { GatsbyConfig, PluginRef } from 'gatsby'
import CleanCSSPlugin from 'less-plugin-clean-css'

console.log(`Evaluating gatsby config.`)

const config: GatsbyConfig = {
  flags: {
    FAST_DEV: true,
    DEV_SSR: true,
  },
  trailingSlash: `never`,
}

const plugins: PluginRef[] = [
  /* webpack */
  // `gatsby-plugin-webpack-bundle-analyser-v2`, // remove when building ssr!! :)
  // `gatsby-plugin-perf-budgets`, //
  {
    resolve: `gatsby-plugin-react-svg`,
    options: {
      rule: {
        include: [/assets\/icons/, /assets\/images\/svgs/],
      },
    },
  },
  {
    resolve: `gatsby-plugin-less`,
    options: {
      strictMath: true,
      plugins: [new CleanCSSPlugin({ advanced: true })],
    },
  },
  {
    resolve: `gatsby-plugin-purgecss`,
    options: {
      printRejected: true, // Print removed selectors and processed file names
      // develop: true, // Enable while using `gatsby develop`
      // tailwind: true, // Enable tailwindcss support
      // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
      // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      purgeCSSOptions: {
        // https://purgecss.com/configuration.html#options
        // safelist: ['safelist'], // Don't remove this selector
      },
      // More options defined here https://purgecss.com/configuration.html#options
    },
  },
  {
    resolve: 'gatsby-plugin-minify-classnames',
    options: {
      // https://github.com/stldo/gatsby-plugin-minify-classnames
      /* gatsby-plugin-minify-classnames options here */
    },
  },
]

config.plugins = plugins

export default config
