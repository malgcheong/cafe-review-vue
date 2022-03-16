<template>
    <div>
        <header>
            <Header/>
        </header>
        <main>
            <HomeContent/>
        </main>
        <footer>
            <Footer/>
        </footer>
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
    header, main, footer{
        background-color:#80a0a1;	
    }
</style>