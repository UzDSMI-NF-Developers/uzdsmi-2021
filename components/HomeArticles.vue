<template>
  <div class="my-10">
    <Heading :title="$t('articles.latest')">
      <template #link>
        <NuxtLink :to="localePath('/articles')">
          {{ $t('articles.all') }}
        </NuxtLink>
      </template>
    </Heading>
    <div class="mt-8 mb-6 bg-white dark:bg-gray-600 shadow hover:shadow-lg transition border border-width-2 border-gray-200 rounded p-4">
      <swiper :options="sliderOptions">
        <swiper-slide v-for="post in posts" :key="post.id">
          <NuxtLink :to="localePath('/articles/' + post.id)">
            <ArticlesCard
              :id="post.id"
              :title="post.title.rendered"
              :imageUrl="post._embedded['wp:featuredmedia']['0'].source_url"
              :date="post.date"
            />
          </NuxtLink>
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/Heading'
import ArticlesCard from '@/components/ArticlesCard'

export default {
  props: ['posts'],
  components: {
    Heading,
    ArticlesCard
  },
  data() {
    return {
      sliderOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
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
