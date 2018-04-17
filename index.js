/**
 * @copyright 2009-2017 Vanilla Forums Inc.
 * @license MIT
 */

const envTargets = {
    browsers: ["ie > 9", "last 6 iOS versions", "last 4 versions"]
};

const preset = {
    presets: [require.resolve("babel-preset-react"), require.resolve("babel-preset-env")],
    plugins: [
        require.resolve("babel-plugin-transform-object-rest-spread"),
        require.resolve("babel-plugin-syntax-dynamic-import"),
        require.resolve("babel-plugin-transform-class-properties")
    ]
};

if (process.env.NODE_ENV === "test" || process.env.BABEL_ENV === "test") {
    preset.plugins.push(require("babel-plugin-dynamic-import-node").default);
}

module.exports = preset;
