<template>
    <div class="">
        <MainLayout >
            <template #main>
              <h1 class="py-8 text-4xl font-bold text-center text-white shadow-lg bg-gradient-to-r from-gray-800 via-purple-700 to-gray-800 font-poppins">
  Conozca los ingredientes <span class="text-emerald-300">NATURALES</span> que <span class="underline decoration-emerald-300">CIDNI</span> le ofrece para la <span class="text-emerald-300">GASTRITIS</span>
</h1>

                <div class="grid grid-cols-3">
                <img class="animate-flip-up" src="../assets/front.png" alt="">
                <img class="animate-flip-up" src="../assets/syrup.png" alt="">
                <img class="animate-flip-up" src="../assets/frontRight.png" alt="">
              </div>
              <section class="flex flex-wrap justify-between gap-5 p-4 font-poppins">
  <div class="flex-1 sm:flex-1 md:flex-1 lg:w-1/2">
    <h3 class="mb-4 text-xl font-semibold text-purple-800">Características del Producto</h3>
    <ul class="p-0 list-none">
      <li><strong>Cantidad de Cápsulas:</strong> 60 cápsulas por envase / Botella 200ml</li>
      <li><strong>Tamaño de la Porción:</strong> 1 cápsula/15ml</li>
      <li><strong>Modo de Uso:</strong> Tomar 1 cápsula de 1 a 2 veces al día, preferiblemente con comida o según lo indique un profesional de la salud.</li>
      <li><strong>Almacenamiento:</strong> Mantener en un lugar fresco y seco, lejos de la luz solar directa.</li>
      <li><strong>Advertencias:</strong> Consultar a un profesional de la salud si está embarazada o en período de lactancia. Mantener fuera del alcance de los niños.</li>
      <li><strong>Categoría:</strong> Suplemento dietético</li>
    </ul>
  </div>

  <div class="flex-1 sm:flex-1 md:flex-1 lg:w-1/2">
    <h3 class="mb-4 text-xl font-semibold text-purple-800">Resumen de Ingredientes</h3>
    <ul class="p-0 list-none">
      <li><span class="font-bold text-emerald-500">Amla (Embilica officinalis) 🌿</span> Refuerza el sistema inmunológico y tiene propiedades antioxidantes, ayudando a reducir la inflamación y mejorar la salud vascular.</li>
      <li><span class="font-bold text-emerald-500">Draksha (Vitis vinifera) 🌱</span> Mejora la circulación sanguínea, reduce la inflamación y fortalece las venas, lo que puede aliviar las hemorroides y la congestión venosa.</li>
      <li><span class="font-bold text-emerald-500">Ashwagandha (Withania somnifera) 🍃</span> Reduce el estrés y la inflamación, favoreciendo la recuperación de los tejidos afectados por las hemorroides.</li>
      <li><span class="font-bold text-emerald-500">Bhrungraj (Eclipta alba) 🌳</span> Promueve la salud de los vasos sanguíneos, aliviando la inflamación y reduciendo el sangrado en las hemorroides.</li>
      <li><span class="font-bold text-emerald-500">Bhumiamalki (Phyllanthus fraternus) 🌾</span> Alivia la inflamación y las molestias en la zona afectada, ayudando a mejorar la circulación en las venas hemorroidales.</li>
      <li><span class="font-bold text-emerald-500">Galo (Tinospora cordifolia) 🌱</span> Tiene propiedades antiinflamatorias que ayudan a reducir la hinchazón y a aliviar los síntomas de las hemorroides.</li>
      <li><span class="font-bold text-emerald-500">Gokhru (Tribulus terrestris) 🍃</span> Mejora la circulación sanguínea y reduce la congestión en las venas hemorroidales, aliviando la hinchazón y el dolor.</li>
      <li><span class="font-bold text-emerald-500">Punamava (Boerhaavia diffusa) 🌿</span> Alivia la inflamación y mejora la circulación, ayudando a reducir la presión sobre las venas afectadas por las hemorroides.</li>
      <li><span class="font-bold text-emerald-500">Kasni (Cichorium intybus) 🌱</span> Beneficia la salud hepática y mejora la circulación, ayudando a reducir la inflamación y aliviando las molestias causadas por las hemorroides.</li>
      <li><span class="font-bold text-emerald-500">Probiótico 🦠</span> Restaura el equilibrio de la flora intestinal, mejorando la digestión y reduciendo la inflamación en la zona afectada por las hemorroides.</li>
    </ul>
  </div>
