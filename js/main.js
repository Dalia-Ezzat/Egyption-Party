
// ==========loading===============
$(window).ready(()=>{
    $('.loading').fadeToggle(700,function(){
        $('body').css('overflow-y','scroll');
    })
})


// ========button up======================

$(window).scroll(function(){
    let windowScroll = $(window).scrollTop();
   
    let section = $('#home').offset().top;
    if (windowScroll > section){
       $('#btn-up').show(800);
    }
    else{
       $('#btn-up').hide(800);
    }
   
   })
   
   
   $('#btn-up').click(function(){
       $('body,html').animate({ scrollTop:0},100)
})
   
   
// --------scroll smoothing--------
$('.sidenav').click(function(){
    let selected=$(this).attr('href')
    let sectionTop=$(selected).offset().top
    console.log(sectionTop)
    $('body,html').animate({
    scrollTop:sectionTop
    },2000)
}) 

// --------sideNav------------

$('.openNav').click(function(){

  if($('.sidenav').css('width') =='250px'){

    $('.sidenav').animate({width:'0px'},20);
    $('#home-tittle').animate({marginLeft :'0px'},20);

  }
  else{
    $('.sidenav').animate({width:'250px'},20);
    $('#home-tittle').animate({marginLeft :'250px'},20);
  }
 } )


$('.closebtn').click(function(){

 $('.sidenav').animate({ width:'0px'},20);
 $('#home-tittle').animate({marginLeft :'0px'},20);

})

// =============== offsetLink navbar ======================
$('.sidenav a').click( ()=> {
    var aHref = $(this).attr("href");
  
    if ($(aHref).offset() != undefined) {
      var offsetLink = $(aHref).offset().top;
  
    $("html,body").animate({scrollTop:offsetLink,},500); }
     
});

// --------Chang-color----------

$('.sidenav li').click(function(){
    let clickedColor= $(this).css('backgroundColor')
    $('p,h2,h3,.tim,.openNav').css({color:clickedColor,transition:'color 0.5s'})
    
    $(this).css('border','2px solid  rgba(214, 46, 51 , 0.6)')
    // $(this).siblings().css('border','none')
    
    $('.sidenav li').not(this).css('border','none')
})




    

// ====================start-singers-section ========================

$('.toggle').click(function(){
    $('.innerText').not($(this).next()).slideUp(500); 
    $(this).next().slideToggle(500);
   

})

// ====================end-singers-section ========================


// ==================== start-counter-section ========================
let countDownDate= new Date("Oct 25 2023 10:00:00").getTime();

let counter = setInterval(()=>{
// get date now 
let dateNow=new Date().getTime();

// get differance Date( now --> countDown)
 let dateDiff= countDownDate-dateNow;

//  get Time ------
// days  hours   minutes   seconds
let day = Math.floor(dateDiff / (1000*60*60*24));
let hour =Math.floor(dateDiff % (1000*60*60*24)/(1000*60*60)); 
let minute =Math.floor(dateDiff%(1000*60*60)/(1000*60)); 
let second =Math.floor(dateDiff%(1000*60)/(1000)); 

document.getElementById("days").innerHTML=`${day} D`;
document.getElementById("hours").innerHTML=`${hour} H`;
document.getElementById("minutes").innerHTML=`${minute} M`;
document.getElementById("seconds").innerHTML=`${second} S`;

},1000)

// ==================== end-counter-section ========================


// ===========start-contact-textarea-section==================

$( ()=> {
    var num = 100;
    $("textarea").keyup(function () {
      var length = $(this).val().length;
      console.log(length)
      var character = num - length;
      if (character <= 0) {
        $("#char").text("your available character finished");
      } else {
        $("#char").text(character);
      }
    });
  });


