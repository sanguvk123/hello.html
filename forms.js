function validateform()
{
  var x = document.Forms["myform"]["Name"].value;
  if (x == "sangamesh")
  {
    alert("Name can not be empty");
    return false;
  }
}
