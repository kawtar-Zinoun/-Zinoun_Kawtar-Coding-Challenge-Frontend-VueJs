<template>
    <div v-if="selectedRepo" class="repo-area">
        
        <div v-if="branches" class="branch-dropdown">
            <select name="cars" id="cars">
            <option v-for="(branch,index) in branches" :key="index" :value="branch.name">{{branch.name}}</option>
            </select>
        </div>

        <span class="repo-name"> {{selectedRepo.name }} </span>


        <div class="commit-history">
            <div v-for="(repo, index) in selectedRepoData" :key="index" class="single-commit">
                <span class="commit-message"> {{repo.commit.message}} </span>
                <span class="committer"> by {{repo.commit.committer.name}} in<span class="commit-date">{{repo.commit.committer.date}}</span></span>
            </div>
        </div>
        
        
    </div>
</template>

<script>
export default {
    name: 'CommitList',
    props : {
        token : null,
        selectedRepo : Object,
        user_login : String,
    },
    watch : {
        selectedRepo : function(value) {
        this.selectedRepo = value;
        this.getCommitList(this.token);
        this.getBranches(this.token);
    }
    },
    data() {
        return {
        selectedRepoData: null,
        branches: null,
        };
    },

    

    methods : {
        
        getCommitList(access_token) {
            const commitsUrl = "https://api.github.com/repos/" + this.user_login + "/" + this.selectedRepo.name + "/commits";
            this.axios.get(commitsUrl , {
                headers : {
                    'Authorization': `token ${access_token}`
                }})
                .then((res) => {
                this.selectedRepoData = res.data;
                console.log(res.data);

                })
                .catch((error) => {
                console.error(error)
                })
        },
        getBranches(access_token) {
            const branchesUrl = "https://api.github.com/repos/" + this.user_login + "/" + this.selectedRepo.name + "/branches";
            this.axios.get(branchesUrl , {
                headers : {
                    'Authorization': `token ${access_token}`
                }})
                .then((res) => {
                this.branches = res.data;
                })
                .catch((error) => {
                console.error(error)
                })
        }
    }

}
</script>

<style>
.repo-area {
    min-width:65%;
    height :80vh;
    margin-top: 30px;
    margin-left: 30px;
    background-color: white;
    border-radius: 15px;
    overflow-y: scroll;
}
.repo-area .repo-name {
    display:block;
    margin-left: 30px;
    font-size: 25px;
    font-weight: 500;
    padding-top: 15px;
    color: #95389E;

}
.commit-history {
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
}
.single-commit {
    border : 1px solid #d0d7de;
    display: block;
    max-height :80px;
    width: 90%;
    margin-left:50px;
    margin-top:20px;
    border-radius: 10px;
    overflow: visible;
}
.single-commit:hover {
    background-color: #EEEEEE;
    cursor: pointer;
}

.single-commit span {
    color: black;
    padding: 10px 10px 0px 10px;
}
.single-commit .commit-message {
    font-size: 15px;
    font-weight: 400;
    display: block;
}
.single-commit .committer {
    font-size: 11px;
    font-weight: 300;
    margin-bottom: 6px;
}
.commit-date {
    color: #57606a !important;
    white-space: nowrap !important;
}

.branch-dropdown {
    float:right;
    padding : 20px;
}
.branch-dropdown select {
    border: 1px solid #d0d7de !important;
    padding :5px;


}

</style>