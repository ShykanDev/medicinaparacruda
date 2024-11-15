<template>
  <div class="">
    <MainLayout>
      <template #main>
        <article class="w-full overflow-hidden lg:flex lg:items-center">
          <div
  class="flex flex-col items-center pt-2 lg:items-center lg:flex lg:justify-around lg:w-1/3 lg:h-screen rounded-bl-md rounded-br-md lg:py-11 bg-gradient-to-l from-purple-100 via-purple-1.00 to-purple-200">
  <h2
    class="hidden text-3xl font-extrabold text-center text-purple-900 font-poppins animate-fade-down lg:block">
    Solución Natural con CIDNI para el Alivio de las HEMORROIDES
  </h2>
  <h1 class="text-xl font-extrabold text-center text-gray-800 lg:text-3xl font-poppins animate-fade-down">
    <span class="text-purple-600">Protección Ayurvédica Contra las HEMORROIDES</span>
  </h1>
  <h1 class="text-xl font-extrabold text-center text-gray-800 lg:text-3xl font-poppins animate-fade-down">
    <span class="text-purple-500">Desde la Sabiduría de la India, Hasta Tu Hogar</span>
  </h1>
  <a href="#hangover"
    class="p-1 my-3 font-bold text-purple-600 rounded-md bg-purple lg:rounded-lg lg:text-xl lg:p-2 font-poppins animate-bounce">
    Descubre Más
  </a>
