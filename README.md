# ng-blueprint

[![NPM Version][npm-image]][npm-url]
[![Bower Version][bower-image]][bower-url]
[![Build Status][travis-image]][travis-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![Dev Depedencies][dev-dependencies-image]][dev-dependencies-url]

A simple package to create reusable page layouts for your Angular projects

## Usage

First, add the library to your angular module

    angular.module("app", [
        "ng-blueprint"
    ]);

Next, configure the `layoutPath` in the config phase of your angular app

    angular.config(function (blueprintProvider) {

        blueprintProvider.setLayoutPath("path/to/view/layouts");

    });

Next, configure your layout file.  This is our `default.html` file.  The `ng-transclude` will be where the content is
displayed (further information on [ngTransclude](https://docs.angularjs.org/api/ng/directive/ngTransclude) can be
found here)

    <div class="layout default_layout">

        Default layout

        <div ng-transclude></div>

    </div>

Finally, add the `blue-print` directive around your HTML

    <blue-print>

        layout content

    </blue-print>

If you don't specify a `layout=""` in the `blue-print` element, it will use your 'default' layout.  The layout name is
the file name (less the '.html' bit);

# License

MIT License

[npm-image]: https://img.shields.io/npm/v/ng-blueprint.svg?style=flat
[bower-image]: https://img.shields.io/bower/v/ng-blueprint.svg?style=flat
[travis-image]: https://img.shields.io/travis/riggerthegeek/ng-blueprint.svg?style=flat
[dependencies-image]: https://img.shields.io/david/riggerthegeek/ng-blueprint.svg?style=flat
[dev-dependencies-image]: https://img.shields.io/david/dev/riggerthegeek/ng-blueprint.svg?style=flat

[npm-url]: https://npmjs.org/package/ng-blueprint
[bower-url]: http://bower.io/search/?q=ng-blueprint
[travis-url]: https://travis-ci.org/riggerthegeek/ng-blueprint
[dependencies-url]: https://david-dm.org/riggerthegeek/ng-blueprint
[dev-dependencies-url]: https://david-dm.org/riggerthegeek/ng-blueprint#info=devDependencies&view=table
