function generateResume() {
    // Get the form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;
    const template = document.getElementById("template").value;

    // Resume Preview Template 1
    let resumeContent = `
        <div class="resume-template">
            <h2>${name}</h2>
            <p>Email: ${email}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        </div>
    `;

    // Insert content into the resume preview
    document.getElementById("resumePreview").innerHTML = resumeContent;
}

function downloadPDF() {
    const resumePreview = document.getElementById("resumePreview");
    html2canvas(resumePreview).then(function(canvas) {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 10, 10);
        pdf.save("resume.pdf");
    });
}
