<template>
  <div class="">
    <MainLayout>
      <template #main>
        <article class="w-full overflow-hidden lg:flex lg:items-center">
          <div
            class="flex flex-col items-center px-8 py-16 rounded-tl-lg rounded-br-lg shadow-xl lg:items-start lg:w-1/3 lg:h-screen lg:px-16 bg-gradient-to-r from-cyan-100 to-cyan-50">
            <h2
              class="mb-6 text-4xl font-extrabold leading-tight text-center lg:text-left text-cyan-700 font-poppins animate-fade-down">
              Solución Natural con HANGOVER para el Alivio de la 
              <strong class="px-3 py-1 text-white rounded-md bg-cyan-700">
                RESACA
              </strong>
            </h2>

            <div class="flex flex-col items-center mb-8 lg:flex-row lg:mb-16">
              <h3 class="mb-4 text-xl font-semibold text-gray-800 lg:text-2xl font-varela lg:text-left lg:mr-8 lg:mb-0">
                Medicina ayurvédica con origen milenario en la India.
              </h3>
              <img class="object-cover rounded-full shadow-lg w-28 h-28 lg:w-40 lg:h-40 lg:ml-6"
                src="https://i.ibb.co/VqZ4mch/saint-Indian-removebg-preview.png" alt="Icon Image">
            </div>

            <a href="#hangover"
              class="px-6 py-3 font-bold text-white transition duration-300 ease-in-out transform shadow-lg bg-cyan-700 rounded-xl lg:text-lg lg:px-8 lg:py-4 hover:bg-cyan-800 hover:scale-105 animate-bounce">
              Descubre Más
            </a>
          </div>


          <img src="https://i.ibb.co/tYnbhNc/main-Hangover.jpg" class="w-full lg:w-2/3 animate-fade-up lg:h-screen"
            alt="Producto CIDNI">
        </article>

        <section id="hangover" class="space-y-20 overflow-hidden lg:py-24 lg:mt-5">
          <CardInfoSm class=""
            img-center="https://storage.googleapis.com/a1aa/image/XfTwSeqzXNn5VkmUGzGVY3L7fVufakBzoMWXoHHUkBIpbcNPB.jpg"
            :title="info1.title" :description="info1.content" :description2="info1.content2" />
          <CardInfoSm data-aos="zoom-in-down" class=""
            img-center="https://storage.googleapis.com/a1aa/image/41TQvbwqOUpXFt7BIihhiWf9N9wC9peBKDBJf4hrwC5CQumnA.jpg"
            :title="info2.title" :description="info2.content" :description2="info2.content2" />
          <CardInfoSm data-aos="zoom-in-right" class=""
            img-center="https://storage.googleapis.com/a1aa/image/1goXHboQ4ewEaCEee1VIiUIM5j5MPie3g7rf4leTKcRaMy18E.jpg"
            :title="info3.title" :description="info3.content" :description2="info3.content2" />
          <CardInfoSm data-aos="zoom-out-right" class=""
            img-center="https://storage.googleapis.com/a1aa/image/I6lFf0UZeuuFUUxlANhPf8hcwuelm8icRlTxntD4uoIfP5aeE.jpg"
            :title="info4.title" :description="info4.content" :description2="info4.content2" />
          <CardInfoSm data-aos="fade-left" class=""
            img-center="https://storage.googleapis.com/a1aa/image/8k51dfL8PwyPFSs7SzqTWEI6mcfMHg7SYdvgX43Zr8F1KXzTA.jpg"
            :title="info5.title" :description="info5.content" :description2="info5.content2" />
          <CardInfoSm data-aos="fade-right" class=""
            img-center="https://storage.googleapis.com/a1aa/image/lrmfvtAWLk0rfksphLCKfoZK414Oq9YaWU3NG5ihWooXXumnA.jpg"
            :title="info6.title" :description="info6.content" :description2="info6.content2" />
          <CardInfoSm data-aos="fade-up" class=""
            img-center="https://storage.googleapis.com/a1aa/image/R04KNCkNtW4WHtRfOfVCRsaRgKaf739ViGARGcnR4EQ8YumnA.jpg"
            :title="info7.title" :description="info7.content" :description2="info7.content2" />
        </section>
        <div class="w-full h-[1px] my-4 bg-cyan-800" />
        <section>
          <h2 class="my-4 text-3xl font-bold text-center text-cyan-800 font-poppins">Le recomendamos vea este video
            sobre la CRUDA y sus soluciones naturales</h2>
          <iframe data-aos="zoom-in-left" class="w-full h-52 lg:h-[550px]"
            src="https://www.youtube.com/embed/yhkSI71TdSQ?si=jnO5S-uUErBxeR4A" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
        <div class="w-full h-[1px] my-4 bg-cyan-800" />

        <h2 class="my-4 text-3xl font-semibold text-center text-cyan-800">Noticias 📰</h2>
        <section class="flex flex-col flex-wrap w-full px-3 space-y-5 font-poppins mt-11 md:flex-row md:justify-around">
          <NewsCard data-aos="flip-right" title="La famosa “resaca”, síntomas tras el consumo de alcohol"
            description="La resaca es un conjunto de síntomas que resultan del consumo excesivo de alcohol. Estos incluyen deshidratación, dolores de cabeza, náuseas y fatiga, todos causados por la alteración en varios sistemas del cuerpo. Se explica cómo el alcohol afecta al sistema nervioso, al estómago y a la hidratación general, entre otros factores."
            href-link="https://www.quironsalud.com/es/comunicacion/contenidos-salud/famosa-resaca-sintomas-tras-consumo-alcohol"
            img-src="https://storage.googleapis.com/a1aa/image/aZNjGfTzOK0CKqaGrBxQxYbNK4tX2XZkiyK29JjX5LpcdT5JA.jpg" />
          <NewsCard data-aos="flip-right" title="¿Qué causa la resaca? Y cómo superarla"
            description="'La cerveza no se compra, se alquila'. Y el coste añadido de alquilarla es la resaca. Eso decía un profesor de biología. Pero, ¿cómo afecta realmente el alcohol nuestro cuerpo y cerebro, y cuánto sabemos de las resacas?"
            href-link="https://www.dw.com/es/qu%C3%A9-causa-la-resaca-y-c%C3%B3mo-superarla/a-67846907"
            img-src="https://static.dw.com/image/67810263_1004.webp" />
          <NewsCard data-aos="flip-right" title="Todo sobre la resaca"
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
        <div class="w-full h-[1px] my-4 bg-cyan-800" />

        <!-- Ads Section -->
        <h3 class="mt-6 text-2xl font-bold text-center text-cyan-900 font-poppins">Le puede interesar</h3>
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
              <p
                class="absolute text-xs font-bold text-center text-white bg-cyan-600 bottom-1 font-poppins md:text-3xl">
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
  title: "HANGOVER: Tu solución natural para la resaca y el desvelo",
  content: "HANGOVER es un suplemento 100% natural ideal para quienes sufren de resaca o desvelo. Gracias a ingredientes como la Ashwagandha y el Amla, ayuda a restaurar el equilibrio del cuerpo, reduce la inflamación y mejora la digestión. HANGOVER combate la fatiga, las náuseas y la deshidratación, ayudándote a sentirte revitalizado después de noches de excesos o falta de sueño.",
  content2: "Este suplemento no solo combate los efectos de la cruda, sino que también mejora la energía y el bienestar general, incluso después de noches sin descanso."
};

