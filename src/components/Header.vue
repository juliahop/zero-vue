<script setup>
  import OffcanvasMenu from "./OffcanvasMenu.vue";
</script>

<template>
  <header>
    <div class="top-bar bg-primary py-3">
      <div class="container">
        <div class="row">
          <p class="text-white text-center mb-0">Black Friday sale! Tijdelijk <b>20% korting</b> op de hele collectie</p>
        </div>
      </div>
    </div>
    <div class="main-bar">
      <div class="container">
        <div class="row">
          <nav class="navbar navbar-expand-xl">
            <div class="container-fluid justify-content-between">
              <!-- menu desktop -->
              <div class="collapse navbar-collapse row w-100">
                <div class="col-xl-4">
                  <a class="navbar-brand d-block" href="/" aria-label="Modulari">
                    <div>
                      <img src="../assets/images/MDLR_logo.svg" alt="Logo Modulari" class="mw-100">
                    </div>
                  </a>
                </div>
                <div class="col-xl-auto flex-grow-1">
                  <ul class="navbar-nav justify-content-center gap-3">
                    <li class="nav-item">
                        <a href="/" class="fs-5 nav-link p-2">
                            Wanddecoratie
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/" class="fs-5 nav-link p-2">
                            Over Modulari
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/" class="fs-5 nav-link p-2">
                            Inspiratie
                        </a>
                    </li>
                  </ul>
                  
                </div>
              </div>
              <!-- end menu desktop -->

              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>

              <a href="/" class="navbar-brand d-block d-xl-none me-0">
                <div>
                  <img src="../assets/images/MDLR_logo.svg" alt="Logo Modulari" class="mw-100">
                </div>
              </a>

              <div class="col-xl-3 menu-secondary">
                <div class="d-flex gap-3">

                  <div class="d-flex gap-2">
                    <button class="btn btn-icon">
                      <span class="d-block">
                        <Icon name="edit"></Icon>
                      </span>
                    </button>
                    <button class="btn btn-icon">
                      <span class="d-block">
                        <Icon name="account"></Icon>
                      </span>
                    </button>
                    <button class="btn btn-icon d-none d-lg-block">
                      <span class="d-block">
                        <Icon name="shopping-car"></Icon>
                      </span>
                    </button>
                  </div>
                  
                  <div class="language-switcher dropdown d-none d-xl-flex align-items-end ms-auto">        
                    <a href="#" class="btn btn-icon" data-bs-toggle="dropdown" role="button" aria-expanded="false" aria-label="Switch language">
                        <span class="d-flex align-items-end gap-2">
                            <Icon name="nl-vlag"></Icon>
                            <span class="lh-1 text-uppercase">nl</span>
                        </span>
                    </a>          
                  </div>
                </div>
              </div>

              <!-- mobile offcanvas content -->
              <OffcanvasMenu />
            </div>
          </nav>
        </div>
      </div>      
    </div>
  </header>
</template>



<style>

</style>