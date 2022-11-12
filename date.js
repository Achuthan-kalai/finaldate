// var submit=document.getElementById("submit")
// var output=document.getElementById("output")
// function calculatedate(){
//     let d1 =document.getElementById("date1").value;
//     let d2 =document.getElementById("date2").value; 
//     const dateone=new Date(d1);
//     const datetwo=new Date(d2);
//     const time=Math.abs(datetwo-dateone);
//     const days=Math.ceil(time/(1000*60*60*24));
//     var h = Math.floor(days*24);
//     var m = Math.floor(h* 60);
//     var s = Math.floor(m* 60);
//     var ml=Math.floor(s*1000)
//     var y = Math.floor(datetwo.getFullYear()-dateone.getFullYear());
//     var month = Math.floor( days/ 7 );;



//     document.getElementById("output").innerHTML="<p> Numbers of Days"+days+"</p>"
//                                       +"<p> Numbers of Hours"+h+"</p>"
//                                       +"<p> Numbers of Minites"+m+"</p>"
//                                       +"<p> Numbers of Seconds"+s+"</p>"
//                                       +"<p> Numbers of Mile Seconds"+ml+"</p>"
//                                       +"<p> Numbers of Year"+y+"</p>"
//                                       +"<p> Numbers of Month"+month+"</p>"
//                                     //  +  "<p> Date Format"+h+"/"+m+"/"+s+"/"+ml+"</p>"

// }

// var submit = document.getElementById("submit")

var error=false;
function calculatedate() {
 

  let d1 = document.getElementById("date1").value;
  let d2 = document.getElementById("number").value;

  //validation funtion
  if (d1 == "") {
    document.getElementById("mydateErrId").innerHTML = "*required";
    var error = true;
} else {
    document.getElementById("mydateErrId").innerHTML = "";
}
if (d2 == "") {
    document.getElementById("mynumberErrId").innerHTML = "*required";
    var error = true;
} else {
    document.getElementById("mynumberErrId").innerHTML = "";
}if(error){
    document.getElementById('output').style.display='none'
    document.getElementById('totalresult').style.display='none'
}
else
{
    document.getElementById('output').style.display='block'
    document.getElementById('totalresult').style.display='block'
}//end
  const dateone = new Date(d1);

  var fundate=dateone.getTime();

  var total_secs = 24 * 60 * 60 * 1000;

   var total_mins =total_secs*Number(d2)

   //Adding the date field
   var tdate = fundate + total_mins;
   var finaldate=new Date(tdate)

   //substract date
   var subdate = fundate - total_mins;

   var subtotaldate=new Date(subdate)

   var output = document.getElementById("output");

   var totalresult=document.getElementById("totalresult");

  output.innerHTML="<p>Differece Adding Date ="+finaldate+"</p>"
  totalresult.innerHTML="<p>Differece Substract Date ="+subtotaldate+"</p>"





}