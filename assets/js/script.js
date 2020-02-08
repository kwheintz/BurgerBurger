$(document).ready(function() {    
    $(".devour-form").on("click", function(event) {
      event.preventDefault();
      console.log("onclick", this)
      var selectBurger = $(this).attr("burgerid");
      console.log(selectBurger);
      $.ajax({
        method: "PUT",
        url: "/api/burgers/" + selectBurger
      }).then(function(data) {
        location.reload();
      });
    });
  
    $(".destroy-btn").on("click", function(event) {
      event.preventDefault();
      console.log("onclick", this)
      var selectBurger = $(this).attr("burgerid");
      console.log(selectBurger);
      $.ajax({
        method: "delete",
        url: "/api/burgers/" + selectBurger
      }).then(function(data) {
        location.reload();
      });
  
    });
  });
  