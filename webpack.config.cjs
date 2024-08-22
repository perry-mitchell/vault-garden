const { resolve } = require("node:path");
const PugPlugin = require("pug-plugin");

module.exports = {
    devtool: false,

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
            {
                test: /\.s[ac]ss$/,
                use: ["css-loader", "sass-loader"],
            },
            {
                test: /\.(ico|png|jpe?g|webp|svg)$/,
                type: "asset/resource",
                generator: {
                    filename: "img/[name].[hash:8][ext][query]",
                },
            },
            {
                test: /\.js$/,
                type: "asset/resource",
                generator: {
                    filename: "3rdparty/[name].[hash:8][ext]",
                },
            },
            {
                test: /\.json$/,
                type: "asset/resource",
                generator: {
                    filename: "[name].[hash:8][ext]",
                },
            }
        ],
    },

    output: {
        path: resolve(__dirname, "dist")
    },

    plugins: [
        new PugPlugin({
            entry: {
                index: resolve(__dirname, "source/index.pug"),
            },
            js: {
                filename: "js/[name].[contenthash:8].js",
            },
            css: {
                filename: "css/[name].[contenthash:8].css",
            },
        }),
    ],
};
