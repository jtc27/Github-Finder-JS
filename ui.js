//https://api.github.com/users/jtc27

class UI {
  constructor(){
    this.profile = document.getElementById('profile')
  }

  //displays profile in UI
  showProfile(user){
    this.profile.innerHTML = `
      <div class = "card card-body mb-3">
        <div class='row'>

          <div class='col-md-3'>
            <img class='img-fluid mb-2' src='${user.avatar_url}'>
            <a href ='${user.html_url}' target="_blank" class='btn btn-primary btn-block mb-4'>View Profile</a>
          </div>

          <div class='col-md-9'>
            <span class="badge bg-warning"><b>Username: ${user.login}</b></span>
            <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
            <span class='badge bg-secondary'>Public Gists: ${user.public_gists}</span>
            <span class='badge bg-success'>Followers: ${user.followers}</span>
            <span class='badge bg-info'>Following: ${user.following}</span>
            <br><br>

            <ul class="list-group">
              <li class ="list-group-item">Github link: <a href ='${user.html_url}' target="_blank">${user.html_url}</a> </li>
              <li class = 'list-group-item'>Company: 
              ${user.company} 
              </li>
              <li class = 'list-group-item'>Website: <a href ='https://${user.blog}' target="_blank">${user.blog}</a> </li>
              <li class = 'list-group-item'>Location: ${user.location} </li>
              <li class = 'list-group-item'>Member Since: ${user.created_at} </li>
            </ul>

            

          </div>

        </div
      </div>
      <h3 class = 'page-heading mb-3'>Latest Repos</h3>
      <div id='repos'></div>
    `;
  }

  //show alert message
  showAlert(message, className){

    //clear any remaining alerts
    this.clearAlert()

    //create div
    const div = document.createElement('div')
    //add class
    div.className = className
    //add text
    div.appendChild(document.createTextNode(message))
    //get parent
    const container = document.querySelector('.searchContainer')
    //get searchbox
    const search = document.querySelector('.search')
    //insert alert
    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert()
    }, 3000)
  }

  //clear alert
  clearAlert(){
    const currentAlert = document.querySelector('.alert')

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  //clear profile
  clearProfile(){
    this.profile.innerHTML=``;
  }
  
}