<template>
    <div class="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg">
      <!-- Imagen -->
      <img :src="imgSrc" alt="Card Image" class="object-cover w-full h-48">
  
      <!-- Contenido -->
      <div class="p-6">
        <!-- Título -->
        <h2 class="mb-2 text-2xl font-semibold text-rose-800">{{ title }}</h2>
        
        <!-- Pequeña Descripción -->
        <p class="mb-4 text-sm italic text-rose-900 font font-poppins">{{ smallDescription }}</p>
        
        <!-- Descripción -->
        <p class="text-base text-slate-700 font-poppins">
          {{ description }}
        </p>
      </div>
    </div>
  </template>
  

<script lang="ts" setup>
const props = defineProps({
        title: {
            type: String,
            default: 'Título de la Tarjeta',
        },
        smallDescription: {
            type: String,
            default: 'Pequeño resumen',
        },
        description: {
            type: String,
            default: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt debitis labore iusto aspernatur asperiores incidunt exercitationem nemo earum. Atque, minima!',
        },
        imgSrc: {
            type: String,
        //   required: true
        default: 'https://images.pexels.com/photos/12327637/pexels-photo-12327637.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        }
})
</script>
<style scoped>
.group:hover .group-hover\:opacity-0 {
         opacity: 0;
     }
     .group:hover .group-hover\:opacity-100 {
         opacity: 1;
     }
</style>