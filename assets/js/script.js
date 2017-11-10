
jQuery(document).ready(function( $ ) {
  jQuery.fn.exists = function(){ return this.length > 0; }
 
if ($('#responsive-menu-button').exists()) {
     jQuery('#responsive-menu-button').sidr({
        name: 'sidr-main',
        source: '#nav'
      });  
}
  jQuery('.overlay, .sidr-class-sidr-button-close').click(function(){ // when 'btnClose' is clicked…
	    $.sidr('close', 'sidr-main');  // close the div with the ID of "sidr"
	    return false;
	});
if ($('#user_login').exists()) {
  jQuery('#user_login').sidr({
      name: 'sidr-logo',
      source: '.login_box',
      side: 'right'
    });
}
  jQuery('.overlay, .sidr-class-sidr-button-close').click(function(){ // when 'btnClose' is clicked…
	    $.sidr('close', 'sidr-logo');  // close the div with the ID of "sidr"
	    return false;
	});


});

//BACKEND


$( document ).ready(function() {

 
 var panel1 = $('#slide-user').scotchPanel({
    containerSelector: 'body',
    direction: 'right',
    duration: 300,
    transition: 'ease',
    clickSelector: '.user-head-box-mobile, #slide-user .close',
    distanceX: '80%',
    enableEscapeKey: true,
    beforePanelOpen: function() {
      // Reset all panels
      $('.scotch-panel').css('z-index', 0);
      // Bring current panel to top
      $('#slide-user').css('z-index', 11);
    },
});
var panel2 = $('#slide-notifications').scotchPanel({
    containerSelector: 'body',
    direction: 'right',
    duration: 300,
    transition: 'ease',
    clickSelector: '.notif-mobile, #slide-notifications .close',
    distanceX: '80%',
    enableEscapeKey: true,
    beforePanelOpen: function() {
      $('.scotch-panel').css('z-index', 0);
      $('#slide-notifications').css('z-index', 11);
    }
});

$('.overlay').click(function() {
  panel1.close();
  panel2.close();
  
  return false;
});

});

$(document).ready(function(){
  //Select
  jQuery('.selectpicker').selectpicker({  
    
  });
});