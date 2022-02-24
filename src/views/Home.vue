<template>
  <div class="container">
    
    <div class="topbar">
        <span class="bar-title">
        Welcome, {{name}}
        </span>
    </div>
    
    <div class="wrapper">
        <SideBar :repos= user_repos @clicked="onRepoClick" />
        <CommitList :token= token :selectedRepo= selectedRepo :user_login= user_login />
    </div>

  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue';
import CommitList from '../components/CommitList.vue';

export default
{
    name: 'Home',
    components : {
        SideBar,
        CommitList
    },
    
    data() {
        return {
        token: null,
        name : null,
        user_url : null,
        user_login : null,
        user_repos : null,
        selectedRepo : null,
        selectedRepoData: null,
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
                this.user_repos = res.data;
                })
                .catch((error) => {
                console.error(error)
                })
        },

        onRepoClick(value) {
            this.selectedRepo = value;
        },
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
.wrapper {
    display : flex;
    flex-direction: row;
}

</style>