#pragma strict
var PagineGUI : GUIText;
var contatorePagine : int=0;
var player : GameObject;
var pagina1 : GameObject;
var pagina2 : GameObject;
var pagina3 : GameObject;
var pagina4 : GameObject;
var pagina5 : GameObject;
var pagina6 : GameObject;
var pagina7 : GameObject;
var pagina8 : GameObject;
var preso : boolean = false;
var preso2 : boolean = false;
var preso3 : boolean = false;
var preso4 : boolean = false;
var preso5 : boolean = false;
var preso6 : boolean = false;
var preso7 : boolean = false;
var preso8 : boolean = false;

function Start () {
	pagina1 = GameObject.Find("pagina1");
	pagina2 = GameObject.Find("pagina2");
	pagina3 = GameObject.Find("pagina3");
	pagina4 = GameObject.Find("pagina4");
	pagina5 = GameObject.Find("pagina5");
	pagina6 = GameObject.Find("pagina6");
	pagina7 = GameObject.Find("pagina7");
	pagina8 = GameObject.Find("pagina8");
	player = GameObject.Find("First Person Controller");
	PagineGUI=GameObject.Find("GUI pagine").GetComponent.<GUIText>(); 
}

function Update () {

	//Pagina 1
	var distance = Vector3.Distance(pagina1.transform.position, player.transform.position);
	if(distance < 2 && Input.GetMouseButtonUp(0) && preso == false){
		contatorePagine+=1;
		PagineGUI.text="pagine trovate: "+contatorePagine+"/8";
		GetComponent.<AudioSource>().Play();
		pagina1.GetComponent.<Renderer>().enabled = false;
		preso = true;
	}
	
	//Pagina 2
	var distance2 = Vector3.Distance(pagina2.transform.position, player.transform.position);
	if(distance2 < 2 && Input.GetMouseButtonUp(0) && preso2 == false){
		contatorePagine+=1;
		PagineGUI.text="pagine trovate: "+contatorePagine+"/8";
		GetComponent.<AudioSource>().Play();
		pagina2.GetComponent.<Renderer>().enabled = false;
		preso2 = true;
	}
	
	//Pagina 3
	var distance3 = Vector3.Distance(pagina3.transform.position, player.transform.position);
	if(distance3 < 2 && Input.GetMouseButtonUp(0) && preso3 == false){
		contatorePagine+=1;
		PagineGUI.text="pagine trovate: "+contatorePagine+"/8";
		GetComponent.<AudioSource>().Play();
		pagina3.GetComponent.<Renderer>().enabled = false;
		preso3 = true;
	}
	
		//Pagina 4
	var distance4 = Vector3.Distance(pagina4.transform.position, player.transform.position);
	if(distance4 < 2 && Input.GetMouseButtonUp(0) && preso4 == false){
		contatorePagine+=1;
		PagineGUI.text="pagine trovate: "+contatorePagine+"/8";
		GetComponent.<AudioSource>().Play();
		pagina4.GetComponent.<Renderer>().enabled = false;
		preso4 = true;
	}
	
		//Pagina 5
	var distance5 = Vector3.Distance(pagina5.transform.position, player.transform.position);
	if(distance5 < 2 && Input.GetMouseButtonUp(0) && preso5 == false){
		contatorePagine+=1;
		PagineGUI.text="pagine trovate: "+contatorePagine+"/8";
		GetComponent.<AudioSource>().Play();
		pagina5.GetComponent.<Renderer>().enabled = false;
		preso5 = true;
	}
	
		//Pagina 6
	var distance6 = Vector3.Distance(pagina6.transform.position, player.transform.position);
	if(distance6 < 2 && Input.GetMouseButtonUp(0) && preso6 == false){
		contatorePagine+=1;
		PagineGUI.text="pagine trovate: "+contatorePagine+"/8";
		GetComponent.<AudioSource>().Play();
		pagina6.GetComponent.<Renderer>().enabled = false;
		preso6 = true;
	}
	
		//Pagina 7
	var distance7 = Vector3.Distance(pagina7.transform.position, player.transform.position);
	if(distance7 < 2 && Input.GetMouseButtonUp(0) && preso7 == false){
		contatorePagine+=1;
		PagineGUI.text="pagine trovate: "+contatorePagine+"/8";
		GetComponent.<AudioSource>().Play();
		pagina7.GetComponent.<Renderer>().enabled = false;
		preso7 = true;
	}
	
		//Pagina 8
	var distance8 = Vector3.Distance(pagina8.transform.position, player.transform.position);
	if(distance8 < 2 && Input.GetMouseButtonUp(0) && preso8 == false){
		contatorePagine+=1;
		PagineGUI.text="pagine trovate: "+contatorePagine+"/8";
		GetComponent.<AudioSource>().Play();
		pagina8.GetComponent.<Renderer>().enabled = false;
		preso8 = true;
	}
	
	//Vittoria
	if (contatorePagine == 8){
		Application.LoadLevel("vittoria");
	}
}