/**
 * @copyright 2009-2017 Vanilla Forums Inc.
 * @license MIT
 */

const { resolve } = require;

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
        [
            resolve("@babel/plugin-transform-runtime"),
            {
                useESModules: true
            }
        ]
    ]
};

module.exports = () => preset;
