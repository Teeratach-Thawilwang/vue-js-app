<template>
  <div id="header">
    <nav>
      <ul>
        <li><a href="/demo1">Demo1</a></li>
        <li><a href="/demo2">Demo2</a></li>
        <li><a href="/demo3">Demo3</a></li>
        <li><a href="/demo4">Demo4</a></li>
        <li><a href="/demo5">Demo5</a></li>
        <li><a href="/demo6">Demo6</a></li>
        <li><a href="/demo7">Demo7</a></li>
        <li><a href="/demo8">Demo8</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
name : "Header-app"
}
</script>

<style scoped>
nav {
  background-color: dimgray;
}

nav ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: auto;
  height: 30px;
  list-style: none;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}
</style>