const info2 = {
  title: "HANGOVER: Alivio para el estrés laboral y la ansiedad",
  content: "El estrés laboral es un problema común que puede generar fatiga mental, ansiedad y agotamiento. HANGOVER, con ingredientes como el Punarnava y la Ashwagandha, es perfecto para aquellos que necesitan relajarse después de un día largo de trabajo. Estos ingredientes adaptógenos ayudan al cuerpo a manejar mejor el estrés, restaurando tu energía y mejorando la concentración.",
  content2: "Si te sientes sobrecargado en el trabajo, HANGOVER puede ayudarte a restaurar tu equilibrio emocional y mejorar tu bienestar general sin efectos secundarios."
};

const info3 = {
  title: "HANGOVER: Reducción de la ansiedad por ruidos molestos y estrés ambiental",
  content: "La exposición a ruidos molestos y ambientes estresantes puede generar una gran tensión y malestar. HANGOVER tiene ingredientes como el Gokhru y el Bhrungraj, que ayudan a reducir la ansiedad y el estrés causado por factores ambientales. Estos ingredientes promueven la relajación, mejoran la calidad del sueño y ayudan a mantener un equilibrio emocional.",
  content2: "Si los ruidos de la ciudad o de tus vecinos te causan incomodidad, HANGOVER es la solución ideal para mantener la calma y el bienestar."
};

const info4 = {
  title: "La fórmula natural de HANGOVER para la resaca y el desvelo",
  content: "Si sufriste de desvelo o resaca, HANGOVER es la solución perfecta. Con ingredientes como el Kasni y el Galo, que desintoxican el hígado, y el Draksha, que restaura los líquidos del cuerpo, HANGOVER te permite recuperarte rápidamente de los efectos de la resaca o la falta de sueño. Este suplemento no solo mejora la digestión, sino que también revitaliza tu cuerpo y reduce la fatiga.",
  content2: "HANGOVER es ideal para quienes buscan una recuperación rápida y natural después de una noche de fiesta o de desvelo, sin efectos secundarios."
};

const info5 = {
  title: "HANGOVER: Combate el estrés, la resaca y el agotamiento mental",
  content: "HANGOVER no solo alivia los efectos de la resaca, sino que también combate el agotamiento mental y el estrés. Con ingredientes como la Ashwagandha y el Punarnava, HANGOVER es un excelente suplemento para reducir la fatiga y restaurar la energía. Ideal para quienes se sienten agotados después de un día estresante o una noche sin dormir, este suplemento promueve un equilibrio físico y emocional.",
  content2: "Si sufres de agotamiento debido al estrés o la falta de sueño, HANGOVER puede ser la solución natural que necesitas para mejorar tu bienestar."
};

const info6 = {
  title: "HANGOVER: Reducción del estrés causado por ruidos y otros factores ambientales",
  content: "Los ruidos molestos y el estrés ambiental pueden afectar tu salud emocional y física. HANGOVER contiene ingredientes como el Bhrungraj y el Kasni, que no solo apoyan la función hepática, sino que también promueven la relajación y el alivio del estrés. Estos ingredientes naturales pueden ayudarte a mantener la calma y reducir los efectos negativos de factores externos como el ruido y la contaminación.",
  content2: "HANGOVER es ideal para quienes viven en entornos ruidosos o tienen dificultades para relajarse después de un día difícil."
};

const info7 = {
  title: "HANGOVER: Recuperación natural para el estrés, el desvelo y la resaca",
  content: "Recuperarse de una noche de fiesta, desvelo o estrés laboral nunca ha sido tan fácil. HANGOVER te ofrece una solución natural para restaurar tu energía, reducir la inflamación y aliviar el malestar general. Con ingredientes como el Gokhru y la Ashwagandha, este suplemento te ayuda a manejar el estrés y a combatir los efectos negativos del alcohol y la falta de sueño.",
  content2: "Si buscas una forma natural y rápida de recuperar tu energía después de un día agotador o una noche de excesos, HANGOVER es la opción ideal."
};



</script>

<style scoped></style>