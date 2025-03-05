$(function(){
    $("#navbar-placeholder").load("navbar.html", function(){
      // Get the current page filename
      var currentPage = window.location.pathname.split("/").pop();
      if (currentPage === "") {
        currentPage = "index.html";
      }
      
      // Loop through each nav link and add the "active" class if it matches the current page
      $('.navbar-nav a').each(function(){
        // Get the last part of the href
        var linkPage = $(this).attr('href').split("/").pop();
        if(linkPage === currentPage){
          $(this).addClass('active');
        }
      });
    });
    $("#footer-placeholder").load("footer.html");
  });