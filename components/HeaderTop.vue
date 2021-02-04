<template>
  <div class="py-4 px-2 flex flex-col md:flex-row items-center justify-between bg-gray-800">
    <div class="py-1 md:py-0">
      <ul class="flex items-center">
        <li>
          <NuxtLink :to="localePath('/page/278475')">
            <img src="/flag-uzb.png" alt="" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/page/900488')">
            <img src="/Emblem_of_Uzbekistan.svg" alt="" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/page/340569')">
            <img src="/note.png" alt="" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/page/278475')">
            <img src="/flag-qq.png" alt="" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/page/226084')">
            <img src="/Emblem_of_Karakalpakstan.svg" alt="" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/page/821363')">
            <img src="/note.png" alt="" />
          </NuxtLink>
        </li>
      </ul>
    </div>
    <!-- phone & email -->
    <div class="py-1 md:py-0 flex-grow flex items-stretch justify-center">
      <div class="flex items-center mr-4">
        <div class="mr-2">
          <svg class="w-6 text-gray-200 hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div>
          <p class="text-sm font-semibold mb-0"><a class="text-gray-200 hover:text-gray-400" href="tel:998612242902">998-61-224-29-02</a></p>
          <p class="text-sm font-semibold mb-0"><a class="text-gray-200 hover:text-gray-400" href="tel:998977889455">998-97-788-94-55</a></p>
        </div>
      </div>
      <div class="flex items-center">
        <div class="mr-2">
          <svg class="w-6 text-gray-200 hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p class="text-sm font-semibold mb-0"><a class="text-gray-200 hover:text-gray-400" href="tel:998612242902">998-61-224-29-02</a></p>
          <p class="text-sm font-semibold mb-0"><a class="text-gray-200 hover:text-gray-400" href="tel:998977889455">998-97-788-94-55</a></p>
        </div>
      </div>
    </div>
    <div class="py-1 md:py-0">
      <LangSelect />
    </div>
  </div>
</template>

<script>
import LangSelect from '@/components/LangSelect'

export default {
  components: {
    LangSelect
  }
}
</script>

<style scoped>
  ul {
    @apply list-none;
  }

  ul li {
    @apply px-2;
  }

  ul li img {
    @apply w-8;
  }
</style>
