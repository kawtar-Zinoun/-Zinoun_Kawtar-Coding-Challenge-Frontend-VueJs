<template>

    <div class="sidebar">
        <span class="sidebar-title"> Your Repositories </span>
        <div v-for="(repo, index) in repos" :key="index" class="repos">
            <div class="repo">
            <span> {{repo.name}} </span>
            </div>
        </div>
  </div>
  
</template>

<script>
export default {
    name: 'SideBar',
    props : {
        repos : Array
    }
}
</script>

<style>
.sidebar {
   height: 100vh;
   width: 30%;
   background-color : white ;
   display:block;
 overflow-y: scroll;

}

.sidebar .sidebar-title {
   padding-left: 40px;
   margin-top: 20px ;
   margin-bottom: 40px;
   display:inline-block;
   font-weight: 500;
   font-size: 1.5em;
}
.repos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
}
.repo {
    width: 83%;
    height: 60px;
    text-align: left;
    padding-left: 20px;
    padding-top: 15px;
    background-color: rgb(240, 240, 240);
    opacity: 0.7;
    border-radius: 13px;
}


.repo:hover {
    background-color: #EFEFEF;
    cursor: pointer;
    opacity: 1;
}
</style>