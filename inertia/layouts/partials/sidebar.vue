<script setup lang="ts">
import sidebarList from '../components/sidebarList.vue';
</script>
<template>
    <aside class="fixed top-0 left-0  w-64 z-40 h-screen transition-transform -translate-x-full lg:translate-x-0 ">

        <div class="h-full p-4  flex flex-col  py-12  ">
            <div class="h-full flex flex-col gap-12  border-e border-red-900/20">
                <div class="w-full flex items-center justify-center">
                    <img src="/resources//images/logo.png" class="w-24 h-full" alt="">
                </div>
                <div class="w-full flex flex-col gap-2 items-center justify-center">
                    <div class="w-32 h-32 rounded-full bg-red-700 flex items-center justify-center">
                        <img src="/resources//images/user1.svg" alt="" class="w-28 h-28 rounded-full object-fit">
                    </div>
                    <div class="">
                        <h6 class="text-md font-medium text-center">Angga Dwi</h6>
                        <h6 class="text-sm font-light text-center">anggadwi</h6>
                    </div>

                </div>
                <div class="flex flex-col justify-between  gap-4 h-[60vh]  overflow-y-auto ">
                    <div class="flex items-center justify-center">
                        <ul class="flex flex-col gap-6 ">
                            <sidebar-list :menu="{ title: 'Dashboard', icon: 'home', href: '/', active: false, }" />
                            <sidebar-list
                                :menu="{ title: 'User', icon: 'account-heart', href: '/users', active: true, }" />
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    </aside>
</template>