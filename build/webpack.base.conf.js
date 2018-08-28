'use strict';
const path = require('path'),
    utils = require('./utils'),
    config = require('../config'),
    vueLoaderConfig = require('./vue-loader.conf');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

// console.log(process.env.NODE_ENV);
const
    {mode} = process.env.NODE_ENV === 'production'
        ? require('../config/prod.env')
        : require('../config/test.env');
// console.log(env);
module.exports = {
    mode,
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    optimization: {
        runtimeChunk: {
            name: 'manifest',
        },
        splitChunks: {
            chunks: 'initial', // 只对入口文件处理
            name: 'vendor',
            cacheGroups: {
                ui: { // split `node_modules`目录下被打包的代码到 `page/vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
                    test: /[\\/]element-ui[\\/]/,
                    name: 'ui',
                    filename: utils.assetsPath('js/ui.[chunkhash].js'),
                    // minChunks: 2,
                    priority: 10,
                    reuseExistingChunk: true, // 可设置是否重用该chunk（查看源码没有发现默认值）
                    enforce: true,
                },
                vue: {
                    test: /[\\/](vue|vue-router|vuex|axios)[\\/]/,
                    name: 'vue.all',
                    filename: utils.assetsPath('js/vue.all.[chunkhash].js'),
                    // minChunks: 2,
                    priority: 10,
                    reuseExistingChunk: true, // 可设置是否重用该chunk（查看源码没有发现默认值）
                    enforce: true,
                },
                default: {
                    name: 'page/commons',
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
};
