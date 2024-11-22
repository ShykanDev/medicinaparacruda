<template>
    <div class="p-5 font-poppins min-h-36">
      <div class="relative rounded-lg lg:flex lg:flex-row-reverse lg:items-center lg:text-2xl">
        <!-- Contenedor del texto y la imagen del centro -->
        <div class="lg:w-1/2">
          <!-- Título arriba -->
          <h2 class="z-10 text-2xl font-semibold text-center text-rose-800 lg:text-5xl">
            {{ title }}
          </h2>
          <!-- Descripciones -->
          <p class="mt-3 leading-relaxed text-gray-600" v-html="highlightGastritis(description)"></p>
          <p class="mt-3 leading-relaxed text-gray-600" v-html="highlightGastritis(description2)"></p>
        </div>
  
        <!-- Imagen del centro en pantallas grandes al lado derecho -->
        <div class="flex items-center justify-center lg:w-1/2 lg:justify-start">
          <img
            v-if="showImgCenter"
            :class="imgCenterWidth"
            class="rounded-lg w-[450px] lg:w-[450px]"
            :src="imgCenter"
            alt=""
          />
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  const props = defineProps({
    title: {
      type: String,
      default: 'Lorem ipsum dolor.'
    },
    description: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Gastritis puede ser un problema grave si no se trata adecuadamente.'
    },
    description2: {
      type: String,
      default:
        'La gastritis crónica a menudo está asociada con una dieta poco saludable y estrés.'
    },
    imgCenter: {
      type: String,
      default:
        'https://images.pexels.com/photos/29019699/pexels-photo-29019699/free-photo-of-elegant-rose-vase-in-minimalist-niche-display.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    imgCenterWidth: {
      type: String,
      default: 'w-20'
    },
    showImgCenter: {
      type: Boolean,
      default: true
    }
  });
  
  /**
   * Función para resaltar "gastritis" en las descripciones.
   * Envuelve la palabra "gastritis" en un <strong>.
   */
  const highlightGastritis = (text: string) => {
    return text.replace(/resaca/gi, '<strong class="text-rose-600">Resaca</strong>').replace(/desvelo/gi, '<strong class="text-rose-600">Desvelo</strong>').replace(/ruidosos/gi, '<strong class="text-rose-600">Ruidos</strong>').replace(/ruidos/gi, '<strong class="text-rose-600">Ruidos</strong>');
  };
  </script>
  
  <style scoped>
  /* Agrega estilos personalizados si es necesario */
  </style>
  