/*global $, window, document, console */
"use strict";

module.exports = function (dom) {
  dom.document.on('click', '.table-container', function () {
    $(this).toggleClass('readmore-collapsed', 250, 'linear');
  });

  dom.document.on('submit', '.contact-form', function (e) {
    e.preventDefault();
    var action = "https://docs.google.com/forms/d/e/1FAIpQLSdBB5HdcmztAPRINEt9VknKY-_vuIRLISc1tRsBD9b6Zb244g/formResponse",
      form = $(this),
      btn = form.find('button'),
      form_data = {
        "entry.2005620554": form.find('.name').val(),
        "entry.1166974658": form.find('.phone').val(),
        "entry.839337160": form.find('.message').val(),
      };

    if (form.find('.email').val()) { return false; }

    btn.prop('disabled', true);

    $.ajax(action, {
      cache: false,
      timout: 1000,
      xhrFields: { withCredentials: true },
      type: 'POST',
      dataType: 'JSONP text html',
      contentType: 'text/html',
      data: form_data,
      error: function () {
        form.trigger('reset');
        form.find('.thanks').fadeIn();
      },
      complete: function () {
        btn.prop('disabled', false);
      }
    });

    return false;
  });
  return {};
};
