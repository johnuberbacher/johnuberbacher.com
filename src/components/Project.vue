<template>
  <div class="project">
    <div
      class="
        border
        dark:border-gray-700
        rounded-md
        bg-white
        dark:bg-gray-800
        shadow-md
        hover:shadow-lg
        overflow-hidden
        z-1
        mb-5
        md:mb-10
        relative
      "
    >
      <div
        class="
          bg-overlay
          flex
          items-center
          justify-center
          bg-cover bg-center
          border-b
          md:border-r md:border-b-0
          dark:border-gray-700
        "
      >
        <picture class="flex h-full w-full">
          <source
            :srcset="('/assets/img/webp/' + preview + '.webp')"
            :alt="title + ' - John Uberbacher'"
            type="image/webp"
            class="h-full w-auto object-cover"
          />
          <source
            :srcset="('/assets/img/png/' + preview + '.png')"
            :alt="title + ' - John Uberbacher'"
            type="image/png"
            class="h-full w-auto object-cover"
          />
          <img
            :src="('/assets/img/png/' + preview + '.png')"
            :alt="title + ' - John Uberbacher'"
            class="h-full w-auto object-cover"
          />
        </picture>
      </div>
      <div class="col-span-2 p-5 md:p-7 lg:p-10">
        <h5 class="mb-4 font-semibold dark:text-white">{{ title }}</h5>
        <p class="dark:text-white">
          {{ description }}
        </p>
        <div>
          <div
            v-for="language in languages"
            :key="language"
            class="
              inline-block
              px-3
              py-2
              font-semibold
              text-xs
              dark:text-white
              border border-blue-500
              rounded-md
              mt-3
              mr-3
            "
          >
            {{ language }}
          </div>
        </div>
        <a
          v-if="demo"
          v-bind:href="demo"
          target="_blank"
          rel="noopener noreferrer"
          class="
            inline-flex
            items-center
            justify-center
            pl-4
            pr-3
            py-2
            font-bold
            text-sm
            bg-blue-500
            hover:bg-blue-400
            focus:bg-blue-600
            text-white
            rounded-full
            shadow-sm
            hover:shadow-md
            focus:shadow-sm
            mt-5
            mr-3
          "
        >
          Live Demo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
        <a
          v-if="github"
          v-bind:href="github"
          target="_blank"
          rel="noopener noreferrer"
          class="
            inline-flex
            items-center
            justify-center
            pl-4
            pr-3
            py-2
            font-bold
            text-sm
            bg-blue-500
            hover:bg-blue-400
            focus:bg-blue-600
            text-white
            rounded-full
            shadow-sm
            hover:shadow-md
            focus:shadow-sm
            mt-5
            mr-3
          "
        >
          View Source
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    title: String,
    description: String,
    preview: String,
    demo: String,
    github: String,
    languages: Array,
  },
};
</script>
<style scoped lang="scss">
.bg-overlay {
  position: relative;
}
.bg-overlay {
  @media (max-width: 767px) {
    height: 200px;
  }
  picture {
    height: 100%;
    width: 100%;
    transition: 0.3s filter;
    filter: grayscale(100%);
    img {
        width: 100%;
        height: 100%;
    }
  }
}
.project {
  &:hover {
    .bg-overlay {
      picture {
        filter: none;
      }
    }
  }
}
</style>
