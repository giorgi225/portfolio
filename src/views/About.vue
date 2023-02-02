<template>
    <div class="w-full max-w-[1300px] mx-auto px-6 mt-12">
        <div class="grid grid-cols-2 gap-16">
            <div class="relative">
                <div class="bg-cream02 px-4 py-2 border-b border-fontColor mb-4">
                    <p class="text-base uppercase">Summery</p>
                </div>
                <div class="flex flex-col gap-4">
                    <p class="text-sm">As a front-end developer with 7 years of experience, i have a wide range of skills including (<strong>HTML, CSS, JavaScript, jQuery, Bootstrap, Tailwind CSS, React, Vue, PHP, Laravel</strong>). </p>
                    <p class="text-sm">my extensive experience in these technologies allows me to create a variety of websites and i am a valuable asset to any development work.</p>
                </div>
            </div>

            <div class="relative">
                <div class="bg-cream02 px-4 py-2 border-b border-fontColor mb-4">
                    <p class="text-base uppercase">Personal Info</p>
                </div>
                <div class="flex flex-wrap gap-x-12 gap-y-4">
                    <p class="text-sm">First Name   <span class="mx-3">. . .</span>   <strong>Giorgi</strong> </p>
                    <p class="text-sm">Last Name   <span class="mx-3">. . .</span>   <strong>Shalamberidze</strong> </p>
                    <p class="text-sm">E-mail   <span class="mx-3">. . .</span>   <strong><a href="mailto:gigi.shalamberidze2022@gmail.com">gigi.shalamberidze2022@gmail.com</a></strong> </p>
                    <p class="text-sm">Residence   <span class="mx-3">. . .</span>   <strong>GEORGIA</strong> </p>
                    <p class="text-sm">Address   <span class="mx-3">. . .</span>   <strong>Tbilisi</strong> </p>
                    <p class="text-sm">Phone   <span class="mx-3">. . .</span>   <strong>574-17-51-88</strong> </p>
                    <p class="text-sm">Freeelance  <span class="mx-3">. . .</span>   <strong class="text-green-400">Available</strong> </p>
                </div>
            </div>
        </div>
        
        <h3 class="mt-24 mb-8 text-2xl font-bold text-center">Achievements</h3>
        <div class="w-full grid grid-cols-3 gap-12">
            <div class="w-full flex items-center flex-col gap-2 p-12 rounded bg-cream02">
                <Icon class="text-5xl" icon="ri:award-fill"/>
                <div class="flex flex-col items-center">
                    <p class="uppercase text text-base">Experience</p>
                    <p class="uppercase text font-bold text-3xl">5 year</p>
                </div>
            </div>

            <div class="w-full flex items-center flex-col gap-2 p-12 rounded bg-cream02">
                <Icon class="text-5xl" icon="ph:handshake-fill"/>
                <div class="flex flex-col items-center">
                    <p class="uppercase text text-base">Projects</p>
                    <p class="uppercase text font-bold text-3xl">30+</p>
                </div>
            </div>

            <div class="w-full flex items-center flex-col gap-2 p-12 rounded bg-cream02">
                <Icon class="text-5xl" icon="mdi:users-group"/>
                <div class="flex flex-col items-center">
                    <p class="uppercase text text-base">Happy Clients</p>
                    <p class="uppercase text font-bold text-3xl">54+</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>