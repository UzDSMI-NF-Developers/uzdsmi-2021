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
            <AnnouncementsCard
              :id="post.id"
              :title="post.title.rendered"
              :excerpt="post.excerpt.rendered"
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
import AnnouncementsCard from '@/components/AnnouncementsCard'

export default {
  props: ['posts'],
  components: {
    Heading,
    AnnouncementsCard
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
