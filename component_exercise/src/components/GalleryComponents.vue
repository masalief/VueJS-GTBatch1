<template>
        <div class="container container-fluide px-2 mt-5 bt-2">
          <div class="row">
              <div class="col-2 d-flex flex-column justify-content-between">
                  <img id="rounded" src="../assets/img/side-1.png" alt="" style="width: 70%;">
                  <img id="rounded" src="../assets/img/side-2.png" alt="" style="width: 70%;">
                  <img id="rounded" src="../assets/img/side-3.png" alt="" style="width: 70%;">
                  <img id="rounded" src="../assets/img/side-2.png" alt="" style="width: 70%;">
                  <img id="rounded" src="../assets/img/side-1.png" alt="" style="width: 70%;">
              </div>
              <div class="col-6 rounded-circle">
                  <img id="gambarutama" src="../assets/img/chair.png" alt="">
              </div>
              <div class="col-4 mt-3">
                  <h3>Chair Thatty</h3>
                  <p>IDR 12.000.000</p>
                  <div class="btn" id="buttoncart">
                    <a href="#" class="text-dark" type="button"><img src="../assets/img/cart-icon.png"> Add to Cart</a>
                  </div>
                  <hr>
                  <p>About the Product</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                      Rem odio iste cum laborum blanditiis saepe, officiis similique 
                      ducimus, iure cupiditate suscipit voluptatum accusamus assumenda 
                      recusandae minus aperiam eaque consequatur? Magni.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, 
                      laudantium optio libero earum facere illum aperiam architecto 
                      pariatur repellat iste accusamus amet distinctio similique illo 
                      tempora? Dolores corrupti molestias quod!</p>
              </div>
          </div>
      </div>
</template>

<script>
export default {
    name : "GalleryComponents",
};
</script>

<style scoped>
#rounded {
    border-radius: 10px;
}

#gambarutama {
    border-radius: 20px;
}

#buttoncart {
    border-radius: 25px;
    background-color: salmon;
}

</style>