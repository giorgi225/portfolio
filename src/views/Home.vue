<template>
    <div class="w-full flex items-center justify-center p-16">
        <div class="flex flex-col items-center gap-4">
            <div class="relative upDown w-[110px] h-[110px] rounded-full border-2 border-fontColor bg-gray">
                <div class="upDown absolute flex items-center gap-2 -right-[50px]">
                    <div class="w-4 h-4 rounded-full bg-green-400"></div>
                    <div class="px-2 py-1 text-xs rounded bg-green-400 text-white">Online</div>
                </div>
                <img class="w-full h-full rounded-full " src="../assets/images/profile/avatar.png" alt="avatar">
            </div>
            <div class="upDown flex items-center gap-2">
                <Icon class="text-xl" icon="material-symbols:location-on-outline-rounded" />
                <p class="text-base">Tbilisi, GE | {{ time }} - {{ day }}, {{ date }} {{ month }} 2023</p>
                <br>
            </div>
            <h2 class="scale-up uppercase font-extrabold text-[48px]">Gigi shalamberidze</h2>
            <h3 class="downUp uppercase font-bold text-[28px]"><span class="font-normal">Frontend</span> developer</h3>

            <div class="flex items-center gap-16 mt-12">
                <router-link to="/"
                    class="ripple-btn step-down hover:bg-white transition-all uppercase bg-cream px-12 py-3 text-base border-b-2 border-fontColor">
                    Contact me
                </router-link>
                <router-link to="/"
                    class="ripple-btn step-down hover:bg-white transition-all uppercase bg-cream px-12 py-3 text-base border-b-2 border-fontColor">
                    Download CV
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                time: "",
                date: "",
                day: "",
                month: ""
            }
        },
        mounted() {
            this.gettime()
            this.getdate()
            this.getday()
            this.getmonth()

            setInterval(()=> {
                this.gettime();
            },1000)

            setInterval(()=> {
                this.getdate()
            this.getday()
            this.getmonth()
            },30000)
            var btn = document.querySelectorAll('.ripple-btn');
            btn.forEach(el => {
                el.style.position = 'relative';
                el.style.overflow = 'hidden';
                el.addEventListener('click', function (e) {
                    var x = e.offsetX;
                    var y = e.offsetY;

                    var ripples = document.getElementsByClassName('ripple');

                    if (ripples.length < 10) { // this restricts the user from creating lots of ripples
                        var ripple = document.createElement('span');
                        ripple.classList.add('ripple');
                        ripple.style.left = x + 'px';
                        ripple.style.top = y + 'px';
                        this.appendChild(ripple);

                        setTimeout(function () {
                            ripple.remove();
                        }, 1000);
                    }
                });
            })
        },
        methods: {
            gettime() {
                return this.time = new Date().getHours() + ":" + new Date().getMinutes()
            },
            getdate() {
                return this.date = new Date().getDate()
            },
            getday() {
                var date = new Date();
                var daysOfWeek = ["Sun", "Mon", "Tuesday", "Wed", "Thu", "Fri", "Sat"];
                var day = daysOfWeek[date.getDay()];
                return this.day = day
            },
            getmonth() {
                var date = new Date();
                var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
                    "October", "November", "December"
                ];
                var month = months[date.getMonth()];
                return this.month = month

            }
        }
    }
</script>