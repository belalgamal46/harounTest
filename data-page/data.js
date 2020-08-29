$(function () {
    let j = 4;
    let options = "";
    let numberOfItemsNeeded = 80;

    for (let i = 1; i <= numberOfItemsNeeded; i++) {

        options += "<option value='" + i + "'>" + j + "</option>";
        $("#inputGroupSelect04").html("<option value=''")

        j++
    }
    $("#inputGroupSelect04").html("<option selected='true' disabled='disabled'>السن</option>" + options);
});



