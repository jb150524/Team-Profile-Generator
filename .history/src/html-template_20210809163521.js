// create the Team template
const generateTeam = (team) => {
    const generateManager = (manager) => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-users"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office #: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `;
  };

//   create the HTML for the Engineer
const generateEngineer = (engineer) => {
    return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${}</h2>
    `
}

}