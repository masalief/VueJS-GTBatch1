<template>
  <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
        <div class="ml-5">
            <img src="../assets/img/logo.png" alt="Logo" class="logo" width="100px">
        </div>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto mt-2">
            <router-link to="" class="nav-item nav-link active">Showcase</router-link>
            <router-link to="" class="nav-item nav-link active">Catalog</router-link>
            <router-link to="/formshipping" class="nav-item nav-link active">Shipping</router-link>
            <router-link to="/shippingList" class="nav-item nav-link active">Shipping List</router-link>
            <!-- <a class="nav-item nav-link active" href="#">Showcase</a>
            <a class="nav-item nav-link active" href="#">Catalog</a>
            <a class="nav-item nav-link active" href="#">Shipping</a>
            <a class="nav-item nav-link active" href="#">Shipping List</a> -->
          </div>
        </div>
        <div class="mr-4">
            <img src="../assets/img/cart-icon.png" alt="Chart">
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavbarComponents",
};
</script>

<style>

</style>