<script setup>
import Modal from './Modal.vue';

const emit = defineEmits(['close']);

defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    closeable: {
        type: Boolean,
        default: true,
    },
});

const close = () => {
    emit('close');
};
</script>

<template>
    <Modal
        :show="show"
        :closeable="closeable"
        @close="close"
    >
        <header class="bg-[#f7f7f7] box-border flex flex-shrink-0 h-12 w-full border-b border-solid border-[#e5e5e5] text-[#26292c] py-3 pr-12 pl-4">
            <div>
                <slot name="btnX" />
            </div>

            <h1 class="m-0 overflow-hidden font-semibold text-[18px] leading-6 text-ellipsis whitespace-nowrap">
                <slot name="title" />
            </h1>
        </header>

        <div class="bg-white box-border min-h-[72px] min-width-[320px] overflow-auto p-0">
            <div class="block">
                <div class="flex">
                    <slot name="content" />
                </div>
            </div>
        </div>

        <footer class="w-full bg-[#f7f7f7] rounded-t-none rounded-b-[4px] box-border py-2 px-4 justify-between h-12 text-[15px] flex flex-shrink-0 text-right">
            <div class="w-full"></div>
            <div class="w-full flex justify-end"> 
                <slot name="footer" />
            </div>
        </footer>
    </Modal>
</template>
