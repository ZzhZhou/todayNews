'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/recommod/': {
        target: 'https://m.toutiao.com/list/?',
        changeOrigin: true,
        pathRewrite: {
          '^/recommod/': 'https://m.toutiao.com/list/?'
        }
      },
      '/content/': {
        target: 'https://m.toutiao.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/content/': 'https://m.toutiao.com/'
        }
      },
      '/video/': {
        target: 'https://m.toutiao.com/list/?tag=video&ac=wap&count=20&format=json_raw&as=A1657BAFF36C92D&cp=5BF33C49723D4E1&min_behot_time=0&_signature=d0wPFgAALMLdY0-WZoMx7XdMDw&i=',
        changeOrigin: true,
        pathRewrite: {
          '^/video/': 'https://m.toutiao.com/list/?tag=video&ac=wap&count=20&format=json_raw&as=A1657BAFF36C92D&cp=5BF33C49723D4E1&min_behot_time=0&_signature=d0wPFgAALMLdY0-WZoMx7XdMDw&i='
        }
      },
        '/play/': {
  target: 'http://c.m.163.com/recommend/getChanListNews?channel=T1457068979049&size=20',
    changeOrigin: true,
    pathRewrite: {
    '^/play/': 'http://c.m.163.com/recommend/getChanListNews?channel=T1457068979049&size=20'
  }
},
      '/comment/': {
        target: 'https://www.toutiao.com/api/comment/list/?offset=0&count=20',
        changeOrigin: true,
        pathRewrite: {
          '^/comment/': 'https://www.toutiao.com/api/comment/list/?offset=0&count=20'
        }
      },
      '/search/': {
        target: 'https://www.toutiao.com/search_content/?offset=0&format=json&autoload=true&count=20&cur_tab=1&from=search_tab',
        changeOrigin: true,
        pathRewrite: {
          '^/search/': 'https://www.toutiao.com/search_content/?offset=0&format=json&autoload=true&count=20&cur_tab=1&from=search_tab'
        }
      },
      '/hotnews/': {
        target: 'https://m.toutiao.com/list/?tag=news_hot&ac=wap&count=20&format=json_raw&as=A1D58B3F979A7E2&cp=5BF7DA37BE42FE1&min_behot_time=0&_signature=ULiEHQAAC0.6l8Sd4jz3sFC4hA&i=',
        changeOrigin: true,
        pathRewrite: {
          '^/hotnews/': 'https://m.toutiao.com/list/?tag=news_hot&ac=wap&count=20&format=json_raw&as=A1D58B3F979A7E2&cp=5BF7DA37BE42FE1&min_behot_time=0&_signature=ULiEHQAAC0.6l8Sd4jz3sFC4hA&i='
        }
      },
      '/society/': {
        target: 'https://m.toutiao.com/list/?tag=news_society&ac=wap&count=20&format=json_raw&as=A1A5EBEFE7EC255&cp=5BF7ECC295F5CE1&min_behot_time=0&_signature=fdImuAAAJijX.WY4i7FawH3SJq&i=',
        changeOrigin: true,
        pathRewrite: {
          '/^society/': 'https://m.toutiao.com/list/?tag=news_society&ac=wap&count=20&format=json_raw&as=A1A5EBEFE7EC255&cp=5BF7ECC295F5CE1&min_behot_time=0&_signature=fdImuAAAJijX.WY4i7FawH3SJq&i='
        }
      },
      '/happy/': {
        target: 'https://m.toutiao.com/list/?tag=news_entertainment&ac=wap&count=20&format=json_raw&as=A1C54B2F87BBEEF&cp=5BF77B8E4E5FFE1&min_behot_time=0&_signature=eh4QrgAAIevQMVAu.EoHp3oeEL&i=',
        changeOrigin: true,
        pathRewrite: {
          '^/happy/': 'https://m.toutiao.com/list/?tag=news_entertainment&ac=wap&count=20&format=json_raw&as=A1C54B2F87BBEEF&cp=5BF77B8E4E5FFE1&min_behot_time=0&_signature=eh4QrgAAIevQMVAu.EoHp3oeEL&i='
        }
      },
      '/military/': {
        target: 'https://m.toutiao.com/list/?tag=news_military&ac=wap&count=20&format=json_raw&as=A1352BCF277E68D&cp=5BF7FE86C8DD1E1&min_behot_time=0&_signature=E8bK-wAASDW56Yp78VpxvRPGyu&i=',
        changeOrigin: true,
        pathRewrite: {
          '^/military/': 'https://m.toutiao.com/list/?tag=news_military&ac=wap&count=20&format=json_raw&as=A1352BCF277E68D&cp=5BF7FE86C8DD1E1&min_behot_time=0&_signature=E8bK-wAASDW56Yp78VpxvRPGyu&i='
        }
      },
      '/sport/': {
        target: 'https://m.toutiao.com/list/?tag=news_sports&ac=wap&count=20&format=json_raw&as=A195DB0F177E761&cp=5BF79EF76641DE1&min_behot_time=0&_signature=ENs6ZQAASzG69HrlM2t9wRDbOn&i=',
        changeOrigin: true,
        pathRewrite: {
          '^/sport/': 'https://m.toutiao.com/list/?tag=news_sports&ac=wap&count=20&format=json_raw&as=A195DB0F177E761&cp=5BF79EF76641DE1&min_behot_time=0&_signature=ENs6ZQAASzG69HrlM2t9wRDbOn&i='
        }
      },
      '/world/': {
        target: 'https://m.toutiao.com/list/?tag=news_world&ac=wap&count=20&format=json_raw&as=A1150B2F374E7CA&cp=5BF77EC78C6ACE1&min_behot_time=0&_signature=EHlw.wAAS5O6VjB.PGiO1BB5cO&i=',
        changeOrigin: true,
        pathRewrite: {
          '^/world/': 'https://m.toutiao.com/list/?tag=news_world&ac=wap&count=20&format=json_raw&as=A1150B2F374E7CA&cp=5BF77EC78C6ACE1&min_behot_time=0&_signature=EHlw.wAAS5O6VjB.PGiO1BB5cO&i='
        }
      },
      '/fashion/': {
        target: 'https://m.toutiao.com/list/?tag=news_fashion&ac=wap&count=20&format=json_raw&as=A1F57BCF27EE895&cp=5BF74EF879C56E1&min_behot_time=0&_signature=F7lnVgAATFO9lifW11v94he5Z0&i=',
        changeOrigin: true,
        pathRewrite: {
          '^/fashion/': 'https://m.toutiao.com/list/?tag=news_fashion&ac=wap&count=20&format=json_raw&as=A1F57BCF27EE895&cp=5BF74EF879C56E1&min_behot_time=0&_signature=F7lnVgAATFO9lifW11v94he5Z0&i='
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
