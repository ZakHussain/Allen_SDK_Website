# Allen SDK Website

The Allen SDK Website serves as a tool for easily navigating to differentt resources we have available for open-data community.

## Get Started With The Project
To get started, you will use the following:
* **Text Editor**: Sublime Text works as a powerful, lightweight text-editor. 
* **Django Package**: Django is the web framework this website is built on.
* **pip**: pip is a tool for installing python packages.
* **Python Virtual Environment**: The virtual environment will allow you to have an isolated Python environment. You can either use
                                  *Conda* or *Virtualenv* to set up your virtual environment.

Let's get started with the set up:

1. Once you have cloned this project, install pip.

2. Install virtualenv via pip.
``` 
$ pip install virutalenv
```

3. Enter the Allen_SDK_Website directory and create a virtual environment name AllenSDK_venv.
```
$ cd Allen_SDK_Weksite
$ virtualenv AllenSDK_venv
```

4. After you've created and activated this virtual envornment, enter the following command:
```
$ pip install Django
```

5. Enter the sdksite directory and create a simple server to run the program. 
```
$ cd sdksite
$ python manage.py runserver 
````
6. In you browser of choice, enter in the url bar *localhost: 8000*

7. Viola! it should run. If not, i'm so sorry.
