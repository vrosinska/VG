const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const baseConfig = () => ({
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'scripts_bundle.js',
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
});

const devConfig = () => ({
    module: {
        rules: [
            {
                test: /\.(ttf|eot|svg|gif|jpg|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]_[local]_[hash:base64:5]',
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ],
    },
});


const prodConfig = () => ({
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]_[local]_[hash:base64:5]',
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles_bundle_[name].css',
            chunkFilename: '[id].css',
        }),
        new CopyWebpackPlugin([
            {
                from: './public',
                to: 'public',
            }
        ]),
    ],
});

module.exports = (env, argv) => {
    const modeConfig = argv.mode == 'production' ? prodConfig : devConfig;

    return merge(baseConfig(), modeConfig());
};
