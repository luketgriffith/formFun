

var promise = $.getJSON('http://json-data.herokuapp.com/forms');
  promise.then( function(res){
    _.each(res, function(x){
      var template= `<div class= 'forms'>
        <input type='${ x.type }' placeholder='${ x.label }' id='${ x.id }'>
        <i class='fa ${ x.icon }'></i>
        </div>`;
        $('form').append(template);
  })
})


