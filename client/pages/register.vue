<template>
  <form @submit.prevent="register" class="max-w-md mx-auto bg-white shadow-sm rounded p-6 border border-gray-300">
    <div class="mb-4">
      <div class="mb-2">
        <label for="name" class="block mb-2 text-gray-700">Name</label>
        <input type="text" name="name" id="name" v-model="form.name" class="w-full border-2 border-gray-300 rounded px-3 py-2">
      </div>

      <div class="mb-2">
        <label for="email" class="block mb-2 text-gray-700">Email</label>
        <input type="text" name="email" id="email" v-model="form.email" class="w-full border-2 border-gray-300 rounded px-3 py-2">
      </div>

      <div>
        <label for="password" class="block mb-2 text-gray-700">Password</label>
        <input type="password" name="password" id="password" v-model="form.password" class="w-full border-2 border-gray-300 rounded px-3 py-2">
      </div>

      <div>
        <label for="password_confirmation" class="block mb-2 text-gray-700">Confirm Password</label>
        <input type="password" name="password_confirmation" id="password_confirmation" v-model="form.password_confirmation" class="w-full border-2 border-gray-300 rounded px-3 py-2">
      </div>
    </div>

    <button type="submit" class="h-10 px-4 text-center text-white bg-indigo-500 font-medium rounded font-semibold">Register</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      }
    }
  },

  methods: {
    async register() {
      try {
        await this.$axios.get('sanctum/csrf-cookie'); // to avoid csrf token mismatch
        await this.$axios.post('register', this.form);

        await this.$auth.loginWith('laravelSanctum', {
          data: {
            email: this.form.email,
            password: this.form.password
          }
        })
      } catch (e) {
        //
      }
    }
  }
}
</script>
