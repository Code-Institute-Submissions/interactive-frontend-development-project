# Selenium IDE Firefox Automation Testing

## This test goes through every functional aspect of the project through GUI based tesing 

### How to setup automation tests to playback the script flow

- Download the toolkit-automation-test.side file.

- Go to Firefox browser and search for Selenium IDE add on/extension

- Then click install or add extension

- Then you will see the Selenium IDE logo in your extensions section of the browser, click on that.

- You Choose open an existing project.

- Then a file explorer will pop up and choose where the file path is for the automation tests.

- Finally choose the play button which is named run test button on the top bar of options, which is the second to the left of the play buttons and that's it! 



#### **Automation Test Case for user actions.**

##### **Header Secttion expected actions** 

| Element Tested | Action | Expected outcome | Outcome |
| --- | --- | --- | --- |
| dropdown toolkit button | click dropdown | after clicking on the dropdown, content slides down | as expected |
| linkedin icon | clicks on linkedin icon | brings you to an external link | as expected |
| github icon | clicks on github icon | brings you to an external link | as expected |
| contact button | clicks on contact button | opens up a contact me modal | as expected |
| input name | type in your name | no warning messages come up | as expected |
| input email address | type in your email | no warning messages come up | as expected |
| input message area | type in your message | no warning messages come up | as expected |
| submit button | click send | message sent is displayed | as expected |


##### **Header Secttion unexpected actions** 

| Element Tested | Action | Expected outcome | Outcome |
| --- | --- | --- | --- |
| input name | leave this field blank | please fill this field | as expected |
| input email address | leave blank or input a invalid email format | please fill this field at least 10 characters & must included @ and .com | as expected |
| input message area | leave blank | please fill this field | as expected |


##### **Web Apps button dropdown Secttion expected actions** 

| Element Tested | Action | Expected outcome | Outcome |
| --- | --- | --- | --- |
| income tax calc button | click | content drops down & if the other content is open it is closed | as expected |
| Mpg calc button | click | content drops down & if the other content is open it is closed | as expected |

##### **Income Tax Calculator Secttion expected actions** 

| Element Tested | Action | Expected outcome | Outcome |
| --- | --- | --- | --- |
| salary input | input number only | no warnings appear | as expected |
| marital status dropdown | click and choose one | no warnings appear | as expected |
| calculate button | click | calculates the tax, net pay and weekly pay| as expected |

##### **Income Tax Calculator Secttion unexpected actions** 

| Element Tested | Action | Expected outcome | Outcome |
| --- | --- | --- | --- |
| salary input | nothing, letters, or letters and numbers | a message saying required, numbers only | as expected |
| marital status dropdown | dont't choose anything | required field | as expected |

##### **Mpg Calculator Secttion expected actions** 

| Element Tested | Action | Expected outcome | Outcome |
| --- | --- | --- | --- |
| distance input | input number only | no warnings appear | as expected |
| kms/miles dropdown | choose one | no warnings | as expected |
| fuel input | input number only | no warnings appear | as expected |
| uk/us rate of gallon | choose one | no warnings | as expected |
| calculate button | click | calculates the mpg | as expected |

##### **Mpg Calculator Secttion unexpected actions** 

| Element Tested | Action | Expected outcome | Outcome |
| --- | --- | --- | --- |
| distance input | input nothing, letters or number | warning appears numbers only required | as expected |
| kms/miles dropdown | choose none | warning required | as expected |
| fuel input | input nothing, letters or number | warnings appear numbers only required | as expected |
| uk/us rate of gallon | choose none | no warnings | as expected |

##### **Footer Secttion expected actions** 

| Element Tested | Action | Expected outcome | Outcome |
| --- | --- | --- | --- |
| Elements are the same as header | click on element(s) | element(s) behave the same as the above elements in header section | as expected |

Note: The email icon in the footer section is linked to the modal, all tested elements within the modal after clicking on the icon where the same as above in the header section.
