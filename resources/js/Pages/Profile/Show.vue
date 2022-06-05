<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
    import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm.vue';
import JetSectionBorder from '@/Jetstream/SectionBorder.vue';
import LogoutOtherBrowserSessionsForm from '@/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue';
import TwoFactorAuthenticationForm from '@/Pages/Profile/Partials/TwoFactorAuthenticationForm.vue';
import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from '@/Pages/Profile/Partials/UpdateProfileInformationForm.vue';
import { CogIcon } from '@heroicons/vue/solid'

import setLink from '@/Jetstream/SetLink.vue';
import SalePanel from '@/Jetstream/SalePanel.vue';




defineProps({
    confirmsTwoFactorAuthentication: Boolean,
    sessions: Array,
});
</script>

<template>
    <AppLayout title="Profile">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Profile
            </h2>
        </template>

        <div class="relative overflow-auto flex-1 flex">
            <div class="h-full shrink-0 bg-white py-4 px-2 box-border sticky top-0 z-10 sl1:max-w-[144px] sl1:min-w-[120px] shadow-3xl">
                <a href="" class="flex flex-col mb-4 items-center p-3 rounded sl:py-2 sl:px-1 sl:rounded font-semibold text-[15px] leading-5 text-t-link bg-[#deeafa]">
                    <CogIcon class="select-none box-border inline-flex flex-2 h-6 w-6 text-t-link" />
                    <span class="mt-1 text-center items-center max-w-full sl1:flex">Settings</span>
                </a>
            </div>

            <nav class="relative z-10 min-w-[240px] w-setNav">
                <div class="box-border w-[240px] ml-auto py-2 px-0">
                    <div class="py-2 px-6 font-semibold text-[15px] leading-5 text-t-primary uppercase mt-[14px] first:mt-[6px]">Personal</div>

                    <!-- <SetLink :href="route('dashboard')" :active="route().current('dashboard')">
                        <div class="px-3 font-semibold text-[15px] leading-5 last:pr-4">Personal preferences</div>
                    </SetLink>

                    <SetLink :href="route('dashboard')" :active="route().current('dashboard')">
                        <div class="px-3 font-semibold text-[15px] leading-5 last:pr-4">Personal and Login</div>
                    </SetLink> -->
                </div>
            </nav>

            <main class="relative flex flex-1 max-w-[704px] sl1:max-w-[752px]">
                <div class="w-full h-full flex relative z-10">

                    <div class="w-full flex-auto">
                        <div class="flex w-full h-full">
                            <div class="block py-6 px-4">
                                <SalePanel class="rounded-sm">
                                    <div class="block">
                                        <div class="block px-6 pt-6 pb-2">

                                        </div>
                                    </div>
                                </SalePanel>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>



        <div class="bg-blue-600">
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <!-- <div v-if="$page.props.jetstream.canUpdateProfileInformation">
                    <UpdateProfileInformationForm :user="$page.props.user" />

                    <JetSectionBorder />
                </div>

                <div v-if="$page.props.jetstream.canUpdatePassword">
                    <UpdatePasswordForm class="mt-10 sm:mt-0" />

                    <JetSectionBorder />
                </div> -->

                <!-- <div v-if="$page.props.jetstream.canManageTwoFactorAuthentication">
                    <TwoFactorAuthenticationForm 
                        :requires-confirmation="confirmsTwoFactorAuthentication"
                        class="mt-10 sm:mt-0" 
                    />

                    <JetSectionBorder />
                </div> -->

                <LogoutOtherBrowserSessionsForm :sessions="sessions" class="mt-10 sm:mt-0" />

                <template v-if="$page.props.jetstream.hasAccountDeletionFeatures">
                    <JetSectionBorder />

                    <DeleteUserForm class="mt-10 sm:mt-0" />
                </template>
            </div>
        </div>
    </AppLayout>
</template>
