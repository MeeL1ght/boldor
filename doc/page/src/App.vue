<script setup>
import SideBar from "@/components/SideBar.vue";
</script>

<template lang="pug">
SideBar/

.flex__start
  h1.main__title Boldor

.flex__center
  img.boldor(src='./assets/boldor-logo.png', alt='')/

p Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati adipisci quasi! Maiores totam fugit tenetur quis incidunt facilis sapiente commodi! Suscipit cum earum maxime numquam omnis atque dolor voluptates?
p Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati adipisci quasi! Maiores totam fugit tenetur quis incidunt facilis sapiente commodi! Suscipit cum earum maxime numquam omnis atque dolor voluptates?
p Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati adipisci quasi! Maiores totam fugit tenetur quis incidunt facilis sapiente commodi! Suscipit cum earum maxime numquam omnis atque dolor voluptates?
p Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati adipisci quasi! Maiores totam fugit tenetur quis incidunt facilis sapiente commodi! Suscipit cum earum maxime numquam omnis atque dolor voluptates?
p Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati adipisci quasi! Maiores totam fugit tenetur quis incidunt facilis sapiente commodi! Suscipit cum earum maxime numquam omnis atque dolor voluptates?
p Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati adipisci quasi! Maiores totam fugit tenetur quis incidunt facilis sapiente commodi! Suscipit cum earum maxime numquam omnis atque dolor voluptates?
p Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati adipisci quasi! Maiores totam fugit tenetur quis incidunt facilis sapiente commodi! Suscipit cum earum maxime numquam omnis atque dolor voluptates?
p Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati adipisci quasi! Maiores totam fugit tenetur quis incidunt facilis sapiente commodi! Suscipit cum earum maxime numquam omnis atque dolor voluptates?

h2#title__1 # Este es el ejemplo 1
h2#title__2 # Este es el ejemplo 2
h2#title__3 # Este es el ejemplo 3
h2#title__4 # Este es el ejemplo 4
h2#title__5 # Este es el ejemplo 5
h2#title__6 # Este es el ejemplo 6
h2#title__7 # Este es el ejemplo 7
h2#title__8 # Este es el ejemplo 8
h2#title__9 # Este es el ejemplo 9
h2#title__10 # Este es el ejemplo 10
</template>

<style scoped>
.main__title {
  font-size: 2.5em;
  border-bottom: 1px solid #3f8171;
}
.boldor {
  height: 16em;
  will-change: filter;
  margin-bottom: 5%;
  transition: filter 520ms ease;
}

.boldor:hover {
  filter: drop-shadow(0 0 2em #3f8171);
}
</style>
