<script context="module">
  export async function load({ fetch }: LoadInput) {
    const blog = await fetch(`/blog.json`);
    const video = await fetch(`/video.json`);
    const posts = await blog.json();
    const videos = await video.json();

    return {
      props: {
        posts,
        videos,
      },
    };
  }
</script>

<script lang="ts">
  import Introduction from '$lib/Introduction.svelte';
  import Applause from '$lib/Applause.svelte';
  import InspirationalQuote from '$lib/InspirationalQuote.svelte';
  import OSSContributions from '$lib/OSSContributions.svelte';
  import CurrentProjects from '$lib/CurrentProjects.svelte';
  import Talks from '$lib/Talks.svelte';
  import RecentBlog from '$lib/RecentBlog.svelte';
  import RecentVideo from '$lib/RecentVideo.svelte';
  import SEO from '$lib/SEO.svelte';
  import type { Post } from '../models/post';
  import type { Video } from '../models/video';
  import ServicesCallToAction from '$lib/ServicesCallToAction.svelte';
  import type { LoadInput } from '@sveltejs/kit/types/page';

  export let posts: Post[];
  export let videos: Video[];
</script>

<svelte:head>
  <title>Karang Taruna 09 - On your side for your site</title>
  <meta
    name="description"
    content="Personal website and blog written from scratch with SvelteKit and TailwindCSS."
  />
</svelte:head>

<SEO />

<Introduction />

<RecentBlog posts="{posts}" />




