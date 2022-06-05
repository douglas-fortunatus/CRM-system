<template>
     <!-- side bar -->
            <div>
                <!-- 
                    on toggle
                    left-[216px]
                -->
                <div class="absolute top-0 left-0 bottom-0 w-60 flex-3 z-10 bg-white">
                    <div class="box-border overflow-hidden h-full grid opacity-[1]" style="grid-template-rows: auto min-content">
                        <div class="h-full py-2 px-0 overflow-x-hidden overflow-y-auto">
                            <a href="" class="flex items-center relative box-border select-none rounded min-w-[224px] my-0 mx-2 py-2 pr-0 pl-3 mb-2 last:mb-0">
                                <!-- <UserIcon class="select-none box-border inline-flex flex-2 h-6 w-6 text-[#747678]"> -->
                                <div class="px-3 text-t-primary flex-1 font-normal leading-5 text-[15px] last:pr-4">People</div>
                            </a>

                            <a href="" class="flex items-center relative box-border select-none rounded min-w-[224px] my-0 mx-2 py-2 pr-0 pl-3 mb-2 last:mb-0 bg-[#deeafa]">
                                <OfficeBuildingIcon class="select-none box-border inline-flex flex-2 h-6 w-6 text-t-link"/>
                                <div class="px-3 flex-1 font-normal leading-5 text-[15px] last:pr-4 text-t-link">People</div>
                            </a>
                        </div>
                    </div>

                    <div class="w-[11px] absolute top-0 -right-[3px] bottom-0">
                        <div class="w-full h-full float-right" style="position: relative">
                            <div class="h-full w-full z-30 select-none after:absolute after:top-0 after:left-[7px] after:bottom-0 after:border-[2px] after:border-solid after:border-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!--  -->
</template>