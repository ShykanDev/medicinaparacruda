<template>
    <div class="">
        <MainLayout>
            <template #main>
                    <!-- <h1 class="text-3xl font-extrabold text-center text-white md:py-7 bg-cyan-600 font-poppins">Conozca los BENEFICIOS que CIDNI le ofrece para la GASTRITIS</h1> -->
                    <h1 class="py-8 text-4xl font-bold text-center text-white shadow-lg bg-gradient-to-r from-gray-800 via-rose-700 to-gray-800 font-poppins">
  Conozca los <span class="text-rose-300">BENEFICIOS</span> que <span class="underline decoration-rose-300">HANGOVER</span> le ofrece para la <span class="text-rose-300">CRUDA</span>
</h1>

                <section class="flex flex-wrap justify-around w-full gap-4 p-3">
                    <BenefictCard data-aos="flip-right" 
                    img-src="https://storage.googleapis.com/a1aa/image/ezIfXYfPiKRfGRs7BvtZc5tVOAnCeWGnnKKdZSEcVUnDw5UeE.jpg"
                     :title="benefit1.title" :small-description="benefit1.smallIntro" :description="benefit1.description"/>
                    <BenefictCard data-aos="flip-right" 
                    img-src="https://storage.googleapis.com/a1aa/image/qe9De5dk90n6GkixcqCAFUDGWYHiuhvCWpFv83pkwzJ1OnyTA.jpg"
                     :title="benefit2.title" :small-description="benefit2.smallIntro" :description="benefit2.description"/>
                    <BenefictCard data-aos="flip-right" 
                    img-src="https://storage.googleapis.com/a1aa/image/lik0pflmbo3BXiXCZ6dI1KyZvJSw5W7JsMplOTb0bFlknT5JA.jpg"
                     :title="benefit3.title" :small-description="benefit3.smallIntro" :description="benefit3.description"/>
                    <BenefictCard data-aos="flip-left" 
                    img-src="https://storage.googleapis.com/a1aa/image/WBZ5NoDh7fSgMCgXIH8mNcrz80UfnR6Cx5nEezYDcvfSe5UeE.jpg"
                     :title="benefit4.title" :small-description="benefit4.smallIntro" :description="benefit4.description"/>
                    <BenefictCard data-aos="flip-left" 
                    img-src="https://storage.googleapis.com/a1aa/image/PIPYkoc4IoIMF9sOHtHoKmma3TIVwx5JalWJflNKf3wefcKPB.jpg"
                     :title="benefit5.title" :small-description="benefit5.smallIntro" :description="benefit5.description"/>
                    <BenefictCard data-aos="flip-left" 
                    img-src="https://storage.googleapis.com/a1aa/image/DtyGpcIGSE70MxDpo2v1utJklDz6kOQyfdqG4iNuqs1QoT5JA.jpg"
                     :title="benefit6.title" :small-description="benefit6.smallIntro" :description="benefit6.description"/>
                    <BenefictCard data-aos="flip-right" 
                    img-src="https://storage.googleapis.com/a1aa/image/v3OntJXPjsoGKVbUnfY3QPp39BlJg9yk0w2tqdBqxiPooT5JA.jpg"
                     :title="benefit7.title" :small-description="benefit7.smallIntro" :description="benefit7.description"/>
                    <BenefictCard data-aos="flip-right" 
                    img-src="https://storage.googleapis.com/a1aa/image/Ct8TClsMmDoMJtxK57tamAA9JpyOYE0sxfyi3tqn35yDpT5JA.jpg"
                     :title="benefit8.title" :small-description="benefit8.smallIntro" :description="benefit8.description"/>
                    <BenefictCard data-aos="flip-right" 
                    img-src="https://storage.googleapis.com/a1aa/image/1mL5yy7IxNoaAJcXyfNahcSA6wQMpwBX6OavXUNhUX7PpT5JA.jpg"
                     :title="benefit9.title" :small-description="benefit9.smallIntro" :description="benefit9.description"/>
                    <BenefictCard data-aos="flip-left" 
                    img-src="https://storage.googleapis.com/a1aa/image/ohxfw8fNx0lJNUUNHUesgYoediyTqc3kHFDaeSxpH5eu31p8E.jpg"
                     :title="benefit10.title" :small-description="benefit10.smallIntro" :description="benefit10.description"/>
                    <BenefictCard data-aos="flip-left" 
                    img-src="https://storage.googleapis.com/a1aa/image/qUuCdr6eFYTBDKQpvvva89qY5TGfHkSaAe1HPW1OlD8DxOlnA.jpg"
                     :title="benefit11.title" :small-description="benefit11.smallIntro" :description="benefit11.description"/>
                    <BenefictCard data-aos="flip-left" 
                    img-src="https://storage.googleapis.com/a1aa/image/1hTdpMKMQ27LKNoZwdTfELHuKcXVVYx2vAxoaanZitgMrT5JA.jpg"
                     :title="benefit12.title" :small-description="benefit12.smallIntro" :description="benefit12.description"/>
                    <BenefictCard data-aos="flip-right" 
                    img-src="https://storage.googleapis.com/a1aa/image/scin8UUCBPqhN5zM9hWQHg50jdLPCOyPd9LXO5EXbhnU2p8E.jpg"
                     :title="benefit13.title" :small-description="benefit13.smallIntro" :description="benefit13.description"/>
                    <BenefictCard data-aos="flip-right" 
                    img-src="https://storage.googleapis.com/a1aa/image/TWMq8sx0ORowGd9zHrAWAuPUPTJbBdwGiLG5sGVoq7hfsT5JA.jpg"
                     :title="benefit14.title" :small-description="benefit14.smallIntro" :description="benefit14.description"/>
                    <BenefictCard data-aos="flip-right" 
                    img-src="https://storage.googleapis.com/a1aa/image/cxjmGmPe7RUoV6v6z1jbmYC20KY2olOrISRFRD7joOy5tT5JA.jpg"
                     :title="benefit16.title" :small-description="benefit16.smallIntro" :description="benefit16.description"/>
                    <BenefictCard data-aos="flip-left" 
                    img-src="https://storage.googleapis.com/a1aa/image/0Zknj6gCL54NG1hSvbckAjZceTSekgWgAMrWCeelGrecn7UeE.jpg"
                     :title="benefit17.title" :small-description="benefit17.smallIntro" :description="benefit17.description"/>
                    <BenefictCard data-aos="flip-left" 
                    img-src="https://storage.googleapis.com/a1aa/image/mcGoYkrSvC7fG6Sh2DDtnjAIIMo0fylX8jesfAmaRS904dKPB.jpg"
                     :title="benefit18.title" :small-description="benefit18.smallIntro" :description="benefit18.description"/>
                    <BenefictCard data-aos="flip-left" 
                    img-src="https://storage.googleapis.com/a1aa/image/q9VUGeJ3im2eS0o5Cf51Q4Mr0IV3Iwd8XBaUtAqRYp1f5dKPB.jpg"
                     :title="benefit19.title" :small-description="benefit19.smallIntro" :description="benefit19.description"/>
                    <BenefictCard data-aos="flip-right" 
                    img-src="https://storage.googleapis.com/a1aa/image/9eZOpmqfKpvo6kYxXoWwsLVdyeMtgAuVf56z2rFkGhnM9dKPB.jpg"
                     :title="benefit20.title" :small-description="benefit20.smallIntro" :description="benefit20.description"/>
                    <BenefictCard data-aos="flip-right" 
                    img-src="https://storage.googleapis.com/a1aa/image/q474Nh3xeKzPOiV6nhDX3SVvMjezYJiw4dLtjGdxq80ofOlnA.jpg"
                     :title="benefit21.title" :small-description="benefit21.smallIntro" :description="benefit21.description"/>
                    <BenefictCard data-aos="flip-right" 
                    img-src="https://storage.googleapis.com/a1aa/image/PcOK5PlBmRZGKtauomes4GjiPIxELgpTn7Ojn5Uv4wlHwT5JA.jpg"
                     :title="benefit22.title" :small-description="benefit22.smallIntro" :description="benefit22.description"/>
                    <BenefictCard data-aos="flip-left" 
                    img-src="https://storage.googleapis.com/a1aa/image/CEYxcq6TqoaBIhhYhfxx0BQdCTvILTCYYdBeuZN9nCXqgnyTA.jpg"
                     :title="benefit23.title" :small-description="benefit23.smallIntro" :description="benefit23.description"/>
                    <BenefictCard data-aos="flip-left" 
                    img-src="https://storage.googleapis.com/a1aa/image/MRI8zM7vgpJ8HtPweXuXsabZUeE8BKvPgh0h8be77ttPCPlnA.jpg"
                     :title="benefit24.title" :small-description="benefit24.smallIntro" :description="benefit24.description"/>
                    <BenefictCard data-aos="flip-left" 
                    img-src="https://storage.googleapis.com/a1aa/image/BypekStGqI2YFybPShVgbnXChDVEJBwIeMRmgXi6AtwshnyTA.jpg"
                     :title="benefit25.title" :small-description="benefit25.smallIntro" :description="benefit25.description"/>
                    

                </section>
            </template>
        </MainLayout>
    </div>
