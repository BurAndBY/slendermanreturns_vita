using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
public class DeathCSRewrite : MonoBehaviour
{
	public GameObject LoadingScreen;
	// Use this for initialization
	void Start()
	{

	}

	// Update is called once per frame
	void Update()
	{
		if (Input.GetKeyDown(KeyCode.JoystickButton0))
		{
			LoadingScreen.SetActive(true);
			SceneManager.LoadScene("livello 1");
		}
		else if (Input.GetKeyDown(KeyCode.JoystickButton7))
		{
			LoadingScreen.SetActive(true);
			SceneManager.LoadScene("menu");
		}
		if (Input.GetKeyDown(KeyCode.X))
		{
			LoadingScreen.SetActive(true);
			SceneManager.LoadScene("livello 1");
		}
		else if (Input.GetKeyDown(KeyCode.V))
		{
			LoadingScreen.SetActive(true);
			SceneManager.LoadScene("menu");
		}
	}
}