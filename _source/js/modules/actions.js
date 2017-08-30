/*global $, window, document, console */
"use strict";

module.exports = function (dom) {
  dom.document.on('click', '.table-container', function () {
    $(this).toggleClass('readmore-collapsed', 250, 'linear');
  });
  return {};
};
