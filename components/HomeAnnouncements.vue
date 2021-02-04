<template>
  <div class="my-10">
    <Heading :title="$t('announcements.latest')">
      <template #link>
        <NuxtLink :to="localePath('/announcements')">
          {{ $t('announcements.all') }}
        </NuxtLink>
      </template>
    </Heading>
    <div class="mt-8 mb-6">
      <client-only>
        <swiper :options="sliderOptions">
          <swiper-slide v-for="post in posts" :key="post.id">
            <div class="bg-white dark:bg-gray-600 shadow border border-width-2 border-gray-200 rounded flex flex-col justify-between">
              <div class="p-4 flex-grow">
                <h4 class="leading-5 mb-6 text-lg">
                  <NuxtLink :to="localePath('/announcements/' + post.id)" v-html="post.title.rendered"></NuxtLink>
                </h4>
                <div v-html="post.excerpt.rendered"></div>
              </div>
              <div class="p-4 flex justify-between border-t">
                <span class="text-gray-600 dark:text-gray-200 text-sm font-semibold flex items-center">
                  <svg class="mr-1 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {{ $dateFns.format(post.date, 'eeee, d MMMM, y', { locale }) }}
                </span>
                <span class="text-gray-600 dark:text-gray-200 text-sm font-semibold flex items-center">
                  <svg class="mr-1 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  views
                </span>
              </div>
            </div>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination"></div>
        </swiper>
      </client-only>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/Heading'

export default {
  props: ['posts'],
  components: {
    Heading
  },
  data() {
    return {
      sliderOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }
      }
    }
  },
  computed: {
    locale() {
      const currentLocale = this.$i18n.locale

      return currentLocale === 'en' ? 'en-US' : currentLocale
    }
  }
}
</script>
