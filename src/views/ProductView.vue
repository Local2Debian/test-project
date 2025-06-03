<template>
  <div>
    <h1>{{ product?.title }}</h1>
    <h3>{{ product?.description }}</h3>
    <img v-for="img in product?.images || []" :src="img" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const {
  productId
} = defineProps<{
  productId: number
}>()

const product = ref<{
  title: string
  description: string
  images: string[]
} | null>(null)

fetch(`https://dummyjson.com/products/${productId}`)
  .then(async res => {
    product.value = (await res.json())
  })
  .then(console.log);
</script>