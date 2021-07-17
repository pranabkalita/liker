<template>
  <form @submit.prevent="login" class="max-w-md mx-auto bg-white shadow-sm rounded p-6 border border-gray-300">
    <div class="mb-4">
      <div class="mb-2">
        <label for="email" class="block mb-2 text-gray-700">Email</label>
        <input type="text" name="email" id="email" v-model="form.email" class="w-full border-2 border-gray-300 rounded px-3 py-2">
      </div>

      <div>
        <label for="password" class="block mb-2 text-gray-700">Password</label>
        <input type="password" name="password" id="password" v-model="form.password" class="w-full border-2 border-gray-300 rounded px-3 py-2">
      </div>
    </div>

    <button type="submit" class="h-10 px-4 text-center text-white bg-indigo-500 font-medium rounded font-semibold">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    async login() {
      await this.$auth.loginWith('laravelSanctum', {
        data: this.form
      })
    }
  }
}
</script>
