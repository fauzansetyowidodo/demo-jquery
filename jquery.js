$(document).ready(function() {
    // Submit form using AJAX
    $("#myForm").submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        var inputText = $("#inputText").val();
        var inputNumber = $("#inputNumber").val();

        // Create data object to be sent
        var data = {
            text: inputText,
            number: inputNumber,
        };

        // Send AJAX request
        $.ajax({
            url: "server_b.php",
            type: "POST",
            data: data,
            dataType: "json",
            success: function(response) {
                displayTable(response); // Display the result as a table
            },
        });
    });

    // Display the result as a table
    function displayTable(data) {
        var table = $("#resultTable");
        table.find("tbody").empty();

        $.each(data, function(index, value) {
            var row = $("<tr>");
            var indexCell = $("<td>").text(index);
            var valueCell = $("<td>").text(value);
            row.append(indexCell, valueCell);
            table.find("tbody").append(row);
        });

        table.show(500); // Show the table with animation
    }
});