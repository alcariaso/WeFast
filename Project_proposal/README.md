# fasting App

## Overview

---> The Fasting app is designed to meticulously monitor your fasting hours,  infuse an element of enjoyment akin to games, and facilitate community connections. It not only monitors nutritional intake and caters to your current health requirements but also incorporates a medication reminder feature to ensure consistent intake during fasting periods. Furthermore, it logs your ongoing activities and promotes community engagement, offering the opportunity to fast alongside a partner for mutual support and motivation.



### Problem

Maintaining disciplined fasting poses a challenge for many, often leading to discontinuation. With this app, my aim is to showcase their progress, provide guidance for the journey ahead, a boost to meet their goal through a fasting partner to enhance enjoyment and motivation. The concept behind this app is to gamify the fasting experience, transforming it into an engaging and motivational journey.


### User Profile

This concept is primarily inspired by individuals with diabetes who seek to lower their blood sugar levels, ultimately leading to improved blood sugar control. It offers a myriad of health benefits, including but not limited to weight loss, enhanced brain function, and improved heart health.

### Features

1. Medicine log  
 logs existing medicine the user is currently taking to keep track of their intakeas they fast

2. nutrition value of food item / Nutrition Tracking and Meal Planning
The app enables users to track their nutritional intake during both fasting and eating windows.

3. Enhanced Fasting Tracker: Seamlessly monitor your fasting hours with an intuitive calendar feature, making it effortless to track your progress. Unlock exciting reward levels as you achieve your fasting goals, motivating you to stay committed and making your fasting journey even more rewarding. 

4. Activity Logging and Exercise Recommendations
Users can log their physical activities and exercises, including duration, intensity, and type of activity.


5. Community Support and Accountability
he app fosters a sense of community by allowing users to connect with others who are fasting.


6. Personalized Fasting Plans
Users can create customized fasting plans tailored to their health goals and preferences. 


List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.



## Implementation


### Tech Stack

1. FrontEnd Developement:
 
	React --> 
	React Router -->
	Styled Components -->
	Saas
	HTML5


2. Production:

	VScode 
	Git



### APIs

https://calorieninjas.com/api



### Sitemap

Home PAge
Description: The main landing page of the app where users can access various features and functionalities. Allows users to track their fasting hours and monitor their fasting progress over time.
Features:
Overview of fasting progress and statistics.
Quick access to key functionalities such as fasting tracker, nutrition log, medication reminders, and community engagement.
Start and stop fasting timers.
Set personalized fasting goals and schedules.
Medication Reminders


Nutrion Log Page
Description: Enables users to track their dietary intake during fasting and non-fasting periods.
Features:
Log meals, snacks, and beverages.
View nutritional information such as calories, macronutrients, and micronutrients.
Set nutritional goals and monitor adherence.

Medication Page 
Description: Helps users manage their medication intake during fasting periods.
Features:
Input medications and dosages.
Receive reminders for medication intake.
View medication history and interactions.

commuity engagement :
Description: Fosters a sense of community among users by providing a platform for interaction and support.
Features:
Find fasting partners or groups for mutual support.
Share experiences, tips, with the fasting community.

Activity traker 
Description: Allows users to log their physical activities and exercises.
Features:
Track type of activities.


Profile Page
Description: Allows users to customize their app settings and preferences.
Features:
Update personal information such as name, age, and gender.
Summary 

About Page
Description: Provides information about the app, its developers, and any relevant disclaimers or terms of use.
Features:
Overview of the app's mission and goals.
Contact information for support or feedback.
Links to privacy policy and terms of service.



List the pages of your app with brief descriptions. You can show this visually, or write it out.

### Mockups

Home/fasting tracking page
	--> This mainly will be in the homepage. A timer for where the user will state 	how long wil he/she will fast. a start/end toggle button

	--> toggle button for medication. wether taken for the day. and a route to check 	what medication thery supposed to have. 

	--> Timer will change color once reached a certain  level for the set time. 

	--> profiles will be shown for community and current partner. 


Activity traker
	--> this page will have the activity choice made into buttons for easy track user 		daily exercise/activity. (ex. run, walk, sports,  )
	

Profile Page

	--> This has the user info, summary. calendar log of the fasting hourney, 			activity, nutrition, meds


commuity engagement
	--> This will show people currently fasting , invite a partner. once accepeted. 	that account will show up on your home screen top area and their current 	fasting status. 

	--> Community engament icon will bring you to page for all future community 	engament features. 

Medication Page 
	--> a text area for logging in their medication page. then small icon will apear 		in the homepage/tracking page.


Nutrion Log Page
	--> and form area to log your food items. shows nutrion info (for phase 2) 
	

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data



Describe your data and the relationships between them. You can show this visually using diagrams, or write it out. 

### Endpoints

GET /api/fasting: Retrieves fasting data for the current user.
{
    "start_time": "2024-02-15T08:00:00Z",
    "end_time": "2024-02-15T16:00:00Z",
    "duration": "8 hours",
    "status": "active"
}

POST /api/fasting/start: Initiates a new fasting session for the current user.

{
    "message": "Fasting session started successfully."
}

Nutrition Log Endpoints:

GET /api/nutrition: Retrieves nutrition data for the current user.
{
    "date": "2024-02-15",
    "meals": [
        {
            "name": "Breakfast",
            "calories": 350,
            "protein": 20,
            "carbs": 40,
            "fat": 15
        },
        {
            "name": "Lunch",
            "calories": 500,
            "protein": 30,
            "carbs": 50,
            "fat": 20
        }
    ]
}






List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

### Auth

Log in Page 

No

## Roadmap

WEEK 1 :
1. Day 1-3 : Finalizing APP PROJECT PROPOSAL
	

2 Day: 3-5: DESIGN AND PROJECT PLAN LAYOUT
	

WEEK 2 :
1.  Day 1: Project Setup and Environment Configuration
	- set up development environement
	- initialized project structute	

3. Day 2-3: Frontend Setup and Initial UI Design
	- Set up frontend project using React.js.
	- Design initial UI wireframes and layouts.
	- Set up routing with React Router.

4. Day 4: Develop Core Functionality
	- Implement endpoints and logic for fasting tracker, nutrition log, and medication reminders.
	- Implement frontend components for displaying and interacting with fasting data, nutrition logs, and medication reminders.

6. Day 5: Community Engagement and Integration
	-Implement community engagement features functionality for fasting partners.
		

7. Day 6: finalize and testing



Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

## Nice-to-haves

1. create a backend. Nutrition API. when food item is logged it can show nutrition data. 

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

