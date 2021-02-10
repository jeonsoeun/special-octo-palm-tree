/** @format */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV !== "production";
const pkg = require("./package.json");
const webpack = require("webpack");

/** JSDoc : 일정한 형식에 따라 주석을 추가하면 자동으로 API문서를 생성해주는 도구. Typescript JSDoc으로 타입 추론 추가.
 * @typedef {import("webpack").Configuration} Configuration
 * @type { Configuration }
 */
const config = {
  devServer: {
    // 개발 서버 열어줌. 수정되면 자동으로 새로고침까지 해줌.
    contentBase: path.join(__dirname, ""),
    compress: !isDev, // 압축 여부.
    port: 8080,
  },
  devtool: isDev ? "inline-source-map" : "source-map", // 소스맵이 있으면 원본 소스를 볼 수 있다. 디버깅 할 때 편리해짐.
  entry: "./src/index.tsx", // 빌드 시작파일.
  output: {
    filename: "[name].[hash:8].js", // 빌드 output파일 양식
    path: path.resolve(__dirname, "dist"),
  },
  mode: isDev ? "development" : "production", // development는 원본 소스를 볼 수 있는 소스맵을 제공하는 버전. 오래 걸리기 때문에 배포시에는 production을 쓰는게 좋다.
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css|scss|sass/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: {
                auto: true,
                localIdentName: isDev
                  ? "[path][name]__[local]"
                  : "[hash:base64]",
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html", // 옵션을 안쓰면 index.html이 자동으로 생김. 내가 만든걸 쓰고 싶다면 추가.
      inject: "body",
      templateParameters: {
        title: "My TODO App",
        version: pkg.version,
      },
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      __VERSION__: JSON.stringify(pkg.version),
    }),
    new MiniCssExtractPlugin(),
  ],
};

module.exports = config;
