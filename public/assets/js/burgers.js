//Front end js
// Make sure we wait to attach our handlers until the DOM is fully loaded.

//==================== devoured ========================
// devour me button
$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newBurger = $(this).data("devoured");

    var newDevoured = {
      devoured: !newBurger,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevoured,
    }).then(function () {
      console.log("changed devoured to", newDevoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //================= delete devoured list ===============

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //================ adding new burger ================
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("new burger: ", newBurger);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
