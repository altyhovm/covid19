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



  $(document).ready(function ()  
            {
                    $.ajax
                        ({
                    method: "GET",
                    url: "https://aaronlilly.github.io/Coronavirus/covid19/apple4.json"
                         }).done(function(data) 

                               {$(document).ready(function () {  
                                 $('#ArrayD').append("hi")

          })
});

// for (var i = 0; i < results.length; i++) {
//             $('#ArrayD').append(results[i].fruitname + " " + results[i].size + "  " + results[i].color + "<br>")
//        