<template>
  <div class="my-10">
    <Heading :title="$t('conferences.latest')">
      <template #link>
        <NuxtLink :to="localePath('/conferences')">
          {{ $t('conferences.all') }}
        </NuxtLink>
      </template>
    </Heading>
    <div class="mt-8 mb-6">
      <client-only>
        <swiper :options="sliderOptions">
          <swiper-slide v-for="post in posts" :key="post.id">
            <ConferencesCard
              :id="post.id"
              :title="post.title.rendered"
              :date="post.date"
            />
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination"></div>
        </swiper>
      </client-only>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/Heading'
import ConferencesCard from '@/components/ConferencesCard'

export default {
  props: ['posts'],
  components: {
    Heading,
    ConferencesCard
  },
  data() {
    return {
      sliderOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
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
