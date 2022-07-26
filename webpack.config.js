const path = require("path")
const Dotenv = require("dotenv-webpack")

module.exports = {
  entry: "./src/content-script.ts",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [new Dotenv()],
  mode: "production",
  resolve: {
    extensions: [".ts"],
  },
  output: {
    filename: "content-script.js",
    path: path.resolve(__dirname, "dist"),
  },
}
