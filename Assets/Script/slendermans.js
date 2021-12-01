#pragma strict
var targetObj: Transform; //target da guardare
var soundRange: float = 15; // raggio in metri dei suoni
var disturbo : GameObject;
var Torcia : GameObject;
var mappa : GameObject;
var lucem : GameObject;
var mappaAttiva : boolean;


function Start () {
	disturbo = GameObject.Find("disturbi");
	disturbo.SetActive(false);
	Torcia = GameObject.Find("torciaelettrica");
	mappa = GameObject.Find("mappa");
	mappa.SetActive(false);
	mappaAttiva = false;
	lucem = GameObject.Find("lucem");
	lucem.SetActive(false);
}

function Update () {

	//Guardare sempre il target
	var point: Vector3 = targetObj.position;
	point.y = 0.0;
	transform.LookAt(point);
	transform.Rotate(0, 271, 0);
	
	//Azioni dentro e fuori il range dello slenderman
	var dist = Vector3.Distance(targetObj.transform.position, transform.position);
    if (dist <= soundRange && GetComponent.<AudioSource>().isPlaying == false){
    	disturbo.SetActive(true);
    	Torcia.SetActive(false);
    	lucem.SetActive(true);
      	GetComponent.<AudioSource>().Play();
    }
    else if (dist > soundRange && GetComponent.<AudioSource>().isPlaying == true){
          	disturbo.SetActive(false);
          	Torcia.SetActive(true);
    		lucem.SetActive(false);
          	GetComponent.<AudioSource>().Stop();
    }
    else if (dist<3){
        Application.LoadLevel("morte");
    }
    
    //Spawn Slenderman vicino posizione 1
    var pos1 = GameObject.Find("Posizione1");
    var distPos = Vector3.Distance(targetObj.transform.position, pos1.transform.position);
    if (distPos < 10){
    	transform.position = pos1.transform.position;
    }

    //Spawn Slenderman vicino posizione 2
    var pos2 = GameObject.Find("Posizione2");
    var distPos2 = Vector3.Distance(targetObj.transform.position, pos2.transform.position);
    if (distPos2 < 10){
    	transform.position = pos2.transform.position;
    }
    
    //Spawn Slenderman vicino posizione 3
    var pos3 = GameObject.Find("Posizione3");
    var distPos3 = Vector3.Distance(targetObj.transform.position, pos3.transform.position);
    if (distPos3 < 10){
    	transform.position = pos3.transform.position;
    }
    
    //Spawn Slenderman vicino posizione 4
    var pos4 = GameObject.Find("Posizione4");
    var distPos4 = Vector3.Distance(targetObj.transform.position, pos4.transform.position);
    if (distPos4 < 10){
    	transform.position = pos4.transform.position;
    }
    
    //Spawn Slenderman vicino posizione 5
    var pos5 = GameObject.Find("Posizione5");
    var distPos5 = Vector3.Distance(targetObj.transform.position, pos5.transform.position);
    if (distPos5 < 10){
    	transform.position = pos5.transform.position;
    }
    
    //Spawn Slenderman vicino posizione 6
    var pos6 = GameObject.Find("Posizione6");
    var distPos6 = Vector3.Distance(targetObj.transform.position, pos6.transform.position);
    if (distPos6 < 10){
    	transform.position = pos6.transform.position;
    }
    
    //Spawn Slenderman vicino posizione 7
    var pos7 = GameObject.Find("Posizione7");
    var distPos7 = Vector3.Distance(targetObj.transform.position, pos7.transform.position);
    if (distPos7 < 10){
    	transform.position = pos7.transform.position;
    }
    
    //Spawn Slenderman vicino posizione 8
    var pos8 = GameObject.Find("Posizione8");
    var distPos8 = Vector3.Distance(targetObj.transform.position, pos8.transform.position);
    if (distPos8 < 10){
    	transform.position = pos8.transform.position;
    }
    
    //Spawn Slenderman vicino posizione 9
    var pos9 = GameObject.Find("Posizione9");
    var distPos9 = Vector3.Distance(targetObj.transform.position, pos9.transform.position);
    if (distPos9 < 10){
    	transform.position = pos9.transform.position;
    }
    
    //Spawn Slenderman vicino posizione 10
    var pos10 = GameObject.Find("Posizione10");
    var distPos10 = Vector3.Distance(targetObj.transform.position, pos10.transform.position);
    if (distPos10 < 10){
    	transform.position = pos10.transform.position;
    }
    
    //Trucco Mappa
    if (Input.GetKeyDown(KeyCode.JoystickButton6) && mappaAttiva == false){
    	mappa.SetActive(true);
    	Torcia.SetActive(false);
    	lucem.SetActive(true);
    	mappaAttiva = true;
    }
    else if (Input.GetKeyDown(KeyCode.JoystickButton6) && mappaAttiva == true){
    	mappa.SetActive(false);
    	Torcia.SetActive(true);
    	lucem.SetActive(false);
    	mappaAttiva = false;
    }
}