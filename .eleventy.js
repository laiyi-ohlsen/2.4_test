module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("styles");
  return {
    dir: {
      input: ".",     // your source files
      output: "docs"  // GitHub Pages will serve from this
    }
  };
};