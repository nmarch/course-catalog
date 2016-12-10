// YOUR SCRIPTS


//Grid View
$('#grid').click( function(){
    
    
    //Remove ONLY 'list' Class
    $('.cd-gallery').removeClass('list');
    //Add ONLY 'grid' Class
    $('.cd-gallery').addClass('grid');
    
    console.log('Vote');
    
    
    
} );

//List View
$('#list').click( function(){
    
    
    //Remove ONLY 'grid' Class
    $('.cd-gallery').removeClass('grid');
    //Add ONLY 'list' Class
    $('.cd-gallery').addClass('list');
    
    console.log('Vote');
    
    
    
} );
