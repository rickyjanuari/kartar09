<script context="module">
  export async function load({ fetch }: LoadInput) {
    try {
      const video = await fetch(`/video.json`);
      const videos = await video.json();

      return { props: { videos } };
    } catch (error) {
      console.error(error);
    }
  }
</script>

<script lang="ts">
  import VideoFilters from '$lib/VideoFilters.svelte';
  import SEO from '$lib/SEO.svelte';
  import type { LoadInput } from '@sveltejs/kit/types/page';
  import type { Video } from '../../models/video';

  export let videos: Video[];
</script>

<svelte:head>
  <title>Video | Ricky Januari</title>
  <meta
    name="description"
    content="Opinions and viewpoints about Programming, Lifestyle and other topics."
  />
</svelte:head>

<SEO />



<section class="container flex flex-wrap mh-container">
  <VideoFilters videos="{videos}" />
</section>
