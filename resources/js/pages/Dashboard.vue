<template>
  <div id="backend-view">
    <div class="logout"><a href="#">Log out</a></div>
    <h1 class="heading">Irányítópult</h1>
    <span>Szia Kristóf ?</span>
    <div class="links">
      <ul>
        <li><a href="">Bejegyzés létrehozása</a></li>

        <li><a href="">Kategória létrehozása</a></li>

        <li><a href="">Kategóriák listája</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* dashboard */
#backend-view {
  text-align: center;
  background-color: #f3f4f6;
  height: 100vh;
  padding-top: 15vh;
}
.logout {
  position: absolute;
  top: 30px;
  right: 40px;
}
.heading {
  margin-bottom: 5px;
}
.links {
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  background: #ffffff;
  max-width: 500px;
  padding: 15px;
  border-radius: 15px;
}
.links ul {
  list-style: none;
}
.links a {
  all: revert;
  font-size: 26px;
  display: inline-block;
  margin: 10px 0;
}
</style>