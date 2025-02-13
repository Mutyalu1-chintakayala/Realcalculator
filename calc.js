let display=document.getElementById('display');
function appendToDisplay(input)
{
 display.value+=input;
}
/*function calculate()
{
 display.value=eval(display.value);
 it causes to error we can use the below function using try and catch block
}
*/
function calculate()
{
    try
    {
        display.value=eval(display.value);
    }
    catch(error)
    {
        display.value="error";
    }
}
function clearDisplay()
{
     display.value= "";
}
