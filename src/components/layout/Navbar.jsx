import React from 'react'

const Navbar = () => {
    return (
        <nav
            class="flex py-2 px-4 md:px-8 bg-white border-b border-slate-300 dark:border-neutral-700 dark:bg-neutral-900 min-h-[68px] relative z-20"
            aria-label="Main navigation">
            <div class="max-w-7xl mx-auto flex flex-wrap items-center gap-4 w-full">
                <button  to="#"
                    class="min-w-9 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                    <span class="sr-only">E-Store</span>
                    <img src="https://readymadeui.com/logo-alt.svg" alt="readymadeui logo" class="h-9 w-auto" />
                </button >

                <form class="max-w-xl mx-auto w-full" role="search">
                    <div
                        class="flex items-center gap-2.5 px-3 py-2.5 rounded-md bg-white dark:bg-neutral-800 outline-1 -outline-offset-1 outline-slate-300 dark:outline-neutral-700 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-600">
                        <label for="search" class="sr-only">Search</label>
                        <input type="search" id="search" placeholder="Search..." required
                            class="text-sm text-slate-900 dark:text-slate-50 w-full outline-none" />

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" class="size-4 fill-slate-400 ml-auto"
                            aria-hidden="true">
                            <path
                                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                            </path>
                        </svg>
                    </div>
                </form>

                <div id="collapseMenu" tabindex="-1"
                    class="hidden lg:block max-lg:bg-white dark:max-lg:bg-neutral-900 max-lg:border-l max-lg:border-slate-300 dark:max-lg:border-neutral-700 max-lg:w-1/2 max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto max-sm:w-full z-50 outline-none">

                    <div
                        class="py-2 px-4 flex justify-between items-center border-b border-slate-300 sticky top-0 bg-white dark:border-neutral-700 dark:bg-neutral-900 lg:hidden max-lg:min-h-[68px]">
                        <button  to="#"
                            class="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                            <span class="sr-only">E-Store</span>
                            <img src="https://readymadeui.com/logo-alt.svg" alt="readymadeui logo" class="h-9 w-auto" />
                        </button >
                        <button type="button" aria-controls="collapseMenu" id="toggleClose"
                            class="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                            <span class="sr-only">Close main menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="size-4 fill-slate-900 dark:fill-slate-50"
                                aria-hidden="true" viewBox="0 0 329.269 329">
                                <path
                                    d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"
                                    data-original="#000000" />
                            </svg>
                        </button>
                    </div>



                    <ul
                        class="flex flex-col gap-8 font-semibold text-sm text-slate-900 dark:text-slate-50 lg:flex-row max-lg:p-6 lg:ml-12">
                        <li>
                            <button  to="#"
                                class="hover:text-blue-700 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                                aria-current="page">Home</button >
                        </li>

                        <li>
                            <button  to="#"
                                class="hover:text-blue-700 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                                aria-current="page">Products</button >
                        </li>

                        <li>
                            <button  to="#"
                                class="hover:text-blue-700 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                                aria-current="page">Categories</button >
                        </li>
                    </ul>
                </div>

                <div class="flex items-center gap-4 ml-auto">

                    <div class="flex items-center gap-4 pr-2">
                        <button  to="#"
                            class="flex flex-col items-center justify-center gap-0.5 text-[13px] font-semibold text-slate-900 hover:text-blue-700 dark:text-slate-50 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                            <div class="relative">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="cursor-pointer fill-current dark:fill-current inline w-5 h-5" viewBox="0 0 489 489"
                                    aria-hidden="true">
                                    <path
                                        d="m440.1 422.7-28-315.3c-.6-7-6.5-12.3-13.4-12.3h-57.6C340.3 42.5 297.3 0 244.5 0s-95.8 42.5-96.6 95.1H90.3c-7 0-12.8 5.3-13.4 12.3l-28 315.3c0 .4-.1.8-.1 1.2 0 35.9 32.9 65.1 73.4 65.1h244.6c40.5 0 73.4-29.2 73.4-65.1 0-.4 0-.8-.1-1.2zM244.5 27c37.9 0 68.8 30.4 69.6 68.1H174.9c.8-37.7 31.7-68.1 69.6-68.1zm122.3 435H122.2c-25.4 0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h139.3v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h45.2l26.9 302.3c-.4 20.7-21.1 37.5-46.4 37.5z"
                                        data-original="#000000" />
                                </svg>
                                <span
                                    class="absolute left-auto -ml-1 -top-0.5 rounded-full bg-red-500 px-1 py-0 text-xs text-white font-medium">3</span>
                            </div>
                            <span>Cart</span>
                        </button >
                    </div>


                    <button  to="#"
                        class="">
                        <i class="m-3 fa-regular fa-user"></i>
                        Login
                    </button >

                    <button type="button" aria-controls="collapseMenu" aria-expanded="false" aria-haspopup="true" id="toggleOpen"
                        class="cursor-pointer lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                        <span class="sr-only">Open main menu</span>
                        <svg class="size-7 fill-slate-900 dark:fill-slate-50" aria-hidden="true" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
