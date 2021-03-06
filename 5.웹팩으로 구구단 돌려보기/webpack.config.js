const path = require("path");

module.exports = {
  name: "gugudan-react-webpack",
  mode: "development",
  devtool: "eval",
  resolve: { extensions: [".jsx", ".js"] },
  entry: {
    app: ["./client", "./Gugudan"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 1% in KR"] //browserlist
                },
                debug: true
              }
            ],
            "@babel/preset-react"
          ],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js"
  }
};
