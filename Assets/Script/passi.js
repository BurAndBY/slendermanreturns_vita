#pragma strict

function Start () {

}

function Update () {
	if (Input.GetButtonDown("Vertical"))
		GetComponent.<AudioSource>().Play();
	else if (Input.GetButtonUp("Vertical"))
		GetComponent.<AudioSource>().Stop();
}