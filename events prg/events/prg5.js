<xmlversion="1.0" encoding="utf-8"?>
 <!DOCTYPE html PUBLIC "-//w3c//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Program 8a</title>
<script type="text/javascript">
function vowel() {
    var n = prompt("Enter a string:", "");
    var flag = 0;
    for (var i = 0; i < n.length && flag != 1; i++) {
        switch (n.charAt(i).toLowerCase()) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                alert("The leftmost vowel is present at position: " + (i + 1));
                flag = 1;
                break;
            default:
                break;
        }
    }
    if (!flag) {
        alert("No vowels found");
    }
}
</script>
</head>
<body onload="vowel()">
</body>
</html>

