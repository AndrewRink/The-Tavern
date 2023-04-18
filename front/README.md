# **The Tavern**
An App by James Lindley, Melik Melikyan, and Andrew Rink
Submitted 2/21/2022
|------------------------------------------------------------------------------------------------------------------------|
## ABOUT:
The Tavern is a restaurant management style app for a fantasy tavern.  

This project allows a manager of this tavern to manage all aspects of day to day operations. You can manage Employees, Inventory(including Food, Drinks, and Equipment), Quests, and Rooms on this application.  

In a practical sense, one could update information, add new inventory, hire/fire new employees, and update/remove quests and/or room statuses.  This could be adapted to a real world application, as well as for use in role playing games such as Dungeons and Dragons.  

We were inspired by our mutual interest in fantasy settings to make a fun app based around everyone's favorite fantasy meeting spot.  
|------------------------------------------------------------------------------------------------------------------------|
## TO USE:
Navigation is simple point and click.  To add a new item/employee/quest etc, simply click the add button and fill in the fields, then click the submit button.  To delete an item, click delete.  
|------------------------------------------------------------------------------------------------------------------------|
## TECHNOLOGIES USED:
We utilized MongoDB to host our database, with express and mongoose to tie it together on the backend.  We use React to create the frontend, along with React-Bootstrap and Bootstrap for styling.
|------------------------------------------------------------------------------------------------------------------------|
## DEPENDENCIES
###  FRONTEND
1. React
2. React-Bootstrap
3. Method-Override
4. Mongoose
5. Nodemon
6. Express
7. Bootstrap
8. React-Router-Dom

### BACKEND
1. Express
2. Body-Parser
3. Nodemon
4. node-env-run
|------------------------------------------------------------------------------------------------------------------------|
## INSTALLATION INFORMATION
To run the project, a simple npm install will satisfy most dependencies on the front end.  On the back end, npm install express body-parser nodemon node-env-run should handle all the requirements.  Currently, our data is hosted on mongodb and is mostly placeholder data.  You could create your own mongodb database and link it through your own .env file.  

The source file is publically available on github at https://github.com/Glindley23/The-Tavern.  Feel free to reach out through github if interested in working on the project, or fork it to your own account and code away.  When contributing, please ensure the project is still functional before submitting a pull request and maintain a healthy comment history while adding code.    
|------------------------------------------------------------------------------------------------------------------------|
## KNOWN ISSUES/MISSING FEATURES
1. Currently, the edit feature is not functional on the front end.  It is functional using postman on the backend. 
|------------------------------------------------------------------------------------------------------------------------|
## End Goal
We hope eventually to have everything functional and streamline the app.  We would like to polish up the styling as well.  