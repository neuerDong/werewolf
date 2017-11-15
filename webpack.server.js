const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/index.js'),
        vendor: [
            'react',
            'react-dom',
        ],
    },

    output: {
        path: __dirname,
        filename: 'script/[name].js',
        publicPath: '/',
    },

    resolve: {
        extensions: ['.js', 'jsx'],
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src'),
                loader: 'css-loader',
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!less-loader',
                }),
            },
            {
                test: /\.(jpg|jpeg|png|gif|bmp)/,
                loader: 'url-loader?limit=1&name=images/[name].[hash:8].[ext]',
            },
        ],
    },

    plugins: [
        // html 模板
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),

        // css 分离
        new ExtractTextPlugin('style/[name].css'),

        // 提取公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'script/[name].js',
        }),

        new webpack.DefinePlugin({
            API_ENV: JSON.stringify(process.env.API_ENV),
        }),
    ],

    devtool: 'sourcemap',

    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        disableHostCheck: true,
        /* hot: true, */
        inline: true,
        port: 3000,
    },
};
