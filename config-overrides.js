const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#7eb800", "@font-size-base": "16px" },
  }),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
    modules: true,

    options: {
      modules: true, // must add this
    },
    test: /\.css$/,
    loaders: ["style-loader", "css-loader?modules"],
  })
);
