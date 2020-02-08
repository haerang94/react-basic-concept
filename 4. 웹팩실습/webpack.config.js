const path = require("path");

module.exports = {
  name: "word-relay-setting",
  mode: "development", // 실서비스: production
  devtool: "eval",
  //   resolve: {
  //     extensions: [".js", ".jsx", ".css"] // 확장자가 여러개일 경우 찾아준다
  //   },
  entry: {
    app: ["./client.jsx", "./WordRelay.jsx"] //두 입력을 합해서 app으로 만들어 준다
  }, //입력
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js"
  } //출력
};
