<xmlversion="1.0" encoding="utf-8"?>
 <!DOCTYPE html PUBLIC "-//w3c//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Program 3b</title>
<script type="text/javascript">
function rev() {
    var n = prompt("Enter a number:", "");
    
    // Check if the input is a valid number
    if (isNaN(n) || n === "") {
        alert("Please enter a valid number.");
        return;
    }

    var str = "";
    for (var i = n.length - 1; i >= 0; i--) {
        str += n[i];  // Accumulate the reversed digits as a string
    }
    
    alert("The reversed number is: " + str);
}
</script>
</head>
<body onload="rev()">
</body>
</html>
