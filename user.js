var error = false;
var noerror= true;
function calculatedate() {
    let select = document.getElementById("select").value;
    let day = document.getElementById("day").value;
    let Hours = document.getElementById("hours").value;
    let Minutes = document.getElementById("Minutes").value;
    let Second = document.getElementById("Second").value;
    let Mile_Second = document.getElementById("Mili_Second").value;

    if (select == "") {
        document.getElementById("myselectErrId").innerHTML = "*required";
        var error = true;
    } else {
        document.getElementById("myselectErrId").innerHTML = "";
    }



    if (day > 31 || day == "") {
        if (day > 31) {
            document.getElementById("mynumberErrId").innerHTML = "Pic Maximum Number 31";
            var error = true;
        }
        else {
            document.getElementById("mynumberErrId").innerHTML = "*required";
            var error = true;
        }

    }
    else {
        document.getElementById("mynumberErrId").innerHTML = "";
    }


    if (Hours > 24 || Hours == "") {
        if (Hours > 24) {
            document.getElementById("myhoursErrId").innerHTML = "Pic Maximum Hours 24";
            var error = true;
        }
        else {
            document.getElementById("myhoursErrId").innerHTML = "*required";
            var error = true;
        }

    }
    else {
        document.getElementById("myhoursErrId").innerHTML = "";
    }


    if (Minutes > 60 || Minutes == "") {
        if (Minutes > 60) {
            document.getElementById("myminutesErrId").innerHTML = "Pic Maximum Minutes 60";
            var error = true;
        }
        else {
            document.getElementById("myminutesErrId").innerHTML = "*required";
            var error = true;
        }

    }
    else {
        document.getElementById("myminutesErrId").innerHTML = "";
    }


    if (Second > 60 || Second == "") {
        if (Second > 60) {
            document.getElementById("mySecondErrId").innerHTML = "Pic Maximum Second 60";
            var error = true;
        }
        else {
            document.getElementById("mySecondErrId").innerHTML = "*required";
            var error = true;
        }

    }
    else {
        document.getElementById("mySecondErrId").innerHTML = "";
    }


    if (Mile_Second > 1000 || Mile_Second == "") {
        if (Mile_Second > 100) {
            document.getElementById("myml_scecondErrId").innerHTML = "Pic Maximum Mil-Second 1000";
            var error = true;
        }
        else {
            document.getElementById("myml_scecondErrId").innerHTML = "*required";
            var error = true;
        }

    }
    else {
        document.getElementById("myml_scecondErrId").innerHTML = "";
    }


    if (error) {
       return
    }
    else{
        const calcFormat = select.split("-");
        // console.log(new Date(calcFormat[0],(calcFormat[1]-1),day,Hours,Minutes,Second,Mile_Second));
        const Tdate = new Date(calcFormat[0], (calcFormat[1] - 1), day, Hours, Minutes, Second, Mile_Second);
        document.getElementById('output').innerHTML = "<p>Number of total Days" + Tdate + "</p>"
    }

}

















