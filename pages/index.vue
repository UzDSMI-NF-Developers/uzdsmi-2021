<template>
  <Container>
    <HomeSlider />

    <!-- news -->
    <div class="my-10">
      <Heading :title="$t('news.latest')">
        <template #link>
          <NuxtLink :to="localePath('/news')">
            {{ $t('news.all') }}
          </NuxtLink>
        </template>
      </Heading>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8 mb-6">

        <NewsCard
          v-for="post in news"
          :key="post.id"
          :id="post.id"
          :title="post.title.rendered"
          :imageUrl="post._embedded['wp:featuredmedia'][0].source_url"
          :excerpt="post.excerpt.rendered"
          :date="post.date"
        />

      </div>
    </div>

    <!-- announcements -->
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
          <swiper :options="announcementsSliderOptions">
            <swiper-slide v-for="post in announcements" :key="post.id">
              <AnnouncementsCard
                :id="post.id"
                :title="post.title.rendered"
                :excerpt="post.excerpt.rendered"
                :date="post.date"
              />
            </swiper-slide>
            <div slot="pagination" class="announcements-pagination"></div>
          </swiper>
        </client-only>
      </div>
    </div>

    <!-- articles -->
    <div class="my-10">
      <Heading :title="$t('articles.latest')">
        <template #link>
          <NuxtLink :to="localePath('/articles')">
            {{ $t('articles.all') }}
          </NuxtLink>
        </template>
      </Heading>
      <div class="mt-8 mb-6 bg-white dark:bg-gray-600 shadow hover:shadow-lg transition border border-width-2 border-gray-200 rounded p-4">
        <swiper :options="articlesSliderOptions">
          <swiper-slide v-for="post in articles" :key="post.id">
            <NuxtLink :to="localePath('/articles/' + post.id)">
              <ArticlesCard
                :id="post.id"
                :title="post.title.rendered"
                :imageUrl="post._embedded['wp:featuredmedia'][0].source_url"
                :date="post.date"
              />
            </NuxtLink>
          </swiper-slide>
          <div slot="pagination" class="articles-pagination"></div>
        </swiper>
      </div>
    </div>

    <!-- conferences -->
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
          <swiper :options="conferencesSliderOptions">
            <swiper-slide v-for="post in conferences" :key="post.id">
              <ConferencesCard
                :id="post.id"
                :title="post.title.rendered"
                :date="post.date"
              />
            </swiper-slide>
            <div slot="pagination" class="conferences-pagination"></div>
          </swiper>
        </client-only>
      </div>
    </div>

    <HomeServices />
    <HomePresident />
    <HomeResources />
  </Container>
</template>

<script>
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import NewsCard from '@/components/NewsCard'
import AnnouncementsCard from '@/components/AnnouncementsCard'
import ArticlesCard from '@/components/ArticlesCard'
import ConferencesCard from '@/components/ConferencesCard'
import HomeSlider from '@/components/HomeSlider'
import HomeServices from '@/components/HomeServices'
import HomePresident from '@/components/HomePresident'
import HomeResources from '@/components/HomeResources'

export default {
  async asyncData({ $axios }) {
    const news = await $axios.$get(`https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts?categories=2&per_page=8&_embed`)
    const announcements = await $axios.$get(`https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts?categories=3&per_page=4&_embed`)
    const articles = await $axios.$get(`https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts?categories=4&per_page=4&_embed`)
    const conferences = await $axios.$get(`https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts?categories=5&per_page=4&_embed`)

    return {
      news,
      announcements,
      articles,
      conferences
    }
  },
  components: {
    Container,
    Heading,
    NewsCard,
    AnnouncementsCard,
    ArticlesCard,
    ConferencesCard,
    HomeSlider,
    HomeServices,
    HomePresident,
    HomeResources
  },
  data() {
    return {
      announcementsSliderOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.announcements-pagination',
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
      },
      articlesSliderOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.articles-pagination',
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
      },
      conferencesSliderOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.conferences-pagination',
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
  }
}
</script>
