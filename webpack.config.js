var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist'); //target
var SRC_DIR = path.resolve(__dirname, 'src'); //start

var config = {
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module:{  //es5->6
        rules:[
            {
                test:/\.js/,
                include:SRC_DIR,
                loader:'babel-loader',
                query:{ //babel presets
                    presets:['react', 'es2015', 'stage-2']
                }
            }
        ]
    }
}

module.exports = config;
