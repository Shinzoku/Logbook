// Event listener for form submission
document.getElementById('journal-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way
    addEntry(); // Call the function to add a new journal entry
});

// Array to store journal entries
let entries = [];

// Function to add a new journal entry
function addEntry() {
    // Get the title and content from the form inputs
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Create an entry object
    const entry = { title, content };
    // Add the entry to the entries array
    entries.push(entry);

    // Clear the form inputs
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';

    // Display the updated list of entries
    displayEntries();
}

// Function to display the list of journal entries
function displayEntries() {
    const entriesDiv = document.getElementById('entries'); // Get the entries div
    entriesDiv.innerHTML = ''; // Clear the entries div

    // Loop through each entry in the entries array
    entries.forEach((entry, index) => {
        const entryDiv = document.createElement('div'); // Create a div for each entry
        entryDiv.className = 'entry'; // Add the 'entry' class to the div

        const entryTitle = document.createElement('h2'); // Create an h2 for the title
        entryTitle.textContent = entry.title; // Set the text content to the entry's title

        const entryContent = document.createElement('p'); // Create a paragraph for the content
        entryContent.textContent = entry.content; // Set the text content to the entry's content

        const deleteButton = document.createElement('button'); // Create a delete button
        deleteButton.textContent = 'Supprimer'; // Set the button text
        deleteButton.onclick = () => deleteEntry(index); // Set the onclick event to delete the entry

        const editButton = document.createElement('button'); // Create an edit button
        editButton.textContent = 'Éditer'; // Set the button text
        editButton.className = 'edit-button'; // Add the 'edit-button' class to the button
        editButton.onclick = () => editEntry(index); // Set the onclick event to edit the entry

        // Append the title, content, edit button, and delete button to the entry div
        entryDiv.appendChild(entryTitle);
        entryDiv.appendChild(entryContent);
        entryDiv.appendChild(editButton);
        entryDiv.appendChild(deleteButton);

        // Append the entry div to the entries div
        entriesDiv.appendChild(entryDiv);
    });
}