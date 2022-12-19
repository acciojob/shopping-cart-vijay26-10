//your code here
function productUpdate() {
    if ($("#item-name-input").val() != null &&
        $("#item-name-input").val() != '') {
        productAddToTable();
        formClear();


        $("#item-name-input").focus();

    }
}

function productAddToTable() {
    if ($("#productTable tbody").length == 0) {
        $("#productTable").append("<tbody></tbody>");
    }

    $("#productTable tbody").append(
        "<tr>" +
        "<td id='item'>" + $("#item-name-input").val() + "</td>" +
        "<td id='price'>" + $("#item-price-input").val() + "</td>" +
        "</tr>"
    );
    add();

}

function formClear() {
    $("#item-name-input").val("");
    $("#item-price-input").val("");

}

function add() {
    var table = document.getElementById("productTable"),
        sumVal = 0;
    for (var i = 1; i < table.rows.length; i++) {
        sumVal = sumVal + parseFloat(table.rows[i].cells[1].innerHTML);
    }

    document.getElementById("total").innerHTML = sumVal;
    console.log(sumVal);
}
