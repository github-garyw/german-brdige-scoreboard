module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/german-brdige-scoreboard/'
    : '/',
  outputDir: "./docs",
};
