 
// //search function.
  $(document).ready(function ()  
            {
                    $.ajax
                        ({
                    method: "GET",
                    url: "https://aaronlilly.github.io/Coronavirus/covid19/apple4.json"
                         }).done(function(data) 

                               {$(document).ready(function () {  
        $('#dynam-now').click(function () {
         let searchString = $('#dynamId').val();

let result = _.filter(data.results, function(object) {

return object.fruitname.toLowerCase().indexOf(searchString.toLowerCase()) != -1;

});
        //console.log(result[0].fruit)
        $('#ArrayD').html("");
 
for (var i = 0; i < result.length; i++) {
            $('#ArrayD').append(result[i].fruitname + " " + result[i].size + "  " + result[i].color + "<br>")
        };
    });
});   
                                //console.log(data)
                       
                               
                              });
            });
//end search function

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
                                 //console.log(data[0].country);


          })

                        });
                           });

//end onload function




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
                                 //console.log(data[0].country);


          })

                        });
                           });

//end onload function