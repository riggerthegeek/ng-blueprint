/**
 * blueprint
 */

"use strict";


/* Node modules */


/* Third-party modules */


/* Files */


module.exports = function (blueprint) {

    "ngInject";

    return {

        restrict: "E",

        templateUrl: function (element, attrs) {

            var layout = attrs.layout || "default";

            return blueprint.layoutPath + layout + ".html";

        },

        transclude: true

    };

};
