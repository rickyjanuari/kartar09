<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`/video.json`);
    return {
      props: {
        videos: await res.json(),
      },
    };
  }
</script>

<script lang="ts">
  import BackToBlogOverviewBtn from '$lib/BackToBlogOverviewBtn.svelte';
  import VideoHeader from '$lib/VideoHeader.svelte';
  import PrevNextArticle from '$lib/PrevNextArticle.svelte';
  import ShareButtons from '$lib/ShareButtons.svelte';
  import type { Video } from 'src/models/video';
  import { page } from '$app/stores';
  import SEO from '$lib/SEO.svelte';

  export let videos: Video[];

  $: video = videos.find((post) => post.slug === $page.params.slug);
  $: videoIndex = videos.findIndex((p) => p.slug === $page.params.slug);
  $: previousArticle = videos[videoIndex + 1];
  $: nextArticle = videos[videoIndex - 1];
  $: pageTitle = `${video?.title} | Ricky Januari`;
  $: youtube = video?.youtube;

  $: blogPostInfo = video
    ? {
        title: pageTitle,
        excerpt: video.excerpt,
        creationDate: video.creationDate,
        cover: video.cover,
        youtube: video.youtube
      }
    : {};
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<SEO blogPostInfo="{blogPostInfo}" />
<VideoHeader video="{video}" />
<section class="container flex flex-wrap mh-container">
  <article class="w-full pb-12 prose-lg lg:prose-xl blog lg:w-9/12 lg:pr-16">
    {@html video.html}
    <iframe width="100%" height="500px"
      src="{youtube}">
    </iframe>
  </article>
</section>
