'use strict';

var promise = $.getJSON('http://json-data.herokuapp.com/forms');
promise.then(function (res) {
  _.each(res, function (x) {
    if (x.label === 'Select Language') {
      // var language= _.each(x.options, function(y){
      //   // console.log(y.label);
      //   return y.label;
      // })
      // console.log(language);
      var template = '<div class=\'selects\'>\n          <select name="select" >\n            <option value="value1">English</option>\n            <option value="value2">Spanish</option>\n            <option value="value3">French</option>\n            <option value="value4">Chinese</option>\n            <option value="value5">Japanese</option> \n          </select>\n          <i class=\'fa ' + x.icon + '\'></i>\n        </div>';
      $('form').append(template);
    } else if (x.type === 'text') {
      var template = '<div class=\'text\'>\n          <input name="text" type=\'' + x.type + '\' placeholder=\'' + x.label + '\' id=\'' + x.id + '\' >\n          <i class=\'fa ' + x.icon + '\'></i>\n        </div>';
      $('form').append(template);
    } else if (x.type === 'email') {
      var template = '<div class=\'email\'>\n          <input name="email" type=\'' + x.type + '\' placeholder=\'' + x.label + '\' id=\'' + x.id + '\' >\n          <i class=\'fa ' + x.icon + '\'></i>\n        </div>';
      $('form').append(template);
    } else if (x.type === 'textarea') {
      var template = '<div class=\'textarea\'>\n          <input name="textarea" type=\'' + x.type + '\' placeholder=\'' + x.label + '\' id=\'' + x.id + '\' >\n          <i class=\'fa ' + x.icon + '\'></i>\n        </div>';
      $('form').append(template);
    } else if (x.type === 'tel') {
      var template = '<div class=\'tel\'>\n          <input name="tel" type=\'' + x.type + '\' placeholder=\'' + x.label + '\' id=\'' + x.id + '\' >\n          <i class=\'fa ' + x.icon + '\'></i>\n          </div>';
      $('form').append(template);
    }
  });
});

// var template= `<div class= 'forms'>
//   <input type='${ x.type }' placeholder='${ x.label }' id='${ x.id }'>
//   <i class='fa ${ x.icon }'></i>
//   </div>`;
//   $('form').append(template);