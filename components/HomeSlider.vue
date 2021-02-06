<template>
  <section class="py-6">
    <client-only>
      <swiper class="home-slider" :options="homeSliderOptions">
        <swiper-slide>
          <div
            class="bg-cover bg-center h-auto text-white py-20 px-12 md:py-40 md:px-16 object-fill"
            style="background-image: url(/slider/youtube.jpg)"
          >
            <h3 class="text-2xl md:text-3xl lg:text-4xl mb-5">
              Ijodiy imtihonlarni onlayn kuzatish
            </h3>
            <a
              href="https://www.youtube.com/channel/UCl9C8JUwDbp4vkyBRxjCiOA"
              class="bg-blue-700 text-white no-underline px-4 py-2 font-semibold rounded hover:bg-blue-500 hover:text-white hover:no-underline"
              target="_blank"
              rel="nofollow noopener"
            >
              {{ $t('links.read_more') }}
            </a>
          </div>
        </swiper-slide>
        <!-- <swiper-slide>
          <div
            class="bg-cover bg-center h-auto text-white py-20 px-12 md:py-40 md:px-16 object-fill"
            style="background-image: url(/slider/contacts.jpg)"
          >
            <h3 class="text-2xl md:text-3xl lg:text-4xl mb-5">Aloqa</h3>
            <NuxtLink
              :to="localePath('/contacts')"
              class="bg-blue-700 text-white no-underline px-4 py-2 font-semibold rounded hover:bg-blue-500 hover:text-white hover:no-underline"
            >
              {{ $t('links.read_more') }}
            </NuxtLink>
          </div>
        </swiper-slide> -->
        <swiper-slide>
          <div
            class="bg-cover bg-center h-auto text-white py-20 px-12 md:py-40 md:px-16 object-fill"
            style="background-image: url(/slider/moodle.png)"
          >
            <h3 class="text-2xl md:text-3xl lg:text-4xl mb-5">
              Moodle - Elektron ta'lim sistemasi
            </h3>
            <a
              href="http://uzdsminf.edu.uz"
              class="bg-blue-700 text-white no-underline px-4 py-2 font-semibold rounded hover:bg-blue-500 hover:text-white hover:no-underline"
              target="_blank"
              rel="nofollow noopener"
            >
              {{ $t('links.read_more') }}
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="bg-cover bg-center h-auto text-white py-20 px-12 md:py-40 md:px-16 object-fill"
            style="background-image: url(/slider/ariza.jpg)"
          >
            <h3 class="text-2xl md:text-3xl lg:text-4xl mb-5">
              Tabaqalashtirilgan to'lov-kontrakt asosida qo'shimcha qabul uchun ariza berish tizimi
            </h3>
            <a
              href="http://ariza.uzdsmi-nf.uz/"
              class="bg-blue-700 text-white no-underline px-4 py-2 font-semibold rounded hover:bg-blue-500 hover:text-white hover:no-underline"
              target="_blank"
              rel="nofollow noopener"
            >
              {{ $t('links.read_more') }}
            </a>
          </div>
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
      </swiper>
    </client-only>
  </section>
</template>

<script>
export default {
  data() {
    return {
      homeSliderOptions: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>
