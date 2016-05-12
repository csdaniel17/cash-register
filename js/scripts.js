window.onload = function(){

//assign event
document.getElementById('testBtn').onclick = enter;

var total = 0;

//declare function
function enter(){
	//get input number
	var entry = document.getElementById('newEntry').value;
	entry = parseFloat(entry);

	//add entry to total
	total += entry;
	//total = total + entry

	//assign and output the users entry
	var entryOutput = currencyFormat(entry);
	var row = '<tr><td></td><td>' + entryOutput + '</td></tr>';
	document.getElementById('entries').innerHTML += row;

	//assign and output the total
	var totalOutput = currencyFormat(total);
	document.getElementById('total').innerHTML = totalOutput;

	//make new entry input blank after adding number
	document.getElementById('newEntry').value = '';
}

//function to format as currency
function currencyFormat(num){
	//make sure output is a number
	var output = parseFloat(num);
	//make output 2 decimal places
	output = output.toFixed(2);

	//add dollar sign
	output = '$' + output; //$00.00

	//send out output
	return output;
}


}