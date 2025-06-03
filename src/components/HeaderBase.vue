<template>
    <nav class="sticky w-full max-h-14">
        <ul class="h-full inline-flex gap-4">
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/post">Post</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped></style>