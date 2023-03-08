<script setup>

</script>

<template>
  <section>
    <section class="px-6 py-8">
        <!-- this is the header component -->
        <theHeader/>
<!-- the hero section -->
<hero/>

        <main class="max-w-6xl mx-auto mt-6 lg:mt-20 space-y-6">
          
<!-- this is the feartured post -->
<feartured/>
            <div class="lg:grid lg:grid-cols-2">
               <!-- these are the two posts -->
               <post/>
               <post/>
            </div>

            <div class="lg:grid lg:grid-cols-3">
            <post/> 
            <post/>
           <post/>  
            </div>
        </main>

       <!-- this is the footer component -->
       <theFooter/>
    </section>
</section>
    </template>

    <script setup>
    import theHeader from "./components/theHeader.vue"
    import theFooter from "./components/theFooter.vue"
    import hero from "./components/heroSection/hero.vue"
    import feartured from "./components/posts/feartured.vue"
    import post from "./components/posts/post.vue"
    </script>

<style scoped>

</style>
