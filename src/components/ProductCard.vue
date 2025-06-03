<template>
    <RouterLink :to="`/${id}`">
        <span>{{ id }}</span>
        <img :src="thumbnail" class="max-w-[200px] min-h-[100px] w-full object-contain">
        <h1>{{ title }}</h1>
    </RouterLink>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';

const {
    id,
    title = 'Some Awesome Title',
    thumbnail = ''
} = defineProps<{
    id: number
    title: string
    thumbnail: string
}>()

</script>