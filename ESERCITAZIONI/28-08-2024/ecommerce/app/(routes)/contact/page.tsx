import React from 'react'

function Form() {
    return (
        <>
            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            <p className="max-w-xl text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit quam non tellus mattis, ut egestas lectus aliquam. Nulla facilisi. Vestibulum vitae est sed ante accumsan accumsan. Suspendisse porttitor erat sapien, ac feugiat nisi aliquam nec. Fusce tincidunt orci eget maximus elementum.  
                            </p>
                           

                            <div className="mt-8">
                                <a href="#" className="text-2xl font-bold text-pink-600"> 0151 475 4450 </a>

                                <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form action="#" className="space-y-4">
                                <div>
                                    <label className="sr-only" htmlFor="name">Name</label>
                                    <input
                                        className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input
                                            className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="phone">Phone</label>
                                        <input
                                            className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>
                                </div>

                                

                                <div>
                                    <label className="sr-only" htmlFor="message">Message</label>

                                    <textarea
                                        className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                                        placeholder="Message"
                                        rows={8}
                                        id="message"
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form
