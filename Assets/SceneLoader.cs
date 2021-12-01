using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;


public class SceneLoader : MonoBehaviour
{

	public Button yourButton;
	public GameObject LoadingScreen;
	public string levelToLoad;

	void Start()
	{
		UnityEngine.UI.Button btn = yourButton.GetComponent<Button>();
		btn.onClick.AddListener(TaskOnClick);
		LoadingScreen.SetActive(false);
	}

	void TaskOnClick()
	{
		Debug.Log("You have clicked the button!");
		LoadingScreen.SetActive(true);
		SceneManager.LoadScene(levelToLoad);
	}
}