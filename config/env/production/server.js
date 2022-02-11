module.exports = ({ env }) => ({
  url: env("DATABASE_URL"),
  url2: "yes",
});
