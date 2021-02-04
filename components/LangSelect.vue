<template>
  <ul>
    <li>
      <NuxtLink :to="switchLocalePath('en')">
        <img src="/flags/flag-of-great-britain.svg" alt="Switch to English" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="switchLocalePath('ru')">
        <img src="/flags/flag-of-russia.svg" alt="Switch to Russia" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink :to="switchLocalePath('uz')">
        <img src="/flags/flag-of-uzbekistan.svg" alt="Switch to Uzbek" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    @apply list-none flex items-center;
  }

  ul li {
    @apply px-3;
  }

  ul img {
    @apply w-8;
  }
</style>
