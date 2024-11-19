<template>
    <div class="">
        <MainLayout >
            <template #main>
              <h1 class="py-8 text-4xl font-bold text-center text-white shadow-lg bg-gradient-to-r from-gray-800 via-rose-700 to-gray-800 font-poppins">
  Conozca los ingredientes <span class="text-rose-300">NATURALES</span> que <span class="underline decoration-rose-300">HANGOVER</span> le ofrece para la <span class="text-rose-300">CRUDA</span>
</h1>
                <div class="grid grid-cols-3">
                  <img class="animate-flip-up" src="../assets/left.png" alt="">
                  <img class="animate-flip-up" src="../assets/front.png" alt="">
                <img class="animate-flip-up" src="../assets/right.png" alt="">
              </div>
              <section class="flex flex-wrap justify-between gap-5 p-4 font-poppins">
  <div class="flex-1 sm:flex-1 md:flex-1 lg:w-1/2">
    <h3 class="mb-4 text-xl font-semibold text-rose-800">Características del Producto</h3>
    <ul class="p-0 list-none">
      <li><strong>Cantidad de Cápsulas:</strong> 60 cápsulas por envase </li>
      <li><strong>Tamaño de la Porción:</strong> 1 cápsula</li>
      <li><strong>Modo de Uso:</strong> Tomar 1 cápsula de 1 a 2 veces al día, preferiblemente con comida o según lo indique un profesional de la salud.</li>
      <li><strong>Almacenamiento:</strong> Mantener en un lugar fresco y seco, lejos de la luz solar directa.</li>
      <li><strong>Advertencias:</strong> Consultar a un profesional de la salud si está embarazada o en período de lactancia. Mantener fuera del alcance de los niños.</li>
      <li><strong>Categoría:</strong> Suplemento dietético</li>
    </ul>
  </div>

  <div class="flex-1 sm:flex-1 md:flex-1 lg:w-1/2">
    <h3 class="mb-4 text-xl font-semibold text-rose-800">Resumen de Ingredientes</h3>
    <ul class="p-0 list-none">
  <li><span class="font-bold text-rose-500">Guggul (Commiphora mukul) 🌿</span> Ayuda a reducir la inflamación y el colesterol, promoviendo la salud cardiovascular.</li>
  <li><span class="font-bold text-rose-500">Extracto de Salai Guggul (Boswellia serrata) 🍃</span> Tiene propiedades antiinflamatorias que pueden aliviar el dolor y mejorar la movilidad.</li>
  <li><span class="font-bold text-rose-500">Extracto de Nirgundi (Vitex negundo) 🌱</span> Alivia la inflamación y el dolor, especialmente en articulaciones y músculos.</li>
  <li><span class="font-bold text-rose-500">Extracto de Ashwagandha (Withania somnifera) 🌿</span> Reduce el estrés, mejora la energía y promueve el bienestar general.</li>
  <li><span class="font-bold text-rose-500">Extracto de Erandamool (Ricinus communis) 🌾</span> Tiene propiedades antiinflamatorias y ayuda en la relajación muscular.</li>
  <li><span class="font-bold text-rose-500">Extracto de Rasna (Pluchea lanceolata) 🍃</span> Promueve la salud de las articulaciones y reduce la inflamación.</li>
  <li><span class="font-bold text-rose-500">Extracto de Shilajit (Betún mineral) 🌿</span> Aumenta la energía, mejora la salud general y tiene efectos rejuvenecedores.</li>
  <li><span class="font-bold text-rose-500">Extracto de Haldi (Curcuma longa) 🌱</span> Potente antiinflamatorio que apoya la salud de las articulaciones y la digestión.</li>
  <li><span class="font-bold text-rose-500">Extracto de Adrak (Zingiber officinale) 🍃</span> Ayuda a mejorar la digestión y reduce la inflamación.</li>
  <li><span class="font-bold text-rose-500">Extracto de Pippali (Piper longum) 🌿</span> Aumenta la biodisponibilidad de otros ingredientes y mejora la digestión.</li>
  <li><span class="font-bold text-rose-500">Probiótico (Lactobacillus sporogenes) 🦠</span> Restaura el equilibrio de la flora intestinal, mejorando la digestión y reduciendo la inflamación.</li>
</ul>

  </div>
</section>

            <section class="flex flex-wrap justify-around gap-4 p-4 animate-fade-up">
                <IngredientCard v-for="ingredient in ingredients" :key="ingredient.title" :title="ingredient.title" :smallIntro="ingredient.shortResume" :description="ingredient.longResume" :tags="ingredient.listTitles" :listTitles="ingredient.listTitles" :listContent="ingredient.listContent" :imgSrc="ingredient.imgSrc" />
            </section>

            <!-- info saying that the images are an aproximately representation of the product -->
             <p class="text-sm italic text-right text-rose-800 font-poppins">ℹ️ Las imágenes son una representación aproximada del ingrediente, pueden variar en color, textura o forma.</p>
            </template>
        </MainLayout>
    </div>
