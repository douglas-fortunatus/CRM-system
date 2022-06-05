<template>
    <AppLayout>
        <Head title="Products" />
        <div class="relative overflow-hidden flex-1 flex">
            <main class="relative flex flex-1 min-w-cont">

                <div class="h-full flex-auto flex w-full relative z-10">
                    <div class="w-full flex-auto">
                        <div style="height: 100%">
                            <div class="h-full overflow-scroll">

                                <div class="my-0 mx-auto max-w-[1440px] sl:max-w-[100%]">
                                    <div class="m-6 sl:m-0">

                                        <SalePanel
                                            class="rounded-[2px] sl:rounded-[0px] sl:border-x-0 sl:border-t-0"
                                        >
                                            <div class="p-6 flex items-center justify-between">
                                                <div class="flex items-center mr-6">
                                                    <!-- find a bigger svg -->
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg"  
                                                        style="fill: #404346;"
                                                        class="inline-flex box-border flex-2 h-6 select-none w-6"
                                                    >
                                                        <path d="M21.993 7.95a.96.96 0 0 0-.029-.214c-.007-.025-.021-.049-.03-.074-.021-.057-.04-.113-.07-.165-.016-.027-.038-.049-.057-.075-.032-.045-.063-.091-.102-.13-.023-.022-.053-.04-.078-.061-.039-.032-.075-.067-.12-.094-.004-.003-.009-.003-.014-.006l-.008-.006-8.979-4.99a1.002 1.002 0 0 0-.97-.001l-9.021 4.99c-.003.003-.006.007-.011.01l-.01.004c-.035.02-.061.049-.094.073-.036.027-.074.051-.106.082-.03.031-.053.067-.079.102-.027.035-.057.066-.079.104-.026.043-.04.092-.059.139-.014.033-.032.064-.041.1a.975.975 0 0 0-.029.21c-.001.017-.007.032-.007.05V16c0 .363.197.698.515.874l8.978 4.987.001.001.002.001.02.011c.043.024.09.037.135.054.032.013.063.03.097.039a1.013 1.013 0 0 0 .506 0c.033-.009.064-.026.097-.039.045-.017.092-.029.135-.054l.02-.011.002-.001.001-.001 8.978-4.987c.316-.176.513-.511.513-.874V7.998c0-.017-.006-.031-.007-.048zm-10.021 3.922L5.058 8.005 7.82 6.477l6.834 3.905-2.682 1.49zm.048-7.719L18.941 8l-2.244 1.247-6.83-3.903 2.153-1.191zM13 19.301l.002-5.679L16 11.944V15l2-1v-3.175l2-1.119v5.705l-7 3.89z"></path>
                                                    </svg>

                                                    <h2 class="py-0 px-5 my-0 mr-4 ml-6 font-normal text-[27px] leading-8">
                                                        <span class="v overflow-hidden text-ellipsis" style="display:-webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; max-height:calc(32px*2);">{{ $page.props.product.name }}</span>
                                                    </h2>
                                                </div>

                                                <!-- filter section area -->
                                                <div class="flex items-center justify-between"></div>
                                            </div>
                                        </SalePanel>

                                        <!-- content -->
                                        <div>
                                            <!-- details section -->
                                            <div class="w-[480px] inline-block align-top sl:max-w-[380px]">

                                                <SalePanel
                                                    class="rounder-[2px] sl:rounded-tl-[0px] sl:rounded-bl-[0px] mb-2"
                                                >
                                                    <div class="block p-4">
                                                        <div id="header-p" class="h-4 leading-6 text-purple-800 pb-2">
                                                            <span class="text-[13px] uppercase font-semibold">Details</span>
                                                            <div class="float-right"></div>
                                                        </div>

                                                        <div class="mt-2 mx-0 mb-4 w-full border-b border-solid border-[#e5e5e5]"></div>

                                                        <div id="Details-body">
                                                            <ul class="flex flex-col -m-4">

                                                                <SaleDtl>
                                                                    <template #card-label>
                                                                        <div class="w-32 min-w-[8rem] text-right text-[#26292ca3] font-semibold text-[13px] mr-5 pr-4 leading-[18px] pt-[3px] self-start">Product Code</div>
                                                                    </template>

                                                                    <template #cardValue>
                                                                        <span style="word-break: break-word">{{ $page.props.product.code }}</span>
                                                                    </template>
                                                                </SaleDtl>

                                                                <SaleDtl>
                                                                    <template #card-label>
                                                                        <div class="w-32 min-w-[8rem] text-right text-[#26292ca3] font-semibold text-[13px] mr-5 pr-4 leading-[18px] pt-[3px] self-start">Unit</div>
                                                                    </template>

                                                                    <template #cardValue>
                                                                        <span style="word-break: break-word">{{ $page.props.product.unit }}</span>
                                                                    </template>
                                                                </SaleDtl>

                                                                <SaleDtl>
                                                                    <template #card-label>
                                                                        <div class="w-32 min-w-[8rem] text-right text-[#26292ca3] font-semibold text-[13px] mr-5 pr-4 leading-[18px] pt-[3px] self-start">Unit Price</div>
                                                                    </template>

                                                                    <template #cardValue>
                                                                        <span style="word-break: break-word">{{ $page.props.product.unit_price }}</span>
                                                                    </template>
                                                                </SaleDtl>

                                                                <SaleDtl>
                                                                    <template #card-label>
                                                                        <div class="w-32 min-w-[8rem] text-right text-[#26292ca3] font-semibold text-[13px] mr-5 pr-4 leading-[18px] pt-[3px] self-start">Tax%</div>
                                                                    </template>

                                                                    <template #cardValue>
                                                                        <span style="word-break: break-word">{{ $page.props.product.tax }}</span>
                                                                    </template>
                                                                </SaleDtl>

                                                                <SaleDtl>
                                                                    <template #card-label>
                                                                        <div class="w-32 min-w-[8rem] text-right text-[#26292ca3] font-semibold text-[13px] mr-5 pr-4 leading-[18px] pt-[3px] self-start">Category</div>
                                                                    </template>

                                                                    <template #cardValue>
                                                                        <span style="word-break: break-word">Category</span>
                                                                    </template>
                                                                </SaleDtl>

                                                                <SaleDtl>
                                                                    <template #card-label>
                                                                        <div class="w-32 min-w-[8rem] text-right text-[#26292ca3] font-semibold text-[13px] mr-5 pr-4 leading-[18px] pt-[3px] self-start">description</div>
                                                                    </template>

                                                                    <template #cardValue>
                                                                        <span style="word-break: break-word">{{ $page.props.product.description }}</span>
                                                                    </template>
                                                                </SaleDtl>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </SalePanel>
                                            </div>
                                            <!--  -->

                                            <!-- tabs section -->
                                            <div class="mx-6 mb-6 mt-0 inline-block align-top w-cal2 sl:w-cal1">
                                                <SalePanel class="rounder-[2px]">
                                                    <div class="block">

                                                        <div class="">
                                                            <TabGroup 
                                                                as = "div"
                                                                class="flex flex-col font-normal text-[15px] leading-5"
                                                            >
                                                                <TabList class="box-border flex flex-row order-1 relative w-full z-[1]">
                                                                    <Tab
                                                                        class="focus:outline-none"
                                                                        v-for="category in Object.keys(categories)"
                                                                        as="div"
                                                                        :key="category"
                                                                        v-slot="{ selected }"
                                                                    >
                                                                        <button
                                                                            :class="[
                                                                                'px-3 pt-6 pb-3 first:ml-6 items-center box-border cursor-pointer flex relative whitespace-nowrap min-h-[40px] justify-center focus:outline-none',
                                                                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                                                selected
                                                                                ? 'bg-slate-50 after:block after:absolute after:w-full after:left-0 after:-bottom-[1px] after:h-[2px] after:bg-t-link focus:outline-none'
                                                                                : 'text-t-primary hover:border-b hover:text-black focus:outline-none',
                                                                            ]"
                                                                        >
                                                                            {{ category }}
                                                                        </button>
                                                                    </Tab>
                                                                </TabList>

                                                                <TabPanels class="order-2">
                                                                    <TabPanel
                                                                        v-for="(posts, idx) in Object.values(categories)"
                                                                        :key="idx"
                                                                        :class="[
                                                                            'p-6 border-t border-solid border-[#e5e5e5]',
                                                                        ]"
                                                                    >

                                                                        <div class="flex px-2"></div>
                                        
                                                                        <ul>
                                                                            <li
                                                                            v-for="post in posts"
                                                                            :key="post.id"
                                                                            class="relative rounded-md p-3 hover:bg-gray-100"
                                                                            >
                                                                            <h3 class="text-sm font-medium leading-5">
                                                                                {{ post.title }}
                                                                            </h3>

                                                                            <ul
                                                                                class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500"
                                                                            >
                                                                                <li>{{ post.date }}</li>
                                                                                <li>&middot;</li>
                                                                                <li>{{ post.commentCount }} comments</li>
                                                                                <li>&middot;</li>
                                                                                <li>{{ post.shareCount }} shares</li>
                                                                            </ul>

                                                                            <a
                                                                                href="#"
                                                                                :class="[
                                                                                'absolute inset-0 rounded-md',
                                                                                'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                                                                                ]"
                                                                            />
                                                                            </li>
                                                                        </ul>
                                                                    </TabPanel>
                                                                </TabPanels>
                                                            </TabGroup>
                                                        </div>


                                                    </div>
                                                </SalePanel>
                                            </div>
                                            <!--  -->
                                        </div>
                                        <!-- !content -->
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
import SalePanel from '@/Jetstream/SalePanel.vue';
import SaleDtl from '@/Jetstream/SaleCardDetail.vue';


import {PlusIcon, PencilIcon, TrashIcon, MenuIcon, FilterIcon, DotsHorizontalIcon} from '@heroicons/vue/solid';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

import { ref } from 'vue'

const categories = ref({
    Prices: [
        {
            id: 1,
            title: 'Does drinking coffee make you smarter?',
            date: '5h ago',
            commentCount: 5,
            shareCount: 2,
        },
        {
            id: 2,
            title: "So you've bought coffee... now what?",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
        },
    ],
    Deals: [
        {
            id: 1,
            title: 'Is tech making coffee better or worse?',
            date: 'Jan 7',
            commentCount: 29,
            shareCount: 16,
        },
        {
            id: 2,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
        },
    ],
    Files: [
        {
            id: 1,
            title: 'Ask Me Anything: 10 answers to your questions about coffee',
            date: '2d ago',
            commentCount: 9,
            shareCount: 5,
        },
        {
            id: 2,
            title: "The worst advice we've ever heard about coffee",
            date: '4d ago',
            commentCount: 1,
            shareCount: 2,
        },
    ],
})
</script>