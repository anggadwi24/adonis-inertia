<script setup lang="ts">
import { Head, usePage } from '@inertiajs/vue3';
import sidebar from './partials/sidebar.vue';


const page: any = usePage();

</script>
<template>

    <Head :title="page.props.title" />

    <div class="min-h-screen bg-white">
        <sidebar />
        <div class="p-4 sm:ml-64 ">
            <main class="flex flex-col w-full mt-8">
                <div class="flex flex-row justify-between items-center">
                    <div class="flex flex-col">
                        <h1 class="text-lg font-medium tracking-wide">{{ $page.props.title }}</h1>
                        <p class="text-sm text-gray-400">{{ $page.props.subtitle }}</p>
                    </div>
                </div>
            </main>
        </div>

    </div>

</template>