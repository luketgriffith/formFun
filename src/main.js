

var promise = $.getJSON('http://json-data.herokuapp.com/forms');
  promise.then( function(res){
    _.each(res, function(x){
      if (x.label === 'Select Language'){
        // var language= _.each(x.options, function(y){
        //   // console.log(y.label);
        //   return y.label;
        // })
        // console.log(language);
        var template= `<div class='selects'>
          <select name="select" >
            <option value="value1">English</option>
            <option value="value2">Spanish</option>
            <option value="value3">French</option>
            <option value="value4">Chinese</option>
            <option value="value5">Japanese</option> 
          </select>
          <i class='fa ${ x.icon }'></i>
        </div>`;
        $('form').append(template);
      } else if (x.type=== 'text'){
        var template= `<div class='text'>
          <input name="text" type='${ x.type }' placeholder='${ x.label }' id='${ x.id }' >
          <i class='fa ${ x.icon }'></i>
        </div>`;
        $('form').append(template);
      } else if (x.type=== 'email'){
         var template= `<div class='email'>
          <input name="email" type='${ x.type }' placeholder='${ x.label }' id='${ x.id }' >
          <i class='fa ${ x.icon }'></i>
        </div>`;
        $('form').append(template);
      } else if(x.type==='textarea'){
        var template= `<div class='textarea'>
          <input name="textarea" type='${ x.type }' placeholder='${ x.label }' id='${ x.id }' >
          <i class='fa ${ x.icon }'></i>
        </div>`;
        $('form').append(template);
      } else if(x.type==='tel'){
          var template= `<div class='tel'>
          <input name="tel" type='${ x.type }' placeholder='${ x.label }' id='${ x.id }' >
          <i class='fa ${ x.icon }'></i>
          </div>`;
          $('form').append(template);

      }




      });  
      });  







      // var template= `<div class= 'forms'>
      //   <input type='${ x.type }' placeholder='${ x.label }' id='${ x.id }'>
      //   <i class='fa ${ x.icon }'></i>
      //   </div>`;
      //   $('form').append(template);



