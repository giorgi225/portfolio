<template>
    <div class="w-full max-w-[1300px] mx-auto px-6 mt-12">
        <div @load="load" class="flex flex-col gap-32 mb-32">
            <a href="https://cinemania22.netlify.app/" target="_blank"
                class="hover:scale-x-[0.99] active:scale-x-[1] transition-all w-fill grid grid-cols-[40%,40%] items-start justify-between">
                <div class="flex flex-col gap-12">
                    <div class="flex flex-col">
                        <h4 class="text-2xl">Online Streaming Movie Website Cinemania (DEMO)</h4>
                        <p class="text-base">HTML, CSS, JAVASCRIPT</p>
                    </div>
                    <button class="bg-fontColor text-white rounded w-max px-6 py-3 " href="#" target="_blank">
                        <p>View Demo</p>
                    </button>
                </div>

                <div class="relative w-full bg-gray rounded px-16 pt-12">
                    <div class="w-full">
                        <div v-if="!loader" class="absolute w-full bg-gray h-full flex items-center justify-center left-0 top-0">
                            <div class="spiner w-12 h-12 border-2 border-fontColor border-r-transparent rounded-full"></div>
                        </div>
                        <img src="../assets/images/works/cinemania.png" alt="">
                    </div>
                </div>
            </a>

            <a href="https://giorgi-tm-todo.netlify.app/" target="_blank"
                class="hover:scale-x-[0.99] active:scale-x-[1] transition-all w-fill grid grid-cols-[40%,40%] items-start justify-between">
                <div class="flex flex-col gap-12">
                    <div class="flex flex-col">
                        <h4 class="text-2xl">One page ToDo Application (DEMO)</h4>
                        <p class="text-base">ReactJs, Tailwind CSS</p>
                    </div>
                    <button class="bg-fontColor text-white rounded w-max px-6 py-3 " href="#" target="_blank">
                        <p>View Demo</p>
                    </button>
                </div>

                <div class="relative w-full bg-gray rounded px-16 pt-12">
                    <div class="w-full">
                        <div v-if="!loader" class="absolute w-full bg-gray h-full flex items-center justify-center left-0 top-0">
                            <div class="spiner w-12 h-12 border-2 border-fontColor border-r-transparent rounded-full"></div>
                        </div>
                        <img src="../assets/images/works/todo.png" alt="">
                    </div>
                </div>
            </a>

            <a href="https://giorgi-tm-todo.netlify.app/" target="_blank"
                class="hover:scale-x-[0.99] active:scale-x-[1] transition-all w-fill grid grid-cols-[40%,40%] items-start justify-between">
                <div class="flex flex-col gap-12">
                    <div class="flex flex-col">
                        <h4 class="text-2xl">One page Quiz Application (DEMO)</h4>
                        <p class="text-base">ReactJs, Tailwind CSS</p>
                    </div>
                    <button class="bg-fontColor text-white rounded w-max px-6 py-3 " href="#" target="_blank">
                        <p>View Demo</p>
                    </button>
                </div>

                <div class="relative w-full bg-gray rounded px-16 pt-12">
                    <div class="w-full">
                        <div v-if="!loader" class="absolute w-full bg-gray h-full flex items-center justify-center left-0 top-0">
                            <div class="spiner w-12 h-12 border-2 border-fontColor border-r-transparent rounded-full"></div>
                        </div>
                        <img src="../assets/images/works/quiz.png" alt="">
                    </div>
                </div>
            </a>

            <a href="https://trendy22.netlify.app/#/" target="_blank"
                class="hover:scale-x-[0.99] active:scale-x-[1] transition-all w-fill grid grid-cols-[40%,40%] items-start justify-between">
                <div class="flex flex-col gap-12">
                    <div class="flex flex-col">
                        <h4 class="text-2xl">Trendy - Personal Portfolio Website Template (DEMO)</h4>
                        <p class="text-base">VueJs, Tailwind CSS</p>
                    </div>
                    <button class="bg-fontColor text-white rounded w-max px-6 py-3 " href="#" target="_blank">
                        <p>View Demo</p>
                    </button>
                </div>

                <div class="relative w-full bg-gray rounded px-16 pt-12">
                    <div class="w-full">
                        <div v-if="!loader" class="absolute w-full bg-gray h-full flex items-center justify-center left-0 top-0">
                            <div class="spiner w-12 h-12 border-2 border-fontColor border-r-transparent rounded-full"></div>
                        </div>
                        <img src="../assets/images/works/trendy.png" alt="">
                    </div>
                </div>
            </a>


            <a href="https://porto-wwx2.vercel.app/#/" target="_blank"
                class="hover:scale-x-[0.99] active:scale-x-[1] transition-all w-fill grid grid-cols-[40%,40%] items-start justify-between">
                <div class="flex flex-col gap-12">
                    <div class="flex flex-col">
                        <h4 class="text-2xl">Portos - Personal Portfolio Website Template (DEMO)</h4>
                        <p class="text-base">VueJs, Tailwind CSS</p>
                    </div>
                    <button class="bg-fontColor text-white rounded w-max px-6 py-3 " href="#" target="_blank">
                        <p>View Demo</p>
                    </button>
                </div>

                <div class="relative w-full bg-gray rounded px-16 pt-12">
                    <div class="w-full">
                        <div v-if="!loader" class="absolute w-full bg-gray h-full flex items-center justify-center left-0 top-0">
                            <div class="spiner w-12 h-12 border-2 border-fontColor border-r-transparent rounded-full"></div>
                        </div>
                        <img src="../assets/images/works/porto.png" alt="">
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>


<script>
    export default {
        name: "Works",
        data() {
            return {
                loader : false,
            }
        },
        methods: {
            load() {
                this.loader = true
            }
        }
    }
</script>