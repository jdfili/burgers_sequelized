$(document).ready(function () {
    $(".devour").on("click", function () {
        console.log("working")
        var id = $(this).data("id");

        var isDevoured = {
            devour: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured
        }).then(
            function () {
                location.reload();
            }
        );
    });
    $(".post").on("click", function () {
        var name = $("#name").val().trim();
        var devoured = 0;
        var newBurger = {
            burger_name: name,
            devoured: devoured
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        )
    })
});
