const headerHTML = `  
<header class=" sticky top-0 z-10 ">
    <div class="w-full text-white bg-primary ">
        <div class="mx-auto max-w-screen-lg md:flex justify-between hidden  text-sm">
            <div class="w-auto flex justify-start ">
                <div class="flex justify-center items-center py-3 mr-10">
                    <svg class="h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                    </svg>
                    <p>01 24 56 89 06</p>
                </div>

                <a href="mailto:sakkuyiw@gmail.com" class="flex justify-center items-center py-2">
                    <svg class="h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                    <p>sakkuyiw@gmail.com</p>
                </a>
            </div>

            <div class="flex items-center ">
                <a href="https://twitter.com/SAKKUYIW" target="_blank" class="mr-4">
                    <svg class="h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd"/>
                    </svg>
                </a>
                <a href="https://www.instagram.com/yiwsakku/" target="_blank" class="mr-4">
                    <svg class="h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                    </svg>
                </a>
                <a href="https://www.facebook.com/sakkuyiw.actionpourlespoir" target="_blank" class="mr-4">
                    <svg class="h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                    </svg>
                </a>
                <a href="https://www.youtube.com/user/SAKKUYIW" target="_blank">
                    <svg class="h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
                    </svg>
                </a>

            </div>
        </div>
    </div>
    <nav class="transparent-background mx-auto p-4 text-white" style="position:absolute; width:100%">
        <div class="w-full flex justify-between transparent-background mx-auto max-w-screen-lg " >
            <div class="flex items-center transparent-background">
                <img class="w-12 mr-2" src="../static/images/logo.png" alt="">
                <h2 class=" text-2xl font-semibold">Sakku Yiw</h2>
            </div>
            <div class=" md:hidden items-center justify-between p-5">  
            <button id="burger" class="focus:outline-none">  
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>  
                </svg>  
            </button>  
            </div>  

            <div id="menu" class="menu-transition transform -translate-y-full bg-white shadow-md rounded-lg p-5 absolute right-5 w-48 hidden">  
                <a href="#" class="block py-2 px-4 text-gray-700 hover:bg-gray-200">Home</a>  
                <a href="#" class="block py-2 px-4 text-gray-700 hover:bg-gray-200">About</a>  
                <a href="#" class="block py-2 px-4 text-gray-700 hover:bg-gray-200">Services</a>  
                <a href="#" class="block py-2 px-4 text-gray-700 hover:bg-gray-200">Contact</a>  
            </div>  
            <div class="hidden md:flex items-center text-sm ">
                <a href="#" class="mr-5">À propos</a>
                <a href="#" class="mr-5 flex items-center ">
                    <span> Projets</span>
                    <svg class="h-4 ml-1 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.0" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </a>
                <a href="#" class="mr-5">Actualités</a>
                <a href="#" class="mr-5">Équipe</a>
                <a href="#">Contact</a>
            </div>

            <div class="hidden  md:flex items-center text-sm ">
                <a href="#" class="mr-4 border border-white rounded p-3 focus:ring-4 focus:ring-secondary hover:bg-secondary hover:border-secondary">Donnez Votre Zakat</a>
                <a href="#" class="flex px-6 items-center border border-secondary bg-secondary rounded py-3 focus:ring-4 focus:ring-amber-600 hover:bg-amber-600 hover:border-amber-600">
                    <p>Faire un Don</p>
                    <svg class="h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/>
                    </svg>
                </a>
            </div>
        </div>
    </nav>
</header>
`;  

document.body.insertAdjacentHTML('afterbegin', headerHTML);
