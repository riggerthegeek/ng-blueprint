/**
 * blueprint
 */

"use strict";


/* Node modules */


/* Third-party modules */
var _ = require("lodash");


/* Files */


module.exports = function () {

    "ngInject";

    var layoutPath = null;

    /**
     * Set Layout Path
     *
     * Sets the layout path
     *
     * @param {string} path
     */
    this.setLayoutPath = function (path) {

        if (_.isString(path) && path !== "") {

            /* Make sure it ends in a / */
            if (!path.match(/\/$/)) {
                path += "/";
            }

            layoutPath = path;
        }

    };


    /**
     * $get
     *
     * Returns the constructor object
     *
     * @returns {{layoutPath: *}}
     */
    this.$get = function () {

        if (layoutPath === null) {
            throw new Error("blueprintProvider.setLayoutPath must be set");
        }

        return {

            layoutPath: layoutPath

        };

    };


};
