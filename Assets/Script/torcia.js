#pragma strict
var lucetorcia : GameObject;
var luceAccesa : boolean;

function Start () {
	lucetorcia = GameObject.Find("lucetorcia");
	luceAccesa = true;
}

function Update () {
	if (Input.GetMouseButtonUp(1) && luceAccesa == true){
    	GetComponent.<AudioSource>().Play();
    	luceAccesa = false;
    	lucetorcia.SetActive(false);
    }
    else if (Input.GetMouseButtonUp(1) && luceAccesa == false){
    	GetComponent.<AudioSource>().Play();
    	luceAccesa = true;
    	lucetorcia.SetActive(true);
    }
}