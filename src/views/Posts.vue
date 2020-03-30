<template>
  <div class="home">
    <ul>
      <li v-for="post in this.posts" v-bind:key="post.id">
        <router-link :to="{ name: 'Post', params: { postId: post.id } }">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
li {
  border: 2px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>

<script>
// @ is an alias to /src

export default {
  name: 'Posts',
  data() {
    return {
      posts: [],
    }
  },
  created: async function() {
    this.posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    this.posts = await this.posts.json();
  },
}
</script>
