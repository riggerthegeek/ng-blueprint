/**
 * app
 */

"use strict";


/* Node modules */


/* Third-party modules */


/* Files */

var app = angular.module("ng-blueprint", [])

    /* Directives */
    .directive("bluePrint", require("./directives/blueprint"))

    /* Providers */
    .provider("blueprint", require("./providers/blueprint"));

module.exports = app;
