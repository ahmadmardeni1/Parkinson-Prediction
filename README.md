![](https://github.com/ahmadmardeni1/Parkinson-Prediction/blob/main/Banner.png)

## What is Parkinson Disease?
Parkinson's disease is a brain disorder that leads to shaking, stiffness, and difficulty with walking, balance, and coordination. Parkinson's symptoms usually begin gradually and get worse over time. As the disease progresses, people may have difficulty walking and talking.

## What was the approach?
Considering the COVID scenario we wanted to make the diagnosis simple where to detect preesence of Parkinson disease, the person is supposed to upload two images where he or she had drawn a wave and a spiral based on which the detection occurs.
These are some of the example images on which model is being trained and tested.

### Spiral-Healthy
![image](https://user-images.githubusercontent.com/49975886/116790798-e2832900-aad3-11eb-97eb-1ab8e877a148.png)

### Spiral-Parkinson Affected
![image](https://user-images.githubusercontent.com/49975886/116790830-15c5b800-aad4-11eb-83d7-2aa801898847.png)

### Waves-Healthy
![image](https://user-images.githubusercontent.com/49975886/116790882-650be880-aad4-11eb-82e0-07ed503065ed.png)

### Waves-Parkinson Affected
![image](https://user-images.githubusercontent.com/49975886/116790855-473e8380-aad4-11eb-880b-25f93bd51bc2.png)

## Tree structure

![image](https://user-images.githubusercontent.com/49975886/116790610-c763e980-aad2-11eb-8bae-25dd7896981d.png)

## CNN model
For the detection we had used CNN architecture which can be summarised as: 

![image](https://user-images.githubusercontent.com/49975886/116790968-d055ba80-aad4-11eb-8bcd-d8719553c2c7.png)

![image](https://user-images.githubusercontent.com/49975886/116791252-9be2fe00-aad6-11eb-91a5-302abab913ac.png)

## Accuracy
The following was the accuracy vs epoch graph obtained for spiral, and wave respectively:

![image](https://user-images.githubusercontent.com/49975886/116790933-a1d7df80-aad4-11eb-9ad4-64d5e8977357.png) ![image](https://user-images.githubusercontent.com/49975886/116790944-b74d0980-aad4-11eb-8da1-09858ee4771d.png)

## Why do you need to use this application?
Considering the pandemic situation it is necessary to mantain social distancing and also avoid unnecessary visits to the hospital. The perk of this application is you ask the person to draw just two images where one is spiral and other is a wave and based on this the output is combines from their respective neural network. This is easy to use and access. 
