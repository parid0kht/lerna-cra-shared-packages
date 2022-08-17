const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");

const packages = [];
// packages.push(path.join(__dirname, "../common-components/src"));
packages.push(path.join(__dirname, "../common-components"));
packages.push(path.join(__dirname, "../common-utils/src"));
packages.push(path.join(__dirname, "../common-types/src"));

module.exports = {
  webpack: {
    configure: (webpackConfig, _) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        match.loader.include = include.concat(packages);
      }

      return webpackConfig;
    },
  },
};