</div>

          <img src="../assets/mainImg.jpg" class="lg:w-2/3 animate-fade-up lg:h-screen" alt="Producto CIDNI">
        </article>

        <section id="hangover" class="space-y-20 overflow-hidden lg:mt-5">
          <CardInfoSm class=""
            img-center="https://images.pexels.com/photos/20419192/pexels-photo-20419192/free-photo-of-yellow-petals-on-spoon-by-book-on-desk.jpeg?auto=compress&cs=tinysrgb&w=600"
            :title="info1.title" :description="info1.content" :description2="info1.content2" />
          <CardInfoSm data-aos="zoom-in-down" class=""
            img-center="https://storage.googleapis.com/a1aa/image/r0BoDpxo0sZkBpf4kVoFtHHLCEPZQ7vePLeDEXkralkfGVEPB.jpg"
            :title="info2.title" :description="info2.content" :description2="info2.content2" />
          <CardInfoSm data-aos="zoom-in-right" class=""
            img-center="https://storage.googleapis.com/a1aa/image/4BhzCIfe9RmFa0urh1BAiP4MwRWf2Bi2fneX4fHjffKXcUFxTA.jpg"
            :title="info3.title" :description="info3.content" :description2="info3.content2" />
          <CardInfoSm data-aos="zoom-out-right" class=""
            img-center="https://storage.googleapis.com/a1aa/image/ePkaOfN0Y7t4ck4erdtUEBQWIp38FRMv75ZYXyyeRWORYVEPB.jpg"
            :title="info4.title" :description="info4.content" :description2="info4.content2" />
          <CardInfoSm data-aos="fade-left" class=""
            img-center="https://storage.googleapis.com/a1aa/image/9dr3zANW2W7nDFfdJcreT1Db4whWgPCR3v3gGEVlB1vLdFxTA.jpg"
            :title="info5.title" :description="info5.content" :description2="info5.content2" />
          <CardInfoSm data-aos="fade-right" class=""
            img-center="https://storage.googleapis.com/a1aa/image/DyNvXulZjAoxBNYAGIzLKL3FyFSGssBm3dpY5IxJkC8LXR8E.jpg"
            :title="info6.title" :description="info6.content" :description2="info6.content2" />
          <CardInfoSm data-aos="fade-up" class=""
            img-center="https://storage.googleapis.com/a1aa/image/mnoXrjWPs6LVPJsfVmxdUDeMWA7ueatTuanye3MObjspaWEPB.jpg"
            :title="info7.title" :description="info7.content" :description2="info7.content2" />
        </section>
        <div class="w-full h-[1px] my-4 bg-purple-800" />
        <section>
          <h2 class="my-4 text-3xl font-bold text-center text-purple-800 font-poppins">Le recomendamos vea este video
            sobre HEMORROIDES y sus soluciones naturales</h2>
          <iframe data-aos="zoom-in-left" class="w-full h-52 lg:h-[550px]"
            src="https://www.youtube.com/embed/GuPPZOoy29w?si=qW4HgQ1FaBISaYnl" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
        <div class="w-full h-[1px] my-4 bg-purple-800" />

        <h2 class="my-4 text-3xl font-semibold text-center text-purple-800">Noticias 📰</h2>
        <section class="flex flex-col flex-wrap w-full px-3 space-y-5 font-poppins mt-11 md:flex-row md:justify-around">
          <NewsCard data-aos="flip-right" title="Intentar medidas de autocuidado para aliviar las hemorroides"
            description="Se presentan diversas medidas de autocuidado recomendadas por especialistas para aliviar las molestias causadas por las hemorroides, incluyendo cambios en el estilo de vida y tratamientos caseros."
            href-link="https://newsnetwork.mayoclinic.org/es/2016/09/27/intentar-medidas-de-autocuidado-para-aliviar-las-hemorroides/"
            img-src="https://newsnetwork.mayoclinic.org/n7-mcnn/7bcc9724adf7b803/uploads/2016/06/a-medical-illustration-showing-internal-and-external-hemorrhoids-16X9.jpg" />
          <NewsCard data-aos="flip-right" title="Hemorroides: cuáles son los síntomas, las causas y cómo identificarlas"
            description="Este padecimiento es más normal de lo que parece, afecta a tres de cada cuatro personas, sin embargo, existe una amplia gama de tratamientos para eliminarlas, desde remedios caseros, cremas, medicamentos y hasta cirugías"
            href-link="https://www.infobae.com/noticias/2022/11/17/hemorroides-cuales-son-los-sintomas-las-causas-y-como-identificarla/"
            img-src="https://www.infobae.com/resizer/v2/LV2N7VYWQFBBVAAXAGAGZGCFUI.jpg?auth=18e0b4e13102514f6a3b447adc1fe1da158b4ed441b0df733a3fd4e720e8bbc6&smart=true&width=992&height=661&quality=15" />
          <NewsCard data-aos="flip-right"
            title="Los médicos advierten que no se debe permanecer sentado en el inodoro durante más de 10 minutos"
            description="“Cuando los pacientes acuden a mí con quejas, una de las principales áreas en las que tenemos que profundizar es el hecho de pasar mucho tiempo en el baño”, dijo Xue."
            href-link="https://cnnespanol.cnn.com/2024/11/13/medicos-advierten-no-se-debe-permanecer-sentado-inodoro-mas-de-10-minutos-trax/"
            img-src="https://media.cnn.com/api/v1/images/stellar/prod/cnne-1780573-inodoro.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp" />
          <NewsCard data-aos="flip-right" title="Hemorroides: romper el tabú para una mejor prevención y tratamiento"
            description="Aunque no hay una cifra oficial, se calcula que al menos el 35% de la población mundial padece hemorroides. En nuestro país, de acuerdo con los últimos datos del Gobierno Federal y el Hospital General de México, esta condición afecta al 5% de la población; sin embargo, su prevalencia aumenta hasta el 50% a partir de los 50 años."
            href-link="https://unamglobal.unam.mx/global_revista/hemorroides-romper-el-tabu-para-una-mejor-prevencion-y-tratamiento/"
            img-src="https://www.infobae.com/resizer/v2/GW24ZIZS3VBO3AXZSALAE3JGP4.jpg?auth=d8161aea1ad6041f39bd8673b0bc4eb89e60c098323e53c0333be973ee83c929&smart=true&width=992&height=558&quality=85" />
          <NewsCard data-aos="flip-right" title="Hemorroides: lo que hay que comer y lo que hay que sacar de la dieta"
            description="Además de hacer ejercicios para favorecer la movilidad intestinal, una alimentación rica en fibras puede ayudar."
            href-link="https://tn.com.ar/salud/noticias/2023/04/15/hemorroides-lo-que-hay-que-comer-y-lo-que-hay-que-sacar-de-la-dieta/"
            img-src="https://tn.com.ar/resizer/v2/las-frutas-como-la-manzana-y-la-pera-son-recomendables-cuando-se-tiene-hemorroides-foto-adobe-stock-ZP4PRHMIVBHYPMUCAKYX3J6AWA.jpg?auth=231c4d9b7a068f0eca9ec8700fb8b52b1f3b66f0f202e310dc8f6b08d951e0d2&width=1440" />
        </section>
        <div class="w-full h-[1px] my-4 bg-purple-800" />

        <!-- Ads Section -->
        <h3 class="mt-6 text-2xl font-bold text-center text-rose-900 font-poppins">Le puede interesar</h3>
        <section class="flex justify-center w-full my-6 space-x-4"> <!-- ads section -->
          <div
            class="relative flex items-center justify-center w-1/2 p-4 border-2 rounded-lg shadow-md border-slate-400 bg-slate-100">
            <span
              class="absolute px-2 py-1 text-sm font-semibold text-white rounded -top-4 left-4 bg-slate-500">Anuncio</span>
            <a href="https://shykandev.github.io/medicinaparadiabetes/" class="relative w-full h-full" target="_blank"
              rel="noopener noreferrer">
              <div
                class="absolute flex flex-col items-center w-full h-full transition-opacity duration-300 ease-out bg-black opacity-0 hover:opacity-70 justify-evenly">
                <p class="text-xs font-bold text-center text-white font-poppins md:text-3xl">Jarabe o Cápsulas tu
                  decides</p>
                <p class="text-sm font-bold text-center text-white font-poppins md:text-3xl">100% Natural</p>
              </div>
              <img class="w-full h-full bg-contain rounded-md"
                src="https://shykandev.github.io/medicinaparahigado/assets/mainHome-BjxRmTRc.jpg" alt="">
              <p class="absolute text-xs font-bold text-center text-white bg-red-600 top-1 font-poppins md:text-3xl">
                ¿Problemas en el Hígado?</p>
              <p class="absolute text-xs font-bold text-center text-white bottom-1 font-poppins md:text-3xl">
                Conozca Livad</p>
            </a>
          </div>

          <div
            class="relative flex items-center justify-center w-1/2 p-4 border-2 rounded-lg shadow-md border-slate-400 bg-slate-100">
            <span
              class="absolute px-2 py-1 text-sm font-semibold text-white rounded -top-4 left-4 bg-slate-500">Anuncio</span>
            <a href="https://www.prasadam.mx/typography.html" class="relative w-full h-full" target="_blank"
              rel="noopener noreferrer">
              <div
                class="absolute flex flex-col items-center w-full h-full transition-opacity duration-300 ease-out bg-black opacity-0 hover:opacity-70 justify-evenly">
                <p class="text-sm font-bold text-center text-white font-poppins md:text-3xl">100% Natural</p>
                <!-- <p class="text-sm font-bold text-center text-white font-poppins md:text-3xl">Tu </p> -->
                <p class="hidden text-sm font-bold text-center text-white font-poppins md:text-3xl md:block">Esta es su
                  solución</p>
              </div>
              <img class="w-full h-full bg-contain rounded-md"
                src="https://shykandev.github.io/medicinaparadiabetes/assets/mainHome-EGZr2Qar.jpg" alt="">
              <p class="absolute top-0 text-xs font-bold text-center text-white bg-yellow-600 font-poppins md:text-3xl">
                ¿Tienes Diabetes?</p>
              <p
                class="absolute px-3 text-xs font-bold text-center text-white md:px-0 bottom-3 font-poppins md:text-3xl">
                Le recomendamos GLUFAC</p>
            </a>
          </div>
        </section>

        <div class="flex items-center justify-center min-h-screen font-poppins">
          <div class="p-6 rounded-lg shadow-md bg-gray-50 lg:p-8">
            <div class="flex justify-center mb-6 text-green-600">
              <v-icon name="bi-shield-lock-fill" class="text-green-500" scale="5" />
            </div>
            <h1 class="mb-4 text-2xl font-extrabold text-center text-gray-800 lg:text-3xl">
              Esta página es segura
            </h1>
            <p class="mb-6 text-center text-gray-600">
              Esta página cuenta con <strong>HTTPS</strong> y un certificado <strong>SSL</strong> válido.
            </p>

            <div class="mb-8">
              <h2 class="mb-3 text-xl font-bold text-gray-700 lg:text-2xl">¿Qué es HTTPS?</h2>
              <p class="leading-relaxed text-gray-600">
                HTTPS (<strong>Hypertext Transfer Protocol Secure</strong>) es una versión segura de HTTP, el protocolo
                que permite la comunicación entre su navegador y el sitio web al que se conecta.
                La 'S' significa 'Seguro', y utiliza cifrado <strong>SSL/TLS</strong> para proteger la integridad y
                confidencialidad de los datos durante la transferencia.
              </p>
            </div>

            <div class="mb-8">
              <h2 class="mb-3 text-xl font-bold text-gray-700 lg:text-2xl">¿Qué es un certificado SSL?</h2>
              <p class="leading-relaxed text-gray-600">
                <strong>SSL (Secure Sockets Layer)</strong> es una tecnología estándar que garantiza la comunicación
                cifrada entre un navegador y un servidor web.
                Un certificado SSL habilita el candado en el navegador y el protocolo <strong>HTTPS</strong>, ofreciendo
                conexiones seguras que protegen los datos.
              </p>
            </div>

            <div class="flex justify-center">
              <img class="w-32 rounded-lg shadow-md lg:w-40"
                src="https://logowik.com/content/uploads/images/ssl-secured7869.jpg" alt="Certificado SSL">
            </div>
          </div>

        </div>
      </template>
    </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import CardInfoSm from '@/components/CardInfoSm.vue';