</template>

<script lang="ts" setup>
import BenefictCard from '@/components/BenefictCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const benefit1 = {
  title: "Alivio de la Resaca",
  smallIntro: "HANGOVER ayuda a reducir los efectos desagradables de la resaca.",
  description: "Uno de los principales beneficios de HANGOVER es su capacidad para aliviar los síntomas de la resaca, como el dolor de cabeza, náuseas y cansancio. Gracias a su combinación de ingredientes naturales como el Amla y el Draksha, HANGOVER trabaja para restaurar el equilibrio en tu cuerpo, reduciendo la deshidratación y promoviendo la recuperación.",
  tags: ["salud", "resaca", "recuperación"]
};

const benefit2 = {
  title: "Reducción de la Inflamación",
  smallIntro: "HANGOVER ayuda a disminuir la inflamación causada por el consumo excesivo de alcohol.",
  description: "El consumo de alcohol puede causar inflamación en diversas partes del cuerpo, y HANGOVER ayuda a reducir esta inflamación. Ingredientes como la Ashwagandha y el Gokhru contribuyen a calmar la irritación y reducir la hinchazón, lo que facilita la recuperación de los efectos de la resaca.",
  tags: ["salud", "antiinflamatorio", "resaca"]
};

const benefit3 = {
  title: "Mejora de la Digestión",
  smallIntro: "HANGOVER favorece una digestión más rápida después de la resaca.",
  description: "La resaca puede afectar negativamente la digestión, y HANGOVER ayuda a mejorar el proceso digestivo. Gracias a ingredientes como el Kasni y el Bhrungraj, este suplemento optimiza la función digestiva, permitiendo que tu cuerpo recupere su ritmo normal y evitando molestias estomacales.",
  tags: ["salud", "digestión", "resaca"]
};