</template>

<script lang="ts" setup>
import IngredientCard from '@/components/IngredientCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
const ingredients = [
  {
    title: "Guggul (Commiphora mukul)",
    shortResume: "Ayuda a la desintoxicación y mejora la circulación durante la resaca.",
    longResume: "El Guggul es un excelente aliado en la eliminación de toxinas del cuerpo. Promueve la circulación sanguínea y apoya la desintoxicación, lo que puede acelerar la recuperación después de una resaca.",
    listTitles: [
      "Mejora la circulación",
      "Desintoxicación rápida",
      "Alivia la fatiga"
    ],
    listContent: [
      "Facilita el flujo sanguíneo, acelerando la eliminación de toxinas.",
      "Promueve una desintoxicación más eficiente tras el consumo de alcohol.",
      "Ayuda a reducir la fatiga y sensación de cansancio."
    ],
    imgSrc: 'https://storage.googleapis.com/a1aa/image/g5ZA9Az0Li7vN5OZmuvG6GIUqrEenaGIwY2GL1NvKbh70U5JA.jpg'
  },
  {
    title: "Extracto de Salai Guggul (Boswellia serrata)",
    shortResume: "Alivia dolores musculares y articulares durante la resaca.",
    longResume: "Este extracto tiene potentes propiedades antiinflamatorias que ayudan a aliviar el dolor muscular y articular, síntomas comunes de la resaca.",
    listTitles: [
      "Alivio del dolor muscular",
      "Reducción de la inflamación",
      "Mejora la movilidad"
    ],
    listContent: [
      "Ayuda a reducir los dolores musculares asociados con la deshidratación de la resaca.",
      "Disminuye la inflamación de los tejidos por el consumo de alcohol.",
      "Favorece la recuperación de la flexibilidad y movilidad articular."
    ],
    imgSrc: 'https://storage.googleapis.com/a1aa/image/4rM7DjXxzmJMMFtVtk0rzF91es6ES3mLdWVZjtgSWyha1U5JA.jpg'
  },
  {
    title: "Extracto de Nirgundi (Vitex negundo)",
    shortResume: "Alivia tensiones musculares y mejora la relajación durante la resaca.",
    longResume: "El Nirgundi es perfecto para aliviar dolores musculares y tensiones, comunes durante la resaca, favoreciendo la relajación y el bienestar general.",
    listTitles: [
      "Relajación muscular",
      "Alivio del dolor",
      "Propiedades antiinflamatorias"
    ],
    listContent: [
      "Reduce la tensión muscular y el dolor por el efecto deshidratante del alcohol.",
      "Actúa como antiinflamatorio, aliviando molestias físicas tras una resaca.",
      "Favorece la relajación muscular, ayudando a calmar el cuerpo."
    ],
    imgSrc: 'https://storage.googleapis.com/a1aa/image/fk8b8JBAeDswfJs0aEMU1fOrflIF6iRJZn9xdytFldCFdNVeE.jpg'
  },
  {
    title: "Extracto de Ashwagandha (Withania somnifera)",
    shortResume: "Reduce el estrés y mejora la vitalidad durante la resaca.",
    longResume: "La Ashwagandha es conocida por sus propiedades adaptógenas, ayudando a reducir los efectos del estrés y la ansiedad que puede generar la resaca, y mejorando los niveles de energía.",
    listTitles: [
      "Reducción del estrés",
      "Recuperación de la energía",
      "Mejora el bienestar general"
    ],
    listContent: [
      "Reduce la ansiedad y el estrés tras el consumo de alcohol.",
      "Recupera los niveles de energía y vitalidad en el cuerpo.",
      "Promueve un equilibrio general que ayuda a superar la resaca más rápidamente."
    ],
    imgSrc: 'https://storage.googleapis.com/a1aa/image/dMHODy5INtbSHh65YCt7KDH2FpLDF8Ga87zi39dLe46G2U5JA.jpg'
  },
  {
    title: "Extracto de Erandamool (Ricinus communis)",
    shortResume: "Promueve la digestión y alivia el malestar estomacal post-resaca.",
    longResume: "El extracto de Erandamool ayuda a aliviar el estreñimiento y mejorar la digestión, efectos comunes tras una noche de consumo excesivo de alcohol.",
    listTitles: [
      "Alivio del malestar estomacal",
      "Mejora la digestión",
      "Desintoxicación intestinal"
    ],
    listContent: [
      "Ayuda a aliviar el malestar estomacal y la acidez.",
      "Favorece la digestión, ayudando a calmar el sistema digestivo alterado.",
      "Promueve la desintoxicación del sistema digestivo tras el alcohol."
    ],
    imgSrc: 'https://storage.googleapis.com/a1aa/image/ojSvI2dsqJLjGxSWyd1vokiEbFXv8w1BAN60yenyW1uu2U5JA.jpg'
  },
  {
    title: "Extracto de Rasna (Pluchea lanceolata)",
    shortResume: "Alivia dolores musculares y articulares tras una resaca.",
    longResume: "Este extracto tiene propiedades antiinflamatorias y analgésicas que ayudan a reducir el dolor muscular y articular causado por la resaca.",
    listTitles: [
      "Alivio del dolor muscular",
      "Reducción de la inflamación",
      "Mejora la movilidad"
    ],
    listContent: [
      "Alivia los dolores y molestias musculares comunes después de beber.",
      "Reduce la inflamación que puede generarse tras la deshidratación.",
      "Favorece la movilidad y flexibilidad del cuerpo."
    ],
    imgSrc: 'https://storage.googleapis.com/a1aa/image/m2r0q7WmWybaIRKg4us5RiUs3zzYzrb6KSBFHN4grLdkbq8E.jpg'
  },
  {
    title: "Extracto de Shilajit (Betún mineral)",
    shortResume: "Recupera la energía y revitaliza el cuerpo tras la resaca.",
    longResume: "El Shilajit es un mineral conocido por sus propiedades energizantes, que son muy útiles para reponer energía tras una noche de consumo excesivo de alcohol.",
    listTitles: [
      "Aumento de energía",
      "Mejora la salud general",
      "Refuerzo de la vitalidad"
    ],
    listContent: [
      "Aumenta los niveles de energía y vitalidad después de la resaca.",
      "Fortalece el bienestar general y mejora la salud física.",
      "Refuerza la vitalidad y la recuperación tras el desgaste causado por la resaca."
    ],
    imgSrc: 'https://storage.googleapis.com/a1aa/image/ab3zfaH3OpVCek6FPcJeHeFH3Twfq0LIfDqjkDUehL8Td3U5JA.jpg'
  },
  {
    title: "Extracto de Haldi (Curcuma longa)",
    shortResume: "Alivia la inflamación y ayuda a la salud general tras la resaca.",
    longResume: "La cúrcuma tiene propiedades antiinflamatorias y antioxidantes que ayudan a reducir la inflamación y los efectos negativos del alcohol en el cuerpo.",
    listTitles: [
      "Propiedades antiinflamatorias",
      "Acción antioxidante",
      "Mejora la salud general"
    ],
    listContent: [
      "Reduce la inflamación en el cuerpo después de la resaca.",
      "Protege las células del daño causado por los efectos del alcohol.",
      "Favorece la salud en general, ayudando a la recuperación física."
    ],
    imgSrc: 'https://storage.googleapis.com/a1aa/image/bu8lHoP1v758LxnpowlKgH9ALZHfaffIdvbkoQ4yfFde8NVeE.jpg'
  },
  {
    title: "Extracto de Adrak (Zingiber officinale)",
    shortResume: "Alivia náuseas y mejora la digestión durante la resaca.",
    longResume: "El jengibre es eficaz para aliviar las náuseas y el malestar estomacal, efectos comunes de la resaca. También mejora la digestión y promueve el bienestar digestivo.",
    listTitles: [
      "Alivio de náuseas",
      "Mejora la digestión",
      "Propiedades antiinflamatorias"
    ],
    listContent: [
      "Alivia las náuseas y el malestar estomacal típicos de la resaca.",
      "Mejora la digestión y favorece la absorción de nutrientes.",
      "Tiene efectos antiinflamatorios que ayudan a reducir la irritación estomacal."
    ],
    imgSrc: 'https://storage.googleapis.com/a1aa/image/URpBvtyo1IbyL1KJkzb2QqHYOGZex7gAWnPFhqYWGufbnpyTA.jpg'
  },
  {
    title: "Extracto de Pippali (Piper longum)",
    shortResume: "Favorece la digestión y desintoxicación durante la resaca.",
    longResume: "El Pippali ayuda a estimular el proceso digestivo y apoya la eliminación de toxinas del cuerpo, aliviando los efectos del alcohol.",
    listTitles: [
      "Desintoxicación",
      "Estimulación digestiva",
      "Reducción del malestar estomacal"
    ],
    listContent: [
      "Ayuda a eliminar las toxinas y residuos del alcohol del cuerpo.",
      "Estimula el sistema digestivo, favoreciendo la absorción de nutrientes.",
      "Reduce el malestar estomacal asociado con la resaca."
    ],
    imgSrc: 'https://storage.googleapis.com/a1aa/image/WUITwyVfbt2ndqTAzdYSCTGCrEfFD6NEVrOnm3KjPdfXQTlnA.jpg'
  }
];





</script>

<style scoped>

</style>