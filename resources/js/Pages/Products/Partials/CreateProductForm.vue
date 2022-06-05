<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import SaleButton from '@/Jetstream/SaleButton.vue';
import SaleLabel from '@/Jetstream/SaleLabel.vue';
import SaleInput from '@/Jetstream/SaleInput.vue';
import FormField from '@/Jetstream/FormField.vue';
import { PlusIcon, XIcon } from '@heroicons/vue/solid';
import JetDialogModal from '@/Jetstream/DialogModal.vue';

const createProductModal = ref(false);

const form = useForm({
    name : '',
    code : '',
    unit : '',
    price : '',
    tax : '',
});

const productCreate = () => {
    createProductModal.value = true;

    // setTimeout(() => passwordInput.value.focus(), 250);
};

// const deleteUser = () => {
//     form.delete(route('current-user.destroy'), {
//         preserveScroll: true,
//         onSuccess: () => closeModal(),
//         onError: () => passwordInput.value.focus(),
//         onFinish: () => form.reset(),
//     });
// };

const saveProduct = () => {
    form.post(route('products.store'),{
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onFinish: () => form.reset(),
    })
}

const closeModal = () => {
    createProductModal.value = false;

    form.reset();
};

</script>

<template>
    <div>
        <SaleButton 
            @click="productCreate"
            class="bg-green-sale border-0"
        >
            <PlusIcon class="text-white inline-flex flex-2 select-none h-6 w-6 shrink-0 py-0 px-1"/>
            <span class="flex-grow overflow-hidden py-0 px-1 text-ellipsis whitespace-nowrap text-white font-semibold last:pr-3"> product </span>
        </SaleButton>

        <JetDialogModal :show="createProductModal" @close="closeModal">
            <template #btnX>
                <button
                    @click="closeModal" 
                    class="items-center border-solid border-[#cdcccd] box-border cursor-pointer inline-flex justify-center m-0 p-1 text-center select-none align-top py-0 px-1 absolute right-4 top-3 font-semibold h-6 min-w-[24px] bg-transparent rounded-[4px] border-0 hover:bg-gray-200"
                >
                    <XIcon class="select-none inline-flex flex-2 h-4 w-4 shrink-0 text-[#26292ca3] p-0" />
                </button>
            </template>

            <template #title>
                Add Product
            </template>  

            <template #content>
                <div class="left w-80">
                    <div class="block p-4">
                        
                        <FormField>
                            <template #label>
                                <SaleLabel for="productName" value="Name" />
                            </template>
                            <template #inp>
                                <SaleInput
                                    ref="nameInput" 
                                    id="productName" 
                                    type="text" 
                                    v-model="form.name" 
                                />
                            </template>
                        </FormField>

                        <FormField>
                            <template #label>
                                <SaleLabel for="code" value="Product Code" />
                            </template>
                            <template #inp>
                                <SaleInput
                                    ref="nameInput" 
                                    id="code" 
                                    type="text" 
                                    v-model="form.code" 
                                />
                            </template>
                        </FormField>

                        <!-- 
                            #category field missing
                        -->

                        <FormField>
                            <template #label>
                                <SaleLabel for="unit" value="Unit" />
                            </template>
                            <template #inp>
                                <SaleInput
                                    ref="nameInput" 
                                    id="unit" 
                                    type="text" 
                                    v-model="form.unit" 
                                />
                            </template>
                        </FormField>

                        <FormField>
                            <template #label>
                                <SaleLabel for="price" value="Unit Price" />
                            </template>
                            <template #inp>
                                <SaleInput
                                    ref="nameInput" 
                                    id="price" 
                                    type="text" 
                                    v-model="form.price" 
                                />
                            </template>
                        </FormField>

                        <FormField>
                            <template #label>
                                <SaleLabel for="tax" value="Tax %" />
                            </template>
                            <template #inp>
                                <SaleInput
                                    ref="nameInput" 
                                    id="tax" 
                                    type="text" 
                                    v-model="form.tax" 
                                />
                            </template>
                        </FormField>

                        <!-- 
                            visibility missing 
                        -->

                        <!--
                            <JetInputError :message="form.errors.password" class="mt-2" />
                        </div> -->
                    </div>
                </div>
            </template>

            <template #footer>
                <SaleButton @click="closeModal" class="bg-white ml-2">
                    <span class="overflow-hidden flex-grow py-0 px-1 text-ellipsis whitespace-nowrap text-t-primary">Cancel</span>
                </SaleButton>

                <span class="ml-2">
                    <SaleButton
                        class="bg-green-sale w-full text-white border-0"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="saveProduct"
                    >
                        <span class="overflow-hidden flex-grow py-0 text-ellipsis whitespace-nowrap text-white px-3">Save</span>
                    </SaleButton>
                </span>
            </template>
        </JetDialogModal>
    </div>
</template>