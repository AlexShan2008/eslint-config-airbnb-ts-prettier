module.exports = {
  extends: ["airbnb", "airbnb/hooks", "airbnb-typescript", "prettier"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    indent: "error",
  },
};
