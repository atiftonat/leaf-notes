PROJECT SPECIFICATIONS:

Task 1: Create a Header that will be displayed across all pages
The header component needs to have a Title of your application & have a Clear All button to clear
the list from storage

Task 2: Create a Homepage that displays the list of notes
The homepage needs to display the current list of notes stored in local storage.
A note is an object with a “title” & “content” property. The list is an array of note objects.
The homepage will also need to have an Add Note button below the list to navigate the user to
the Add Note page.

Task 3: Create a Row component (Homepage)
Create a functional component called Row.
Each row in the list on the homepage needs to use a Row component to display the note title and
a delete button.
When delete is clicked the current note is removed from the list of notes.
When a row is clicked the user is sent to the Edit Note page.

Task 4: Create an Add Note page
The Add Note page will need to have a form that allows a user to add a note.
A note will have a ‘title’ and a ‘content’ property.
Title will be a regular input and content will be a textarea.
The form data will need to be stored using session storage.
There needs to be an Add Note button that submits the form and adds a new note using the form
data. The form data should also be cleared from session storage on click. The user should also be
navigated back to the previous page when submitting the form.

Task 5: Create an Edit Note page
The Edit Note page will need to have a form that allows a user to edit a note.
The user can edit the ‘title’ and ‘content’ property of a note.
There needs to be a Save Note button that submits the form and updates the note. The user
should also be navigated back to the previous page when submitting the form.

Task 6: Use an npm package
Use an npm package in your application - you must implement at least 1 npm package of your
choice (other than react-router) in your application (https://www.npmjs.com/)
