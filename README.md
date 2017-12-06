    • Link to the deployed page
- ducs1.herokuapp.com
or
- ducs.herokuapp.com

    • Credit people/organizations you borrowed code from  or APIs you used - e.g., Bootstrap,  
- Bootstrap: http://getbootstrap.com/
- Codecademy: https://www.codecademy.com/
- W3 schools: https://www.w3schools.com/

    • List of all project features implemented and associated screenshots
Total List of implemented features:
o	User Authentication with easy sign-in
o	Data collection and calculations
	Metric and Imperial
	Volume and Depth
	Zipcode or County
	Optional notes
o	Email results to user
o	Results are informative 
o	Storage of results in database
o	Presentation of database to admin
	Data can be sorted and filtered
o	View of all calculations can be exported to csv
o	A delete button and a delete all button
o	Can see all measurements and organize by year and county
o	A welcome page
o	A how-to page for using the app and how to perform the calculation
-Home Page 
![Alt text](C:\Users\Teresa\OneDrive\Documents\Fall2017\CENSprint3\Screenshot (18).png?raw=true "HomePage")
- Sign Up:
	Email
	User Name
	Password 
- Sign In: 
	User and Admin
	Forgot Password
- Sign Out
- Data Collecting 
  
 
 
 


- Calculations of Data Collected:
	Results:
		Email to Yourself
		Links to Additional Information:
			http://manatee.ifas.ufl.edu/lawn_and_garden/master-gardener/gardening-manatee-style/c/calibrating-your-sprinkler-system.pdf
			https://floridawaterstar.com/technicalmanual/irrigation/uniformity.html
- User page:
	Edit Profile
	Edit Profile Pic 
	Change Password
	Data Collection: 
		Zipcode or County 
		Number of Catch Cans
		Time Run
		Optional Notes
		Amount of Water Collected for Each Catch Can
		Different Measurements for Collecting Data:
			Depth or Volume
			Imperial or Metric
-Admin page: 

	Same Features as Users for Inputting Data
	List of Data Inputted by Users: 
		Filter Data
		Delete Data
		View More on Data That is Too Long
		Delete All Data
		Export data to csv
 
  
	Stats of Data Collected by Year With the Number of Measurements from Each County:
		Total Number of Stats From Each County
 
	User Management:
		Edit User
		Remove User
		Change User Role
		Search Users
- "How-to": 
	How to Use the App Instructions 
 
- Logo For the Department That Redirects to UF IFAS (Institute of Food and Agricultural Sciences) Website When Clicked  
 
-Duc Logo in Top Left That Redirects You to the Home Page

    • include landing or home page
- ducs1.herokuapp.com

    • Instructions for how to run the project locally
- In the terminal make sure you are in the Mean folder 
- Type node server.js
- Wait for the green words to pop-up in the terminal 
- Go to any browser and type localhost:3000/

    • How to update database and server connections
-set the environment variable `MONGOLAB_URI` to your mongoDB connection string or replace the string containing `mongodb://` on line 7 of `config/env/development.js' with your connection string
Helpful link: https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html 
