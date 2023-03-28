$(document).ready(function() { 


   $('form').on('submit', function(e) { 
       e.preventDefault(); 
    
       const novaTarefa = $('#novaTarefa').val();
       $('<li></li>').text(novaTarefa).appendTo('ul').click(() =>
       $(event.target).css('text-decoration', 'line-through'))
       $('#novaTarefa').val('');
       
       });

      
   })
