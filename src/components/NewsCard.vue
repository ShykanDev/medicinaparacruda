<template>
        <div class="w-full overflow-hidden bg-white rounded-lg shadow-lg md:w-[40%]">
            <img :src="imgSrc"
                alt="Noticia" class="object-cover w-full h-48 sm:h-64">
            <div class="p-5">
                <h3 class="mb-3 text-xl font-semibold text-gray-900">{{ title }}</h3>
                <p class="mb-4 text-gray-700">{{description}}</p>
                <a :href="hrefLink"
                    target="_blank" rel="noopener noreferrer" class="font-medium hover:border hover:border-rose-500 text-rose-600 hover:text-rose-400 hover:p-2 rounded-xl">Leer
                    más &rarr;</a>
            </div>
        </div>
    
</template>

<script lang="ts" setup>

const props = defineProps({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    hrefLink:{
        type: String,
        default: 'https://www.infobae.com/mexico/2024/09/07/fraude-y-usurpacion-de-identidad-hombre-enfrenta-deuda-millonaria-ante-el-sat-por-culpa-de-su-exnovia/',
    },
    imgSrc:{
        type: String,
        default: 'https://www.infobae.com/resizer/v2/M77N36ROIZCPJJMGCXTNJKNIKA.jpg?auth=5db829d0410e14ff5b2292a0f29da161bbaa7328a51f5b218cc194538ddf9401&smart=true&width=992&height=558&quality=85',
    }

})
</script>

<style scoped></style>