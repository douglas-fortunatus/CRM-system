<script setup>
import { ref } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/inertia-vue3';
import { MapIcon, CurrencyDollarIcon, MailIcon, CalendarIcon, OfficeBuildingIcon, PresentationChartLineIcon, ShoppingBagIcon, ShareIcon, DotsHorizontalIcon } from '@heroicons/vue/solid'

import JetApplicationMark from '@/Jetstream/ApplicationMark.vue';
import JetBanner from '@/Jetstream/Banner.vue';
import JetDropdown from '@/Jetstream/Dropdown.vue';
import JetDropdownLink from '@/Jetstream/DropdownLink.vue';
import JetNavLink from '@/Jetstream/NavLink.vue';
import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink.vue';
import SaleIcon from '@/Jetstream/SaleIcon.vue';
import SaleNavLink from '@/Jetstream/SaleNavLink.vue';
import BreadRoute from '@/Jetstream/BreadRoute.vue'

defineProps({
    title: String,
});

const showingNavigationDropdown = ref(false);

const switchToTeam = (team) => {
    Inertia.put(route('current-team.update'), {
        team_id: team.id,
    }, {
        preserveState: false,
    });
};

const logout = () => {
    Inertia.post(route('logout'));
};
</script>

<template>
    <div>
        <Head :title="title" />

        <JetBanner />

        <div class="absolute flex w-full h-full min-w-main">
            <!-- side panel -->
            <div class="relative flex">
                <nav class="flex flex-col w-[56px] max-w-[56px] bg-[#404346] select-none z-40">
                    <a href="" class="flex justify-center p-[13px]">
                        <SaleIcon />
                    </a>

                    <!-- <SaleNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                        <MapIcon class="h-7 w-7 text-white"/>
                        <span class="tooltip rounded shadow-lg bg-slate-600 text-white text-xs left-14 px-3 flex justify-center items-center font-normal">
                            Leads <span class="rounded bg-slate-400 ml-1 px-2 my-1">1</span>
                        </span>
                    </SaleNavLink> -->

                    <SaleNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                        <CurrencyDollarIcon class="h-7 w-7 text-white"/>
                        <span class="tooltip rounded shadow-lg bg-slate-600 text-white text-xs left-14 px-3 flex justify-center items-center font-normal">
                            Deals <span class="rounded bg-slate-400 ml-1 px-2 my-1">2</span>
                        </span>
                    </SaleNavLink>

                    <div class="my-2 mx-3 border-[1px] border-solid border-line"></div>

                    <!-- <SaleNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                        <MailIcon class="h-7 w-7 text-white"/>
                        <span class="tooltip rounded shadow-lg bg-slate-600 text-white text-xs left-14 px-3 flex justify-center items-center font-normal">
                            Mail <span class="rounded bg-slate-400 ml-1 px-2 my-1">3</span>
                        </span>
                    </SaleNavLink> -->

                    <!-- <SaleNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                        <CalendarIcon class="h-7 w-7 text-white"/>
                        <span class="tooltip rounded shadow-lg bg-slate-600 text-white text-xs left-14 px-3 flex justify-center items-center font-normal">
                            Activity <span class="rounded bg-slate-400 ml-1 px-2 my-1">4</span>
                        </span>
                    </SaleNavLink> -->

                    <SaleNavLink :href="route('contacts.index')" :active="route().current('contacts.index')">
                        <OfficeBuildingIcon class="h-7 w-7 text-white"/>
                        <span class="tooltip rounded shadow-lg bg-slate-600 text-white text-xs left-14 px-3 flex justify-center items-center font-semibold">
                            Contacts <span class="rounded bg-slate-400 ml-1 px-2 my-1">5</span>
                        </span>
                    </SaleNavLink>

                    <!-- <SaleNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                        <PresentationChartLineIcon class="h-7 w-7 text-white"/>
                        <span class="tooltip rounded shadow-lg bg-slate-600 text-white text-xs left-14 px-3 flex justify-center items-center font-semibold">
                            Insights <span class="rounded bg-slate-400 ml-1 px-2 my-1">6</span>
                        </span>
                    </SaleNavLink> -->

                    <SaleNavLink :href="route('products.index')" :active="route().current('products.index')">
                        <ShoppingBagIcon class="h-7 w-7 text-white"/>
                        <span class="tooltip rounded shadow-lg bg-slate-600 text-white text-xs left-14 px-3 flex justify-center items-center font-semibold">
                            Products <span class="rounded bg-slate-400 ml-1 px-2 my-1">7</span>
                        </span>
                    </SaleNavLink>

                    <!-- <SaleNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                        <ShareIcon class="h-7 w-7 text-white"/>
                        <span class="tooltip rounded shadow-lg bg-slate-600 text-white text-xs left-14 px-3 flex justify-center items-center font-semibold">
                            Market <span class="rounded bg-slate-400 ml-1 px-2 my-1">8</span>
                        </span>
                    </SaleNavLink> -->

                    <!-- <SaleNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                        <DotsHorizontalIcon class="h-7 w-7 text-white"/>
                        <span class="tooltip rounded shadow-lg bg-slate-600 text-white text-xs left-14 px-3 flex justify-center items-center font-semibold">
                            More
                        </span>
                    </SaleNavLink> -->
                </nav>
            </div>
            <!--  -->

            <!-- main content -->
            <div class="grid overflow-hidden flex-1 grid-rows-cont grid-cols-full">
                <!-- header -->
                <div class="relative flex flex-row justify-between w-full z-20 bg-white shadow-3xl">
                    <!-- route -->
                    <div class="flex flex-1 mr-4 overflow-hidden">
                        <BreadRoute crumbs="Dashboard" />
                    </div>

                    <!-- <div>Search</div> -->

                    <!-- profile -->
                    <div class="flex flex-1 items-center select-none justify-end ml-4 pr-3">
                        <div id="saleAssistant"></div>
                        <div id="invite"></div>
                        <div id="profile">
                            <div class="ml-3 relative">
                                <JetDropdown align="right" width="48">
                                    <template #trigger>
                                        <button v-if="$page.props.jetstream.managesProfilePhotos" class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                                            <img class="h-8 w-8 rounded-full object-cover" :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name">
                                        </button>

                                        <span v-else class="inline-flex rounded-md">
                                            <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition">
                                                {{ $page.props.user.name }}
                                            </button>
                                        </span>
                                    </template>

                                    <template #content>
                                        <!-- Account Management -->
                                        <div class="block px-4 py-2 text-xs text-gray-400">
                                            Manage Account
                                        </div>

                                        <JetDropdownLink :href="route('profile.show')">
                                            Profile
                                        </JetDropdownLink>

                                        <JetDropdownLink v-if="$page.props.jetstream.hasApiFeatures" :href="route('api-tokens.index')">
                                            API Tokens
                                        </JetDropdownLink>

                                        <div class="border-t border-gray-100" />

                                        <!-- Authentication -->
                                        <form @submit.prevent="logout">
                                            <JetDropdownLink as="button">
                                                Log Out
                                            </JetDropdownLink>
                                        </form>
                                    </template>
                                </JetDropdown>
                            </div>
                        </div>
                    </div>
                </div>
                <!--  -->

                <!-- content -->
                <!-- <div class="relative overflow-hidden flex-1 flex">
                    <main class="relative flex flex-1 min-w-cont">
                        <div id="mainArea" class="w-full h-full flex flex-auto relative z-10">
                            <slot />
                        </div>
                    </main>
                </div> -->
                <!--  -->

                <!-- settings page -->
                <div>
                    <slot />
                </div>
                
            </div>
            <!--  -->
        </div>

    </div>
</template>
