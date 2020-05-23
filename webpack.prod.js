const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true  // Must be set to true if using source-maps in production
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    output: {
        filename: 'icons.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'Icons',
        libraryTarget: 'umd',
        libraryExport: "default",
        publicPath: ''
    },
});
