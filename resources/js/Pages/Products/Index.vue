<template>
    <AppLayout>
        <Head title="Products" />

        <div class="relative overflow-hidden flex-1 flex">
            <main class="relative flex flex-1 min-w-cont">
                <div id="mainArea" class="w-full h-full flex flex-auto relative z-10">
                    <div class="w-full flex-auto">
                        <div style="height: 100%">
                            <div class="h-full flex flex-col">
                                <!-- head -->
                                <div class="flex shrink-0 pt-4 pb-0 px-4">
                                    <div class="flex justify-start flex-1">
                                        <CreateProductForm />
                                    </div>
                                </div>

                                <!-- filter -->

                                <!-- content -->
                                <div id="content" class="relative h-full" style="max-height: calc(100vh - 170px);">
                                    <div class="h-full">
                                        <div class="bg-gray-100">
                                            <div class="overflow-auto overflow-y-scroll shadow">
                                                <table class="w-full border">
                                                    <thead class="bg-gray-50 border-b-2 border-gray-200">
                                                        <tr>
                                                            <th scope="col" class="p-2 border-r">
                                                                <div class="flex items-center">
                                                                    <input type="checkbox" id="checkbox-all" v-model="select_all" @click="select" class="w-4 h-4 border-gray-300 rounded focus:ring-white focus:ring-2">
                                                                    <label for="checkbox-all" class="sr-only">Checkbox</label>
                                                                </div>
                                                            </th>
                                                            <th scope="col" class="p-3 text-sm font-semibold tracking-wide text-left border-r">Name</th>
                                                            <th scope="col" class="p-3 text-sm font-semibold tracking-wide text-left border-r">Product Code</th>
                                                            <!-- <th scope="col" class="p-3 text-sm font-semibold tracking-wide text-left border-r">Owner</th> -->
                                                            <!-- <th scope="col" class="p-3 text-sm font-semibold tracking-wide text-left border-r">Active</th> -->
                                                            <!-- <th scope="col" class="p-3 text-sm font-semibold tracking-wide text-left border-r">Visible to</th> -->
                                                            <th scope="col" class="p-3 text-sm font-semibold tracking-wide text-left border-r">Price</th>
                                                            <th scope="col" class="p-3 text-sm font-semibold tracking-wide text-left border-r">ID</th>
                                                            <th scope="col" class="p-3 text-sm font-semibold tracking-wide text-left border-r">Unit</th>
                                                            <th scope="col" class="p-3 text-sm font-semibold tracking-wide text-left border-r">Tax%</th>
                                                            <!-- <th scope="col" class="p-3 text-sm font-semibold tracking-wide text-left border-r">Category</th> -->
                                                            <!-- <th scope="col" class="p-3 text-sm font-semibold tracking-wide text-left border-r">Description</th> -->
                                                            <th scope="col" class="p-3 text-sm font-semibold tracking-wide text-left border-r">Unit Price</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        <tr 
                                                            v-for="product in products"
                                                            :key="product.id"
                                                            class="bg-white border-b border-solid border-slate-300"
                                                        >
                                                            <td class="p-2 border-r">
                                                                <div class="flex items-center">
                                                                    <input type="checkbox" id="checkbox-all" :value="product.id" v-model="selected" class="w-4 h-4 border-gray-300 rounded focus:ring-white focus:ring-2">
                                                                    <label for="checkbox-all" class="sr-only">Checkbox</label>
                                                                </div>
                                                            </td>
                                                            <td class="p-3 text-sm text-gray-700 whitespace-nowrap border-r">
                                                                <Link 
                                                                    :href="route('products.show', {product: product.id})"
                                                                    class="font-normal text-black hover:underline"
                                                                >{{ product.name }}</Link> 
                                                            </td>
                                                            <td class="p-3 text-sm text-gray-700 whitespace-nowrap border-r">{{ product.code }}</td>
                                                            <!-- <td class="p-3 text-sm text-gray-700 whitespace-nowrap border-r">Douglas</td> -->
                                                            <!-- <td class="p-3 text-sm text-gray-700 whitespace-nowrap border-r">Yes</td> -->
                                                            <!-- <td class="p-3 text-sm text-gray-700 whitespace-nowrap border-r">Entire Company</td> -->
                                                            <td class="p-3 text-sm text-gray-700 whitespace-nowrap border-r">{{ product.price }}</td>
                                                            <td class="p-3 text-sm text-gray-700 whitespace-nowrap border-r">{{ product.id }}</td>
                                                            <td class="p-3 text-sm text-gray-700 whitespace-nowrap border-r">{{ product.unit }}</td>
                                                            <td class="p-3 text-sm text-gray-700 whitespace-nowrap border-r">{{ product.tax }}</td>
                                                            <!-- <td class="p-3 text-sm text-gray-700 whitespace-nowrap border-r">Cloths</td> -->
                                                            <!-- <td class="p-3 text-sm text-gray-700 whitespace-nowrap border-r">{{ product.description }}</td> -->
                                                            <td class="p-3 text-sm text-gray-700 whitespace-nowrap border-r">{{ product.unit * product.price }}0</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </AppLayout>
</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';

import SaleModal from '@/Jetstream/Modal.vue';
import CreateProductForm from '@/Pages/Products/Partials/CreateProductForm.vue';

defineProps({ 
    products: Array, 
});

</script>

<script>
export default {
    data() {
        return {
            select_all: false,
            selected: []
        }
    },
    methods: {
        select(){
            this.selected = [];
            if(!this.select_all){
                for(let i in this.products){
                    this.selected.push(this.products[i].id)
                }
            }
        }
    }
}
</script>