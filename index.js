/**
 * @copyright 2009-2017 Vanilla Forums Inc.
 * @license MIT
 */

const envTargets = {
    browsers: [
        "ie > 9",
        "last 6 iOS versions",
        "last 4 versions"
    ]
}

module.exports = {
    presets: [
        require('babel-preset-react'),
        require('babel-preset-env'),
    ],
    plugins: [
        require('babel-plugin-transform-object-rest-spread'),
        require('babel-plugin-syntax-dynamic-import'),
        require('babel-plugin-transform-class-properties'),
    ]
}
