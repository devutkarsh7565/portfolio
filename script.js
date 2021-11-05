$(document).ready(function(){
  $(window).scroll(function(){

    console.log("scrolled");
      if(this.scrollY >20){
        $('.navbar').addClass("sticky");
        console.log("scrolled more than 20");
      }
      else{
        $('.navbar').removeClass("sticky");  
      }
  });
  // toggle menu/navbar script 
  $('.menu-btn').click(function(){
     $('.navbar .menu').toggleClass("active");
     $('.menu-btn i').toggleClass("active")
  }); 
});