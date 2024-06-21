<script setup lang="ts">
import { Head } from '@inertiajs/vue3';



const props = defineProps({
    users: Object,
    title:String,
})
</script>
<template>
    <Head :title="title" />
    <div>
        hii
    </div>
</template>