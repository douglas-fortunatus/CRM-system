<script setup>
defineProps({
    value: String,
});
</script>

<template>
    <label class="text-t-secondary font-normal text-[15px] leading-5 mb-1">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
    </label>
</template>