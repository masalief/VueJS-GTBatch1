<template>
<div>
    <div class="row py-5 ml-1">
        <div class="col-3">
        <div class="card" style="width: 17rem;">
            <a href="" @click.prevent="$emit('changePicture', cardImage)">
            <img :src="require('@/assets/img/' + cardImage + '.png')" alt="Card Kursi">
            </a>
            <div class="card-body">
              <div class="font-weight-bold mt-3 my-0">{{ cardTitle }}</div>
              <p>IDR {{ cardPrice }}</p>
            </div>
          </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name : "CardComponents",
    props : ["cardImage", "cardTitle", "cardPrice"]
}
</script>

<style scoped>
.card {
    border-radius: 15px;
    padding: 12px;
}


</style>