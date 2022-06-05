<template>

    <div class="flex items-center py-4 overflow-y-auto whitespace-nowrap first:pl-5">

        <h1 class="block flex-initial min-w-0 overflow-hidden text-ellipsis">{{ crumbs }}</h1>

        <!-- <span class="mx-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        </span> -->

        <!-- <h1 class="block flex-initial min-w-0 overflow-hidden text-ellipsis">Page</h1> -->
    </div>
</template>

<script setup>

defineProps({
    crumbs: String
});

</script>