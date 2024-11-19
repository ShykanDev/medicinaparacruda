<template>
  <div class="">
    <MainLayout>
      <template #main>
        <article class="w-full overflow-hidden lg:flex lg:items-center">
          <div
  class="flex flex-col items-center pt-2 lg:items-center lg:flex lg:justify-around lg:w-1/3 lg:h-screen rounded-bl-md rounded-br-md  bg-gradient-to-l from-rose-50 via-rose-1.00 to-rose-100 lg:py-20">
  <h2
    class="hidden text-3xl font-extrabold text-center text-rose-900 font-poppins animate-fade-down lg:block">
    Solución Natural con HANGOVER para el Alivio de la CRUDA
  </h2>
  <h1 class="text-xl font-extrabold text-center text-gray-800 lg:text-3xl font-poppins animate-fade-down">
    <span class="text-rose-600">Protección Ayurvédica Contra la RESACA</span>
  </h1>
  <div class="flex items-center">
      <h2 class="text-xl font-extrabold text-center text-gray-800 lg:text-3xl font-poppins animate-fade-up">
        <span class="text-white bg-emerald-500 font-varela">Medicina ayurvédica con origen milenario en la India.</span>
      </h2>
      <img class="w-36" src="https://i.ibb.co/VqZ4mch/saint-Indian-removebg-preview.png" alt="Icon Image">
    </div>
  <a href="#hangover"
    class="p-1 my-3 font-bold text-white rounded-md bg-rose-700 bg-rose lg:rounded-lg lg:text-xl lg:p-2 font-poppins animate-bounce">
    Descubre Más
  </a>
