var buttons=document.getElementsByClassName('button');
var display=document.getElementsByClassName('display')[0];
var operand1="";
var operand2=null;
var operator=null;

for (var i = 0; i <buttons.length; i++) {
	buttons[i].addEventListener('click',function(){

		var value=this.getAttribute('data-value');
		if(value=='+'){
			operator='+';
			operand1=parseFloat(display.innerText);
			display.innerText="";
			console.log(operand1);
		}
		else if(value=='=')
		{
			operand2=parseFloat(display.innerText);
			display.innerText=eval(operand1+ operator +operand2)
		}
		else if(value=='-'){
			operator='-';
			operand1=parseFloat(display.innerText);
			display.innerText="";
			console.log(operand1);
		}
		else if(value=='*'){
			operator='*';
			operand1=parseFloat(display.innerText);
			display.innerText="";
			console.log(operand1);
		}
		else if(value=='/'){
			operator='/';
			operand1=parseFloat(display.innerText);
			display.innerText="";
			console.log(operand1);
		}
		else if(value=='+/-'){
			if (parseFloat(display.innerText)>0){
				display.innerText='-'+display.innerText;
			}
			else{
				display.innerText=parseFloat(display.innerText)*-1;
			}
		}
		else if(value=='AC')
		{
			display.innerText="";
		}
		else{
			display.innerText+=value;
		}
	});
}