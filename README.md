This is a basic web application prototype
The website is german
I used next.js, tailwindCSS, shadcn and supabase for this project

You can
-select a date to see a calendar in month- or weekview for that specific date (default is the current date)
-Create appointments that are safed with supabase
-Look at these appointments in Listview (appointment visualisation for month and week view is still in progress)
-Filter appointmens (in progress)

The application consists of five interactable elements
-The date picker to select the date and change the visualised month or weekview to the corresponding date
-A toggle group  to change between list-, month- and weekview 
-An appointment filter menu that does not filter yet
-Create appointment button menu that creates an appointment with Title, Notes and Date
which is then safed with supabase
-the main view element that either shows a calendar view with month- or weekview 
or shows the appointments safed in the databank with listview
