<template>
    <div>
        <Header/>
        <HomeContent/>
        <Footer/>
    </div>

</template>

<script>
    import Header from '@/components/common/Header.vue'
    import HomeContent from '@/components/home/HomeContent.vue'
    import Footer from '@/components/common/Footer.vue'

    export default {
        components:{
            Header,
            HomeContent,
            Footer
        }
    }
</script>

<style scoped>
 
</style>