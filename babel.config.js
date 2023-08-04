process.env.EXPO_ROUTER_APP_ROOT = "../../src/app";

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      "module:react-native-dotenv",
      require.resolve("expo-router/babel"),
      [
        "module-resolver",
        {
          root: ["."],
          alias: { "@": "./src" },
          extensions: [".ts", ".tsx", ".js", ".ios.js", ".android.js"],
        },
      ],
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-transform-flow-strip-types"],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
    ],
  };
};
