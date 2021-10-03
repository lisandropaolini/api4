class HuffmanNode
{
	constructor()
	{
		this.data = 0;
		this.c = '';
		this.left = this.right = null;
	}
}

var codigogenerado = [];
function printCode(root,s)
{
	if (root.left == null
		&& root.right == null
		&& (root.c).toLowerCase() != (root.c).toUpperCase()) {

		for (var i = caracter.length - 1; i >= 0; i--) {
			if (caracter[i] == root.c){
				codigogenerado[i] = s;
			}			
		}
		
		return;
	}
	printCode(root.left, s + "1");
	printCode(root.right, s + "0");
}

var caracter = [];
var frecuencia = [];

function printll1()
{
	var elemento = document.getElementById('entradatexto').value;
	// console.log(elemento);
	let str = elemento;
	str = str.toUpperCase();
	var xs = Array.from(str);
	// console.log(str);

	for (var i = xs.length - 1; i >= 0; i--) {
		const regex = /^[A-Z.\s_-]+$/gm;
		let m;

		while ((m = regex.exec(str)) !== null) {
		    if (m.index === regex.lastIndex) {
		        regex.lastIndex++;
		    }
		    
		    m.forEach((match, groupIndex) => {
		        
		    	if (xs[i] != ' '){

					var exito = 0;
					for (var j = caracter.length - 1; j >= 0; j--) {
						if (caracter[j] == xs[i]){

							frecuencia[j] = frecuencia[j] + 1; 
							exito = 1;
						}
					}

					if (caracter.length == 0){
						caracter[0] = xs[i];
						frecuencia[0]=1;
					}  else {
						if (exito == 0){
							caracter[caracter.length] = xs[i];
							frecuencia[frecuencia.length] = 1;
						}
					}

		    	}

		    });
		}

	}

	let n = frecuencia.length;
	let charArray = caracter;
	let charfreq = frecuencia;

	let q = [];

	for (let i = 0; i < n; i++) {

		let hn = new HuffmanNode();

		hn.c = charArray[i];
		hn.data = charfreq[i];

		hn.left = null;
		hn.right = null;

		q.push(hn);
	}

	let root = null;
	q.sort(function(a,b){return a.data-b.data;});

	while (q.length > 1) {

		let x = q[0];
		q.shift();

		let y = q[0];
		q.shift();

		let f = new HuffmanNode();

		f.data = x.data + y.data;
		f.c = '-';

		f.left = x;

		f.right = y;

		root = f;

		q.push(f);
		q.sort(function(a,b){return a.data-b.data;});
	}

	printCode(root, "");

	var table = document.createElement("table");

	var row = table.insertRow(-1);
	var firstNameCell = row.insertCell(-1);
	firstNameCell.appendChild(document.createTextNode("Caracter"));
	var lastNameCell = row.insertCell(-1);
	lastNameCell.appendChild(document.createTextNode("Frecuencia"));

	var bitinicialesCell = row.insertCell(-1);
	bitinicialesCell.appendChild(document.createTextNode("bit iniciales"));

	var codigogeneradoCell = row.insertCell(-1);
	codigogeneradoCell.appendChild(document.createTextNode("codigo generado"));

	var bitusadosCell = row.insertCell(-1);
	bitusadosCell.appendChild(document.createTextNode("bit usado"));

	for (var i = 0; i < caracter.length; i++) {
		var row = table.insertRow(-1);
		var firstNameCell = row.insertCell(-1);
		firstNameCell.appendChild(document.createTextNode(caracter[i]));
		var lastNameCell = row.insertCell(-1);
		lastNameCell.appendChild(document.createTextNode(frecuencia[i]));

		var bitinicialesCell = row.insertCell(-1);
		bitinicialesCell.appendChild(document.createTextNode(frecuencia[i] * 8));

		var codigogeneradoCell = row.insertCell(-1);
		codigogeneradoCell.appendChild(document.createTextNode(codigogenerado[i]));

		  var bitusadosCell = row.insertCell(-1);
		bitusadosCell.appendChild(document.createTextNode(codigogenerado[i].length * frecuencia[i]));

	}
	
	document.body.appendChild(table);

}
