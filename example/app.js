/**
 * app
 */


(function () {

    "use strict";

    angular.module("app", [
        "ng-blueprint"
    ]).config(function (blueprintProvider) {

        blueprintProvider.setLayoutPath("example/view/layouts");

    }).controller("test", function () {



    });

})();
