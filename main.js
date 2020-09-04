
var rep =window.prompt("Nombre des étages"); 
if (rep <=25)
{	
	var nbreespace =rep-1;
	var nbreetoile=1;
	var espace="";
	var etoile="";

var res="";


for(m=0; m<rep; m++)
{ 


	for (var i =0; i<nbreespace; i++)
		 {
		 	espace=espace+" ";
		 }

    

	for (var y=0; y<nbreetoile; y++)
	{
		etoile=etoile+"#" ;
	}


res=espace+etoile;
console.log(res);
res="";
espace="";
etoile="";


nbreespace=nbreespace-1;
nbreetoile=nbreetoile+2;
   

}

document.write("<h1> ouvrir la console, une surprise vous attend  </h1>");
}