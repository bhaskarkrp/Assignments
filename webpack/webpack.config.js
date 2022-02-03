// require js sntax
// import export syntax -> modern syntax

// const add = require("./src/index.js")
// import add from "./src/index.js"const path = require("path");

const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "build"),
        filename: "main.js",
    },
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.js$/, use: ["babel-loader"] },
        ],
    },

};