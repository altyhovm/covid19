

  $(document).ready(function ()  
            {
              $('#dynam-now').click(function () {
                    $.ajax
                        ({
                    method: "GET",
                    url: " https://aaronlilly.github.io/ApiExample/Apple1/apple.json"
                         }).done(function(data) 

                               {
                        for (var i = 0; i < data.results.length; i++) 
                        {
                                           
    $("#ArrayD").append("Fruit: " + data.results[i].fruit + "<br> Size: " + data.results[i].size + "<br> Color: " + data.results[i].color);
                        }            
                              });
            });
           });

