<template>
    <!-- icons -->
    <div class="select-none box-border inline-flex flex-2 h-6 w-6">
        <slot />
    </div>

    <!-- panel -->


    <!-- form popover duplicate -->
                                    <div class="items-center inline-flex flex-row next-to-modal absolute top-0 right-auto bottom-auto left-0" style="transform: translate(824px, 88px)">
                                        <div class="pop-inner bg-white rounded text-t-primary font-normal text-[15px] leading-5 max-width-[640px] order-2 overflow-hidden" style="overflow-wrap:break-word">
                                            <div class="block">
                                                <div>
                                                    <header class="p-4 border-b border-solid border-[#e5e5e5]">
                                                        <div class="relative text-t-primary font-normal text-[15px] leading-5">
                                                            <h5 class="text-t-primary mt-0 mb-2 font-semibold text-[15] leading-5">Possible duplicate</h5>
                                                            <button
                                                                class="items-center box-border inline-flex justify-center m-0 p-1 text-center select-none align-top py-0 px-1 absolute -right-[6px] -top-[6px] cursor-pointer font-semibold h-6 min-w-[24px] bg-transparent border-0 hover:bg-gray-200 rounded"
                                                            >
                                                                <XIcon class="select-none inline-flex flex-2 h-4 w-4 shrink-0 text-[#26292ca3] p-0" />
                                                            </button>
                                                        </div>
                                                    </header>

                                                    <div>
                                                        <div>
                                                            <div>
                                                                <span>
                                                                    <span>Duplicate</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <a href="" target="_blank">
                                                                <!-- <ExternalLinkIcon /> -->
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <footer class="py-2 px-4 bg-[#f7f7f7] flex items-center">
                                                        <label for="" class="box-border inline-flex font-normal text-[15px] leading-5">
                                                            <input type="checkbox" name="" id="" class="">
                                                        </label>
                                                        <span class="pl-2">Show matches as i type</span>
                                                    </footer>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--  -->
</template>