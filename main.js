menuListArray = ["Pizza Vegetariana",
                 " Pizza de presunto e catupiri ",
                 " margarita " ,         
                 " napolitana " ];
function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0; i<menuListArray.legth;i++)
htmldata=htmldata+menuListArray[i] + 'br'
}
document.getElementById("displaymenu").innerHTML = htmldata;

function addItem(){
var htmldata;
var imgtags='<img id="img1" src="images/pizzaImg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0; i<menuListArray.legth;i++)
htmldata=htmldata+imgtags+menuListArray[i]+ 'br';
}

function addTop(){
//Completar o código
var item=document.getElementById("additem").value;
menuListArray.push(item);
addItem();
}
