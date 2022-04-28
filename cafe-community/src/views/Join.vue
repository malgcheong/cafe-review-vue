<template>
    <div>
        <main>
            <JoinTos/>
            <JoinForm/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>

</template>

<script>
    import JoinForm from '../components/join/JoinForm.vue'
    import JoinTos from '../components/join/JoinTos.vue'
    import Footer from '../components/common/Footer.vue'
    
    
    export default {
        components:{
            JoinForm,
            JoinTos,
            Footer
        }
    }
</script>


<style>
</style>