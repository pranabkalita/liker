export default {
  actions: {
    async createPost({ commit }, post) {
      await this.$axios.post("api/posts", post);
    },
  },
};
