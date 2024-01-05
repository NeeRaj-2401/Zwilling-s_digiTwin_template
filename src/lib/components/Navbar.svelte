<script>
  // import { dialog,showModal,api_data,fetchSecondData } from '../../routes/store'

  import act from '$lib/assests/act.svg'
  import mail from '$lib/assests/mail.svg'
  import notf from '$lib/assests/notf.svg'
  import hamburger from '$lib/assests/hamburger.svg'
  import SidebarModal from './subComponents/SidebarModal.svelte'

  let sidebar_show = false;

</script>

<div class="bg-black text-white bg-gradient-to-r from-black  via-green to-black pb-0.5 min-w-full">
  <div class="flex flex-row justify-between items-center bg-black h-[70px] px-12">
     
      <div class="flex items-center">
          <div class="flex flex-row space-x-4">
              
              <div id="menu" >
                 <button on:click={() => sidebar_show = !sidebar_show}>  <img src="{hamburger}" alt="" srcset=""> </button>
              </div>
          </div>
         </div>


      <div id="middle">
         <svg width="677" height="75" viewBox="0 0 677 75" fill="none" xmlns="http://www.w3.org/2000/svg" class="relative top-4">
          <defs>
            <filter id="filter0_f_1_6" x="0.151367" y="-28" width="681" height="103" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur_1_6"/>
            </filter>
            <linearGradient id="paint0_linear_1_6" x1="338.5" y1="68.5" x2="338.5" y2="2.50001" gradientUnits="userSpaceOnUse">
              <stop stop-color="#00FF67"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <g filter="url(#filter0_f_1_6)">
            <path d="M35.4376 42.8728L1.73945 -15H647.26L613.562 42.8729C606.667 54.7155 593.996 62 580.292 62H68.7083C55.0043 62 42.3333 54.7155 35.4376 42.8728Z" stroke="url(#paint0_linear_1_6)" stroke-width="5"/>
          </g>
          <path d="M35.4376 42.8728L1.73945 -15H647.26L613.562 42.8729C606.667 54.7155 593.996 62 580.292 62H68.7083C55.0043 62 42.3333 54.7155 35.4376 42.8728Z" fill="#000F15" stroke="url(#paint0_linear_1_5)" stroke-width="2"/>
          <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" font-size="20" fill="white" class="text-3xl font-bold">FURNACE</text>
          <defs>
            <linearGradient id="paint0_linear_1_5" x1="324.5" y1="68.5" x2="324.5" y2="2.50001" gradientUnits="userSpaceOnUse">
              <stop stop-color="#65F09D"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>

     </div>


     <div class="flex items-center">
      <div class="flex flex-row space-x-4">

          <div id="mail" >
              <img src="{mail}" alt="">
          </div>
          
          <div id="notification" >
              <img src="{notf}" alt="">                 
          </div>

          <div id="profile">
              <img src="{act}" alt="">
          </div>

      </div>
     </div>

  </div>

  <SidebarModal bind:show={sidebar_show} />

</div>