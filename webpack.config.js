var path = require('path');
var context = __dirname;

module.exports = {
    context: context,
    entry: path.join(context,"/example/entry.js"),
    output: {
        path: context,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: 'style/useable!css?sourceMap!autoprefixer?browsers=last 2 version!less-loader?sourceMap=true' }
        ]
    }
};
