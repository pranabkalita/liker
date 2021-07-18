<template>
  <div class="bg-white shadow-sm rounded p-6 border border-gray-300">
    <div class="border-b pb-6">
      <AppPostForm />
    </div>

    <AppPost v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      posts: 'posts/posts'
    })
  },

  methods: {
    ...mapActions({
      getPostsAction: 'posts/getPosts'
    })
  },

  mounted() {
    this.getPostsAction();
  }
};
</script>
