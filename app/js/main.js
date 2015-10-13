'use strict';

var promise = $.getJSON('http://json-data.herokuapp.com/forms');
promise.then(function (res) {
  _.each(res, function (x) {
    var template = '<div class= \'forms\'>\n        <input type=\'' + x.type + '\' placeholder=\'' + x.label + '\' id=\'' + x.id + '\'>\n        <i class=\'fa ' + x.icon + '\'></i>\n        </div>';
    $('form').append(template);
  });
});