/* eslint-env node */
module.exports = {
  "extends": [
    "plugin:vue/vue3-recommended",
    "eslint:recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  root  : true,
  rules : {
    "arrow-body-style": [
      "error",
      "as-needed",
      { "requireReturnForObjectLiteral": true }
    ],
    "key-spacing": ["error", {
      "align": {
        "afterColon"  : true,
        "beforeColon" : true,
        "on"          : "colon"
      }
    }],
    "no-console"           : "warn",
    "no-debugger"          : "error",
    "no-dupe-keys"         : "error",
    "no-duplicate-imports" : "error",
    "no-empty"             : "error",
    "no-trailing-spaces"   : "error",
    "no-unused-vars"       : "warn",
    "no-var"               : "error",
    "object-curly-newline" : ["error", {
      "ExportDeclaration" : { "consistent": true, "minProperties": 4 },
      "ImportDeclaration" : { "consistent": true, "minProperties": 4 },
      "ObjectExpression"  : { "consistent": true, "minProperties": 4 },
      "ObjectPattern"     : { "consistent": true, "minProperties": 4 }
    }],
    "prefer-destructuring" : ["error", { "object": true }],
    "quotes"               : [
      "error",
      "double",
      {
        "allowTemplateLiterals" : true,
        "avoidEscape"           : true
      }
    ],
    "semi"         : ["error", "always"],
    "comma-dangle" : ["error", {
      "arrays"    : "never",
      "objects"   : "never",
      "imports"   : "never",
      "exports"   : "never",
      "functions" : "never"
    }],
    "eqeqeq"                               : ["error", "smart"],
    "no-else-return"                       : "error",
    "vue/component-definition-name-casing" : [
      "error",
      "kebab-case"
    ],
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 3
      }
    }]
  }
};
