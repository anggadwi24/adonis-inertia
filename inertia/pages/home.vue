<script setup lang="ts">
import { Head } from '@inertiajs/vue3'

defineProps<{ version: number }>()
</script>

<template>

  <Head title="Homepage" />

  <main class="h-screen bg-gray-200">
    <h1 class="text-3xl font-bold text-center mt-8">Welcome to Inertia.js</h1>
    <p class="text-center mt-4">Version {{ version }}</p>

  </main>
</template>