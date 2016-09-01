module.exports = {
    devtool: 'inline-sourcemap',
    entry: ['./src/index.js'],
    output: {
        path: './public/',
        filename: '/js/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }            
        ]
    },
    devServer: {
        contentBase: './public'
    }
};

// npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-react react react-dom react-redux redux
// $ webpack-dev-server --hot --inline