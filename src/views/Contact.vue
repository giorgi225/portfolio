<template>
    <div class="w-full max-w-[1300px] mx-auto px-6 mt-12">
        <div class="grid grid-cols-2 gap-16">
            <div class="relative">
                <div class="py-2">
                    <p class="text-lg text-base uppercase">Contact Details</p>
                </div>
                <div class="flex flex-col items-start gap-4 mt-6">
                    <p>Email: <a class="font-bold"
                            href="mailto:gigi.shalamberidze2022@gmail.com">gigi.shalamberidze2022@gmail.com</a></p>
                    <p>Phone: <a class="font-bold" href="tel:574-17-88">574-17-88</a></p>
                </div>
            </div>

            <div class="relative">
                <div class="py-2">
                    <p class="text-lg text-base uppercase">Get in touch</p>
                </div>

                <div class="flex flex-col mt-6">
                    <form @submit.prevent="submitForm">
                        <div class="flex flex-col gap-4">
                            <div class="w-full">
                                <input v-model="form.name" type="text" placeholder="Your Name"
                                    class="w-full px-4 py-3 rounded bg-gray opacity-80 focus:opacity-100 transition-all border border-transparent focus:border-fontColor outline-none">
                                <p class="text-sm mt-1 text-red-400" v-if="errors.name">{{ errors.name }}</p>
                            </div>
                            <div class="w-full">
                                <input v-model="form.email" type="email" placeholder="Your Email"
                                    class="w-full px-4 py-3 rounded bg-gray opacity-80 focus:opacity-100 transition-all border border-transparent focus:border-fontColor outline-none">
                                <p class="text-sm mt-1 text-red-400" v-if="errors.email">{{ errors.email }}</p>
                            </div>
                            <div class="w-full">
                                <input v-model="form.subject" type="text" placeholder="Subject"
                                    class="w-full px-4 py-3 rounded bg-gray opacity-80 focus:opacity-100 transition-all border border-transparent focus:border-fontColor outline-none">
                                <p class="text-sm mt-1 text-red-400" v-if="errors.subject">{{ errors.subject }}</p>
                            </div>
                            <div class="w-full">
                                <textarea v-model="form.message" type="text" placeholder="Message here..."
                                    class="w-full px-4 py-3 rounded bg-gray opacity-80 focus:opacity-100 transition-al border border-transparent focus:border-fontColor outline-none"></textarea>
                                <p class="text-sm mt-1 text-red-400" v-if="errors.message">{{ errors.message }}</p>
                            </div>

                            <button :type="submit ? 'submit' : 'button'"
                                class="w-full rounded p-4 bg-fontColor text-light opacity-80 hover:opacity-100 transition-all">{{ submit ? 'Submit' : 'sending' }}</button>
                        </div>
                    </form>
                    <div v-if="successMessage" class="p-4 bg-green-400 text-white">message sent successfully</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const WEB3FORMS_ACCESS_KEY = "009742c1-b62c-44be-849d-a532d0501f1e";

    export default {
        data() {
            return {
                sendMessage: true,
                submit: true,
                errors: [],
                form: {
                    name: "",
                    email: "",
                    message: "",
                },
                successMessage: false,
            };
        },
        methods: {
            async submitForm() {
                if (this.form.name === '') {
                    this.errors['name'] = 'Please fill name field'
                    this.sendMessage = false
                } else {
                    this.errors['name'] = ''
                }

                if (this.form.email === '') {
                    this.errors['email'] = 'Please fill email field'
                    this.sendMessage = false
                } else {
                    this.errors['email'] = ''
                }

                if (this.form.subject === '') {
                    this.errors['subject'] = 'Please fill subject field'
                    this.sendMessage = false
                } else {
                    this.errors['subject'] = ''
                }

                if (this.form.message === '') {
                    this.errors['message'] = 'Please fill message field'
                    this.sendMessage = false
                } else {
                    this.errors['message'] = ''
                }


                if (this.errors.name.length === 0 && this.errors.email.length === 0 && this.errors.subject.length === 0 && this.errors.message.length === 0) {
                    this.submit = false
                    await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        access_key: WEB3FORMS_ACCESS_KEY,
                        name: this.form.name,
                        email: this.form.email,
                        message: this.form.message + ` (subject: ${this.form.subject} )`,
                    }),
                }).then((res)=> {
                    this.submit = true
                    this.successMessage = true
                    setTimeout(()=> {
                        this.successMessage = false
                    },2500)
                    this.form.name = ''
                    this.form.email = ''
                    this.form.subject = ''
                    this.form.message = ''
                })
                // const result = await response.json();
                }
            },
        },
    };
</script>


