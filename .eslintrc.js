module.exports = {
    "extends": "eslint:recommended",
    "env": {
        "es6": true,
        "jasmine": true,
        "jquery": true,
        "browser": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "rules": {
        "quotes": ["error", "single"],
        "no-console": "warn",
        "camelcase": "error",
        "no-trailing-spaces": "error"
    }

}
