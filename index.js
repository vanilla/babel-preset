/**
 * @copyright 2009-2017 Vanilla Forums Inc.
 * @license MIT
 */

const { resolve } = require;

const envTargets = {
    browsers: ["ie > 9", "last 6 iOS versions", "last 4 versions"]
};

const preset = {
    presets: [
        [
            resolve("@babel/preset-env"),
            {
                targets: envTargets
            }
        ],
        resolve("@babel/preset-react"),
        resolve("@babel/preset-typescript"),
    ],
    plugins: [
        resolve("@babel/plugin-proposal-class-properties"),
        resolve("@babel/plugin-proposal-object-rest-spread"),
        [
            resolve("@babel/plugin-transform-runtime"),
            {
                useESModules: true
            }
        ]
    ]
};

module.exports = () => preset;
