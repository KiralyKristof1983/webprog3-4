<template>
  
  <div id="wrapper">   
    <div class="sidebar" >
      <span class="closeButton" >&times;</span>
      <p class="brand-title"><a href="./">Király Kristóf (UQHGWH)</a></p>
      
      <div class="side-links">
          <ul>
            <li><router-link :to="{name: 'Index'}">Kezdőlap</router-link></li>
            <li><router-link :to="{name: 'Jobs'}">Munkáim</router-link></li>
            <li><router-link :to="{name: 'About'}">Rólam</router-link></li>
            <li><router-link :to="{name: 'Contact'}">Kapcsolat</router-link></li>
            <li><router-link :to="{name: 'Login'}">Belépés</router-link></li>
            <li><router-link :to="{name: 'Register'}">Regisztráció</router-link></li>
            <li><router-link :to="{name: 'Dashboard'}">Irányítópult</router-link></li>
          </ul>
      </div>

        
        <footer class="sidebar-footer">
          <div>
            <a href=""><i class="fab fa-facebook-f"></i></a>
            <a href=""><i class="fab fa-instagram"></i></a>
            <a href=""><i class="fab fa-twitter"></i></a>
          </div>

          <small>&copy; 2022-2023  Király Kristóf</small>
        </footer>
      </div>
      
      <div class="menuButton" >
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        
      </div>
      
      <main class="container">
        <router-view>
        </router-view>
      </main>

      
      <footer class="main-footer">
        <div>
          <a href=""><i class="fab fa-facebook-f"></i></a>
          <a href=""><i class="fab fa-instagram"></i></a>
          <a href=""><i class="fab fa-twitter"></i></a>
        </div>
        
        <small>&copy; Király Kristóf 2022-2023</small>
      </footer>
    </div>
</template>

<style scoped>
  .showOverlay {
    width: 100%;
    z-index: 5;
  }
</style>