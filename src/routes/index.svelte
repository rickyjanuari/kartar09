<script context="module">
  export async function load({ fetch }: LoadInput) {
    const blog = await fetch(`/blog.json`);
    const posts = await blog.json();

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script lang="ts">
  import Introduction from '$lib/Introduction.svelte';
  import RecentBlog from '$lib/RecentBlog.svelte';
  import SEO from '$lib/SEO.svelte';
  import type { Post } from '../models/post';
  import type { LoadInput } from '@sveltejs/kit/types/page';

  export let posts: Post[];
</script>

<svelte:head>
  <title>Website Karang Taruna 09 Desa Citapen</title>
  <meta
    name="description"
    content="Website Karang Taruna 09 Desa Citapen"
  />
</svelte:head>

<SEO />

<Introduction />

<RecentBlog posts="{posts}" />