import NewsCard from '@/components/NewsCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import AOS from 'aos';
AOS.init();

const info1 = {
  title: "HANGOVER: Tu solución natural para la cruda",
  content: "HANGOVER es un suplemento 100% natural diseñado para aliviar los efectos de la resaca. Combinando ingredientes tradicionales de la medicina ayurvédica, como el Amla y la Ashwagandha, HANGOVER ayuda a reducir la inflamación, mejorar la digestión y restaurar el equilibrio de tu cuerpo. Su fórmula trabaja para hidratarte, reducir el malestar general y revitalizar tu energía después de una noche de excesos y cruda.",
  content2: "Ideal para quienes buscan una solución natural y efectiva para aliviar los síntomas de la cruda, HANGOVER actúa rápidamente para devolverle al cuerpo su vitalidad, sin los efectos secundarios de los químicos agresivos."
};

const info2 = {
  title: "Cómo HANGOVER combate la resaca de manera eficaz",
  content: "La resaca es una consecuencia del consumo excesivo de alcohol que afecta tanto al sistema digestivo como al cuerpo en general. HANGOVER combate estos efectos gracias a ingredientes como el Draksha y el Gokhru, que ayudan a detoxificar, restaurar el equilibrio de líquidos y reducir la inflamación. Su fórmula también fortalece el sistema inmune, permitiéndote recuperarte más rápido de la resaca.",
  content2: "Además de aliviar los síntomas inmediatos de la cruda, HANGOVER actúa sobre las causas subyacentes, promoviendo una recuperación más completa y evitando que los efectos de la resaca se prolonguen durante todo el día."
};

