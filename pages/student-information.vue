<template>
  <div class="py-10">
    <Heading title="Talabalik haqida ma'lumotnoma olish" />

    <form class="w-full sm:w-2/5 my-6 mx-auto">
      <div class="py-4">
        <label for="reytingNomer">Reyting daftarchasi nomeri:</label>
        <input
          v-model="reytingNomer"
          id="reytingNomer"
          name="reytingNomer"
          type="number"
          placeholder="000000"
          class="block w-full"
        />
      </div>
      <div class="py-4">
        <label for="innNomer">INN nomeri:</label>
        <input
          v-model="innNomer"
          id="innNomer"
          name="innNomer"
          type="number"
          placeholder="000000"
          class="block w-full"
        />
      </div>
      <div class="py-4">
        <button class="disabled:opacity-50 cursor-not-allowed" disabled>
          Yuborish
        </button>
      </div>
    </form>
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
      reytingNomer: 0,
      innNomer: 0
    }
  }
}
</script>
