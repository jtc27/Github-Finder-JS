//Init github
const github = new Github
const ui = new UI

const searchUser = document.getElementById('searchUser')

searchUser.addEventListener('keyup', (e) => {
  //Grab input text
  const userText = e.target.value

  if (userText !== '') {
     //Make http call
     github.getUser(userText)
     .then(data => {
       if(data.profile.message === 'Not Found'){
        //show alert
        ui.showAlert('User not found', 'alert alert-danger');
       } else{
        //show profile
        ui.showProfile(data.profile)

       }
     })
  } else {
    //clear profile
    ui.clearProfile();
  }

})