/**
 * @copyright 2009-2017 Vanilla Forums Inc.
 * @license MIT
 */

const { resolve } = require;

const runtimePlugins = process.env.NODE_ENV === "test"
    ? [] :
    [
        [
            resolve("@babel/plugin-transform-runtime"),
            {
                useESModules: true
            },
        ],
    ];

const preset = {
    presets: [
        [
            resolve("@babel/preset-env"),
            {
                useBuiltIns: false,
                targets: "ie > 10, last 4 versions"
            }
        ],
        resolve("@babel/preset-react"),
        resolve("@babel/preset-typescript"),
    ],
    plugins: [
        resolve("@babel/plugin-proposal-class-properties"),
        resolve("@babel/plugin-proposal-object-rest-spread"),
        resolve("@babel/plugin-syntax-dynamic-import"),
        ...runtimePlugins,
    ],
};

module.exports = () => preset;
