function createInput(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2)
{
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    ele.setAttribute(attrname2,attrvalue2);
    return ele;
}

function createInputId(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3)
{
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    ele.setAttribute(attrname2,attrvalue2);
    ele.setAttribute(attrname3,attrvalue3);
    return ele;
}

//Table Creation
var tab=document.createElement("table");
tab.setAttribute("class","calculator");

//1st Row
var tr1=document.createElement("tr");

var td1=document.createElement("td");
td1.setAttribute("colspan","3");
var tdin1=createInput("input","class","display-box","type","text","id","result");
td1.append(tdin1);

var td2=document.createElement("td");
var tdin2=createInputId("input","type","button","value","C","id","clear","onclick","clearScreen()");
td2.append(tdin2);

tr1.append(td1,td2);

//2nd Row

var tr2=document.createElement("tr");

var td3=document.createElement("td");
var tdin3=createInput("input","type","button","value","7","onclick","display('7')");
td3.append(tdin3);
var td4=document.createElement("td");
var tdin4=createInput("input","type","button","value","8","onclick","display('8')");
td4.append(tdin4);
var td5=document.createElement("td");
var tdin5=createInput("input","type","button","value","9","onclick","display('9')");
td5.append(tdin5);
var td6=document.createElement("td");
var tdin6=createInputId("input","type","button","value","/","id","op4","onclick","display('/')");
td6.append(tdin6);

tr2.append(td3,td4,td5,td6);

//3rd Row

var tr3=document.createElement("tr");

var td7=document.createElement("td");
var tdin7=createInput("input","type","button","value","4","onclick","display('4')");
td7.append(tdin7);
var td8=document.createElement("td");
var tdin8=createInput("input","type","button","value","5","onclick","display('5')");
td8.append(tdin8);
var td9=document.createElement("td");
var tdin9=createInput("input","type","button","value","6","onclick","display('6')");
td9.append(tdin9);
var td10=document.createElement("td");
var tdin10=createInputId("input","type","button","value","-","id","op2","onclick","display('-')");
td10.append(tdin10);

tr3.append(td7,td8,td9,td10);

//4th Row

var tr4=document.createElement("tr");

var td11=document.createElement("td");
var tdin11=createInput("input","type","button","value","1","onclick","display('1')");
td11.append(tdin11);
var td12=document.createElement("td");
var tdin12=createInput("input","type","button","value","2","onclick","display('2')");
td12.append(tdin12);
var td13=document.createElement("td");
var tdin13=createInput("input","type","button","value","3","onclick","display('3')");
td13.append(tdin13);
var td14=document.createElement("td");
var tdin14=createInputId("input","type","button","value","+","id","op1","onclick","display('+')");
td14.append(tdin14);

tr4.append(td11,td12,td13,td14);

//5th Row

var tr5=document.createElement("tr");

var td15=document.createElement("td");
var tdin15=createInput("input","type","button","value",".","onclick","display('.')");
td15.append(tdin15);
var td16=document.createElement("td");
var tdin16=createInput("input","type","button","value","0","onclick","display('0')");
td16.append(tdin16);
//calculating mathematical expression
var td17=document.createElement("td");
var tdin17=createInputId("input","type","button","value","=","id","finalop","onclick","calculate()");
td17.append(tdin17);

var td18=document.createElement("td");
var tdin18=createInputId("input","type","button","value","*","id","op3","onclick","display('*')");
td18.append(tdin18);

tr5.append(td15,td16,td17,td18);

//appending all 5 rows to table
tab.append(tr1,tr2,tr3,tr4,tr5);

document.body.append(tab);

//functions used inside the table

//Function for clearing the display of the Calculator
function clearScreen()
{
    document.getElementById("result").value = "";
}
 
// Function display values
function display(value)
{
    document.getElementById("result").value += value;
}
 
//Function evaluates the expression and returns result
function calculate() 
{
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}