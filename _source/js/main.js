/*global window, document, app, Dfp, $*/
"use strict";

// Application object available globally

global.app = {};
var app = global.app;

// Including npm modules

var $                       = require('jquery');
global.jQuery               = global.$ = $;
global.Popper               = require('popper.js');
global.bootstrap            = require('bootstrap');
global.jQueryUI             = require('jquery-ui-browserify');


// Including app modules

var dom                     = require('./modules/dom');
var actions                 = require('./modules/actions');

// Initializing app modules

$(document).ready(function () {
  app.dom                   = dom();
  app.actions               = actions(app.dom);
});