const benefit4 = {
  title: "Aumento de la Energía",
  smallIntro: "HANGOVER te ayuda a recuperar la energía perdida después de la cruda.",
  description: "Uno de los efectos más comunes de la resaca es la fatiga, y HANGOVER ayuda a revitalizar tu cuerpo. Su fórmula natural con ingredientes como el Galo y el Punarnava proporciona un impulso de energía, permitiéndote sentirte más alerta y con mayor vitalidad durante el día.",
  tags: ["energía", "resaca", "recuperación"]
};

const benefit5 = {
  title: "Hidratación Rápida",
  smallIntro: "HANGOVER contribuye a restablecer los niveles de hidratación después de una noche de excesos.",
  description: "La deshidratación es una de las principales causas de la resaca, y HANGOVER ayuda a restablecer los niveles de líquidos en el cuerpo. Sus ingredientes como el Draksha y el Bhumiamalki ayudan a rehidratarte, aliviando la sequedad y mejorando tu bienestar general.",
  tags: ["hidratación", "resaca", "recuperación"]
};

const benefit6 = {
  title: "Desintoxicación Natural",
  smallIntro: "HANGOVER apoya la desintoxicación del cuerpo después del alcohol.",
  description: "HANGOVER actúa como un desintoxicante natural, ayudando a eliminar las toxinas acumuladas por el consumo de alcohol. Ingredientes como el Gokhru y el Amla facilitan la eliminación de impurezas y promueven un proceso de limpieza interno, ayudando a que tu cuerpo se recupere de forma efectiva.",
  tags: ["salud", "desintoxicación", "resaca"]
};

const benefit7 = {
  title: "Restauración del Equilibrio de Nutrientes",
  smallIntro: "HANGOVER ayuda a restaurar los niveles de nutrientes esenciales después de la cruda.",
  description: "El alcohol puede agotar los niveles de nutrientes en el cuerpo, y HANGOVER ayuda a restaurarlos. Su fórmula incluye ingredientes como el Ashwagandha y el Kasni, que trabajan para reponer vitaminas y minerales esenciales, ayudando a que te sientas mejor rápidamente.",
  tags: ["nutrición", "resaca", "recuperación"]
};

const benefit8 = {
  title: "Soporte al Sistema Inmunológico",
  smallIntro: "HANGOVER fortalece el sistema inmunológico, ayudando a prevenir infecciones durante la resaca.",
  description: "El alcohol puede debilitar temporalmente el sistema inmunológico, y HANGOVER actúa para fortalecerlo. Con ingredientes como el Bhrungraj y el Punarnava, este suplemento contribuye a mantener tu sistema inmunológico fuerte, ayudando a prevenir infecciones y otros malestares comunes durante la resaca.",
  tags: ["inmunidad", "resaca", "salud"]
};

