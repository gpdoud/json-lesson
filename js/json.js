var studentList = [];

$().ready(function() {

	$("button").click(function() {

		$.getJSON(
			"http://localhost:52080/Students/List",
			function(students) {
				studentList = students;
				console.log(students);
				buildTableRows(students);
			}
		);

	});

});

function buildTableRows(students) {
	$("tbody").empty();
	for(var student of students) {
		var row = "<tr>";
		row += "<td>" + student.FirstName + " " + student.LastName + "</td>";
		row += "<td>" + student.SAT + "</td>";
		row += "<td>" + student.GPA + "</td>";
		if(student.Major != null) {
			row += "<td>" + student.Major.Description + "</td>";
		} else {
			row += "<td>UNDECLARED</td>";
		}
		row += "</tr>";
		$("tbody").append(row);
	}
}
