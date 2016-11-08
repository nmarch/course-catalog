// YOUR SCRIPTS


// GRID VIEW

$('#grid').click(function(){
    
    // Remove ONLY 'list' Class
    $('.cd-gallery').removeClass('list');
    
    //Add ONLY 'grid' Class
    $('.cd-gallery').addClass('grid');
   
    
});

// List View

$('#list').click(function(){
    
    // Remove ONLY 'list' Class
    $('.cd-gallery').removeClass('grid');
    
    //Add ONLY 'grid' Class
    $('.cd-gallery').addClass('list');
   
    
});