const benefit9 = {
  title: "Mejora de la Función Hepática",
  smallIntro: "HANGOVER apoya la función hepática, crucial para la metabolización del alcohol.",
  description: "El hígado juega un papel clave en la metabolización del alcohol, y HANGOVER ayuda a optimizar esta función. Ingredientes como el Kasni y el Galo son conocidos por su capacidad para mejorar la función hepática, lo que facilita la descomposición de las toxinas del alcohol y acelera la recuperación.",
  tags: ["hígado", "resaca", "desintoxicación"]
};

const benefit10 = {
  title: "Alivio del Dolor de Cabeza",
  smallIntro: "HANGOVER ayuda a aliviar los dolores de cabeza causados por la resaca.",
  description: "El dolor de cabeza es uno de los síntomas más molestos de la resaca, y HANGOVER ayuda a reducirlo de forma natural. Gracias a su combinación de ingredientes como el Ashwagandha y el Draksha, este suplemento actúa aliviando el dolor y promoviendo una sensación de bienestar general.",
  tags: ["dolor de cabeza", "resaca", "alivio"]
};

const benefit11 = {
  title: "Alivio de la Náusea",
  smallIntro: "HANGOVER ayuda a reducir las náuseas causadas por la cruda.",
  description: "Las náuseas son comunes después de una noche de excesos, y HANGOVER actúa para reducirlas. Ingredientes como el Amla y el Gokhru trabajan para calmar el estómago y reducir la sensación de mareo, permitiéndote sentirte mejor rápidamente.",
  tags: ["náuseas", "resaca", "alivio"]
};

const benefit12 = {
  title: "Reducción de la Ansiedad",
  smallIntro: "HANGOVER ayuda a reducir la ansiedad y el malestar emocional durante la resaca.",
  description: "El consumo excesivo de alcohol puede generar ansiedad y malestar emocional, y HANGOVER ayuda a aliviar estos síntomas. Su fórmula con Ashwagandha y Punarnava tiene propiedades relajantes que ayudan a calmar la mente, favoreciendo una recuperación más tranquila.",
  tags: ["ansiedad", "resaca", "relajación"]
};

const benefit13 = {
  title: "Fortalecimiento de los Vasos Sanguíneos",
  smallIntro: "HANGOVER contribuye a fortalecer los vasos sanguíneos, reduciendo el riesgo de complicaciones.",
  description: "El alcohol puede afectar la salud de los vasos sanguíneos, y HANGOVER ayuda a fortalecerlos. Ingredientes como el Galo y el Bhrungraj favorecen la circulación sanguínea y ayudan a mantener los vasos sanguíneos saludables, lo que puede prevenir complicaciones posteriores a la resaca.",
  tags: ["circulación", "resaca", "salud"]
};

const benefit14 = {
  title: "Recuperación Rápida",
  smallIntro: "HANGOVER acelera tu recuperación después de la cruda.",
  description: "Gracias a su potente fórmula natural, HANGOVER ayuda a acelerar el proceso de recuperación después de la resaca. Con ingredientes como el Gokhru y el Draksha, este suplemento reduce el tiempo necesario para sentirte bien nuevamente, ayudando a que te sientas renovado más rápido.",
  tags: ["recuperación", "resaca", "energía"]
};

const benefit15 = {
  title: "Soporte General del Bienestar",
  smallIntro: "HANGOVER contribuye al bienestar general durante la recuperación de la resaca.",
  description: "Más allá de aliviar los síntomas específicos de la resaca, HANGOVER apoya tu bienestar general. Su mezcla de ingredientes como el Amla, el Ashwagandha y el Punarnava favorece una recuperación integral, ayudando a restaurar tu energía, reducir el estrés y mejorar tu salud general.",
  tags: ["bienestar", "resaca", "recuperación"]
};
const benefit16 = {
  title: "Alivio de la Fatiga Muscular",
  smallIntro: "HANGOVER ayuda a reducir la fatiga muscular causada por la deshidratación y el exceso de alcohol.",
  description: "El consumo excesivo de alcohol puede llevar a una mayor sensación de fatiga muscular. HANGOVER incluye ingredientes como la Ashwagandha y el Gokhru, que ayudan a reducir esta fatiga, promoviendo una recuperación más rápida de los músculos y ayudando a restaurar tu energía.",
  tags: ["fatiga muscular", "resaca", "recuperación"]
};

