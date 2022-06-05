<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import JetActionSection from '@/Jetstream/ActionSection.vue';
import JetDialogModal from '@/Jetstream/DialogModal.vue';
import JetDangerButton from '@/Jetstream/DangerButton.vue';
import JetInput from '@/Jetstream/Input.vue';
import JetInputError from '@/Jetstream/InputError.vue';
import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue';

import SaleButton from '@/Jetstream/SaleButton.vue';
import { XIcon } from '@heroicons/vue/solid'


const confirmingUserDeletion = ref(false);
const passwordInput = ref(null);

const form = useForm({
    password: '',
});

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;

    setTimeout(() => passwordInput.value.focus(), 250);
};

const deleteUser = () => {
    form.delete(route('current-user.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    confirmingUserDeletion.value = false;

    form.reset();
};
</script>

<template>
    <JetActionSection>
        <template #title>
            Delete Account
        </template>

        <template #description>
            Permanently delete your account.
        </template>

        <template #content>
            <div class="max-w-xl text-sm text-gray-600">
                Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.
            </div>

            <div class="mt-5">
                <JetDangerButton @click="confirmUserDeletion">
                    Delete Account
                </JetDangerButton>
            </div>

            <!-- Delete Account Confirmation Modal -->
            <JetDialogModal :show="confirmingUserDeletion" @close="closeModal">

                <template #btnX>
                    <button
                        @click="closeModal" 
                        class="items-center border-solid border-[#cdcccd] box-border cursor-pointer inline-flex justify-center m-0 p-1 text-center select-none align-top py-0 px-1 absolute right-4 top-3 font-semibold h-6 min-w-[24px] bg-transparent rounded-[4px] border-0 hover:bg-gray-200"
                    >
                        <XIcon class="select-none inline-flex flex-2 h-4 w-4 shrink-0 text-[#26292ca3] p-0" />
                    </button>
                </template>

                <template #title>
                    Delete Account
                </template>

                

                <template #content>
                    <div class="left w-80">
                        <div class="block p-4">
                            Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.

                            <div class="mt-4">
                                <JetInput
                                    ref="passwordInput"
                                    v-model="form.password"
                                    type="password"
                                    class="mt-1 block w-3/4"
                                    placeholder="Password"
                                    @keyup.enter="deleteUser"
                                />

                                <JetInputError :message="form.errors.password" class="mt-2" />
                            </div>
                        </div>
                    </div>
                </template>

                <template #footer>
                    <SaleButton @click="closeModal" class="bg-white ml-2">
                        <span class="overflow-hidden flex-grow py-0 px-1 text-ellipsis whitespace-nowrap text-t-primary">Cancel</span>
                    </SaleButton>

                    <span class="ml-2">
                        <SaleButton
                            class="bg-red-500 w-full text-white border-0"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                            @click="deleteUser"
                        >
                            <span class="overflow-hidden flex-grow py-0 text-ellipsis whitespace-nowrap text-white px-3">Delete</span>
                        </SaleButton>
                    </span>
                    <!-- <JetSecondaryButton @click="closeModal">
                        Cancel
                    </JetSecondaryButton> -->

                    <!-- <JetDangerButton
                        class="ml-3"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="deleteUser"
                    >
                        Delete Account
                    </JetDangerButton> -->
                </template>
            </JetDialogModal>
        </template>
    </JetActionSection>
</template>
