$(document).ready(function() { 


   $('form').on('submit', function(e) { 
       e.preventDefault(); 
    
       const novaTarefa = $('novaTarefa').val();
       $('<li></li>').text(novaTarefa).appendTo('ul').click(novaTarefa);
        console.log(novaTarefa);

   })

})