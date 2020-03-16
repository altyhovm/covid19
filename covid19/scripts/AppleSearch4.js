//onload function
  $(document).ready(function ()  
            {
                    $.ajax
                        ({
                    method: "GET",
                    url: "https://corona.lmao.ninja/countries"
                         }).done(function(data) 

                               {$(document).ready(function () {  

                                for (var i = 0; i < data.length; i++) {
                                 $('#ArrayD').append(data[i].country + " ");

                               }                                 
          })

                        });
                           });
//end onload function

//external dataserch
$(document).ready(function ()
 {  
    $.ajax
         ({
                    method: "GET",
                    url: "https://corona.lmao.ninja/countries"
                         }).done(function(data) {
        $('#dynam-now').click(function ()
         {
         let searchString = $('#dynamId').val();
let result = _.filter(data, function(object) {
return object.country.toLowerCase().indexOf(searchString.toLowerCase()) != -1;
});
        
        $('#ArrayD').html("");
for (var i = 0; i < result.length; i++) {
          
            $('#ArrayD').append(result[i].country +"<BR>")
        };
        })
    });
});  
//end external datasearch