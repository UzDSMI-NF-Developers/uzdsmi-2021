<template>
  <div class="my-10">
    <Heading :title="$t('useful_resources')"></Heading>
    <client-only>
      <div class="mt-8 mb-6">
        <swiper class="useful-resources-slider" :options="usefulResourcesSliderOptions">
          <swiper-slide
            v-for="slide in slides"
            :key="slide.id"
          >
            <div class="bg-white dark:bg-gray-600 p-4 shadow hover:shadow-lg transition border border-width-2 border-gray-200 rounded">
              <a :href="slide.href" target="_blank" rel="nofollow noopener" class="block h-16">
                <img :src="slide.img" :alt="slide.alt" class="h-full mx-auto" />
              </a>
            </div>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination"></div>
        </swiper>
      </div>
    </client-only>
  </div>
</template>

<script>
import Heading from '@/components/Heading'

export default {
  components: {
    Heading
  },
  data() {
    return {
      usefulResourcesSliderOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 4000,
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
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
        },
      },
      slides: [
        {
          id: 0,
          href: 'https://president.uz/oz',
          img: '/useful-resources-section/link_0.png',
          alt: 'president.uz',
        },
        {
          id: 1,
          href: 'http://programms.gov.uz/uz/',
          img: '/useful-resources-section/link_1.jpg',
          alt: 'programms.gov.uz',
        },
        {
          id: 2,
          href: 'http://lex.uz/uz/',
          img: '/useful-resources-section/link_2.png',
          alt: 'lex.uz',
        },
        {
          id: 3,
          href: 'http://www.strategy.gov.uz/uz',
          img: '/useful-resources-section/link_3.png',
          alt: 'www.strategy.gov.uz',
        },
        {
          id: 4,
          href: 'https://my.gov.uz/uz',
          img: '/useful-resources-section/link_4.png',
          alt: 'my.gov.uz',
        },
      ],
    }
  },
}
</script>

<style scoped>
.swiper-container {
  height: 150px;
}
</style>
