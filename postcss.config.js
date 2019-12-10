module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      browsers: "last 2 versions"
    },
    "postcss-custom-media": {},
    "tailwindcss": {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production"
      ? {
        "@fullhuman/postcss-purgecss": {
          content: [
            "./site/layouts/**/*.html"
          ],
          whitelistPatterns: [
            /.*flickity|carousel.*/gi,
          ],
          whitelistPatternsChildren: [
            /.*flickity|carousel.*/gi,
          ],
          defaultExtractor: (content) =>
            content.match(/[\w-/:]*[\w-/:]/g) || [],
        },
      }
      : []),
  }
};
