<template>
    <section class="px-6 py-8">
     
   
   
<!-- the hero section -->
<hero/>

        <main class="max-w-6xl mx-auto mt-6 lg:mt-20 space-y-6">
          
<!-- this is the feartured post -->
<article v-for="post in posts.slice(0,1)" :key="post.id" class="transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl"
>
<div class="py-6 px-5 lg:flex">
  <div class="flex-1 lg:mr-8">
    <img
      :src="post.x_featured_media_medium"
      alt="Blog Post illustration"
      class="rounded-xl"
    />
  </div>

  <div class="flex-1 flex flex-col justify-between">
    <header class="mt-8 lg:mt-0">
      <div class="space-x-2">
        <a
          href="#"
          class="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
          style="font-size: 10px"
          >{{post.x_categories}}</a
        >

        <a
          href="#"
          class="px-3 py-1 border border-red-300 rounded-full text-red-300 text-xs uppercase font-semibold"
          style="font-size: 10px"
          >Updates</a
        >
      </div>

      <div class="mt-4">
        <h1 class="text-3xl">
            {{ short(post.title.rendered,25) }}
        </h1>

        <span class="mt-2 block text-gray-400 text-xs">
          Published <time>1 day ago</time>
        </span>
      </div>
    </header>

    <div  class="text-sm mt-2" v-html="short(post.excerpt.rendered,250)">
   

  
    </div>

    <footer class="flex justify-between items-center mt-8">
      <div class="flex items-center text-sm">
        <img src="src/assets/images/lary-avatar.svg" alt="Lary avatar" />
        <div class="ml-3">
          <h5 class="font-bold">{{post.x_author}}</h5>
          <h6>{{post.x_categories}}</h6>
        </div>
      </div>

      <div class="hidden lg:block">
        <RouterLink
          to="/post/24"
          class="transition-colors duration-300 text-xs font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-8"
          >Read More</RouterLink
        >
      </div>
    </footer>
  </div>
</div>
</article>



            <div class="lg:grid lg:grid-cols-2">
               <!-- these are the two posts -->
               <!-- <post v-for="post in posts" :key="post.id" :Apost="post"/> -->
            
            </div>

            <div class="lg:grid lg:grid-cols-3">
                <router-link v-for="post in posts.slice(1,4)" :key="post.id" to="/post/2"> <article
                    class="transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl">
                    <div class="py-6 px-5">
                        <div>
                            <img :src="post.x_featured_media_medium" alt="Blog Post illustration" class="rounded-xl">
                        </div>
                
                        <div class="mt-8 flex flex-col justify-between">
                            <header>
                                <div class="space-x-2">
                                    <a href="#"
                                       class="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                                       style="font-size: 10px">{{post.x_categories}}</a>
                
                                    <a href="#"
                                       class="px-3 py-1 border border-red-300 rounded-full text-red-300 text-xs uppercase font-semibold"
                                       style="font-size: 10px">Updates</a>
                                </div>
                
                                <div class="mt-4">
                                    <h1 class="text-3xl">
                                    
                                        {{ short(post.title.rendered,25) }}
                                        
                                    </h1>
                
                                    <span class="mt-2 block text-gray-400 text-xs">
                                        Published <time>1 day ago</time>
                                    </span>
                                </div>
                            </header>
                
                            <div v-html="short(post.excerpt.rendered,200)" class="text-sm mt-4">
                              
                
                            </div>
                
                            <footer class="flex justify-between items-center mt-8">
                                <div class="flex items-center text-sm">
                                    <img src="/src/assets/images/lary-avatar.svg" alt="Lary avatar">
                                    <div class="ml-3">
                                        <h5 class="font-bold">{{post.x_author}}</h5>
                                        <h6>{{post.x_categories}}</h6>
                                    </div>
                                </div>
                
                                <div>
                                    <a href="#"
                                       class="transition-colors duration-300 text-xs font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-8"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </footer>
                        </div>
                    </div>
                
                </article></router-link>  
            </div>
        </main>

       <!-- this is the footer component -->
<!-- 
<ul>
    <li v-for="post in posts" :key="post.id">{{post.title.rendered}}</li>
</ul> -->
     

    </section>

  
</template>

<style>
</style>
<script setup>


    import hero from "../components/heroSection/hero.vue"
    import feartured from "../components/posts/feartured.vue"
    import post from "../components/posts/post.vue"
    import { ref, onMounted } from 'vue'

    //call the api in life cycle hook

    let posts =ref([])




onMounted(() => {
 fetch("https://dev-louis-dev.pantheonsite.io/wp-json/wp/v2/posts?_embed")
  .then((response) => response.json())
  .then((data) =>posts.value=data);
})


const short = (title, limit) => {
    if (title.length > limit) title = title.substr(0, limit) + "...";
    return title;
};
    //transfer the data in a varible that wiil be accessable out the script tag

</script>