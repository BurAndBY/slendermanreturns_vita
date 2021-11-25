#pragma strict
var PauseGUI : GUIText;
var PagineGUI : GUIText;
var paused : boolean = false;
var luce : GameObject;
var luceAttiva : boolean;

function Start () {
	PauseGUI=GameObject.Find("pausaGUI").GetComponent.<GUIText>();
	PagineGUI=GameObject.Find("GUI pagine").GetComponent.<GUIText>();
	PauseGUI.enabled = false;
	PagineGUI.enabled = false;
	Cursor.visible = false;
	luce = GameObject.Find("luce");
	luce.SetActive(false);
	luceAttiva = false;
}

function Update () {
 		if (Input.GetKeyDown(KeyCode.JoystickButton6) && paused == false)
        {
                paused = true;
                Time.timeScale = 0;
                PauseGUI.enabled = true;
                PagineGUI.enabled = true;
                Cursor.visible = true;
        }
        else if (Input.GetKeyDown(KeyCode.JoystickButton6) && paused == true)
        {
                paused = false;
                Time.timeScale = 1;
                PauseGUI.enabled = false;
                PagineGUI.enabled = false;
                Cursor.visible = false;
        }
        
		else if (Input.GetKeyDown(KeyCode.JoystickButton0)){
			paused = false;
            Time.timeScale = 1;
            PauseGUI.enabled = false;
            PagineGUI.enabled = false;
            Cursor.visible = true;
         	Application.LoadLevel("menu");
     	} 
    
    
    //Trucco luce
    if (Input.GetKeyDown(KeyCode.JoystickButton2) && luceAttiva == false){
    	luce.SetActive(true);
    	luceAttiva = true;
    }

    else if (Input.GetKeyDown(KeyCode.JoystickButton2) && luceAttiva == true){
    	luce.SetActive(false);
    	luceAttiva = false;
    }
}