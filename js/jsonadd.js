$().ready(function() {

	$("#add").click(function() {

		var student = getStudentData();

		$.post(
			"http://localhost:52080/Students/Add", 
			student,
			function(resp) {
				console.log(resp);
			}
		);
	});

});

function getStudentData() {
	var student = {
		Id: 0,
		FirstName: $("#firstname").val(),
		LastName: $("#lastname").val(),
		SAT: parseInt($("#sat").val()),
		GPA: parseFloat($("#gpa").val()),
		Phone: $("#phone").val(),
		Email: $("#email").val(),
		MajorId: parseInt($("#majorid").val())
	};
	return student;
}
