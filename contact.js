function formValidation()
{
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  var FirstName = document.getElementById("FirstName").value;
  var Email = document.getElementById("Email").value;
  var LastName = document.getElementById("LastName").value;
  var PhoneNumber = document.getElementById("PhoneNumber").value;



  if (FirstName == "" || Email == ""|| LastName == ""|| PhoneNumber == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

  else if(PhoneNumber.value.match(phoneno))
        {
      return true;
        }
      else
        {
        alert("message");
        return false;
        }





}
