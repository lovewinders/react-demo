/**
 *@Title: dataBank
 *@Description:
 *@Author: hy-zhangb
 *Email: lovewinders@163.com
 *Date: 2017-05-04 14:04
 */
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    context: __dirname,
    entry: ['./src/app.jsx'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'js/[name].bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                include: path.join(__dirname, 'src'),
                exclude: path.join(__dirname, 'node_modules'),
                use: [
                    {
                        loader: 'babel-loader'
                    }/*,
                    {
                        loader: 'jsx-loader'
                    }*/
                ]
            },
            {
                test: /\.scss$/,
                use: extractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                use: extractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [
                                        require('autoprefixer')({
                                            browsers: ['last 5 versions']
                                        })
                                    ]
                                }
                            }
                        }
                    ]
                })
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)/i,
                use: [
                    {
                        loader: 'file-loader?name=[name]-[hash:4].[ext]&publicPath=image/&outputPath=image/'
                        //loader: 'url-loader?limit=2000&name=[name]-[hash:4].[ext]&outputPath=image/'
                    },
                    {
                        loader: 'image-webpack-loader?bypassOnDebug'
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        }),
        new extractTextWebpackPlugin("style.css")
    ]
};