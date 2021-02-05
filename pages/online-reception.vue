<template>
  <div class="py-10">
    <Heading title="Rahbar qabuliga yozilish" />

    <form class="w-full sm:w-2/5 my-6 mx-auto">
      <div class="py-4">
        <label for="fullname">Familiyasi, Ismi, Otasining ismi:</label>
        <input
          v-model="fullname"
          id="fullname"
          name="fullname"
          type="text"
          placeholder="F. I. O."
          class="block w-full"
        />
      </div>
      <div class="py-4">
        <label for="email">Elektron pochta:</label>
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          class="block w-full"
        />
      </div>
      <div class="py-4">
        <label for="phone">Telefon:</label>
        <input
          v-model="phone"
          id="phone"
          name="phone"
          type="text"
          placeholder="+998901234567"
          class="block w-full"
        />
      </div>
      <div class="py-4">
        <label for="message">Xat mazmuni:</label>
        <textarea
          v-model="message"
          id="message"
          name="message"
          class="block w-full h-32"
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
      fullname: '',
      email: '',
      phone: '',
      message: ''
    }
  }
}
</script>
