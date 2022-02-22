<template>

    <div class="sidebar">
        <span class="sidebar-title"> Your Repositories </span>
        <autocomplete
            placeholder="Search here..."
            :source=repos
            input-class = "form-control autocomplete"
            results-property="items"
            :results-display="formattedDisplay">
        </autocomplete>
        <div class="repos">
            <div  v-for="(repo, index) in repos" :key="index" class="repo">
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
    },

    methods : {
        formattedDisplay (result) {
        return result.name 
        }
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
    margin-top: 35px;
}
.repo {
    width: 83%;
    height: 60px;
    text-align: left;
    padding-left: 20px;
    padding-top: 15px;
    margin-top: 20px;
    background-color: rgb(240, 240, 240);
    opacity: 0.7;
    border-radius: 13px;
}


.repo:hover {
    background-color: #EFEFEF;
    cursor: pointer;
    opacity: 1;
}

.autocomplete {
    width: 70% !important;
    margin-left: 70px;
    border-radius: 10px;
    padding: 10px 0 10px 0 ;
    background: rgb(182, 103, 241,0.2) !important; 

}

.autocomplete__box {
    background: rgb(182, 103, 241,0) !important;
    border: none !important;
}

.autocomplete__icon {
    padding-left: 2px;
}

.autocomplete__inputs input {
    background: rgb(182, 103, 241,0) !important;
}



</style>