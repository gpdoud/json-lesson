var studentList = [];

$().ready(function() {

	$("button").click(function() {

		var theNbr = $("#thenbr").val();
		$.getJSON(
			"http://localhost:52080/Students/Get/" + theNbr,
			function(student) {
				console.log(student);
				buildTableRows(student);
			}
		);

	});

});

function buildTableRows(student) {
	$("tbody").empty();
	var row = "<tr><td>FirstName</td><td>" + student.FirstName + "</td></tr>";
	$("tbody").append(row);
	row = "<tr><td>LastName</td><td>" + student.LastName + "</td></tr>";
	$("tbody").append(row);
	row = "<tr><td>SAT</td><td>" + student.SAT + "</td></tr>";
	$("tbody").append(row);
	row = "<tr><td>GPA</td><td>" + student.GPA + "</td></tr>";
	$("tbody").append(row);
	if(student.Major == null) {
		row = "<tr><td>Major</td><td>UNDECLARED</td></tr>";
	} else {
		row = "<tr><td>Major</td><td>" + student.Major.Description + "</td></tr>";
	}
	$("tbody").append(row);
}
