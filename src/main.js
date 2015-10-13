(function () {




function adhocJsonp (input){
  $.ajax({
    url: 'http://json-data.herokuapp.com/forms',
    // data: {
    //   api_key: '',
    //   keywords: '',
    //   includes: ''};
    
    dataType: 'jsonp',
    
  }).then(function(data){ 
     console.log(data);
  })
}



}());
