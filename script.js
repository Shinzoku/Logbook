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