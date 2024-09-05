
function BlogFooter() {
  return (
    <div className="w-full">
        <section className="mt-4 ">
    <div className="py-8 px-4 mx-auto max-w-screen-xl  lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight  sm:text-4xl text-white text-center">Sign up for our newsletter</h2>
            <p className="mx-auto mb-8 max-w-2xl  font-leagueSpartan md:mb-12 sm:text-xl text-gray-300">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
            <form action="#">
                <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                    <div className="relative w-full">
                        <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-300">Email address</label>
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                           </svg>
                        </div>
                        <input className="block p-3 pl-9 w-full text-sm rounded-lg border  sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 bg-[#1409] border-emerald-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" />
                    </div>
                    <div>
                        <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer  border-emerald-800 sm:rounded-none sm:rounded-r-lg hover:border-amber-400 focus:ring-2 focus:ring-primary-800">Subscribe</button>
                    </div>
                </div>
                <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
            </form>
        </div>
    </div>
  </section></div>
  )
}

export default BlogFooter;