<!-- <template>
    <div class="w-full max-w-[1300px] mx-auto px-6 mt-12">
        <div class="grid grid-cols-2 gap-16">
            <div class="relative">
                <div class="py-2">
                    <p class="text-lg text-base uppercase">Contact Details</p>
                </div>
                <div class="flex flex-col items-start gap-4 mt-6">
                    <p>Email: <a class="font-bold"
                            href="mailto:gigi.shalamberidze2022@gmail.com">gigi.shalamberidze2022@gmail.com</a></p>
                    <p>Phone: <a class="font-bold" href="tel:574-17-88">574-17-88</a></p>
                </div>
            </div>

            <div class="relative">
                <div class="py-2">
                    <p class="text-lg text-base uppercase">Get in touch</p>
                </div>

                <div class="flex flex-col mt-6">
                    <form @submit.prevent="submitForm">
                        <div class="flex flex-col gap-4">
                            <div class="w-full">
                                <input v-model="form.name" type="text" placeholder="Your Name"
                                    class="w-full px-4 py-3 rounded bg-gray opacity-80 focus:opacity-100 transition-all border border-transparent focus:border-fontColor outline-none">
                                <p class="text-sm mt-1 text-red-400" v-if="errors.name">{{ errors.name }}</p>
                            </div>
                            <div class="w-full">
                                <input v-model="form.email" type="email" placeholder="Your Email"
                                    class="w-full px-4 py-3 rounded bg-gray opacity-80 focus:opacity-100 transition-all border border-transparent focus:border-fontColor outline-none">
                                <p class="text-sm mt-1 text-red-400" v-if="errors.email">{{ errors.email }}</p>
                            </div>
                            <div class="w-full">
                                <input v-model="form.subject" type="text" placeholder="Subject"
                                    class="w-full px-4 py-3 rounded bg-gray opacity-80 focus:opacity-100 transition-all border border-transparent focus:border-fontColor outline-none">
                                <p class="text-sm mt-1 text-red-400" v-if="errors.subject">{{ errors.subject }}</p>
                            </div>
                            <div class="w-full">
                                <textarea v-model="form.message" type="text" placeholder="Message here..."
                                    class="w-full px-4 py-3 rounded bg-gray opacity-80 focus:opacity-100 transition-al border border-transparent focus:border-fontColor outline-none"></textarea>
                                <p class="text-sm mt-1 text-red-400" v-if="errors.message">{{ errors.message }}</p>
                            </div>

                            <button
                                class="w-full rounded p-4 bg-fontColor text-light opacity-80 hover:opacity-100 transition-all">Send
                                Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Contact",
        data() {
            return {
                sendMessage: false,
                errors: [],
                form: {
                    access_key: '009742c1-b62c-44be-849d-a532d0501f1e',
                    name: '',
                    email: '',
                    // subject: '',
                    message: '',
                }
            }
        },
        computed: {
            errors() {
                return this.errors
            }
        },
        methods: {
            sendMail() {
                if (this.form.name === '') {
                    this.errors['name'] = 'Please fill name field'
                    this.sendMessage = false
                } else {
                    this.errors['name'] = ''
                }

                if (this.form.email === '') {
                    this.errors['email'] = 'Please fill email field'
                    this.sendMessage = false
                } else {
                    this.errors['email'] = ''
                }

                if (this.form.subject === '') {
                    this.errors['subject'] = 'Please fill subject field'
                    this.sendMessage = false
                } else {
                    this.errors['subject'] = ''
                }

                if (this.form.message === '') {
                    this.errors['message'] = 'Please fill message field'
                    this.sendMessage = false
                } else {
                    this.errors['message'] = ''
                }

                if (this.errors.name.length === 0 && this.errors.email.length === 0 && this.errors.subject.length ===
                    0 && this.errors.message.length === 0) {
                    this.sendMessage = true
                    return axios.post("https://api.web3forms.com/submit", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                        body: JSON.stringify({
                            access_key: '009742c1-b62c-44be-849d-a532d0501f1e',
                            name: this.form.name,
                            // subject: this.form.subject,
                            email: this.form.email,
                            message: this.form.message,
                        }),
                    });
                }
            },
            async submitForm() {
                if (this.form.name === '') {
                    this.errors['name'] = 'Please fill name field'
                    this.sendMessage = false
                } else {
                    this.errors['name'] = ''
                }

                if (this.form.email === '') {
                    this.errors['email'] = 'Please fill email field'
                    this.sendMessage = false
                } else {
                    this.errors['email'] = ''
                }

                if (this.form.subject === '') {
                    this.errors['subject'] = 'Please fill subject field'
                    this.sendMessage = false
                } else {
                    this.errors['subject'] = ''
                }

                if (this.form.message === '') {
                    this.errors['message'] = 'Please fill message field'
                    this.sendMessage = false
                } else {
                    this.errors['message'] = ''
                }

                if (this.errors.name.length === 0 && this.errors.email.length === 0 && this.errors.subject.length ===
                    0 && this.errors.message.length === 0) {
                        const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        access_key: '009742c1-b62c-44be-849d-a532d0501f1e',
                        name: this.form.name,
                        email: this.form.email,
                        message: this.form.message,
                    }),
                });
                const result = await response.json();
                if (result.success) {
                    console.log(result);
                }
                    }
            },
        }
    }
</script> -->