//=========================
//	Hashes
//=========================

//Note: These hashes are pregenerated Base64 representations of 64-bit SHA-3 hashes for login credentials.

//REMOVE THIS FROM PRODUCTION CODE!
// Login credentials:
//	Username: teacher
//	Password: t34(HerP@ss

//A hashed username for the teacher.
var teacher_name_hash = "dbb678f282a00f14";
//A hashed password for the teacher.
var teacher_pass_hash = "95effa4d722d0481";

//The number of bits to user for the hash.
var hash_length = 64;

//=========================
//	Strings
//=========================

//String for no username.
var fail_no_user_string = "You must provide a username.";
//String for no password.
var fail_no_pass_string = "You must provide a password.";
//String for incorrect credentials.
var fail_incorrect_string = "Username or password incorrect.";

//=========================
//	Functions
//=========================

// Purpose: Evaluate login credentials.
// Params:
//	- username: An element containing a username in value.
//	- password: An element containing a password in value.
//
function loginEval(username,pass)
{
	
	// Check if we have no valid input for username, then if username hash matches.
	if(!username || username == "")
	{
		alert(fail_no_user_string);
		return false;
	}
	else if(!(CryptoJS.SHA3(username, { outputLength: hash_length } ).toString(CryptoJS.enc.Base64) == teacher_name_hash))
	{
		alert(fail_incorrect_string);
		return false;
	}
	
	// Check if we have no valid input for password, then if password hash matches.
	if(!pass || pass == "")
	{
		alert(fail_no_pass_string);
		return false;
	}
	else if(!(CryptoJS.SHA3(pass, { outputLength: hash_length } ).toString(CryptoJS.enc.Base64) == teacher_pass_hash))
	{
		alert(fail_incorrect_string);
		return false;
	}
	
	// If we pass through both user and pass matched expected hash values.
	return true;
	
}