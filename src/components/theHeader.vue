<template>
 <nav class="md:flex md:justify-between md:items-center">
            <div>
                <a href="/">
                    <img src="../assets/images/logo.svg" alt="Laracasts Logo" width="165" height="16">
                </a>
    
            </div>

            <ul>
                <li class="flex space-x-10 ml-2">
                <RouterLink to="/"  class="text-xs font-bold uppercase" >Home</RouterLink>
                    
                <RouterLink to="/about"  class="text-xs font-bold uppercase" >About</RouterLink>
                <RouterLink to="/contact"  class="text-xs font-bold uppercase" >Contact</RouterLink>
                
                </li>
            </ul>
            <div class="mt-8 md:mt-0">
                <a href="/" class="text-xs font-bold uppercase">Home Page</a>
                

                <a href="#" class="bg-blue-500 ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-5">
                    Subscribe for Updates
                </a>
            </div>
        </nav>
</template>

<script>
</script>
<style>
</style>