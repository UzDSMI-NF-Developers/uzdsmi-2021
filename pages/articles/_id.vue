<template>
  <div class="py-10">
    <Content
      :id="id"
      :title="post.title.rendered"
      :content="post.content.rendered"
      :date="post.date"
    />
  </div>
</template>

<script>
import Content from '@/components/Content'

export default {
  async asyncData({ $axios, params, app }) {
    const { id } = params
    const { locale } = app.i18n
    const post = await $axios.$get(`https://admin.uzdsmi-nf.uz/wp-json/wp/v2/posts/${id}`)

    return {
      id,
      post,
      locale
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
    Content
  },
  layout: 'page',
}
</script>
