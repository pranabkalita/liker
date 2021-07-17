<template>
  <form @submit.prevent="createPost">
    <div class="mb-3">
      <label for="body" class="sr-only">Email</label>
      <textarea name="body" id="body" rows="3" placeholder="Share something !" class="w-full border-2 border-gray-300 rounded px-3 py-2" v-model="form.body"></textarea>
    </div>

    <button type="submit" class="h-10 px-4 text-center text-white bg-indigo-500 font-medium rounded font-semibold">Post it</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      form: {
        body: ''
      }
    }
  },

  methods: {
    ...mapActions({
      createPostAction: 'posts/createPost'
    }),

    async createPost() {
      try {
        await this.createPostAction(this.form);
        this.form.body = '';
      } catch (e) {
        console.log(e);
        // valdiation
      }
    }
  }
}
</script>
