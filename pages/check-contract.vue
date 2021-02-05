<template>
  <div class="py-10">
    <Heading title="To'lov-kontrakt miqdorini aniqlash" />

    <form class="w-full sm:w-2/5 my-6 mx-auto">
      <div class="py-4">
        <label for="studentIdNomeri">Student ID nomeri:</label>
        <input
          v-model="studentIdNomeri"
          id="studentIdNomeri"
          name="studentIdNomeri"
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
      studentIdNomeri: 0
    }
  }
}
</script>