</div>

          <img src="../assets/mainImg.jpg" class="lg:w-2/3 animate-fade-up lg:h-screen" alt="Producto CIDNI">
        </article>

        <section id="hangover" class="space-y-20 overflow-hidden lg:mt-5">
          <CardInfoSm class=""
            img-center="https://storage.googleapis.com/a1aa/image/qrc81UBRe1WoA64F0onJNDi5w5dqQtGfgrqwPDUEoZTidmyTA.jpg"
            :title="info1.title" :description="info1.content" :description2="info1.content2" />
          <CardInfoSm data-aos="zoom-in-down" class=""
            img-center="https://storage.googleapis.com/a1aa/image/qVP0s2tGjgZBHZRAHTQw2C59xXxjIfzJw3QSGJBsK1xZST5JA.jpg"
            :title="info2.title" :description="info2.content" :description2="info2.content2" />
          <CardInfoSm data-aos="zoom-in-right" class=""
            img-center="https://storage.googleapis.com/a1aa/image/MqUZZxXAfhzJMSQdX6XP2ngTcV15GPjdT0j68MCjb9IMST5JA.jpg"
            :title="info3.title" :description="info3.content" :description2="info3.content2" />
          <CardInfoSm data-aos="zoom-out-right" class=""
            img-center="https://storage.googleapis.com/a1aa/image/S7XenXmXRcTCRa5T3Fd7p4CzUdkF71tXLw8MuCnKNX3yTT5JA.jpg"
            :title="info4.title" :description="info4.content" :description2="info4.content2" />
          <CardInfoSm data-aos="fade-left" class=""
            img-center="https://storage.googleapis.com/a1aa/image/Eb8fqq3JSq2zMKC9DURwRO0u8FQdVji1r0EUAyWgBylfpmyTA.jpg"
            :title="info5.title" :description="info5.content" :description2="info5.content2" />
          <CardInfoSm data-aos="fade-right" class=""
            img-center="https://storage.googleapis.com/a1aa/image/aFoAYzYLX5a6HdszLXNkfjPA8IJI3fNFA4NfIIJ5vm9oWNlnA.jpg"
            :title="info6.title" :description="info6.content" :description2="info6.content2" />
          <CardInfoSm data-aos="fade-up" class=""
            img-center="https://storage.googleapis.com/a1aa/image/jIUbihfhjjUOBaMFeEoAuufOBAQbAkJjto7uhiFjAXX2YNlnA.jpg"
            :title="info7.title" :description="info7.content" :description2="info7.content2" />
        </section>
        <div class="w-full h-[1px] my-4 bg-rose-800" />
        <section>
          <h2 class="my-4 text-3xl font-bold text-center text-rose-800 font-poppins">Le recomendamos vea este video
            sobre la CRUDA y sus soluciones naturales</h2>
          <iframe data-aos="zoom-in-left" class="w-full h-52 lg:h-[550px]"
            src="https://www.youtube.com/embed/yhkSI71TdSQ?si=jnO5S-uUErBxeR4A" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
        <div class="w-full h-[1px] my-4 bg-rose-800" />

        <h2 class="my-4 text-3xl font-semibold text-center text-rose-800">Noticias 📰</h2>
        <section class="flex flex-col flex-wrap w-full px-3 space-y-5 font-poppins mt-11 md:flex-row md:justify-around">
          <NewsCard data-aos="flip-right" title="La famosa “resaca”, síntomas tras el consumo de alcohol"
            description="La resaca es un conjunto de síntomas que resultan del consumo excesivo de alcohol. Estos incluyen deshidratación, dolores de cabeza, náuseas y fatiga, todos causados por la alteración en varios sistemas del cuerpo. Se explica cómo el alcohol afecta al sistema nervioso, al estómago y a la hidratación general, entre otros factores."
            href-link="https://www.quironsalud.com/es/comunicacion/contenidos-salud/famosa-resaca-sintomas-tras-consumo-alcohol"
            img-src="https://storage.googleapis.com/a1aa/image/aZNjGfTzOK0CKqaGrBxQxYbNK4tX2XZkiyK29JjX5LpcdT5JA.jpg" />
          <NewsCard data-aos="flip-right" title="¿Qué causa la resaca? Y cómo superarla"
            description="'La cerveza no se compra, se alquila'. Y el coste añadido de alquilarla es la resaca. Eso decía un profesor de biología. Pero, ¿cómo afecta realmente el alcohol nuestro cuerpo y cerebro, y cuánto sabemos de las resacas?"
            href-link="https://www.dw.com/es/qu%C3%A9-causa-la-resaca-y-c%C3%B3mo-superarla/a-67846907"
            img-src="https://static.dw.com/image/67810263_1004.webp" />
          <NewsCard data-aos="flip-right"
            title="Todo sobre la resaca"
            description="La resaca es un conjunto de síntomas desagradables que pueden aparecer después de tomar demasiado alcohol. Como si sentirse mal no fuera suficiente, las resacas frecuentes también están asociadas con el bajo rendimiento y los conflictos en casa, en la escuela y en el trabajo."
            href-link="https://www.mayoclinic.org/es/diseases-conditions/hangovers/symptoms-causes/syc-20373012"
            img-src="https://storage.googleapis.com/a1aa/image/l8n2GInQa7YqCJalr7QNdqUmedvFBjVG86tAPU2x5BNScT5JA.jpg" />
          <NewsCard data-aos="flip-right" title="¿Qué pasa en el organismo cuándo estas crudo?"
            description="En algunos casos, tomar alcohol traerá al otro día un fuerte dolor de cabeza, mucha sed, cansancio, debilidad, nausea, dolor muscular, vértigo e incluso irritabilidad. Comúnmente estos síntomas son conocidos como resaca o cruda, pero ¿sabes qué pasa dentro del organismo para que te sientas así?"
            href-link="https://unamglobal.unam.mx/global_revista/que-pasa-en-el-organismo-cuando-estas-crudo/"
            img-src="https://unamglobal.unam.mx/wp-content/uploads/2022/01/resaca001.jpg" />
          <NewsCard data-aos="flip-right" title="6 Consejos para aliviar la resaca"
            description="Los efectos de la resaca varían en cada persona y de una experiencia a otra. El tipo y cantidad de bebida ingerida, la velocidad de consumo y el estado general de salud influyen en su gravedad y duración, pudiendo oscilar entre 24 y 48 horas. Algunos estudios, como el realizado por la revista Nature Communications en 2019, incluso relacionan el papel de determinados genomas y de la herencia genética en la manera de experimentar la resaca. "
            href-link="https://www.kernpharma.com/es/blog/6-consejos-para-aliviar-la-resaca"
            img-src="https://www.kernpharma.com/sites/default/files/styles/blog_full/public/blog/Post%20Blog%20REDISAC.webp?itok=FeK-U8dE" />
        </section>
        <div class="w-full h-[1px] my-4 bg-rose-800" />

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
                src="https://medicinaparagastritis.com/assets/mainImg-PTGONR8Z.jpg" alt="">
              <p class="absolute text-xs font-bold text-center text-white bg-cyan-600 top-1 font-poppins md:text-3xl">
                ¿Tiene usted Gastritis?</p>
              <p class="absolute text-xs font-bold text-center text-white bg-cyan-600 bottom-1 font-poppins md:text-3xl">
                Conozca CIDNI</p>
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
                ¿Tiene Diabetes?</p>
              <p
                class="absolute px-3 text-xs font-bold text-center text-white bg-orange-700 md:px-0 bottom-3 font-poppins md:text-3xl">
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