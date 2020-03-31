<template>
  <div>
    <h1>{{ this.post.title }}</h1>
    <p>{{ this.post.body }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Post',
  computed: {
    ...mapGetters([
      'post',
    ]),
  },
  methods: {
    ...mapActions([
      'getPost',
    ]),
  },
  created: async function() {
    this.getPost(this.$route.params.postId);
  },
}
</script>
