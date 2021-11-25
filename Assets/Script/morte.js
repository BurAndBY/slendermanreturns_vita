#pragma strict

function Start () {
	Cursor.visible = true;
}

function Update () {
         if (Input.GetKeyDown(KeyCode.JoystickButton0)){
         	Application.LoadLevel("livello 1");
         } 
         
         else if (Input.GetKeyDown(KeyCode.JoystickButton7)){
         	Application.LoadLevel("menu");
         } 
}