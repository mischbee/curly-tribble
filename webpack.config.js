const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");

// reduce it to a nice object, the same as before

module.exports = (env) => {
  let dotEnvVariables = dotenv.config().parsed;
  if (!env.production) {
    dotEnvVariables = dotenv.config({ path: "./dev.env" }).parsed;
  }

  console.log(dotEnvVariables);

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    devtool: "source-map",
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [new webpack.DefinePlugin(envKeys)],
  };
};
