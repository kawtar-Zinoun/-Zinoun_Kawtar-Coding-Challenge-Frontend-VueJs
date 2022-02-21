<template>
  <div class="container">
    
  <div class="topbar">
    <span class="bar-title">
       Welcome, {{name}}
    </span>
  </div>

  <SideBar :repos= user_repos />

  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue';

export default
{
    name: 'Home',
    components : {
        SideBar
    },
    
    data() {
        return {
        token: null,
        name : null,
        user_url : null,
        user_login : null,
        user_repos : null,
        };
    },

    mounted() {
        this.token = this.$route.params.accessToken;  // get token from route props
        this.getUserData(this.token); // fetch the user data
        this.getUserRepos(this.token); // fetch the repos

    },

    methods : {
        getUserData(access_token) {
            this.axios.get('https://api.github.com/user', {
                headers: {
                    'Authorization': `token ${access_token}`
                }
                })
                .then((res) => {
                this.name = res.data.name;
                this.user_url = res.data.url;
                this.user_login = res.data.login;
                this.repos_url = res.data.repos_url;                
                })
                .catch((error) => {
                console.error(error)
                })
        },

        getUserRepos(access_token) {
            this.axios.get("https://api.github.com/user/repos", {
                headers : {
                    'Authorization': `token ${access_token}`
                }})
                .then((res) => {
                console.log(res.data)
                this.user_repos = res.data;
                })
                .catch((error) => {
                console.error(error)
                })
        }
    }

}
</script>

<style scoped>

.container {
    height:100vh;
    min-width: 100vw;
    font-family: 'Poppins', sans-serif;
    background-color: #EEEEEE;
    padding : 0;
}

.topbar {
    height: 8vh;
    min-width:100%;
    background-color: #95389E;  
}

.bar-title {
    float: right;
    padding-right: 10px;
    padding-top: 2vh;
    color: white;
}

</style>