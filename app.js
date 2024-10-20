// reusable navigation component

class Header extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <nav class="nav flex justify-between items-center px-8 lg:px-24 py-2 text-sm">
      <div class="logo flex items-center">
        <img class="w-14" src="logo/pngegg-logo.png" alt="Aquana-logo" />
        <span class="logo-name text-blue-700">Aquana</span>
      </div>
      <div class="nav-links hidden lg:block">
        <ul class="flex w-96 justify-between items-center">
          <li class="hover:underline"><a href="index.html">Home</a></li>
          <li class="hover:underline"><a href="about.html">About Us</a></li>
          <li><a href="#">Blog</a></li>
          <li
            class="bg-orange-500 text-white py-1 px-4 rounded-md font-semibold"
          >
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div class="hamburger-menu lg:hidden">
        <?xml version="1.0" ?><svg
          height="18px"
          version="1.1"
          viewBox="0 0 25 25"
          width="18px"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title />
          <desc />
          <defs />
          <g
            fill="none"
            fill-rule="evenodd"
            id="TabBar-Icons"
            stroke="none"
            stroke-width="1"
          >
            <g fill="#000000" id="Hamburger-Round">
              <path
                d="M0,4 C0,2.8954305 0.889763236,2 2.00359486,2 L22.9964051,2 C24.10296,2 25,2.88772964 25,4 C25,5.1045695 24.1102368,6 22.9964051,6 L2.00359486,6 C0.897039974,6 0,5.11227036 0,4 L0,4 Z M0,12 C0,10.8954305 0.889763236,10 2.00359486,10 L22.9964051,10 C24.10296,10 25,10.8877296 25,12 C25,13.1045695 24.1102368,14 22.9964051,14 L2.00359486,14 C0.897039974,14 0,13.1122704 0,12 L0,12 Z M0,20 C0,18.8954305 0.889763236,18 2.00359486,18 L22.9964051,18 C24.10296,18 25,18.8877296 25,20 C25,21.1045695 24.1102368,22 22.9964051,22 L2.00359486,22 C0.897039974,22 0,21.1122704 0,20 L0,20 Z"
                id="Hamburger"
              />
            </g>
          </g>
        </svg>
      </div>
    </nav>
        `;
    }
}

customElements.define("main-header",Header)
class Footer extends   HTMLElement{
  connectedCallback(){
    this.innerHTML = `
     <div class="footer">
  <div class="lg:px-24 px-4 flex-wrap flex justify-between">
    <div class="details">
       <div class="logo flex items-center mb-5">
         <img class="w-14" src="logo/pngegg-logo.png" alt="Aquana-logo" />
         <span class="logo-name text-blue-700">Aquana</span>
       </div>
       <div class="email flex gap-3 mb-5 items-center">
            <i class="fa-solid fa-envelope mt-1 border p-2 rounded-md bg-neutral-200"></i>
            <div>
              <p class="font-bold">Email Address</p>
              <p class="text-neutral-500 text-sm ">
                info@aquana@gmail.com
              </p>
            </div>
        </div>
        <div class="location flex gap-3 mb-5 items-center">
            <i class="fa-solid fa-location-dot mt-1 border p-2 rounded-md bg-neutral-200"></i>
            <div>
              <p class="font-bold">Our Location</p>
              <p class="text-neutral-500 text-sm ">
                106 Kirinyaga Road Kitengela
              </p>
            </div>
          </div>
         <div class="phone flex gap-3 mb-5 items-center">
            <i class="fa-solid fa-phone-volume  mt-1 border p-2 rounded-md bg-neutral-200"></i>
            <div>
              <p class="font-bold">Phone Number</p>
              <p class="text-neutral-500 text-sm ">
                (+254)-112-598-055
              </p>
            </div>
          </div> 
          <div class="website flex gap-3 mb-5 items-center">
            <div class="email flex gap-3  items-center ">
                <i class="fa-solid fa-globe mt-1 border p-2 rounded-md bg-neutral-200"></i>
            <div>
              <p class="font-bold">Our website</p>
              <p class="text-neutral-500 text-sm ">
                aquana-web.vercel.app
              </p>
            </div>
          </div> 
          </div>
          </div>
          <div class="company mt-6 ">
            <h2 class="font-bold text-blue-700 tracking-wider uppercase mb-4">Company</h2>
            <p class="mb-1">About Aquana</p>
            <p class="mb-1">Contacts and Support</p>
            <p class="mb-1">Success History</p>
            <p class="mb-1">Settings and Privacy</p>
          </div>
          <div class="links mt-6">
            <h2 class="font-bold text-blue-700 tracking-wider uppercase mb-4">Useful Links</h2>
            <p class="mb-1">Promo</p>
            <p class="mb-1">Custom Work</p>
            <p class="mb-1">Warehouse</p>
            <p class="mb-1">Support</p>
            <p class="mb-1">Track my Order</p>
            <p class="mb-1">Privacy Policy</p>
          </div>
          <div class="social-media mt-6">
            <h2 class="font-bold text-blue-700 tracking-wider uppercase mb-4">Follow Us On</h2>
            <div class="handles flex gap-4 mb-5 ">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
            &copy; Aquana 2024
          </div> 
          </div>

          <div class="creation lg:px-24 px-4 bg-blue-900   flex flex-col-reverse items-center md:flex-row justify-between py-2">
      <div class="copyright flex gap-3 ">
        <p class="text-sm font-semibold text-white">&copy; 2024 Aquana</p>
        <p class="text-sm font-semibold text-white ">All rights reserved</p>
      </div>
      <div class="creation">
        <p class="text-sm font-semibold text-white"> <a target="_blank" href="https://github.com/Kimathi19">A Kimathi Creation</a> </p>
      </div>
    </div>
    </div>
    `;
  }
}
customElements.define("main-footer", Footer);