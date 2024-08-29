let currenInput = '';
let result = '';

function appendToDisplay(value)
{
    currenInput += value;
    document.getElementById('display').value = currenInput;
}
function clearDisplay()
{
    currenInput = '';
    document.getElementById('display').value = ''

}
function calculateResult()
{
    try{
        result = eval(currenInput);
        document.getElementById('display').value = result
    }
    catch (error)
    {
        document.getElementById('display').value = 'É IMPOSSIVEL EXECUTAR ESSE CALCULO PODRE!'
    }
}