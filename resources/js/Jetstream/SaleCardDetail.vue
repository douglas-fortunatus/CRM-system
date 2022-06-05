<template>
    <li class="flex justify-between items-center py-[6px] px-0 min-h-[24px] relative">

        <slot name="card-label" />

        <div class="flex-grow text-left text-[15px] pr-4 w-[49.5rem] min-w-[49.5rem]">
            <div id="form-field">
                <div class="relative flex items-center w-full justify-between">
                    <div id="text" class="text-[15px] font-normal leading-5 text-[#26292c] w-full mr-2">

                        <slot name="cardValue" />

                    </div>

                    <div id="editBtn" class="" style="visibility:hidden">
                        <button id="edit"></button>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>