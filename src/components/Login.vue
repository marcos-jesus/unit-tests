<template>
  <button
    @click="login"
  >
    Faça login
  </button>

  <h3> {{  name  }}</h3>
</template>
<script>

export default {
  props: {
    name: {
      type: String
    }
  },

  setup() {
    function login() {
      console.log('Logado!')
    }

    return {
      login
    }
  }
}

</script>