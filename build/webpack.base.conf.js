'use strict';
const path = require('path'),
    utils = require('./utils'),
    config = require('../config'),
    vueLoaderConfig = require('./vue-loader.conf');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

// console.log(process.env.NODE_ENV);
const {mode} = process.env.NODE_ENV === 'production'
    ? require('../config/prod.env')
    : require('../config/test.env');
// console.log(env);
module.exports = {
    mode,
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/index.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].[hash].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    plugins: [],
    optimization: {
        runtimeChunk: {
            name: 'manifest',
        },
        splitChunks: {
            chunks: 'initial', // 只对入口文件处理
            name: utils.assetsPath('js/vendor.js'),
            // priority: -10,
            cacheGroups: {
                src: {
                    test: /[\\/]src[\\/]/,
                    name: 'src',
                    filename: utils.assetsPath('js/vendor.[contenthash].js'),
                    // minChunks: 2,
                    priority: 15,
                    reuseExistingChunk: true, // 可设置是否重用该chunk（查看源码没有发现默认值）
                    enforce: true,
                },
                modules: { // split `node_modules`目录下被打包的代码到 `page/vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
                    test: /[\\/]node_modules[\\/]/,
                    name: 'modules',
                    filename: utils.assetsPath('js/modules.[contenthash].js'),
                    // minChunks: 2,
                    priority: -10,
                    reuseExistingChunk: true, // 可设置是否重用该chunk（查看源码没有发现默认值）
                    enforce: true,
                },
                vue: {
                    test: /[\\/](vue|vue-router|vuex|axios)[\\/]/,
                    name: 'vue',
                    filename: utils.assetsPath('js/vue.[contenthash].js'),
                    // minChunks: 2,
                    priority: 5,
                    reuseExistingChunk: true, // 可设置是否重用该chunk（查看源码没有发现默认值）
                    enforce: true,
                },
                react: {
                    test: /[\\/](react|react-dom|react-redux|redux|axios)[\\/]/,
                    name: 'react',
                    filename: utils.assetsPath('js/react.[contenthash].js'),
                    // minChunks: 2,
                    priority: 5,
                    reuseExistingChunk: true, // 可设置是否重用该chunk（查看源码没有发现默认值）
                    enforce: true,
                },
                ui: { // split `node_modules`目录下被打包的代码到 `page/vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
                    test: /[\\/](antd|element|view)[\\/]/,
                    name: 'ui',
                    filename: utils.assetsPath('js/ui.[contenthash].js'),
                    // minChunks: 2,
                    priority: 10,
                    reuseExistingChunk: true, // 可设置是否重用该chunk（查看源码没有发现默认值）
                    enforce: true,
                },
                /*ui: { // split `node_modules`目录下被打包的代码到 `page/vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
                    test: /[\\/]node_modules[\\/]/,
                    name: 'ui',
                    filename: utils.assetsPath('js/ui.[contenthash].js'),
                    // minChunks: 2,
                    priority: -10,
                    reuseExistingChunk: true, // 可设置是否重用该chunk（查看源码没有发现默认值）
                    enforce: true,
                },*/

                default: {
                    name:  utils.assetsPath('js/vendorss.js'),
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
    },
    resolve: {
        extensions: ['.web.js', '.vue', '.js', '.json', '.web.jsx', '.jsx'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'react-native': 'react-native-web',
            '@': resolve('src'),
        }
    },
    module: {
        rules: [
            /*{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },*/
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
                /*options: {
                    plugins: [
                        ['import', {"libraryDirectory": "es",}],  // import less
                        'react-hot-loader/babel'
                    ],
                    // This is a feature of `babel-loader` for webpack (not Babel itself).
                    // It enables caching results in ./node_modules/.cache/babel-loader/
                    // directory for faster rebuilds.
                    cacheDirectory: true,
                },*/
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
