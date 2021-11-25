#pragma strict

function Start () {
	Cursor.visible = true;
}

function Update () {
	if (Input.GetKeyDown(KeyCode.X)){
         	Application.LoadLevel("menu");
         } 
}