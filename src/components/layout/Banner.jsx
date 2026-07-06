import React from 'react'

const Banner = () => {
    return (
        <div>
            <section aria-labelledby="banner-heading" className="px-4 md:px-8 mt-6">
                <div className="bg-white-100 relative max-w-7xl mx-auto rounded-lg overflow-hidden dark:bg-neutral-800">
                    <div className="grid gap-6 gap-y-12 py-12 px-6 sm:grid-cols-2">

                        <div
                            className="bg-gradient-to-tr from-blue-400 to-blue-700 px-4 py-8 text-center rounded-[30px] w-full max-w-[300px] h-max skew-x-[-10deg] mx-auto shadow-lg shadow-white-400 dark:shadow-none">
                            <span className="text-slate-300 text-4xl block">Big</span>
                            <span className="text-white text-7xl font-bold mt-0.5 block">Sale!</span>
                            <p className="text-slate-300 text-base mt-2 font-medium">Arriving this weekend</p>
                        </div>

                        <div className="text-center">
                            <h2 id="banner-heading" className="font-bold text-3xl text-blue-500 md:text-4xl">Special Offer</h2>
                            <span className="text-xl text-blue-500 font-medium block mt-2 md:text-2xl">Limited Time Deal</span>
                            <p className="text-slate-600 text-base mt-4 dark:text-slate-400">Discover amazing discounts and deals. Don't miss
                                out on our exclusive offers.</p>

                            <div className="mt-8">
                                <button href="#" className="bg-gradient-to-r hover:bg-gradient-to-l from-blue-400 to-blue-600 inline-block text-white font-semibold text-sm py-2 px-3.5 rounded-md hover:bg-blue-500
            focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner
