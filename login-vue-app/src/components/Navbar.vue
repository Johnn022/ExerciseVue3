<template>
    <div class="bg-gray-900 text-white py-4 md:flex md:items-center justify-between px-4">
        <div class="logo text-2xl font-bold text-white cursor-pointer">
            <h1>  Navbar   </h1>
        </div>
        
   
    <span class="text-white text-4xl absolute right-6 top-5 cursor-pointer md:hidden" @click="menuOpen">
        <i :class="[open? 'bi bi-x':'bi bi-filter-left']"> </i>
    </span>
    <ul class="md:flex gap-5 items-center absolute md:static bg-gray-900 w-full md:w-auto md:pb-0 px-6 md:px-0 top-14 duration-500"     
    :class="[open? 'left-0':'left-[-100%]']">
        <li v-for="tag in tags" class="py-4 md:py-0 hover:text-green-400 duration-300 text-xl">
            <!-- <a :href="tag.link">{{ tag.name }}</a> -->
            <!-- <router-link :to="tag.link" class="nav-item nav-link">{{ tag.name }}</router-link> -->
            <RouterLink :to="tag.link" active-class="is-active" class="navbar-item">{{ tag.name }} </RouterLink>
        </li>
        
    </ul>
</div>
</template>

<script setup>
import {ref} from 'vue'

const open= ref(false)

const tags=[
    {name:'Home', link:"/home"},
    {name:'About', link:"/about"},
    {name:'Offer', link:"/offer"},
    {name:'Services', link:"/services"},
    {name:'Blog', link:"/blog"},
    {name:'Logout', link:"/"},
]
const menuOpen=()=>{
    open.value=!open.value
}

</script>

<style scoped>

</style>