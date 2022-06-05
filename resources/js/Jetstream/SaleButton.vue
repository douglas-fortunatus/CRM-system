<script setup>
defineProps({
    type: {
        type: String,
        default: 'button',
    },
});
</script>

<template>
    <button 
        :type="type" 
        class="items-center border border-solid border-[#cdcccd] rounded-sm shadow-2xl box-border cursor-pointer inline-flex font-semibold text-[15px] leading-5 h-8 justify-center m-0 min-w-[32px] p-1 relative text-center select-none align-top"
    >
        <slot />
    </button>
</template>