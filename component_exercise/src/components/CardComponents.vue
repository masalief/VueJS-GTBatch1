<template>
    <div class="row py-5 ml-4">
        <div class="col-3">
        <div class="card" style="width: 21rem;">
            <img id="gambar1"  class="card-img-top" :src="require( '@/assets/img/' + cardImage + '.png')" alt="Card Kursi">
            <div class="card-body">
              <div class="h5">{{ cardTittle }}</div>
              <p>IDR {{ cardPrice }}</p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "CardComponents",
    props : [
        "cardTittle", "cardPrice", "cardImage"
    ],
}
</script>

<style>

</style>