import type { GatsbyNode } from 'gatsby'
import ESLintPlugin from 'eslint-webpack-plugin'
import { resolve } from 'path'

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
  stage,
  getConfig,
}) => {
  // https://github.com/mediacurrent/gatsby-plugin-silence-css-order-warning/blob/main/gatsby-node.js
  // We don't have any order-important-css implementations;
  if (stage === `build-javascript`) {
    const config = getConfig()
    // Get the mini-css-extract-plugin
    const miniCssExtractPlugin = config.plugins.find(
      (plugin: any) => plugin.constructor.name === `MiniCssExtractPlugin`,
    )
    // Set the option here to true.
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    // Update the config.
    actions.replaceWebpackConfig(config)
  }

  actions.setWebpackConfig({
    plugins: [new ESLintPlugin()],
    resolve: {
      alias: {
        // must match ones in tsconfig
        '@': resolve(__dirname, `./`),
        '@containers': resolve(__dirname, `./src/containers`),
        '@components': resolve(__dirname, `./src/components`),
        '@hooks': resolve(__dirname, `./src/hooks`),
        '@util': resolve(__dirname, `./src/util`),
      },
      extensions: [`mjs`, `ts`, `tsx`, `js`, `jsx`, `json`, `less`],
    },
    module: {
      rules: [
        {
          test: /\.raw.(js)$/i,
          use: `raw-loader`,
        },
      ],
    },
  })

  actions.setWebpackConfig({
    resolve: {
      fallback: {
        https: false,
        http: false,
        url: false,
        stream: false,
        fs: false,
        util: false,
        zlib: false,
        crypto: false,
      },
    },
  })
}
