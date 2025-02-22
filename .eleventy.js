module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/styles.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/darkmode.js');
    eleventyConfig.addPassthroughCopy('./src/matrixrentals.html');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}