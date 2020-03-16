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
        $('#searchMe').html("");
for (var i = 0; i < result.length; i++) {
          
            $('#ArrayD').append(result[i].country + "<br>" + " Today's Cases : " + result[i].todayCases + " Today's Deaths : " + result[i].todayDeaths + "<br>" +  " Total Deaths : " + result[i].deaths + "Total Cases : " + result[i].cases +"<br>" +  "Total Recovered : " + result[i].recovered + " Total Critical : " + result[i].critical)
        };
        })
    });

                          
});  
//end external datasearch

//data structure exmaple
//"country":"China","cases":80880,"todayCases":36,"deaths":3213,"todayDeaths":14,"recovered":67771,"critical":3226
//result[i].country , result[i].cases, result[i].todayCases,result[i].deaths, result[i].todayDeaths, result[i].recovered,result[i].critical
// $('#ArrayD').append(result[i].country + " " + result[i].cases + " " + result[i].todayCases + " " + result[i].deaths + " " + result[i].todayDeaths + " " + result[i].recovered + " " + result[i].critical)
// $('#ArrayD').append(result[i].country + "<br>" + " Total Deaths : " + result[i].deaths + " Today's Cases : " + result[i].todayCases + "<br>" +"Total Cases : " + result[i].cases + " " + " Today's Deaths : " + result[i].todayDeaths + "<br>" +  "Total Recovered : " + result[i].recovered + " Total Critical : " + result[i].critical)
       
