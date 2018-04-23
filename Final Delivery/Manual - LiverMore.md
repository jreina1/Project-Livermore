# LiverMore Manual

**Team Name:** Liver More

**Project Name:** Project Liver More

**Github link:** https://github.gatech.edu/gt-hit-spring2018/Project-Livermore

**Team Members:**
- Jennifer Reina
- Rafay Syed
- Marcos Jorge
- Cheryl Lockett
- Andrew Lam

**Instructions: Run App over VPN to HDAP**
Launch your desired web browser. 

If running from the Georgia tech VPN, type the following into the address bar and press Enter/Return on the keyboard:
```
https://cs6440-s18-prj14.apps.hdap.gatech.edu
```

**Instructions: Run App Locally**
If running locally (instructions assume docker is installed on your system), 

1. Run
```
docker-compose up
```
2. Wait about 3 minutes and type the following address in the address bar and press Enter/Return on the keyboard:
```
localhost:5000
```


>Depending on the connection speed and web browser, you will be presented with a loading message. Please be patient (no pun intended) while the application retrieves all the Data Base information and renders the 3D simulation. The patient information and disease information may not load at the same time as the 3D Liver. This process may take a few minutes.


### Patient Links Section:

Once the page has been completely loaded (about 2-3 minutes), you should see a list of patients on the column on your left hand side. By clicking on any of these patients you will be able to take a look at their respective patient information, Disease Information, and 3D simulation of the Liver. Under all the patient links, we have added a Help link that provides instructions and information about the application. Once the help link is clicked, you may scroll up and down to read the information as desired. To Exit the help screen, just click anywhere on the screen and the information should disappear, taking you back to the main screen.
We have added a Georgia Tech image on the top left hand side of the screen, clicking this image will take you to the front page of www.gatech.edu. 












### 3D Simulation Section:

In the middle section of the application, you will see the 3D Liver simulation of the patient you have selected along with a slider on the bottom left hand side of the simulation screen. By clicking and dragging the slider to the right hand side, you will be able to see the disease stages for that patient’s liver and the 3D image should change. Dragging back to the left hand side will return to the initial stage (healthy) of the Liver Disease. The view position of the 3D image is adjustable so when you click and drag the liver, you will see the liver rotate and move accordingly. By using the wheel on your mouse, you will be able to zoom in and zoom out of the 3D simulation. Just make sure the clicker is in the simulation screen for zooming.




### Disease Information Section:

On the right hand side of the application, you will see the Disease Information and Patient information. This section includes information such as Symptoms, Diagnosis, preventions, resources etc… You may scroll up or down to view all the information available. By clicking the “Disease Information” Header, you will be able to minimize the Information shown. Every Patient has different information, so when a patient is selected, this section will be populated with the information pertaining to that patient.  Additionally, when the slider is moved, this section will display the "Additional Information" for the disease shown in the disease progression.
