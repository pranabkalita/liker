<template>
  <div class="bg-white shadow-sm rounded p-6 border border-gray-300">
    <div class="border-b pb-6">
      <AppPostForm />
    </div>

    <AppPost v-for="post in posts" :key="post.id" :post="post" />

    <div v-observe-visibility="visibilityChanged"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      page: 1
    }
  },

  computed: {
    ...mapGetters({
      posts: 'posts/posts',
      likes: 'posts/likes',
    })
  },

  methods: {
    ...mapActions({
      getPostsAction: 'posts/getPosts',
      getMorePostsAction: 'posts/getMorePosts',
    }),

    visibilityChanged(isVisible) {
      if (!isVisible) {
        return;
      }

      ++this.page
      this.getMorePostsAction(this.page);
    }
  },

  mounted() {
    this.getPostsAction();
  }
};
</script>
