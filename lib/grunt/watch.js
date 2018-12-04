module.exports = {
    scripts: {
        files: [
            "./../main.js",
            "!node_modules/**/*.js"
        ],
        tasks: ["eslint"],
        options: {
            spawn: false,
            debounceDelay: 1000
        }
    }
};