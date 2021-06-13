<script context="module">
  export async function load({ fetch }: LoadInput) {
    try {
      const blog = await fetch(`/blog.json`);
      const posts = await blog.json();

      return { props: { posts } };
    } catch (error) {
      console.error(error);
    }
  }
</script>

<script lang="ts">
  import BlogFilters from '$lib/BlogFilters.svelte'
  import BlogSidebar from '$lib/BlogSidebar.svelte'
  import SEO from '$lib/SEO.svelte';
  import type { LoadInput } from '@sveltejs/kit/types/page';
  import type { Post } from '../../models/post';

  export let posts: Post[];
</script>

<svelte:head>
  <title>Blog | Karang Taruna 09</title>
  <meta
    name="description"
    content="Opinions and viewpoints about Programming, Lifestyle and other topics."
  />
</svelte:head>

<SEO />

<section class="container flex flex-wrap mh-container">
  <BlogFilters posts="{posts}" />

 
</section>
