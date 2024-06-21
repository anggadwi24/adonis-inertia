<script setup lang="ts">

import authenticatedLayout from '../../layouts/authenticatedLayout.vue';



defineProps({
    users: Object,
    title: String,
})
</script>
<template>

    <authenticated-layout>
        {{ users ?? 'ss' }}
    </authenticated-layout>
</template>