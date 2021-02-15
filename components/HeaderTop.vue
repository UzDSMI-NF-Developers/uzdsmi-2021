<template>
  <div
    class="p-2 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-gray-700 to-gray-900"
  >
    <div class="py-1 md:py-0">
      <ul class="flex items-center">
        <li>
          <NuxtLink :to="localePath('/page/1555')">
            <img src="/flag-uzb.png" alt="" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/page/1560')">
            <img src="/emblem-of-uzbekistan.svg" alt="" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/page/1565')">
            <img src="/note.png" alt="" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/page/1575')">
            <img src="/flag-qq.png" alt="" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/page/1581')">
            <img src="/emblem-of-karakalpakstan.svg" alt="" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/page/1586')">
            <img src="/note.png" alt="" />
          </NuxtLink>
        </li>
      </ul>
    </div>
    <!-- phone & email -->
    <div class="py-1 md:py-0 flex-grow flex items-stretch justify-center">
      <div class="flex items-center mr-4">
        <div class="mr-2">
          <svg
            class="w-6 text-gray-200 hover:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        <div>
          <p class="text-sm font-semibold mb-0">
            <a class="text-gray-200 hover:text-gray-400" href="tel:998612242902"
              >998-61-224-29-02</a
            >
          </p>
          <p class="text-sm font-semibold mb-0">
            <a class="text-gray-200 hover:text-gray-400" href="tel:998977889455"
              >998-97-788-94-55</a
            >
          </p>
        </div>
      </div>
      <div class="flex items-center">
        <div class="mr-2">
          <svg
            class="w-6 text-gray-200 hover:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div>
          <p class="text-sm font-semibold mb-0">
            <a
              class="text-gray-200 hover:text-gray-400"
              href="mailto:fart_info@edu.uz"
              >fart_info@edu.uz</a
            >
          </p>
          <p class="text-sm font-semibold mb-0">
            <a
              class="text-gray-200 hover:text-gray-400"
              href="mailto:fart-info@exat.uz"
              >fart-info@exat.uz</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-end">
      <ul class="flex items-center justify-between mb-4">
        <li class="group bg-gray-200 py-2 px-4 rounded-l flex items-center">
          <svg
            class="group-hover:text-blue-700 w-6 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
          <a
            href="http://edu.uz/uz/pages/ilm-fan-2020e"
            target="_blank"
            rel="nofollow noopener"
            class="group-hover:text-blue-700 text-black font-semibold text-xs hover:no-underline"
            >Ilm-Fan 2020</a
          >
        </li>
        <li
          class="group bg-gray-200 py-2 px-4 flex items-center"
        >
          <svg
            class="group-hover:text-blue-700 w-6 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <NuxtLink
            :to="localePath('/online-reception')"
            class="group-hover:text-blue-700 text-black font-semibold text-xs hover:no-underline"
          >
            Rektor qabulxonasi
          </NuxtLink>
        </li>
        <li
          class="group bg-gray-200 py-2 px-4 rounded-r flex items-center"
        >
          <svg
            class="group-hover:text-blue-700 w-6 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
            />
          </svg>
          <NuxtLink
            :to="localePath('/')"
            class="group-hover:text-blue-700 text-black font-semibold text-xs hover:no-underline"
          >
            Elektron kutubxona
          </NuxtLink>
        </li>
      </ul>
      <LangSelect />
    </div>
  </div>
</template>

<script>
import LangSelect from "@/components/LangSelect";

export default {
  components: {
    LangSelect
  }
};
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
