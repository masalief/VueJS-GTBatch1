<template>
    <div class="menu-footer d-flex flex-row justify-content-around mt-5 mb-5">
        <div class="overview">
            <a class="text-dark" href=""><b>Overview</b></a>
            <br>
            <a class="text-dark" href="form_shipping.html">Shipping</a>
            <br>
            <a class="text-dark" href="">Refund</a>
            <br>
            <a class="text-dark" href="">Promotion</a>
        </div>
        <div class="company">
            <a class="text-dark" href=""><b>Company</b></a>
            <br>
            <a class="text-dark" href="">About</a>
            <br>
            <a class="text-dark" href="">Career</a>
            <br>
            <a class="text-dark" href="">Contact Us</a>
        </div>
        <div class="explore">
            <a class="text-dark" href=""><b>Explore</b></a>
            <br>
            <a class="text-dark" href="">Term & Conds</a>
            <br>
            <a class="text-dark" href="">Privacy Policy</a>
            <br>
            <a class="text-dark" href="">For Developer</a>
        </div>
        <div class="mr-5">
            <h5>Special Letters</h5>
            <br>
            <form class="input-group mb-3" id="btnAlert">
                <input type="email" placeholder="   Your email address" id="inputAlert" required>
                  <button class="btn btn-outline-primary" type="submit"><img src="../assets/img/tele-icon.png" alt=""></button>
              </form>
        </div>
    </div>
</template>

<script>
export default {
    name : "FooterComponents",
};
</script>

<style>

</style>