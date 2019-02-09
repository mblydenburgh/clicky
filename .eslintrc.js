module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser":true,
        "es6":true
    },
    "settings":{
        "ecmascript":6,
        "jsx":true
    },
    "parserOptions":{
        "ecmaVersion":2017,
        "ecmaFeatures":{
            "experimentalObjectRestSpread":true,
            "experimentalDecorators":true,
            "jsx":true
        },
        "sourceType":"module"
    },
    "plugins":[
        "react",
    ],
    "extends": "airbnb",
    "rules":{
        "react/jsx-filename-extension":0,
        "react/destructuring-assignment":0,
        "react/jsx-one-expression-per-line":0,
        "react/no-unused-expressions":0,
        "no-plusplus":0,
        "no-param-reassign":0,
        "react/no-array-index-key":0,
        "no-shadow":0,
        "react/forbid-prop-types":0,
        "react/require-default-props":0
    }
};