  const open =document.querySelector('.li');
  const hid =document.querySelector('.hide');
  document.addEventListener('click',function(){
    hid.classList.toggle('active')
  })
  var typed = new Typed('#typed', {
    Strings: [
        "لورم متون ساختگی با تولید نا مفهوم",
        "لورم متون ساختگی با تولید نا مفهوم",
        "لورم متون ساختگی با تولید نا مفهوم"
    ],
    loop: true,
    typeSpeed:80,
    backSpeed:40
  });

  $("#lightSlider").lightSlider({
    rtl:true,
    autoWidth:true,
    loop:true,
    pager:false,
    auto:true,
    pause:2500,
    enableTouch:false,
    enableDrag:false,
    slideMargin: 15 ,
  });