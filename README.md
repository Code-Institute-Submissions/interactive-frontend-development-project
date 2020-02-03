# **Edmund O Callaghan | Interactive Front-End Development Toolkit Project**

This is my toolkit web app that serves to help the everday user. 
It has a fully functioning Irish income tax calculator that calculates how much tax you've been charged or will be charged, it calculates your net pay for the year or what could be your net pay for the year. It also give you a breakdown on what your annual net income is per week. 

The toolkit also has a fuel consumption to distance calculator or most commonly refered to as a miles per gallon calculator. With this calculator you can input your miles or kilometers traveled, how much fuel you used and you can convert your mpg to the UK rate at 4.25 liters per gallon or the US rate at 3.75 liters per gallon.

The web app also contains forms of contacting me in my footer, via email, github and linkedin, and via the dropdown navbar modal conact me section.
 
## Demo

A live demo can be viewed [here](https://novicetheaf.github.io/interactive-frontend-development-project/ )

![Desktop Demo](https://raw.githubusercontent.com/Novicetheaf/interactive-frontend-development-project/master/assets/images/preview.PNG "Desktop Demo")

## User Experience

### User stories
As an end-user I want to access the tools on this web app with ease, I want quick calculations and simple data that doesn't over complicate the situation, as in what was the tax you paid for the year, and what was the mpg I achieved.

Any employers who visit my site will wannt to see my level of design and consistancy, along with the ability to write functioning code for interactivity and calculations and passing values from one method to another.

Any recruiters who visit my web app will want to see if my projects meet the requirments of any position they are recruiting for.

### Strategy
In this project my main goal was to create a consistancy in design flow, and colour schemes. The web app is designed mobile first, in regards to content layout and css media queries, as most users use a mobile phone these days, but the site does respond nicely to desktop and laptop screens.

The main goal in this project was the applications themselves and they're to showcase my skills with javascript, jquery, css, bootstrap, and html.

### Scope
The scope of the project was to provide an application that the end-user could use in there day to day use and would respond primarily on a mobile device, and showcase my javascript and jquery skills to date along with html and css.

### Structure
The key aspects of the nvabar was to have the ability to dropdown the navbar and create an positive emotional response to the user, and give them links to my linkedin and github. It also allows them to fill out a contact me form and using Emailjs to send it to my email address. 

Also in the footer there is the same links, bar the conact me button, but this is replaced with an email icon which open up the modal again, and allows the user to contact me via navbar or footer. This provides constant access to any social links and forms of emailing me.

### Skeleton

[Mobile Design wireframe - Income Tax Calculator](https://github.com/Novicetheaf/interactive-frontend-development-project/blob/master/wireframes/income-tax-calc-wireframe-mobile.pdf)

[Mobile Design wireframe - Miles Per Gallon Calculator](https://github.com/Novicetheaf/interactive-frontend-development-project/blob/master/wireframes/mpg-calc-wireframe-mobile.pdf)

[Desktop Design wireframe](https://github.com/Novicetheaf/interactive-frontend-development-project/blob/master/wireframes/desktop-wireframe-design.pdf)

[Modal Design wireframe](https://github.com/Novicetheaf/interactive-frontend-development-project/blob/master/wireframes/modal-wireframe.pdf)

### Surface

#### Red shades: 
`rgb(102, 10, 10);`

`rgba(138, 58, 58);`

`rgb(199, 60, 60);`

`rgb(196, 23, 23);`

#### Cream/White shades: 
`rgb(199, 235, 224);`

`rgb(255, 245, 245);`

`rgb(255, 255, 255);`

#### Grey scaled shades are also included within the application.

The colour scheme I was going for is this web application was to match up with a impactful contrast, yet pleasing to the eye, and above all evoking a positive response from the end-user.   

## Technologies

1. HTML 5
2. CSS
3. Bootstrap (4.4.1)
4. JavaScript
5. JQuery (3.4.1)
6. Emailjs (2.3.2)

## Features
 
### Existing Features

- The core features of my site is to make life easier for the end-user, by solving calculations for them and giving them specifically simplified results, that make it quick and easy to use. 

- For my navigation bar I added a dropdown button with a jquery toggle arrow. This slides down content and give te user more options only if they want them, it keeps the flow simple, and evoking positive emotional response with clean consistancy in flow and design.

- My web apps I used an accordion bootstrap setup, and implemented jquery to fixed on application to be open at once, so that the user doesn't have to scroll down very far to navigate the site.

- For the income tax calculator section I used used simple input and dropdown options along with a calculate tax button, when clicked would perform the calculations to output taxed amount for the year, net pay for the year, and a weekly pay output.

- The other web app miles per gallon calculator also keeps with the same format of styling. It uses two input box's miles/kilometers and your fuel used in litres. 
It also has a required dropdown option as to wether your distance is in miles or kilometers, this then changes the output text below accordingly.
It also features radio buttons to change the gallon rate to US(3.75L) or UK(4.25L). It also follows the same styled calculate button which takes your inputs and calculates them below in MPG(miles per gallon).

### Features Left to Implement

If I had more time I would like to use Chart.js to create a pie chart based on the output values to give a nice visual comparison of the what you pay on tax's vs what you received for the year etc.

I still have two applications left to add to this toolkit, the first one would be a stopwatch. The second application would be a calorie counter.  

## Testing 
Testing ID: test-interactive-frontend-project-eoc
### Tested by: 
Edmund O Callaghan

### Tested devices: 
- DELL Desktop, 
- AMD Desktop, 
- DELL Latitude E5470 Laptop, 
- Fujitsu Q702 Ultra book,
- ZTE Axon 7 Mobile,
- Iphone X, 
- Iphone 6, 
- Samsung S9.

### Tested Resolutions: 
320px x 640px to 4K resolution: 

- Note Axon 7 mini:

no issues found, bar in mobile view the text output was too large to fit in one line, depending on the output size for income tax calculator, this issue was resolved by changing the set text size lower on that particular output section, and setting it to go back to normal when the screen size get to a min of 400px, this was achieved using media queries to respond to larger screens, thus remaining mobile first.

### Tested Browsers:
FireFox, Google Chrome, Edge. 

- Note: on edge browser getting footer links blue, as oppsed to red, and contact me is black as opposed to red. 

### Code validation Testing:
[CSS Validation](https://github.com/novicetheaf/interactive-frontend-development-project/blob/master/assets/code-validation/css-validation.PNG)

[HTML Validation](https://github.com/novicetheaf/interactive-frontend-development-project/blob/master/assets/code-validation/html-validation.PNG)

[Global JavaScript Validation](https://github.com/novicetheaf/interactive-frontend-development-project/blob/master/assets/code-validation/global-code-validation.PNG)

[Income Tax Calc JavaScript Validation](https://github.com/novicetheaf/interactive-frontend-development-project/blob/master/assets/code-validation/income-tax-code-validation.PNG)

[MPG Calc JavaScript Validation](https://github.com/novicetheaf/interactive-frontend-development-project/blob/master/assets/code-validation/mpg-calc-code-validation.PNG)

[Send Mail JavaScript Validation](https://github.com/novicetheaf/interactive-frontend-development-project/blob/master/assets/code-validation/send-mail-code-validation.PNG)

### User stories
For my user stories testing, I had to put myself in the shoes of the user, anyone looking for a quick way to calculate income or fuel consumption and employers/recruiters. The user will know straight away that this site is a toolkit, it solves and simplifies. 

The everday user will want to gain access to either of the two applications quickly and will be looking for a concise response in regards to their input(s). They want to be given clean and clear directions as to where they should navigate to in order to achieve their intentions, whether that be sending an email, or using the application themselves.

As a recruiter or employer I want to find out with quick succession, whether this candidate has the required skills as an interactive frontend designer/developer for the job spec. When you arrive at the site you are greeted with a professional, concise and impactful website, this showcases good design and clear intentions as to what it is. 

With regards to the above mentioned user stories & the usability of the web app, the outcome for this test was successful, It met all expectations of ease of use. 

Note: For the accordion this uses bootstrap by standard as part of the template, however, with this in mind you have the option to close both applications down, and for design reasons, and lack of content, my idea was to keep one card section open at all time, so for this I had to write custom jquery to keep one application open.
Ontop of this I also added in jquery to keep only one section open at once, so that the user does not have to scroll down if they open two at the same time it will close the other one.


### Responsive Flow Testing:

#### **Expected outcome for Desktop(s):**  
On desktop devices the background image appears and covers all background space correctly. The navigation section takes up the full with of the screen, and also becomes semi transparent in order to show the background. The main content section remains fixed to 768px, the footer section remains within these confinements also.

- Site Remains responsive throughout all devices that were tested.
#### Actual outcome:
- On desktop screens the site responds the same as above.

#### **Expected outcome for Laptop(s):** 
Elements behave the same as on desktop, other then the background image that become more streched, yet not losing any pixel quailty of the image.
- The Site Remains responsive throughout all devices that were tested. 
#### Actual outcome:
On Laptop screens the site responds the same as above.

#### **Expected outcome for Tablet(s):**  
Elements behave the same as on latop and desktop, bar the background image cannot be seen from 768px down, other then behind the navigation section as it remains transparent for this resolution also.

- Site Remains responsive throughout all devices that were tested.

#### Actual outcome:
On Tablet screens the site responds the same as above.

#### **Expected outcome for Mobile(s):**  
the background image is no longer visible as the media query that set it in motion only comes into effect at a min 600px. The linkedin and github social icons in the navigation bar get push to the left of the section. The content adjusts accordingly with the screen size of the mobile devices tested, bar the not made above in regards to the output text for the income tax calculator, which was rectified. Please see resolution section of testing for more information.

Other then the above issue the site remains responsive throughout all devices that were tested. 
#### Actual outcome:
On Mobile screens the site responds the same as above.


### Automation Testing: 

- For this section I choose to use Selenium GUI based automation tests.

-  I choose automation testing to test the functionality of the website. Please see the seperate section on automation to run the tests and to get information on running the tests also. 

[Automation Test Case, Files & How To Setup](https://github.com/Novicetheaf/interactive-frontend-development-project/tree/master/automation-tests)

Selenium is the most popular and widely used open source gui testing platform. For my tests I was between two minds to use C# Selenium Web driver or the quick and easy Selenium IDE, which is an extension for you FireFox browser. Selenium Webdriver is more extendable and gives you more control over how your tests can interact and at what speed and they also generally make for more stable and reliable test cases. 

The benefit of using Selenium IDE over the C# based Webdriver, is simply time, Selenium IDE is faster to get up off the ground, and generally is used for small scale applications, it is actully better then C# when it comes to simple sites that don't have to many varients, and not a lot of updates, 

If I do get to build upon this application in the future I will probably transfer over to the Webdriver as it is far easier to make extensible, but for the moment considering the limited time constraints, this is the best solution.

For the test cases for my automation I simply went through every element of functionality.

Note on testing:
- This did actully find one small issue where if the user adds numbers and letters, with numbers first and letters following, the result is 'NaN'.
Fixed this issue was resolved by changing the javascript to check the length of charactors for input fields. 

## Deployment
The web app is hosted using Github pages, this can be found if you go to github, click settings in the repo and scroll down until you come to the heading github pages.
The sub heading 'source section' will say 'none' on the dropdown button. You want to change this by clicking on it and choose 'master branch'. 
Now it should be deployed through the main branch and the live site will update upon new commits that are pushed to Github.
The landing page is named index.html which is standard for any home page of a website. 

In order to run the site locally, you can use the clone this site by using the following link in your terminal: 'git clone '
To remove any connections with Github repository use the  following in your terminal: `git remote rm origin`

## Credits

### Media
I used [Ljndawson's site](http://ljndawson.org/2560x1440-white-wallpaper-hd.html) for my background image.

### Acknowledgements

Modal Contact Form outer sections Reference can be found [here](https://mdbootstrap.com/docs/jquery/modals/forms/)

Bootstrap code I used to look up for reference purposes, I used [bootstrap.com](https://getbootstrap.com/)

**This project is for educational purposes.** 