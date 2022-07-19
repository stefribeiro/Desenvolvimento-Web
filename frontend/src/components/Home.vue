<template>
    <header>
        <h2>Tô Lendo</h2> 
        <a href="\Login">
            <button>Login</button>
        </a>
    </header>
    <div id='leituras'>
        <ul>
        <h3>Biblioteca</h3>
        <a class="livro" v-for="(livro, index) in livros" :key="index">
            <img alt="livro.title" title="livro.title" src="livro.cover">
        </a>
    </div>
</template>

<script>
import api from '../services/api.js'

export default {
    name: 'Home',
    data() {
        return {
            livros: []
        }
    },
    mounted(){
        api.get('http://localhost:1337/api/books').then(response => {
            this.livros = response.data;
        })
    }
}

</script>

<style scoped>

</style>