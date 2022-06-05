<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/inertia-vue3';

const props = defineProps({
    href: String,
    active: Boolean,
});

const classes = computed(() => {
    return props.active
        ? 'has-tooltip relative flex px-4 py-4 justify-center bg-[#26292c] before:w-[4px] before:bg-white before:absolute before:left-0 before:top-[8px] before:bottom-[8px] before:rounded-nav-active'
        : 'has-tooltip relative flex px-4 py-4 justify-center hover:bg-gray-500'
});
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>