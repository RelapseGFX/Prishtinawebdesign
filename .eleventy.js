module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/darkmode.js');
    eleventyConfig.addPassthroughCopy('./src/cursor.css');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}