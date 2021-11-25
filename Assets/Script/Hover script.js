var levelToLoad : String;
var soundhover : AudioClip;
var beep : AudioClip;
var QuitButton : boolean = false;
 
function OnMouseEnter(){
    GetComponent.<AudioSource>().PlayOneShot(soundhover);
}
 
function OnMouseUp(){
    GetComponent.<AudioSource>().PlayOneShot(beep);
    yield new WaitForSeconds(0.35);
    if(QuitButton){
       Application.Quit();
    }
    else{
       Application.LoadLevel(levelToLoad);
    }
}
 
@script RequireComponent(AudioSource)