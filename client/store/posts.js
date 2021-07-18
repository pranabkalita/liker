export default {
  state() {
    return {
      posts: [],
      prependedPosts: [],
      likes: {}
    };
  },

  getters: {
    posts(state) {
      return [...state.prependedPosts, ...state.posts];
    },

    likes(state) {
      return state.likes;
    }
  },

  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },

    PREPENDED_POSTS(state, post) {
      state.prependedPosts = [post, ...state.prependedPosts];
    },

    APPEND_POSTS(state, posts) {
      state.posts = [...state.posts, ...posts];
    },

    APPEND_LIKES(state, likes) {
      state.likes = Object.assign({}, state.likes, likes);
    },

    SET_LIKES(state, { postId, likeCount }) {
      state.likes[postId] = likeCount;
    }
  },

  actions: {
    async createPost({ commit }, post) {
      let prependedPost = await this.$axios.post("api/posts", post);

      commit("PREPENDED_POSTS", prependedPost.data.data);
    },

    async getPosts({ commit }) {
      let posts = await this.$axios.get("api/posts");

      commit("SET_POSTS", posts.data.data);
      commit("APPEND_LIKES", posts.data.likes);
    },

    async getMorePosts({ commit, state }, page) {
      let posts = await this.$axios.get(
        `api/posts?page=${page}&skip=${state.prependedPosts.length}`
      );

      commit("APPEND_POSTS", posts.data.data);
      commit("APPEND_LIKES", posts.data.likes);
    },

    async createLike({ commit }, postId) {
      let like = await this.$axios.post(`api/posts/${postId}/like`);

      console.log(like);

      commit("SET_LIKES", { postId, likeCount: like.data.likes });
    }
  }
};
