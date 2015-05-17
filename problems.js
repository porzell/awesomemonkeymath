//problem_info types have:
//  - value1:       First number
//  - operation:    Operator
//  - value2:       Second number
//	- answer:		Answer
//  - text:         Problem text
//	- tags:			Problem tags

var starting_phrases =
[
    "What is ",
    "Try ",
    "Can you solve ",
    "Here's a challenge: ",
    "Betcha can't get ",
    "Try this: ",
    "Answer me this: "
];

function genProblem()
{
	var tags = [];
	
	switch(Math.floor(Math.random() * 3))
	{
		case 0:
			tags.push("addition");
			break;
		case 1:
			tags.push("subtraction");
			break;
		case 2:
			tags.push("multiplication");
			break;
		//We didn't add division because it is messy.
		/*case 3:
			tags.push("division");
			break;*/
	}
	
	if(Math.random() >= 0.5)
		tags.push("over12");
	
	if(Math.random() >= 0.5)
		tags.push("wordproblem");
	
	return createProblemFromTags(tags);
}

function createProblemFromTags(tags)
{
    var operator;
    var value1;
    var value2;
    
    var answer;
    
	var isOver12 = false;
	var isWordProblem = false;
	
	var isNegative = false;
	
	for(i=0; i<tags.length; i++)
	{
		switch(tags[i])
		{
			//=================
			// Operator tags:
			//=================
			
			case "addition":
				operator = "+";
				break;
			case "subtraction":
				operator = "-";
				break;
			case "multiplication":
				operator = "*";
				break;
			case "division":
				operator = "/";
				break;
			
			//=================
			// Modifier tags:
			//=================
				
			case "over12":
				isOver12 = true;
				break;
				
			case "wordproblem":
			    isWordProblem = true;
			    break;
			
			default:
				console.log("Warning:  Encountered unknown tag: " + tags[i]);
		}
	}
	
	if(isOver12)
	{
		value1 = Math.floor(Math.random() * 101) + 12;
	    value2 = Math.floor(Math.random() * 101) + 12;
	}
	else
	{
	    value1 = Math.floor(Math.random() * 13);
		value2 = Math.floor(Math.random() * 13);
	}
	
	switch(operator)
	{
		case "+":
			answer = value1 + value2;
			break;
		case "-":
			answer = value1 - value2;
			break;
		case "*":
			answer = value1 * value2;
			break;
		case "/":
			answer = value1 / value2;
			break;
	}
	
	//DEBUG
	//alert(value1 + operator + value2 + "=" + answer);
	
	
	// Set up problem info.
	var problem_info = {operator:operator, value1:value1, value2:value2, answer:answer, text:"", tags:tags};
	
	if(isWordProblem)
	{
	    problem_info.text = generate_word_problem(operator, value1, value2);
	}
	else
	{
	    problem_info.text = pick_random(starting_phrases) + value1.toString() + " " + operator + " " + value2.toString() + "?";
	}
	
	return problem_info;
}