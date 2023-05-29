module.exports = {
  clean: true,
  cache: false,
  "check-coverage": true,
  reporter: "lcov",
  all: true,
  lines: 100,
  functions: 100,
  statements: 100,
  branches: 100,
  "skip-full": true,
  include: ["src/**"],
  exclude: [],
  reportDir: `${__dirname}/coverage`,
};
