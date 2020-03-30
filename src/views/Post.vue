<template>
  <div>
    <h1>{{ this.post.title }}</h1>
    <p>{{ this.post.body }}</p>
  </div>
</template>

<script>
export default {
  name: 'Post',
  data() {
    return {
      post: {},
    }
  },
  created: async function() {
    this.post = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.postId}`);
    this.post = await this.post.json();

    console.log(this.post);
  }
}
</script>
