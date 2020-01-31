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
The scope of the project was to provide an application that the end-user could use in there day to day use and would respond primarily on a mobile device, and showcase my javascript and jquery skills to date.

### Structure
The key aspects of the nvabar was to have the ability to dropdown the navbar and create an positive emotional response to the user, and give them links to my linkedin and github. It also allows them to fill out a contact me form and using Emailjs to send it to my email address. 

Also in the footer there is the same links, bar the conact me button, but this is replaced with an email icon which open up microsofts email application on your device or gmail on your mobile device. This give the end-user two options as to contacting me by, along with linkedin and github.

### Skeleton

[Mobile Design wireframe - Income Tax Calculator](https://github.com/Novicetheaf/interactive-frontend-development-project/blob/master/assets/wireframes/income-tax-calc-wireframe-mobile.pdf)
[Mobile Design wireframe - Miles Per Gallon Calculator](https://github.com/Novicetheaf/interactive-frontend-development-project/blob/master/assets/wireframes/mpg-calc-wireframe-mobile.pdf)

To-Do!!!
[Desktop Design wireframe](https://github.com/novicetheaf/user-centric-project-take-two/blob/master/wireframes/mobile-design-wireframe.pdf)

### Surface

#### Red shades: 
rgb(102, 10, 10);
rgba(138, 58, 58);
rgb(199, 60, 60);
rgb(196, 23, 23);

#### Cream/White shades: 
rgb(199, 235, 224);
rgb(255, 245, 245);
rgb(255, 255, 255);

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

The core features of my site is to make life easier for the end-user, by solving calculations for them and giving them specifically simplified results, that make it quick and easy to use. 

For my navigation bar I added a dropdown button with a jquery toggle arrow. This slides down content and give te user more options only if they want them, it keeps the flow simple, and evoking positive emotional response with clean consistancy in flow and design.

My web apps I used an accordion bootstrap setup, and implemented jquery to fixed on application to be open at once, so that the user doesn't have to scroll down very far to navigate the site.

For the income tax calculator section I used used simple input and dropdown options along with a calculate tax button, when clicked would perform the calculations to output taxed amount for the year, net pay for the year, and a weekly pay output.

The other web app miles per gallon calculator also keeps with the same format of styling. It uses two input box's miles/kilometers and your fuel used in litres. 
It also has a required dropdown option as to wether your distance is in miles or kilometers, this then changes the output text below accordingly.
It also features radio buttons to change the gallon rate to US(3.75L) or UK(4.25L). It also follows the same styled calculate button which takes your inputs and calculates them below in MPG(miles per gallon).
### Features Left to Implement
If I had more time I would like to use Chart.js to create a pie chart based on the output values to give a nice visual comparison of the what you pay on tax's vs what you received for the year etc.

I still have two applications left to add to this toolkit, the first one would be a stopwatch. The second application would be a calorie counter.  

## Testing

Note: on edge browser getting footer links blue, as oppsed to red, and contact me is black as opposed to red, two warning on console, I have checked both, one is regarding a closing div tag that is unexpected, but I double checked it and it is meant to be there, the other one is regarding the closing body tag, which is fine, I double checked that also. no errors like this show up on chrome or firefox.

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

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