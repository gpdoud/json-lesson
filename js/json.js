$().ready(function() {

	$("button").click(function() {

		$.getJSON(
			"http://localhost:52080/Students/List",
			function(students) {
				console.log(students);
			}
		);

	});

});