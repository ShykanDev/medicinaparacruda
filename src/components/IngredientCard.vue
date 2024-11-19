<template>
    <div class="max-w-sm overflow-hidden rounded-lg shadow-lg">
      <img class="w-full rounded-t-lg" :src="imgSrc" alt="" />
      <div class="px-6 py-4">
        <!-- Title -->
        <h2 class="text-xl font-bold text-rose-900">{{ title }}</h2>
        <!-- Small Resume -->
        <p class="text-base text-rose-700">
          {{ smallIntro }}
        </p>
        <!-- Long Resume -->
        <h3>{{ description }}</h3>
      </div>
      <ul class="px-6 py-4">
        <li
          v-for="(item, index) in listTitles"
          :key="index"
          class="text-base text-slate-800 font-poppins"
        >
          <strong class="text-rose-800">{{ item }}:</strong> {{ listContent[index] }}
        </li>
      </ul>
      <div class="flex items-center justify-center px-6 pt-4 pb-2 space-x-3">
        <!-- Tags -->
        <span
          v-for="(tag, index) in tags"
          :key="index"
          class="inline-block px-3 py-1 m-1 text-xs font-semibold rounded-full text-rose-800 bg-rose-200 font-poppins"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </template>
  
    
    <script lang="ts" setup>
    const props = defineProps({
      title:{
        type:String,
      },
      smallIntro: {
        type: String,
      },
      description: {
        type: String,
      },
      tags: {
        type: Array,
      },
      imgSrc: {
        type: String,
      },
      listTitles: {
        type: Array,
      },
      listContent: {
        type: Array,
        default: () => [],
      },

            // title:String,
            // smallIntro: String,
            // description: String,
            // tags:Array,
            // imgSrc: String,
            // listTitles: Array,
            // listContent: Array
    })
    </script>
    
    <style scoped>
    
    </style>