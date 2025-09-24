module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("styles");
  return {
    dir: {
      input: ".",     // your source files
      output: "_site"  // GitHub Pages will serve from this
    }
  };
};