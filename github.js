//fetch data from github

class Github {
  constructor(){
    this.client_id = '4cae939f309e2b600f6a';
    this.client_secret = '5f65444a178ffec1a5a88abde21196d98f816ffd';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=$${this.client_secret}`)
  
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=$${this.client_secret}`)
  
    
    const profileData = await profileResponse.json();

    return {
      profile: profileData
    }
  }
}