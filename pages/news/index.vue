<template>
  <Container>
    <Heading :title="$t('news.all')"></Heading>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 mb-4">
      <!-- card -->
      <div v-if="loading">
        <Loading />
      </div>
      <div v-else v-for="post in news" class="bg-white dark:bg-gray-600 shadow hover:shadow-lg transition border border-width-2 border-gray-200 rounded flex flex-col justify-between">
        <figure class="h-60">
          <NuxtLink :to="localePath('/news/' + post.id)">
            <img :src="post._embedded['wp:featuredmedia']['0'].source_url" alt="" class="h-full mx-auto" />
          </NuxtLink>
        </figure>
        <div class="p-4 flex-grow">
          <h4 class="leading-5 mb-6 text-lg">
            <NuxtLink :to="localePath('/news/' + post.id)" v-html="post.title.rendered"></NuxtLink>
          </h4>
          <div v-html="post.excerpt.rendered"></div>
        </div>
        <div class="p-4 flex justify-between border-t">
          <span class="text-gray-800 dark:text-gray-200 text-sm font-semibold flex items-center">
            <svg class="mr-1 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ $dateFns.format(post.date, 'eeee, d MMMM, y', { locale }) }}
          </span>
          <span class="text-gray-800 dark:text-gray-200 text-sm font-semibold flex items-center">
            <svg class="mr-1 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            views
          </span>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center pt-8 pb-4">
      <code class="ml-4 rounded-lg bg-gray-200 p-2">
        {{ $t('page') }}:
        <input
          type="number"
          min="1"
          :max="this.pagination.totalPages"
          v-model="postsData.page"
          @change="jumpTo($event.target.value)"
        />
      </code>
      <Pagination :pagination="pagination"
        @prev="--postsData.page; getPosts();"
        @next="postsData.page++; getPosts();">
      </Pagination>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Pagination from '@/components/Pagination'
import Loading from '@/components/Loading'

export default {
  components: {
    Container,
    Heading,
    Pagination,
    Loading
  },
  data() {
    return {
      newsUrl: `https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts?categories=2&_embed`,
      news: [],
      loading: true,
      postsData: {
        per_page: 10,
        page: 1
      },
      pagination: {
        prevPage: '',
        nextPage: '',
        totalPages: '',
        from: '',
        to: '',
        total: ''
      }
    }
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      this.scrollToTop()
      this.loading = true
      this.$axios.get(this.newsUrl, { params: this.postsData }).then((response) => {
        this.news = response.data
        this.configPagination(response.headers)
        this.loading = false
      }).catch((error) => {
        console.log(error)
        this.loading = false
      })
    },
    configPagination(headers) {
      this.pagination.total = +headers['x-wp-total'];
      this.pagination.totalPages = +headers['x-wp-totalpages'];
      this.pagination.from = this.pagination.total ? ((this.postsData.page - 1) * this.postsData.per_page) + 1 : ' ';
      this.pagination.to = (this.postsData.page * this.postsData.per_page) > this.pagination.total ? this.pagination.total : this.postsData.page * this.postsData.per_page;
      this.pagination.prevPage = this.postsData.page > 1 ? this.postsData.page : '';
      this.pagination.nextPage = this.postsData.page < this.pagination.totalPages ? this.postsData.page + 1 : '';
    },
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    jumpTo(page) {
      if (page > this.pagination.totalPages || page <= 0) {
        return
      } else {
        this.postsData.page = page
        this.getPosts()
      }
    }
  },
  computed: {
    locale() {
      const currentLocale = this.$i18n.locale

      return currentLocale === 'en' ? 'en-US' : currentLocale
    }
  },
  layout: 'page',
}
</script>
