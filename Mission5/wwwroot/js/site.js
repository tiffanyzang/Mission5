//functionality for displaying calcuation
$("#btnSubmit").click(function () {
    $("p").html("The total cost for " + $("#hours").val() +
        " hours of tutoring will be: $" + ($("#hours").val() * $("#cost").val()) +
        ".\nWe hope to work with you soon!")
})

//disable typing into input box - no negatives allowed
$("[type='number']").keypress(function (evt) {
    evt.preventDefault();
});