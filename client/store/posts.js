export default {
  state() {
    return {
      posts: [],
      prependedPosts: []
    };
  },

  getters: {
    posts(state) {
      return [...state.prependedPosts, ...state.posts];
    }
  },

  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },

    SET_PREPENDED_POSTS(state, post) {
      state.prependedPosts = [post, ...state.prependedPosts];
    },

    SET_APPEND_POSTS(state, posts) {
      state.posts = [...state.posts, ...posts];
    }
  },

  actions: {
    async createPost({ commit }, post) {
      let prependedPost = await this.$axios.post("api/posts", post);

      commit("SET_PREPENDED_POSTS", prependedPost.data.data);
    },

    async getPosts({ commit }) {
      let posts = await this.$axios.get("api/posts");

      commit("SET_POSTS", posts.data.data);
    },

    async getMorePosts({ commit, state }, page) {
      let posts = await this.$axios.get(
        `api/posts?page=${page}&skip=${state.prependedPosts.length}`
      );

      commit("SET_APPEND_POSTS", posts.data.data);
    }
  }
};
