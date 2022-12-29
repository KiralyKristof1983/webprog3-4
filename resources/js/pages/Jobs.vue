<template>
<h2 class="header-title">Munkáim</h2>
      <div class="searchbar">
        <form action="">
          <input type="text" placeholder="Keresés..." name="search" />

          <button type="submit">
            <i class="fa fa-search"></i>
          </button>

        </form>
      </div>
      <div class="categories">
        <ul>
        <div class="recommended-card">
          <li><a href="job/ibm">IBM - mel kapcsolatos írás</a></li>
          </div>
          <div class="recommended-card">
          <li><a href="job/3m">3M - mel kapcsolatos írás</a></li></div>
          <div class="recommended-card">
          <li><a href="job/hp">HP - val kapcsolatos írás</a></li>
          </div>
          <div class="recommended-card">
          <li><a href="job/sandisk">SanDisk - kel kapcsolatos írás</a></li></div>
          
        </ul>
      </div>
      <section class="cards-blog latest-blog">
        <div class="card-blog-content">
          <img src="images/ibmhaz.jpg" alt="" />
          <p>
            23 órája
            <span>Irta Király Kristóf</span>
          </p>
          <h4>
            <a href="job/ibm">IBM egy igen komoly cég, nagy szabású tervekkel</a>
          </h4>
        </div>

        <div class="card-blog-content">
          <img src="images/3mmaszk.jpg" alt="" />
          <p>
            5 napja
            <span>Irta Király Kristóf</span>
          </p>
          <h4 style="font-weight: bolder">
            <a href="job/3m">3M az egyik kedvenc cégem</a>
          </h4>
        </div>

        <div class="card-blog-content">
          <img src="images/hplaptop.jpg" alt="" />
          <p>
            11 napja
            <span>Irta Király Kristóf</span>
          </p>
          <h4 style="font-weight: bolder">
            <a href="job/hp">HP laptop pozítivuma </a>
          </h4>
        </div>

        <div class="card-blog-content">
          <img src="images/sandiskpendrive.jpg" alt="" />
          <p>
            13 napja
            <span>Irta Király Kristóf</span>
          </p>
          <h4 style="font-weight: bolder">
            <a href="job/sandisk">SanDisk adathordozók a világban</a>
          </h4>
        </div>

        <div class="card-blog-content">
          <img src="images/munka.jpeg" alt="" />
          <p>
            2 hete
            <span>Irta Király Kristóf</span>
          </p>
          <h4 style="font-weight: bolder">
            <a href="single-job.html">Élet és a munka</a>
          </h4>
        </div>

        <div class="card-blog-content">
          <img src="images/elhiv.png" alt="" />
          <p>
            2 hónapja 
            <span>Irta Király Kristóf</span>
          </p>
          <h4 style="font-weight: bolder">
            <a href="single-job.html">Elhivatottság</a>
          </h4>
        </div>

        
        <div class="pagination" id="pagination">
          <a href="">&laquo;</a>
          <a class="active" href="">1</a>
          <a href="">2</a>
          <a href="">3</a>
          <a href="">4</a>
          <a href="">5</a>
          <a href="">6</a>
          <a href="">&raquo;</a>
        </div>
      </section>
</template>