</section>

            <section class="flex flex-wrap justify-around gap-4 p-4 animate-fade-up">
                <IngredientCard v-for="ingredient in ingredients" :key="ingredient.title" :title="ingredient.title" :smallIntro="ingredient.shortResume" :description="ingredient.longResume" :tags="ingredient.listTitles" :listTitles="ingredient.listTitles" :listContent="ingredient.listContent" :imgSrc="ingredient.imgSrc" />
            </section>
            </template>
        </MainLayout>
    </div>
</template>

<script lang="ts" setup>
import IngredientCard from '@/components/IngredientCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
const ingredients = [
  {
    title: "Amla (Embilica officinalis)",
    shortResume: "Desintoxica y promueve la salud digestiva.",
    longResume: "El Amla, también conocido como grosella espinosa india, es un potente antioxidante que ayuda a desintoxicar el cuerpo y promueve una digestión saludable. Su alto contenido de vitamina C lo convierte en un aliado para revitalizar el cuerpo después de una resaca.",
    listTitles: [
      "Desintoxicación natural",
      "Fortalece el sistema digestivo",
      "Revitaliza el cuerpo"
    ],
    listContent: [
      "Ayuda a eliminar toxinas acumuladas por el consumo de alcohol.",
      "Mejora la digestión y la absorción de nutrientes.",
      "Aporta vitamina C y antioxidantes, favoreciendo la recuperación del cuerpo."
    ],
    imgSrc: 'https://5.imimg.com/data5/QI/WU/HD/SELLER-30742137/amla-emblica-officinalis-seeds-500x500.JPG'
  },
  {
    title: "Draksha (Vitis vinifera)",
    shortResume: "Rehidrata y mejora la circulación.",
    longResume: "La uva (Draksha) es un excelente rehidratante que combate la deshidratación causada por el consumo excesivo de alcohol. Además, ayuda a mejorar la circulación sanguínea, lo que facilita la recuperación del cuerpo tras la resaca.",
    listTitles: [
      "Propiedades rehidratantes",
      "Mejora la circulación",
      "Antioxidante natural"
    ],
    listContent: [
      "Ayuda a reponer los líquidos perdidos durante la resaca.",
      "Favorece una circulación sanguínea saludable, acelerando la recuperación.",
      "Es rica en antioxidantes que protegen las células del daño oxidativo."
    ],
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Cabernet_Sauvignon_Gaillac.jpg/640px-Cabernet_Sauvignon_Gaillac.jpg'
  },
  {
    title: "Ashwagandha (Withania somnifera)",
    shortResume: "Reduce la ansiedad y alivia el estrés.",
    longResume: "El Ashwagandha es una hierba adaptógena que ayuda a reducir los niveles de estrés y ansiedad. Su acción calmante es útil para aliviar el malestar emocional que puede acompañar la resaca, promoviendo un estado de bienestar general.",
    listTitles: [
      "Reducción del estrés",
      "Alivio de la ansiedad",
      "Mejora el bienestar emocional"
    ],
    listContent: [
      "Alivia el estrés y la ansiedad, comunes durante una resaca.",
      "Promueve un equilibrio emocional, ayudando a mantener la calma.",
      "Favorece la estabilidad general del cuerpo, incluso en momentos de fatiga."
    ],
    imgSrc: 'https://i.etsystatic.com/12846395/r/il/6ba6ae/1003145933/il_570xN.1003145933_m4zc.jpg'
  },
  {
    title: "Bhrungraj (Eclipta alba)",
    shortResume: "Favorece la regeneración celular y alivia dolores.",
    longResume: "El Bhrungraj es conocido por sus propiedades regeneradoras, ayudando al cuerpo a reparar los daños causados por el alcohol. Además, alivia dolores y molestias, lo que lo convierte en un aliado ideal para la recuperación post-resaca.",
    listTitles: [
      "Regeneración celular",
      "Alivio del dolor",
      "Mejora la salud general"
    ],
    listContent: [
      "Favorece la regeneración celular del hígado y otros órganos dañados.",
      "Alivia los dolores musculares y de cabeza comunes durante la resaca.",
      "Mejora la salud en general, ayudando a restablecer el equilibrio corporal."
    ],
    imgSrc: 'https://img.freepik.com/premium-photo/bhringraj-also-called-eclipta-alba-is-very-well-known-ayurvedic-herb-its-ability-support-strong-healthy-lustrous-locks-preventing-premature-graying-hair_1028938-516727.jpg'
  },
  {
    title: "Bhumiamalki (Phyllanthus fraternus)",
    shortResume: "Desintoxica el hígado y mejora la función hepática.",
    longResume: "El Bhumiamalki es una planta excelente para desintoxicar el hígado, favoreciendo su capacidad para eliminar toxinas. Este ingrediente ayuda a restaurar la función hepática y alivia los efectos negativos de la resaca sobre el hígado.",
    listTitles: [
      "Desintoxicación hepática",
      "Mejora la función hepática",
      "Alivio post-consumo"
    ],
    listContent: [
      "Ayuda a eliminar las toxinas acumuladas en el hígado debido al alcohol.",
      "Restaurando la función hepática, mejora la digestión y el metabolismo.",
      "Alivia la fatiga y el malestar provocado por el daño hepático debido a la resaca."
    ],
    imgSrc: 'https://efloraofindia.com/wp-content/uploads/2020/10/Phyllanthus-fraternus-Delhi-1.jpg'
  },
  {
    title: "Galo (Tinospora cordifolia)",
    shortResume: "Refuerza el sistema inmune y promueve la energía.",
    longResume: "El Galo es una planta ayurvédica que refuerza el sistema inmune y proporciona energía al cuerpo. Su capacidad para restaurar la energía y fortalecer las defensas es útil durante la recuperación de una resaca.",
    listTitles: [
      "Refuerzo del sistema inmune",
      "Proporciona energía",
      "Mejora la vitalidad"
    ],
    listContent: [
      "Fortalece el sistema inmune, ayudando a prevenir infecciones durante la recuperación.",
      "Aporta energía al cuerpo, reduciendo la fatiga típica de la resaca.",
      "Promueve la vitalidad, acelerando la recuperación post-consumo de alcohol."
    ],
    imgSrc: 'https://rukminim2.flixcart.com/image/720/864/ki4w0i80-0/plant-seed/v/j/x/15-guduchi-geeloh-amrita-guchcha-neem-giloy-stem-for-plantation-original-imafyy4ty5xmrzks.jpeg?q=60&crop=false'
  },
  {
    title: "Gokhru (Tribulus terrestris)",
    shortResume: "Aumenta la vitalidad y mejora la circulación.",
    longResume: "El Gokhru es conocido por sus propiedades energizantes y circulatorias. Ayuda a aumentar la vitalidad y mejorar la circulación sanguínea, favoreciendo la recuperación después de una resaca.",
    listTitles: [
      "Aumento de la vitalidad",
      "Mejora de la circulación",
      "Recuperación energética"
    ],
    listContent: [
      "Aumenta la energía y vitalidad del cuerpo, reduciendo la fatiga.",
      "Mejora la circulación sanguínea, acelerando la recuperación.",
      "Favorece la regeneración celular, ayudando al cuerpo a recuperarse más rápidamente."
    ],
    imgSrc: 'https://cdn.shopify.com/s/files/1/0532/3151/7865/articles/Gokhru.jpg?v=1668608603'
  },
  {
    title: "Punamava (Boerhaavia diffusa)",
    shortResume: "Desintoxica y purifica la sangre.",
    longResume: "El Punamava es una hierba que ayuda a purificar la sangre y eliminar toxinas del cuerpo. Su acción depurativa es útil para limpiar el organismo después de una noche de consumo excesivo de alcohol.",
    listTitles: [
      "Desintoxicación de la sangre",
      "Purificación del cuerpo",
      "Alivio de la resaca"
    ],
    listContent: [
      "Purifica la sangre, eliminando las toxinas derivadas del alcohol.",
      "Desintoxica el cuerpo, favoreciendo una rápida recuperación de los efectos de la resaca.",
      "Ayuda a restablecer el equilibrio interno, aliviando los síntomas de la resaca."
    ],
    imgSrc: 'https://www.chakrapaniayurveda.com/wp-content/uploads/2021/02/Punarnava.jpg'
  },
  {
    title: "Kasni (Cichorium intybus)",
    shortResume: "Favorece la digestión y la función hepática.",
    longResume: "El Kasni es una planta que apoya la función hepática y la digestión. Su capacidad para mejorar el funcionamiento del hígado y promover la desintoxicación es esencial para combatir los efectos de la resaca.",
    listTitles: [
      "Mejora la digestión",
      "Desintoxicación hepática",
      "Alivio de la resaca"
    ],
    listContent: [
      "Facilita la digestión y alivia la pesadez estomacal tras el consumo de alcohol.",
      "Desintoxica el hígado, favoreciendo su capacidad para eliminar toxinas.",
      "Alivia los efectos de la resaca, promoviendo una recuperación más rápida."
    ],
    imgSrc: 'https://5.imimg.com/data5/IJ/MY/MY-647853/kasni-500x500.jpg'
  }
];





</script>

<style scoped>

</style>