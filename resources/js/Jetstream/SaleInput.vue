<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: String,
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input
        ref="input"
        class="w-full bg-white border border-solid border-[#cbcccd] rounded-sm box-border text-t-primary block font-[inherit] h-8 py-1 px-2"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >
</template>