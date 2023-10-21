function handleUpload(type) {
    const fileInput = document.getElementById('log-upload');
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a log file first.");
        return;
    }

    // Upload the file to Google Cloud Storage
    uploadToGCS(file).then(fileURL => {
        // Trigger the Google Cloud Function for analysis
        return triggerAnalysis(fileURL, type);
    }).then(() => {
        // Redirect based on the type after successful processing
        if (type === 'technical') {
            window.location.href = "technical_team.html";
        } else {
            window.location.href = "sales_team.html";
        }
    }).catch(error => {
        // Handle any errors
        alert("Error processing the file: " + error.message);
    });
}

function uploadToGCS(file) {
    return new Promise((resolve, reject) => {
        // TODO: Implement the upload logic to Google Cloud Storage.
        // This will require setting up the Google Cloud Storage API and getting a signed URL for upload.
        // Once the file is uploaded, resolve with the file's URL or path.
    });
}

function triggerAnalysis(fileURL, type) {
    return new Promise((resolve, reject) => {
        // TODO: Implement the logic to trigger the analysis.
        // This could involve making an HTTP request to a Google Cloud Function endpoint.
        // The function should then process the file and perform the analysis.
    });
}
