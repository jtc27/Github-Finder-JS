//Init github
const github = new Github

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
       } else{
        //show profile

       }
     })
  } else {
    //clear profile
  }

})