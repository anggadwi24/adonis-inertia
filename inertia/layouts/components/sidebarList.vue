<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import { type PropType } from 'vue'

export interface Menu {
    title: string
    href: string
    icon: string,
    active: boolean
}
const props = defineProps({
    menu: {
        type: Object as PropType<Menu>,
        required: true,
    }
})
</script>
<template>
    <li>
        <Link :href="props.menu.href"
            class="flex items-center  gap-2 font-medium shrink text-gray-400 hover:text-black transition-all ease-in"
            :class="{
            'text-black': props.menu.active

        }">
        <span>
            <mdicon :name="props.menu.icon" width="20" height="20" />
        </span>
        <h6 class="text-sm ">{{ props.menu.title }}</h6>
        </Link>
    </li>
</template>