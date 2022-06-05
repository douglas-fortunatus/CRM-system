<template>
    <div class="mt-2 first:mt-0">
        <slot name="label" />

        <div class="relative box-border font-normal text-[15px] leading-5 w-full">
            <div class="relative flex items-center">
                <slot name="inp"/>
            </div>
        </div>
    </div>
</template>