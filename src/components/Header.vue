<template>
    <header class="w-full sticky top-0 z-50 bg-light transition-all" :class="scroll ? 'shadow-header' : ''">
        <div class="flex flex-center justify-between max-w-[1300px] mx-auto px-6 py-6">
            <h1 class="uppercase text-xl">
                <a href="/">
                    <span class="font-extrabold">gigi's</span> portfolio
                </a>
            </h1>

            <nav class="flex text-sm">
                <ul class="flex items-center gap-6">
                    <li>
                        <router-link :class="isActive === 'Home' ? 'before:w-full' : 'before:w-0'" class="nav-link relative flex before:absolute before:top-[calc(100%+2px)] before:content-[''] before:h-[1px] before:bg-fontColor before:rounded before:hover:w-full hover:scale-[1.05] before:transition-all active:scale-[0.9] transition-all" to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link :class="isActive === 'About' ? 'before:w-full' : 'before:w-0'" class="nav-link relative flex before:absolute before:top-[calc(100%+2px)] before:content-[''] before:h-[1px] before:bg-fontColor before:rounded before:hover:w-full hover:scale-[1.05] before:transition-all active:scale-[0.9] transition-all" to="about">About</router-link>
                    </li>
                    <li>
                        <router-link :class="isActive === 'Resume' ? 'before:w-full' : 'before:w-0'" class="nav-link relative flex before:absolute before:top-[calc(100%+2px)] before:content-[''] before:h-[1px] before:bg-fontColor before:rounded before:hover:w-full hover:scale-[1.05] before:transition-all active:scale-[0.9] transition-all" to="resume">Resume</router-link>
                    </li>
                    <li>
                        <router-link :class="isActive === 'Works' ? 'before:w-full' : 'before:w-0'" class="nav-link relative flex before:absolute before:top-[calc(100%+2px)] before:content-[''] before:h-[1px] before:bg-fontColor before:rounded before:hover:w-full hover:scale-[1.05] before:transition-all active:scale-[0.9] transition-all" to="works">Works</router-link>
                    </li>
                    <li>
                        <router-link :class="isActive === 'Contact' ? 'before:w-full' : 'before:w-0'" class="nav-link relative flex before:absolute before:top-[calc(100%+2px)] before:content-[''] before:h-[1px] before:bg-fontColor before:rounded before:hover:w-full hover:scale-[1.05] before:transition-all active:scale-[0.9] transition-all" to="contact">Contact</router-link>
                    </li>
                </ul>
            </nav>

            <div class="flex items-center gap-2">
                <a class="p-2" href="https://www.facebook.com/gigi.shalamberidze.3" target="_blank">
                    <Icon class="text-base hover:scale-[1.1] active:scale-[0.9] transition-all" icon="gg:facebook"/>
                </a>
                <a class="p-2" href="https://www.linkedin.com/in/gigi-shalamberidze-b47a27260/" target="_blank">
                    <Icon class="text-base hover:scale-[1.1] active:scale-[0.9] transition-all" icon="akar-icons:linkedin-fill"/>
                </a>
                <a class="p-2" href="https://twitter.com/Giorgi225__" target="_blank">
                    <Icon class="text-base hover:scale-[1.1] active:scale-[0.9] transition-all" icon="mdi:twitter"/>
                </a>
                <a class="p-2" href="https://github.com/giorgi225" target="_blank">
                    <Icon class="text-base hover:scale-[1.1] active:scale-[0.9] transition-all" icon="mingcute:github-fill"/>
                </a>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                active: '',
                scroll: false,
            }
        },
        computed: {
            isActive() {
                return this.$route.name
            },
        },
        mounted() {
            this.scrollPos()
        },
        methods: {
            scrollPos() {
                window.addEventListener('scroll', (e)=> {
                    if(window.scrollY >= 50) {
                        this.scroll = true
                    }else {
                        this.scroll = false
                    }
                })
            }
        }
    }
</script>