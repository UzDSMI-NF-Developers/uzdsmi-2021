<template>
  <div class="my-10">
    <Heading :title="$t('president_title')" class="text-center"></Heading>
    <div class="poster">
      <img
        src="/president-media.png"
        alt="Official pages of the President of the Republic of Uzbekistan Shavkat Mirziyoyev on social networks"
        width="300px"
      />
    </div>
    <div class="social-links">
      <a
        href="https://www.facebook.com/Mirziyoyev/"
        target="_blank"
        rel="nofollow noopener"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="#4267B2" class="w-6 h-6" viewBox="0 0 20 20">
          <path
            d="M17,1H3C1.9,1,1,1.9,1,3v14c0,1.101,0.9,2,2,2h7v-7H8V9.525h2V7.475c0-2.164,1.212-3.684,3.766-3.684l1.803,0.002v2.605h-1.197C13.378,6.398,13,7.144,13,7.836v1.69h2.568L15,12h-2v7h4c1.1,0,2-0.899,2-2V3C19,1.9,18.1,1,17,1z"
          />
        </svg>
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="title-font font-medium">@mirziyoyev</span>
        </span>
      </a>
      <a
        href="https://t.me/shmirziyoyev"
        target="_blank"
        rel="nofollow noopener"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="#0088CC" class="w-6 h-6" viewBox="0 0 20 20">
          <path
            d="M18.64,2.634C18.296,2.755,1.319,8.738,0.984,8.856c-0.284,0.1-0.347,0.345-0.01,0.479c0.401,0.161,3.796,1.521,3.796,1.521l0,0l2.25,0.901c0,0,10.838-7.958,10.984-8.066c0.148-0.108,0.318,0.095,0.211,0.211c-0.107,0.117-7.871,8.513-7.871,8.513v0.002L9.892,12.92l0.599,0.322l0,0c0,0,4.65,2.504,4.982,2.682c0.291,0.156,0.668,0.027,0.752-0.334c0.099-0.426,2.845-12.261,2.906-12.525C19.21,2.722,18.983,2.513,18.64,2.634z M7,17.162c0,0.246,0.139,0.315,0.331,0.141c0.251-0.229,2.85-2.561,2.85-2.561L7,13.098V17.162z"
          />
        </svg>
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="title-font font-medium">@shmirziyoyev</span>
        </span>
      </a>
      <a
        href="https://www.instagram.com/mirziyoyev_sh/"
        target="_blank"
        rel="nofollow noopener"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="#833AB4" class="w-6 h-6" viewBox="0 0 20 20">
          <path
            d="M18.94586,6.28931a6.60561,6.60561,0,0,0-.41833-2.18463,4.41189,4.41189,0,0,0-1.03809-1.59412,4.41189,4.41189,0,0,0-1.59412-1.03809,6.60561,6.60561,0,0,0-2.18463-.41833C12.75073,1.01038,12.44427,1,10,1s-2.75073.01038-3.71069,0.05414a6.60561,6.60561,0,0,0-2.18463.41833A4.41189,4.41189,0,0,0,2.51056,2.51056,4.41189,4.41189,0,0,0,1.47247,4.10468a6.60561,6.60561,0,0,0-.41833,2.18463C1.01038,7.24927,1,7.55573,1,10s0.01038,2.75073.05414,3.71069a6.60561,6.60561,0,0,0,.41833,2.18463,4.41189,4.41189,0,0,0,1.03809,1.59412,4.41109,4.41109,0,0,0,1.59412,1.03809,6.60561,6.60561,0,0,0,2.18463.41833C7.24927,18.98969,7.55573,19,10,19s2.75073-.01031,3.71069-0.05414a6.60561,6.60561,0,0,0,2.18463-.41833,4.60208,4.60208,0,0,0,2.6322-2.6322,6.60561,6.60561,0,0,0,.41833-2.18463C18.98962,12.75073,19,12.44427,19,10S18.98962,7.24927,18.94586,6.28931Zm-1.61993,7.34747a4.97824,4.97824,0,0,1-.30994,1.67114A2.98017,2.98017,0,0,1,15.30792,17.016a4.9786,4.9786,0,0,1-1.67114.30994C12.68787,17.3692,12.40326,17.37836,10,17.37836s-2.68787-.00916-3.63678-0.05243A4.9786,4.9786,0,0,1,4.69208,17.016a2.78769,2.78769,0,0,1-1.03485-.67322A2.78769,2.78769,0,0,1,2.984,15.30792a4.97824,4.97824,0,0,1-.30994-1.67114C2.6308,12.68774,2.62164,12.40314,2.62164,10s0.00916-2.68774.05243-3.63678A4.9786,4.9786,0,0,1,2.984,4.69208a2.78769,2.78769,0,0,1,.67322-1.03485A2.78769,2.78769,0,0,1,4.69208,2.984a4.9786,4.9786,0,0,1,1.67114-.30994C7.31226,2.6308,7.59686,2.62164,10,2.62164s2.68774,0.00916,3.63678.05243a4.9786,4.9786,0,0,1,1.67114.30994,2.78769,2.78769,0,0,1,1.03485.67322A2.78769,2.78769,0,0,1,17.016,4.69208a4.9786,4.9786,0,0,1,.30994,1.67114c0.04327,0.949.05243,1.2337,0.05243,3.63678S17.3692,12.68774,17.32593,13.63678ZM10,5.37836A4.62164,4.62164,0,1,0,14.62164,10,4.62169,4.62169,0,0,0,10,5.37836ZM10,13a3,3,0,1,1,3-3A3,3,0,0,1,10,13Zm5.88422-7.8042a1.08,1.08,0,1,1-1.08-1.08A1.08,1.08,0,0,1,15.88422,5.1958Z"
            transform="translate(-1 -1)"
          />
        </svg>
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="title-font font-medium">@mirziyoyev_sh</span>
        </span>
      </a>
      <a
        href="https://twitter.com/president_uz"
        target="_blank"
        rel="nofollow noopener"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="#1DA1F2" class="w-6 h-6" viewBox="0 0 20 20">
          <path
            d="M17.316,6.246c0.008,0.162,0.011,0.326,0.011,0.488c0,4.99-3.797,10.742-10.74,10.742c-2.133,0-4.116-0.625-5.787-1.697c0.296,0.035,0.596,0.053,0.9,0.053c1.77,0,3.397-0.604,4.688-1.615c-1.651-0.031-3.046-1.121-3.526-2.621c0.23,0.043,0.467,0.066,0.71,0.066c0.345,0,0.679-0.045,0.995-0.131c-1.727-0.348-3.028-1.873-3.028-3.703c0-0.016,0-0.031,0-0.047c0.509,0.283,1.092,0.453,1.71,0.473c-1.013-0.678-1.68-1.832-1.68-3.143c0-0.691,0.186-1.34,0.512-1.898C3.942,5.498,6.725,7,9.862,7.158C9.798,6.881,9.765,6.594,9.765,6.297c0-2.084,1.689-3.773,3.774-3.773c1.086,0,2.067,0.457,2.756,1.191c0.859-0.17,1.667-0.484,2.397-0.916c-0.282,0.881-0.881,1.621-1.66,2.088c0.764-0.092,1.49-0.293,2.168-0.594C18.694,5.051,18.054,5.715,17.316,6.246z"
          />
        </svg>
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="title-font font-medium">@president_uz</span>
        </span>
      </a>
      <a
        href="https://www.youtube.com/channel/UC61Jnumjuz8NXhSuLoZD2xg"
        target="_blank"
        rel="nofollow noopener"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="#FF0000" class="w-6 h-6" viewBox="0 0 20 20">
          <path
            d="M10,2.3C0.172,2.3,0,3.174,0,10s0.172,7.7,10,7.7s10-0.874,10-7.7S19.828,2.3,10,2.3z M13.205,10.334l-4.49,2.096C8.322,12.612,8,12.408,8,11.974V8.026C8,7.593,8.322,7.388,8.715,7.57l4.49,2.096C13.598,9.85,13.598,10.15,13.205,10.334z"
          />
        </svg>
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="title-font font-medium">Shavkat Mirziyoyev's Press-service</span>
        </span>
      </a>
      <a
        href="https://president.uz/oz"
        target="_blank"
        rel="nofollow noopener"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="#4AC959" class="w-6 h-6" viewBox="0 0 20 20">
          <path
            d="M10,0.4c-5.295,0-9.601,4.307-9.601,9.6c0,5.293,4.306,9.6,9.601,9.6c5.293,0,9.6-4.307,9.6-9.6C19.6,4.707,15.293,0.4,10,0.4z M18.188,10c0,1.873-0.636,3.6-1.696,4.98c-0.3-0.234-0.619-0.867-0.319-1.523c0.303-0.66,0.382-2.188,0.312-2.783c-0.066-0.594-0.375-2.025-1.214-2.039c-0.838-0.012-1.413-0.289-1.911-1.283c-1.033-2.068,1.939-2.465,0.906-3.609c-0.289-0.322-1.783,1.322-2.002-0.869C12.25,2.717,12.399,2.482,12.6,2.238C15.844,3.328,18.188,6.395,18.188,10z M8.875,1.893C8.679,2.275,8.162,2.43,7.848,2.717C7.164,3.336,6.87,3.25,6.502,3.844C6.131,4.438,4.935,5.293,4.935,5.723s0.604,0.936,0.906,0.838c0.302-0.1,1.099-0.094,1.567,0.07c0.469,0.166,3.914,0.332,2.816,3.244c-0.348,0.926-1.873,0.77-2.279,2.303c-0.061,0.225-0.272,1.186-0.285,1.5c-0.025,0.486,0.344,2.318-0.125,2.318c-0.471,0-1.738-1.639-1.738-1.936c0-0.297-0.328-1.338-0.328-2.23c0-0.891-1.518-0.877-1.518-2.062c0-1.068,0.823-1.6,0.638-2.113c-0.181-0.51-1.627-0.527-2.23-0.59C3.412,4.334,5.889,2.307,8.875,1.893z M7.424,17.77c0.492-0.26,0.542-0.596,0.988-0.613c0.51-0.023,0.925-0.199,1.5-0.326c0.51-0.111,1.423-0.629,2.226-0.695c0.678-0.055,2.015,0.035,2.375,0.689c-1.295,0.861-2.848,1.363-4.514,1.363C9.1,18.188,8.234,18.039,7.424,17.77z"
          />
        </svg>
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="title-font font-medium">www.president.uz</span>
        </span>
      </a>
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
  a {
    @apply bg-gray-200 inline-flex text-gray-900 justify-center py-3 px-5 rounded-lg items-center transform transition duration-300 ease-in;
  }

  a:hover {
    @apply bg-blue-700 text-gray-100 shadow-xl -translate-y-1.5 no-underline;
  }

  a:focus {
    @apply outline-none;
  }

  .poster {
    @apply bg-gradient-to-r from-gray-700 to-gray-900 p-4 my-6 flex items-center justify-center;
  }

  .social-links {
    @apply grid grid-cols-1 gap-4 justify-center;
  }

  @screen md {
    .poster {
      @apply p-6;
    }

    .social-links {
      @apply grid-cols-2;
    }
  }

  @screen lg {
    .poster {
      @apply p-8;
    }

    .social-links {
      @apply grid-cols-3;
    }
  }
</style>
