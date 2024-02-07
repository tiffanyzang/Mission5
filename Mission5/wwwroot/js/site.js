$("#btnSubmit").click(function () {
    alert("The total cost for " + $("#hours").val() +
        " hours of tutoring will be: $" + ($("#hours").val() * $("#cost").val()) +
        ".\nWe hope to work with you soon!")
})

$("[type='number']").keypress(function (evt) {
    evt.preventDefault();
});