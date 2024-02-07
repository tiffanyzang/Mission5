$("#btnSubmit").click(function () {
    $("p").html("The total cost for " + $("#hours").val() +
        " hours of tutoring will be: $" + ($("#hours").val() * $("#cost").val()) +
        ".\nWe hope to work with you soon!")
})
