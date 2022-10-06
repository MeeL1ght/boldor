<script setup></script>

<template lang="pug">
.sidebar
  a.flex__center(href='#', target='_self')
    ion-icon#book__icon(name='book-outline')
    h3.title Doc

  .flex__center
    .line

  .flex__center
    a.element(href='#title__1', target='_self') Ejemplo 1

  .flex__center
    a.element(href='#title__2', target='_self') Ejemplo 2

  .flex__center
    a.element(href='#title__3', target='_self') Ejemplo 3

  .flex__center
    a.element(href='#title__4', target='_self') Ejemplo 4

  .flex__center
    a.element(href='#title__5', target='_self') Ejemplo 5

  .flex__center
    a.element(href='#title__6', target='_self') Ejemplo 6

  .flex__center
    a.element(href='#title__7', target='_self') Ejemplo 7

  .flex__center
    a.element(href='#title__8', target='_self') Ejemplo 8

  .flex__center
    a.element(href='#title__9', target='_self') Ejemplo 9

  .flex__center
    a.element(href='#title__10', target='_self') Ejemplo 10

  .flex__center
    .end__line

  .flex__center
    a.last__element(
      href='https://github.com/MeeL1ght',
      target='_blank') MeeL1ght #[ion-icon#gh__icon(name='logo-github')]

  .flex__center
    a.last__element_two(
      href='https://www.npmjs.com/package/boldor',
      target='_blank') Boldor #[ion-icon#npm__icon(name='logo-npm')]
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  max-width: 200px;
  border-top-right-radius: 12%;
  border-bottom-right-radius: 5%;
  z-index: 1;
  background-color: #303238;
  overflow-x: hidden;
  transition: 500ms;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
ion-icon {
  font-size: 1.5em;
}
#book__icon {
  color: #3f8171;
  margin-right: 8px;
}
#gh__icon,
#npm__icon {
  margin-left: 8px;
}
#npm__icon {
  color: #f74343;
}
.title {
  font-size: 1.6em;
  color: #c2cad1;
}
.line,
.end__line {
  position: absolute;
  height: 0.5px;
  width: 8.8em;
  background-color: #c2cad1;
  opacity: 0.4;
}
.line {
  top: 75px;
}
.end__line {
  top: max-width;
  margin-top: 5px;
}

.element,
.last__element,
a .flex__center,
.last__element_two {
  margin-top: 18px;
  margin-bottom: 18px;
  font-size: 1em;
  text-decoration: none;
  color: #c2cad1;
  display: block;
  transition: 300ms;
}
.last__element,
.last__element_two {
  display: flex;
  align-items: center;
  justify-content: center;
}
.last__element_two {
  margin-top: 2px;
}
.element:hover,
.last__element:hover,
.last__element_two:hover {
  color: #9da5ac;
}
</style>
