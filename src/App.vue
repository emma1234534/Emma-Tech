<script setup>

</script>

<template>

    <section class="px-6 py-8">
        <!-- this is the header component -->
        <theHeader/>
   
       <!-- this is the footer component -->


       <RouterView/>
      
       <theFooter/>
    </section>


    </template>

    <script setup>
    import theHeader from "./components/theHeader.vue"
    import theFooter from "./components/theFooter.vue"
    </script>

<style scoped>

</style>
