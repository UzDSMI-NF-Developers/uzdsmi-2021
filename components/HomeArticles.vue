<template>
  <div class="my-10">
    <Heading title="Maqolalar">
      <template #link>
        <NuxtLink :to="localePath('/articles')">
          Barcha maqolalar
        </NuxtLink>
      </template>
    </Heading>
    <div class="mt-8 mb-6 bg-white dark:bg-gray-600 shadow border border-width-2 border-gray-200 rounded p-4">
      <swiper :options="sliderOptions">
        <swiper-slide v-for="post in posts" :key="post.id">
          <NuxtLink :to="localePath('/articles/' + post.id)">
            <div
              class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left mb-10"
            >
              <img
                :src="post._embedded['wp:featuredmedia']['0'].source_url"
                :alt="post.title.rendered"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-contain object-center sm:mb-0 mb-4"
              />
              <div class="flex-grow sm:pl-8">
                <h2
                  v-html="post.title.rendered"
                  class="title-font font-medium text-lg"
                ></h2>
                <p class="text-gray-600 text-sm font-semibold mb-3">
                  {{ $dateFns.format(post.date, 'eeee, d MMMM, y'), { locale } }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>
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
          clickable: true
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
