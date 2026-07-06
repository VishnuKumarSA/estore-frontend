import React from 'react'

const Checkout = () => {
    return (
        <div>
            <main>
                <h1 class="sr-only">Checkout</h1>
                <div class="px-4 md:px-8 mt-6">
                    <div class="max-w-xl md:max-w-7xl mx-auto">

                       
                        <ol class="flex items-start max-w-4xl mb-16" aria-label="Progress">

                            <li class="w-full">
                                <div class="flex items-center w-full relative">
                                    <div
                                        class="w-6 h-6 shrink-0 bg-blue-700 flex items-center justify-center rounded-full md:w-7 md:h-7 dark:bg-blue-500">
                                        <span class="sr-only">Step 1: Completed</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"
                                            aria-hidden="true">
                                            <path
                                                d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                                        </svg>
                                    </div>
                                    <div class="w-full h-0.5 mx-2 rounded-md bg-blue-700 sm:mx-4 dark:bg-blue-500"></div>
                                </div>

                                <div class="mt-3 mr-4">
                                    <p class="text-sm font-semibold text-blue-700 dark:text-blue-500">Cart</p>
                                </div>
                            </li>

                            <li class="w-full" aria-current="step">
                                <div class="flex items-center w-full relative">
                                    <div
                                        class="w-6 h-6 shrink-0 bg-blue-700 flex items-center justify-center rounded-full md:w-7 md:h-7 dark:bg-blue-500">
                                        <span class="sr-only">Step 2: In Progress</span>
                                        <span class="w-3 h-3 bg-white rounded-full" aria-hidden="true"></span>
                                    </div>
                                    <div class="w-full h-0.5 mx-2 rounded-md bg-slate-300 sm:mx-4 dark:bg-neutral-700"></div>
                                </div>

                                <div class="mt-3 mr-4">
                                    <p class="text-sm font-semibold text-blue-700 dark:text-blue-500">Checkout</p>
                                </div>
                            </li>

                            <li>
                                <div
                                    class="w-6 h-6 shrink-0 bg-slate-300 flex items-center justify-center rounded-full md:w-7 md:h-7 dark:bg-neutral-700">
                                    <span class="sr-only">Step 3</span>
                                    <span class="text-sm text-slate-400 font-semibold" aria-hidden="true">3</span>
                                </div>

                                <div class="mt-3">
                                    <p class="text-sm font-semibold text-slate-600 dark:text-slate-400">Order</p>
                                </div>
                            </li>

                        </ol>

                        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 lg:gap-x-12">
                            <div class="lg:col-span-2">
                                
                                <section class="w-full h-max">
                                    <form>
                                        <fieldset>
                                            <legend class="text-xl text-slate-900 font-semibold mb-6 dark:text-slate-50">Delivery
                                                Details
                                            </legend>
                                            <div class="grid lg:grid-cols-2 gap-6">
                                                <div>
                                                    <label for="fname"
                                                        class="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">First
                                                        Name</label>
                                                    <input type="text" id="fname" name="fname" placeholder="John" required
                                                        class="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                                                </div>
                                                <div>
                                                    <label for="lname"
                                                        class="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Last
                                                        Name</label>
                                                    <input type="text" id="lname" name="lname" placeholder="Doe" required
                                                        class="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                                                </div>
                                                <div>
                                                    <label for="email"
                                                        class="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Email</label>
                                                    <input type="email" id="email" name="email" placeholder="john@readymadeui.com"
                                                        required
                                                        class="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                                                </div>
                                                <div>
                                                    <label for="mobile"
                                                        class="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Mobile
                                                        Number</label>
                                                    <input type="tel" id="mobile" name="mobile" placeholder="123-456-7890" required
                                                        class="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                                                </div>
                                                <div>
                                                    <label for="address"
                                                        class="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Address
                                                        Line</label>
                                                    <input type="text" id="address" name="address" placeholder="123 Main Street"
                                                        required
                                                        class="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                                                </div>
                                                <div>
                                                    <label for="city"
                                                        class="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">City</label>
                                                    <input type="text" id="city" name="city" placeholder="New York" required
                                                        class="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                                                </div>
                                                <div>
                                                    <label for="state"
                                                        class="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">State</label>
                                                    <input type="text" id="state" name="state" placeholder="NY" required
                                                        class="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                                                </div>
                                                <div>
                                                    <label for="postal-code"
                                                        class="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Postal
                                                        code</label>
                                                    <input type="text" id="postal-code" name="postal-code" placeholder="10001"
                                                        required
                                                        class="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                                                </div>
                                            </div>
                                        </fieldset>

                                       
                                        <fieldset class="mt-12">
                                            <legend class="text-xl text-slate-900 font-semibold mb-6 dark:text-slate-50">Payment
                                                method
                                            </legend>
                                            <div class="grid gap-4 lg:grid-cols-2">
                                                <div class="flex items-center">
                                                    <input type="radio" name="method" id="card"
                                                        class="w-[18px] h-[18px] appearance-none rounded-full border border-slate-300 bg-white focus:outline-blue-500 checked:ring-2 checked:ring-inset checked:ring-white checked:bg-blue-600 dark:checked:ring-neutral-900 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-600"
                                                        checked />
                                                    <label for="card" class="ml-4 flex gap-2 cursor-pointer">
                                                        <img src="https://readymadeui.com/images/visa.webp" class="w-12"
                                                            alt="visa" />
                                                        <img src="https://readymadeui.com/images/american-express.webp" class="w-12"
                                                            alt="american-express" />
                                                        <img src="https://readymadeui.com/images/master.webp" class="w-12"
                                                            alt="master" />
                                                    </label>
                                                </div>

                                                <div class="flex items-center">
                                                    <input type="radio" name="method" id="paypal"
                                                        class="w-[18px] h-[18px] appearance-none rounded-full border border-slate-300 bg-white focus:outline-blue-500 checked:ring-2 checked:ring-inset checked:ring-white checked:bg-blue-600 dark:checked:ring-neutral-900 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-600" />
                                                    <label for="paypal" class="ml-4 flex gap-2 cursor-pointer">
                                                        <img src="https://readymadeui.com/images/paypal.webp" class="w-20"
                                                            alt="paypalCard" />
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>

                                       
                                        <label class="inline-flex items-center group has-[input:checked]:text-slate-900 mt-6">
                                            <input id="billing-address" name="billing-address" type="checkbox" required
                                                class="sr-only" checked />
                                           
                                            <span
                                                class="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 dark:outline-neutral-700 bg-white dark:bg-neutral-800 group-has-[input:checked]:bg-blue-600 group-has-[input:checked]:outline-blue-600 group-focus-within:outline-2 group-focus-within:outline-blue-600"
                                                aria-hidden="true">
                                                
                                                <svg class="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                                                    viewBox="0 0 12 10" fill="none" stroke="currentColor" stroke-width="2">
                                                    <path d="M1 5l3 3 7-7" />
                                                </svg>
                                            </span>
                                            <span class="ml-3 text-sm text-slate-700 dark:text-slate-300">
                                                Billing address is the same as shipping address
                                            </span>
                                        </label>
                                    </form>

                                    
                                    <form class="max-w-sm mt-8">
                                        <label for="promocode"
                                            class="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-50">Do you
                                            have a promo code?</label>
                                        <div class="flex flex-col gap-4 sm:items-center sm:flex-row">
                                            <input type="text" id="promocode" name="promocode" required
                                                placeholder="Enter promo code"
                                                class="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                                            <button type="submit"
                                                class="py-2 px-3.5 text-sm w-max rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Apply</button>
                                        </div>
                                    </form>
                                </section>
                            </div>

                            
                            <div class="relative h-max md:sticky top-0">
                                <h2 class="text-xl text-slate-900 font-semibold mb-6 dark:text-slate-50">Order Summary</h2>
                                <ul class="text-slate-500 font-medium space-y-4 dark:text-slate-400">
                                    <li class="flex flex-wrap gap-4 text-sm">Subtotal <span
                                        class="ml-auto font-semibold text-slate-900 dark:text-slate-50">$72.00</span></li>
                                    <li class="flex flex-wrap gap-4 text-sm">Discount <span
                                        class="ml-auto font-semibold text-slate-900 dark:text-slate-50">$0.00</span></li>
                                    <li class="flex flex-wrap gap-4 text-sm">Shipping <span
                                        class="ml-auto font-semibold text-slate-900 dark:text-slate-50">$6.00</span></li>
                                    <li class="flex flex-wrap gap-4 text-sm">Tax <span
                                        class="ml-auto font-semibold text-slate-900 dark:text-slate-50">$5.00</span></li>
                                    <hr class="border-slate-300 dark:border-neutral-700" />
                                    <li class="flex flex-wrap gap-4 text-sm font-semibold text-slate-900 dark:text-slate-50">Total
                                        <span class="ml-auto dark:text-slate-50">$83.00</span>
                                    </li>
                                </ul>
                                <div class="mt-6">
                                    <button type="button"
                                        class="w-full px-3.5 py-2 text-white text-sm font-semibold rounded-md cursor-pointer bg-blue-600 hover:bg-blue-700 border border-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Pay
                                        now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Checkout
