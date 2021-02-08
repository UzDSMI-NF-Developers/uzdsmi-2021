<template>
  <Container>
    <Heading :title="$t('news.all')"></Heading>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6 mb-4">
      <!-- card -->
      <div v-if="loading">
        <Loading />
      </div>
      <NewsCard
        v-else
        v-for="post in news"
        :key="post.id"
        :id="post.id"
        :title="post.title.rendered"
        :imageUrl="post._embedded['wp:featuredmedia']['0'].source_url"
        :excerpt="post.excerpt.rendered"
        :date="post.date"
      />
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
import NewsCard from '@/components/NewsCard'

export default {
  components: {
    Container,
    Heading,
    Pagination,
    Loading,
    NewsCard
  },
  data() {
    return {
      newsUrl: `https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts?categories=2&_embed`,
      news: [],
      loading: true,
      postsData: {
        per_page: 9,
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
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
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
