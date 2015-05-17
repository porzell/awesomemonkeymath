var students = [];

var student_data = [];

function loadStudents()
{
	var students_from_cookie = Cookies.getJSON("students");
	if(students_from_cookie !== undefined)
		students = students_from_cookie;
}

function addStudent(student_name)
{
	loadStudents();

    if(!findStudent(student_name))
	    students.push(student_name);
	
	Cookies.set("students", JSON.stringify(students));
}

function findStudent(student_name)
{
	loadStudents();
	
	for(var i = 0; i < students.length; i++)
	{
		if(students[i] == student_name)
		{
			return true;
		}
	}
	
	return false;
}

function saveStudentScore(student_name, tag, pass)
{
	loadStudents();

	var data = [];
	
	var data_from_cookie = Cookies.getJSON(student_name + "_" + tag);
	
	if(data_from_cookie !== undefined)
		data = data_from_cookie;
	
	data.push(pass);
	
	Cookies.set(student_name + "_" + tag, JSON.stringify(data));
	
}

function calcStudentScore(student_name, tag)
{
	loadStudents();

	var data = [];
	
	var data_from_cookie = Cookies.getJSON(student_name + "_" + tag);
	
	if(data_from_cookie !== undefined)
		data = data_from_cookie;
	
	var count = 0;
	
	var total = 0;
	
	for(var i = 0; i < data.length; i++)
	{
		if(data[i] == true)
			count++;
			
		total++;
	}
	
	if(total == 0)
	    return "no data";
	    
	return count/total * 100 + "%";
}

/*function saveStudentScore(student_name, tag, pass)
{
	loadStudents();

	var data = [];
	
	var data_from_cookie = Cookies.getJSON(student_name);
	
	if(data_from_cookie !== undefined)
		data = data_from_cookie;
	
	var array;
	
	data[tag] = pass;
	
	Cookies.set(student_name, JSON.stringify(data));
	
}

function calcStudentScore(student_name, tag)
{
	loadStudents();
	
	var data_from_cookie = Cookies.getJSON(student_name);
	
	if(data_from_cookie !== undefined)
		return 0;
	
	var data = data_from_cookie[tag];
	
	var count = 0;
	
	var total = 0;
	
	for(var i = 0; i < data.length; i++)
	{
		if(data[i] == true)
			count++;
		total++;
	}
	
	return count/total * 100;
}*/