const info3 = {
  title: "HANGOVER y sus beneficios para tu bienestar general",
  content: "HANGOVER no solo es eficaz contra los síntomas de la resaca, sino que también tiene beneficios para tu salud general. Su combinación de ingredientes como el Bhrungraj y el Punarnava ayuda a mantener un sistema digestivo saludable, al tiempo que apoya la función hepática y renal. De esta manera, no solo aliviarás los efectos de la cruda, sino que mejorarás tu bienestar a largo plazo.",
  content2: "Gracias a su enfoque integral, HANGOVER es más que un simple remedio para la resaca. Es un suplemento que ayuda a restaurar el equilibrio de tu cuerpo y promueve una recuperación rápida y efectiva después de la cruda."
};

const info4 = {
  title: "La fórmula natural de HANGOVER",
  content: "Cada ingrediente de HANGOVER ha sido cuidadosamente seleccionado por sus propiedades ayurvédicas para combatir los efectos negativos del alcohol y la resaca. Ingredientes como el Kasni y el Galo ayudan a desintoxicar y apoyar la función del hígado, mientras que el Ashwagandha y el Gokhru proporcionan una acción revitalizante que te devuelve la energía y vitalidad.",
  content2: "HANGOVER es la opción perfecta para quienes buscan una solución natural, eficaz y sin efectos secundarios para combatir la resaca."
};

const info5 = {
  title: "¿Por qué elegir HANGOVER para tu recuperación de la cruda?",
  content: "HANGOVER es más que un simple suplemento, es tu aliado para una recuperación rápida y saludable después de una noche de diversión. Su fórmula 100% natural te proporciona todos los beneficios de la medicina ayurvédica, permitiendo que tu cuerpo se recupere de la resaca de forma efectiva y sin químicos agresivos.",
  content2: "Elige HANGOVER si buscas una forma rápida y natural de aliviar los efectos de la cruda, restaurar tu equilibrio y sentirte bien de nuevo."
};

const info6 = {
  title: "HANGOVER: Ideal para mantener tu cuerpo en equilibrio después de la cruda",
  content: "No solo alivia los síntomas de la resaca, HANGOVER es un suplemento que ayuda a mantener tu cuerpo equilibrado, incluso después de las noches más intensas. Ingredientes como el Bhumiamalki y el Kasni optimizan la función hepática y digestiva, mientras que el Punarnava apoya la desintoxicación de tu cuerpo, dejándote sentir revitalizado y lleno de energía.",
  content2: "Mantén tu bienestar general con HANGOVER, la opción natural para tu recuperación de la cruda y equilibrio después de la resaca."
};

const info7 = {
  title: "HANGOVER: Recupérate más rápido, naturalmente después de la cruda",
  content: "Cuando se trata de recuperarte de la resaca, HANGOVER es la opción ideal para quienes buscan un enfoque natural y efectivo. Con ingredientes como el Gokhru y el Ashwagandha, este suplemento ayuda a reducir la inflamación, mejorar la digestión y restaurar el equilibrio de líquidos, permitiéndote sentirte mejor y más rápido después de la cruda.",
  content2: "Con HANGOVER, la recuperación de la resaca será más rápida, natural y libre de efectos secundarios, para que puedas continuar con tu día sin interrupciones."
};


</script>

<style scoped></style>