<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/inertia-vue3';

const props = defineProps({
    href: String,
    active: Boolean,
});

const classes = computed(() => {
    return props.active
        ? 'flex items-center relative box-border select-none rounded min-w-[224px] mx-2 py-2 pr-0 pl-3 first:mb-[2px] bg-[#deeafa] text-[#317ae2]'
        : 'flex items-center relative box-border select-none rounded min-w-[224px] my-0 mx-2 py-2 pr-0 pl-3 first:mb-[2px] hover:bg-slate-200'
});
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>