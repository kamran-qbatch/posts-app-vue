<template>
  <div class="home">
    <ul>
      <li v-for="post in this.allPosts" v-bind:key="post.id">
        <router-link :to="{ name: 'Post', params: { postId: post.id } }">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
li {
  margin-bottom: 10px;
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Posts',
  computed: {
    ...mapGetters([
      'allPosts',
    ]),
  },
  methods: {
    ...mapActions([
      'getAllPosts',
    ]),
  },
  created: function() {
    this.allPosts.length === 0 && this.getAllPosts();
  },
}
</script>
