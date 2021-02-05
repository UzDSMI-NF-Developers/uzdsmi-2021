<template>
  <div class="py-10">
    <Heading title="Oliy ma'lumot haqidagi diplomni tasdiqlash" />

    <form class="w-full sm:w-2/5 my-6 mx-auto">
      <div class="py-4">
        <label for="bNomer">B №:</label>
        <input
          v-model="bNomer"
          id="bNomer"
          name="bNomer"
          type="number"
          placeholder="000000"
          class="block w-full"
        />
      </div>
      <div class="py-4">
        <label for="firstYear">Oqishga kirgan yili:</label>
        <input
          v-model="firstYear"
          id="firstYear"
          name="firstYear"
          type="text"
          placeholder="0000"
          class="block w-full"
        />
      </div>
      <div class="py-4">
        <label for="lastYear">Oqishni bitirgan yili:</label>
        <input
          v-model="lastYear"
          id="lastYear"
          name="lastYear"
          type="text"
          placeholder="0000"
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
      bNomer: 0,
      firstYear: '',
      lastYear: ''
    }
  }
}
</script>
