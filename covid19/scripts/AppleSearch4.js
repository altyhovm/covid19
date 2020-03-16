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
          
            $('#ArrayD').append(result[i].country + "<br>" + "Total Cases: " + result[i].cases + " " +   "Total Deaths: " + result[i].deaths + " " )
        };
        })
    });
});  
//end external datasearch

//data structure exmaple
//"country":"China","cases":80880,"todayCases":36,"deaths":3213,"todayDeaths":14,"recovered":67771,"critical":3226