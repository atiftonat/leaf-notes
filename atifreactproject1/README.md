<h1>PROJECT SPECIFICATIONS:<h1/>

<h5>Task 1:</h5><br/>
'Create a Header that will be displayed across all pages'<br/>
The header component needs to have a Title of your application & have a Clear All button to clear
the list from storage

Task 2:<br/>
'Create a Homepage that displays the list of notes'<br/>
The homepage needs to display the current list of notes stored in local storage.
A note is an object with a “title” & “content” property. The list is an array of note objects.
The homepage will also need to have an Add Note button below the list to navigate the user to
the Add Note page.

Task 3:<br/>
'Create a Row component (Homepage)'<br/>
Create a functional component called Row.
Each row in the list on the homepage needs to use a Row component to display the note title and
a delete button.
When delete is clicked the current note is removed from the list of notes.
When a row is clicked the user is sent to the Edit Note page.

Task 4:<br/>
'Create an Add Note page'<br/>
The Add Note page will need to have a form that allows a user to add a note.
A note will have a ‘title’ and a ‘content’ property.
Title will be a regular input and content will be a textarea.
The form data will need to be stored using session storage.
There needs to be an Add Note button that submits the form and adds a new note using the form
data. The form data should also be cleared from session storage on click. The user should also be
navigated back to the previous page when submitting the form.

Task 5:<br/>
'Create an Edit Note page'<br/>
The Edit Note page will need to have a form that allows a user to edit a note.
The user can edit the ‘title’ and ‘content’ property of a note.
There needs to be a Save Note button that submits the form and updates the note. The user
should also be navigated back to the previous page when submitting the form.

Task 6:<br/>
'Use an npm package'<br/>
Use an npm package in your application - you must implement at least 1 npm package of your
choice (other than react-router) in your application (https://www.npmjs.com/)
