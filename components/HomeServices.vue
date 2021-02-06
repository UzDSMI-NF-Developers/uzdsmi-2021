<template>
  <div class="my-10">
    <Heading :title="$t('interactive_services')"></Heading>
    <div class="flex flex-wrap -m-2 mt-8 mb-6">
      <div class="card">
        <div class="card-inner">
          <!-- smartphone -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <div class="flex-grow">
            <h4>
              <a href="http://ariza.uzdsmi-nf.uz/" target="_blank" rel="nofollow noopener">
                {{
                  $t('nav.interactive_services.electronic_acceptance_of_applicants_applications')
                }}
              </a>
            </h4>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-inner"
        >
          <!-- desktop -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div class="flex-grow">
            <h4 class="text-gray-900 title-font font-medium">
              <NuxtLink :to="localePath('/student-information')">
                {{ $t('nav.interactive_services.get_a_student_certificate') }}
              </NuxtLink>
            </h4>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-inner"
        >
          <!-- newspaper -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <div class="flex-grow">
            <h4 class="text-gray-900 title-font font-medium">
              <NuxtLink
                :to="localePath('/diploma-confirmation')"
              >
                {{ $t('nav.interactive_services.higher_education_diploma_confirmation') }}
              </NuxtLink>
            </h4>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-inner"
        >
          <!-- archive -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          <div class="flex-grow">
            <h4 class="text-gray-900 title-font font-medium">
              <NuxtLink
                :to="
                  localePath(
                    '/page/402706',
                  )
                "
              >
                {{
                  $t(
                    'nav.interactive_services.possibility_to_get_an_electronic_copy_of_the_diploma',
                  )
                }}
              </NuxtLink>
            </h4>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-inner"
        >
          <!-- folder -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          <div class="flex-grow">
            <h4 class="text-gray-900 title-font font-medium">
              <NuxtLink :to="localePath('/')">
                {{
                  $t(
                    'nav.interactive_services.electronic_submission_of_articles_to_conferences_and_scientific_journals',
                  )
                }}
              </NuxtLink>
            </h4>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-inner"
        >
          <!-- users-group -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <div class="flex-grow">
            <h4 class="text-gray-900 title-font font-medium">
              <NuxtLink :to="localePath('/announcements/449')">
                {{ $t('nav.interactive_services.vacancies') }}
              </NuxtLink>
            </h4>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-inner"
        >
          <!-- user-add -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div class="flex-grow">
            <h4 class="text-gray-900 title-font font-medium">
              <NuxtLink :to="localePath('/online-reception')">
                {{ $t('nav.interactive_services.sign_up_for_a_leaders_appointment') }}
              </NuxtLink>
            </h4>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-inner"
        >
          <!-- card -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          <div class="flex-grow">
            <h4 class="text-gray-900 title-font font-medium">
              <NuxtLink :to="localePath('/check-contract')">
                {{ $t('nav.interactive_services.determining_the_amount_of_payment_contract') }}
              </NuxtLink>
            </h4>
          </div>
        </div>
      </div>
      <div class="card">
        <div
          class="card-inner"
        >
          <!-- briefcase -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div class="flex-grow">
            <h4 class="text-gray-900 title-font font-medium">
              <a href="https://ariza.uzdsmi-nf.uz" target="_blank" rel="nofollow noopener">
                {{ $t('nav.interactive_services.stratified_payment_contract') }}
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/Heading'

export default {
  components: {
    Heading
  },
}
</script>

<style scoped>
  .card {
    @apply w-full p-4;
  }

  .card-inner {
    @apply h-full flex items-center p-8 bg-white rounded-md transition duration-300 ease-in;
  }

  .card-inner:hover {
    @apply border-blue-500 shadow-lg bg-white;
  }

  .card-inner svg {
    @apply w-8 h-8 flex-shrink-0 mr-4 text-blue-700;
  }

  .card-inner h4 {
    @apply font-medium text-base;
  }

  .card-inner a {
    @apply text-gray-900 hover:text-gray-900;
  }

  @screen md {
    .card {
      @apply w-1/2;
    }
  }

  @screen lg {
    .card {
      @apply w-1/3;
    }
  }
</style>
