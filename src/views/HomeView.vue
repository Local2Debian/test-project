<template>
  <main class="grid">
    <ProductCard v-for="product in products" :key="product.id" v-bind="product"></ProductCard>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProductCard from '@/components/ProductCard.vue';

const products = ref<{
  title: string,
  id: number,
  thumbnail: string
}[]>([]);

fetch('https://dummyjson.com/products?limit=12')
  .then(async res => {
    products.value = (await res.json()).products
  })
  .then(console.log);
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
}
</style>