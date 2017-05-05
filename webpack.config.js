/**
 *@Title: dataBank
 *@Description:
 *@Author: hy-zhangb
 *Email: lovewinders@163.com
 *Date: 2017-05-04 14:04
 */
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    context: __dirname,
    entry: ['./src/index.jsx'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
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
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015','react','stage-0']
                        }
                    }/*,
                    {
                        loader: 'jsx-loader'
                    }*/
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [//['style-loader','css-loader','postcss-loader']
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function(){
                                return [
                                    require('autoprefixer')({
                                        browsers: ['last 5 versions']
                                    })
                                ]
                            }
                        }
                    }
                ]
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
        })
    ]
};