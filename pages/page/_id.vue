<template>
  <div class="py-10">
    <Heading :title="post.title" />
    <div
      class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:text-gray-300 nuxt-content max-w-3xl mx-auto mt-10"
    >
      <nuxt-content :document="post" />
    </div>
  </div>
</template>

<script>
import Heading from '@/components/Heading'

export default {
  async asyncData({ $content, params, app }) {
    const { id } = params
    const { locale } = app.i18n
    const post = await $content(`${locale}/page`, id).fetch()

    return {
      post,
      locale
    }
  },
  head() {
    const { title, description } = this.post
    return {
      title: title,
      titleTemplate: `%s | uzdsmi-nf.uz`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description
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
