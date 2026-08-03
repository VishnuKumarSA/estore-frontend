import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="mt-24 border-t border-slate-200 bg-white">
                <div className="max-w-7xl mx-auto px-4 py-8">

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                        <div>
                            <h2 className="text-xl font-bold text-blue-600">
                                eStore
                            </h2>
                            <p className="text-sm text-slate-500 mt-1">
                                Shop with confidence. Fast delivery & secure payments.
                            </p>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-slate-600">
                            <a href="/" className="hover:text-blue-600">
                                Home
                            </a>

                            <a href="/products" className="hover:text-blue-600">
                                Products
                            </a>

                            <a href="/cart" className="hover:text-blue-600">
                                Cart
                            </a>

                            <a href="/contact" className="hover:text-blue-600">
                                Contact
                            </a>
                        </div>

                    </div>

                    <div className="mt-6 border-t border-slate-200 pt-4 text-center text-sm text-slate-500">
                        © {new Date().getFullYear()} eStore. All Rights Reserved.
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer
