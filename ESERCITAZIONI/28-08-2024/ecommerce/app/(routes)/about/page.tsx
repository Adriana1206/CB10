import React from 'react'

function page() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt=""
                src="https://images.pexels.com/photos/5810700/pexels-photo-5810700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span
              className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
            ></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Lorem ipsum
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit quam non tellus mattis, ut egestas lectus aliquam. Nulla facilisi. Vestibulum vitae est sed ante accumsan accumsan. Suspendisse porttitor erat sapien, ac feugiat nisi aliquam nec. Fusce tincidunt orci eget maximus elementum. Fusce eleifend, dui vitae aliquet lacinia, arcu ligula eleifend erat, at aliquam tortor augue ac libero. Nulla ac scelerisque enim, id auctor ex. Ut sed euismod lectus, cursus aliquam justo. Ut facilisis massa ut mi commodo tempor. Nulla in aliquet diam, consectetur congue nisi. Quisque id dolor et ex viverra sodales eget laoreet odio. Nunc elementum augue ac orci vestibulum aliquam. Aliquam erat volutpat. Sed varius sit amet lectus ac finibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page