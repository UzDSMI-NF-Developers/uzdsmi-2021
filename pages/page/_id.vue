<template>
  <div class="py-10">
    <Heading :title="post.title.rendered" />
    <div
      class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:text-gray-300 nuxt-content max-w-3xl mx-auto mt-10"
    >
      <div v-html="post.content.rendered"></div>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/Heading'

export default {
  async asyncData({ $axios, params, app }) {
    const { id } = params
    const { locale } = app.i18n
    let currentLocale = ''

    if (locale === 'uz') {
      currentLocale = ''
    } else {
      currentLocale = locale
    }

    const post = await $axios.$get(`https://admin.uzdsmi-nf.uz/${currentLocale}/wp-json/wp/v2/posts/${id}`)

    return {
      post
    }
  },
  head() {
    const { title, excerpt } = this.post
    return {
      title: title.rendered,
      titleTemplate: `%s | uzdsmi-nf.uz`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: excerpt.rendered
        }
      ]
    }
  },
  components: {
    Heading,
  },
  layout: 'page',
}
</script>