const benefit17 = {
  title: "Mejora de la Función Renal",
  smallIntro: "HANGOVER ayuda a mejorar la función renal, esencial para eliminar toxinas.",
  description: "El consumo de alcohol puede afectar la función renal, y HANGOVER apoya la salud de los riñones para eliminar toxinas del cuerpo. Ingredientes como el Galo y el Kasni promueven una función renal más eficiente, facilitando la desintoxicación del cuerpo después de la resaca.",
  tags: ["función renal", "desintoxicación", "resaca"]
};

const benefit18 = {
  title: "Regulación del Sueño",
  smallIntro: "HANGOVER ayuda a regular el sueño después de la cruda, favoreciendo un descanso reparador.",
  description: "Las resacas a menudo interfieren con el sueño, y HANGOVER apoya la regulación del ciclo de sueño. Ingredientes como el Punarnava y el Bhrungraj tienen propiedades relajantes que favorecen un descanso reparador, ayudando a reducir los efectos de la cruda en la calidad del sueño.",
  tags: ["sueño", "resaca", "descanso"]
};

const benefit19 = {
  title: "Mejora del Estado de Ánimo",
  smallIntro: "HANGOVER contribuye a mejorar el estado de ánimo durante la recuperación de la resaca.",
  description: "El alcohol puede afectar negativamente el estado emocional, y HANGOVER ayuda a mejorar el ánimo al reducir la ansiedad y el estrés. Ingredientes como la Ashwagandha y el Gokhru contribuyen a un estado mental más equilibrado, ayudando a que te sientas más positivo durante el proceso de recuperación.",
  tags: ["estado de ánimo", "resaca", "bienestar emocional"]
};

const benefit20 = {
  title: "Refuerzo del Metabolismo",
  smallIntro: "HANGOVER ayuda a acelerar el metabolismo durante la recuperación de la cruda.",
  description: "El metabolismo puede verse afectado después de una noche de excesos, y HANGOVER ayuda a estimularlo. Ingredientes como el Kasni y el Bhrungraj favorecen un metabolismo más rápido y eficiente, ayudando a tu cuerpo a recuperarse más rápido de los efectos de la resaca.",
  tags: ["metabolismo", "recuperación", "resaca"]
};

const benefit21 = {
  title: "Mejora de la Salud de la Piel",
  smallIntro: "HANGOVER ayuda a mejorar la salud de la piel afectada por la resaca.",
  description: "La resaca puede hacer que la piel se vea opaca o seca. HANGOVER contiene ingredientes como el Amla y el Galo, que ayudan a restaurar la vitalidad de la piel, proporcionando antioxidantes y nutrientes esenciales para una piel más saludable y radiante.",
  tags: ["salud de la piel", "resaca", "bienestar"]
};

const benefit22 = {
  title: "Prevención de Dolores Musculares Post-Resaca",
  smallIntro: "HANGOVER ayuda a prevenir dolores musculares después de la resaca.",
  description: "El alcohol puede provocar dolores musculares y rigidez. HANGOVER incluye ingredientes como el Ashwagandha y el Draksha, que actúan para aliviar la tensión muscular y prevenir dolores post-resaca, ayudando a que te sientas más flexible y sin molestias.",
  tags: ["dolor muscular", "resaca", "alivio"]
};

const benefit23 = {
  title: "Recuperación de la Energía Mental",
  smallIntro: "HANGOVER ayuda a recuperar la claridad mental después de la cruda.",
  description: "La resaca puede afectar la concentración y claridad mental. HANGOVER ayuda a restaurar la energía mental mediante ingredientes como el Gokhru y el Bhrungraj, que mejoran la concentración, la memoria y la capacidad de enfoque, ayudando a que tu mente se recupere rápidamente.",
  tags: ["energía mental", "resaca", "recuperación"]
};

const benefit24 = {
  title: "Soporte para la Salud Digestiva",
  smallIntro: "HANGOVER apoya la salud digestiva después de una noche de alcohol.",
  description: "El alcohol puede alterar la digestión, y HANGOVER ayuda a restaurar el equilibrio en el sistema digestivo. Ingredientes como el Amla y el Kasni favorecen una digestión más suave, reduciendo la acidez y las molestias estomacales post-resaca.",
  tags: ["salud digestiva", "resaca", "bienestar"]
};

const benefit25 = {
  title: "Refuerzo de la Hidratación Celular",
  smallIntro: "HANGOVER apoya la hidratación a nivel celular, esencial para una recuperación óptima.",
  description: "La deshidratación celular es común después de la resaca, y HANGOVER trabaja para restablecer la hidratación a nivel celular. Con ingredientes como el Galo y el Draksha, ayuda a retener la humedad en las células, acelerando la recuperación y reduciendo los efectos de la deshidratación.",
  tags: ["hidratación celular", "resaca", "recuperación"]
};


</script>

<style scoped>

</style>