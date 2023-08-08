document.querySelector(".navbar-btn").onclick=function(){
    document.querySelector(".navbar-item").classList.toggle("hide");
 }

 
 document.querySelector(".navbar1-btn").onclick=function(){
    document.querySelector(".navbar1-item").classList.toggle("hide");
 }

  
 document.querySelector(".navbar2-btn").onclick=function(){
    document.querySelector(".navbar2-item").classList.toggle("hide");
 }

 document.querySelector(".navbar3-btn").onclick=function(){
    document.querySelector(".navbar3-item").classList.toggle("hide");
 }


 document.querySelector(".navbar4-btn").onclick=function(){
    document.querySelector(".navbar4-item").classList.toggle("hide");
 }



 function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  // Smooth scroll when button is clicked
  var scrollButton = document.getElementById('About');
  scrollButton.addEventListener('click', function() {
    smoothScroll('#part1', 2000); // 1000ms (1 second) duration
  });
  
  var scrollButton1 = document.getElementById('Experisence');
  scrollButton1.addEventListener('click', function() {
    smoothScroll('#part2', 2000); // 1000ms (1 second) duration
  });
  var scrollButton2 = document.getElementById('project');
  scrollButton2.addEventListener('click', function() {
    smoothScroll('#part3', 2000); // 1000ms (1 second) duration
  });
  var scrollButton3 = document.getElementById('contact');
  scrollButton3.addEventListener('click', function() {
    smoothScroll('#part4', 2000); // 1000ms (1 second) duration
  });


  
  // Smooth scroll when button is clicked
  var scrollButton4 = document.getElementById('About1');
  scrollButton4.addEventListener('click', function() {
    smoothScroll('#part1', 2000); // 1000ms (1 second) duration
  });
  
  var scrollButton5 = document.getElementById('Experisence1');
  scrollButton5.addEventListener('click', function() {
    smoothScroll('#part2', 2000); // 1000ms (1 second) duration
  });
  var scrollButton6 = document.getElementById('project1');
  scrollButton6.addEventListener('click', function() {
    smoothScroll('#part3', 2000); // 1000ms (1 second) duration
  });
  var scrollButton7 = document.getElementById('contact1');
  scrollButton7.addEventListener('click', function() {
    smoothScroll('#part4', 2000); // 1000ms (1 second) duration
  });
  
  // Smooth scroll when button is clicked
  var scrollButton8 = document.getElementById('About2');
  scrollButton8.addEventListener('click', function() {
    smoothScroll('#part1', 2000); // 1000ms (1 second) duration
  });
  
  var scrollButton9 = document.getElementById('Experisence2');
  scrollButton9.addEventListener('click', function() {
    smoothScroll('#part2', 2000); // 1000ms (1 second) duration
  });
  var scrollButton10 = document.getElementById('project2');
  scrollButton10.addEventListener('click', function() {
    smoothScroll('#part3', 2000); // 1000ms (1 second) duration
  });
  var scrollButton11 = document.getElementById('contact2');
  scrollButton11.addEventListener('click', function() {
    smoothScroll('#part4', 2000); // 1000ms (1 second) duration
  });

  
  // Smooth scroll when button is clicked
  var scrollButton12 = document.getElementById('About3');
  scrollButton12.addEventListener('click', function() {
    smoothScroll('#part1', 2000); // 1000ms (1 second) duration
  });
  
  var scrollButton13 = document.getElementById('Experisence3');
  scrollButton13.addEventListener('click', function() {
    smoothScroll('#part2', 2000); // 1000ms (1 second) duration
  });
  var scrollButton14 = document.getElementById('project3');
  scrollButton14.addEventListener('click', function() {
    smoothScroll('#part3', 2000); // 1000ms (1 second) duration
  });
  var scrollButton15 = document.getElementById('contact3');
  scrollButton15.addEventListener('click', function() {
    smoothScroll('#part4', 2000); // 1000ms (1 second) duration
  });

  
  // Smooth scroll when button is clicked
  var scrollButton16 = document.getElementById('About4');
  scrollButton16.addEventListener('click', function() {
    smoothScroll('#part1', 2000); // 1000ms (1 second) duration
  });
  
  var scrollButton17 = document.getElementById('Experisence4');
  scrollButton17.addEventListener('click', function() {
    smoothScroll('#part2', 2000); // 1000ms (1 second) duration
  });
  var scrollButton18 = document.getElementById('project4');
  scrollButton18.addEventListener('click', function() {
    smoothScroll('#part3', 2000); // 1000ms (1 second) duration
  });
  var scrollButton19 = document.getElementById('contact4');
  scrollButton19.addEventListener('click', function() {
    smoothScroll('#part4', 2000); // 1000ms (1 second) duration
  });

  var scrollButton20 = document.getElementById('web4');
  scrollButton20.addEventListener('click', function() {
    smoothScroll('#part', 2000); // 1000ms (1 second) duration
  });
  var scrollButton21 = document.getElementById('web3');
  scrollButton21.addEventListener('click', function() {
    smoothScroll('#part', 2000); // 1000ms (1 second) duration
  });
  var scrollButton22 = document.getElementById('web2');
  scrollButton22.addEventListener('click', function() {
    smoothScroll('#part', 2000); // 1000ms (1 second) duration
  });
  var scrollButton23 = document.getElementById('web1');
  scrollButton23.addEventListener('click', function() {
    smoothScroll('#part', 2000); // 1000ms (1 second) duration
  });