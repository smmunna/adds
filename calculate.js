function myfun()
{
    var x,y,z;
    x= Number(document.getElementById("num1").value);
    y= Number(document.getElementById("num2").value);
    z=x+y;
    document.getElementById("demo").innerHTML= "="+ " "+ z;
}