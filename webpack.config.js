var webpack = require('webpack');

module.exports = {
    entry: 'src/f3.js',
    output: {
        'path': 'build',
        'filename': 'f3.js',
        'library': "F3",
        'libraryTarget': "umd"
    },
    resolve: {
        root: process.cwd(),
        modulesDirectories: ['node_modules']
    },

    devtool: 'source-map',

    module: {
        loaders: [
            { test: /.*\.scss$/, loaders: ['style', 'css', 'sass'] },
            {
                test: /.*?\.js$/,
                loader: 'babel'
            }
        ]
    }
}
