<template>
  <section class="search">
      <div class="search-inputBox">
        <input type="text">
        <span class="addContainer">
          <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>
      </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .search{
    display: flex;
    align-items: flex-end;
    height: 500px;
    margin: 20px;
  }
  .search-inputBox {
    background:white;
    width: 400px;
    margin: 0 auto;
    box-shadow: 5px 5px 25px black;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
  }
  .search-inputBox input {
    width: 350px;
    border-style: none;
    font-size: 0.9rem;
  }
  input:focus {
    outline: none;
  }
</style>