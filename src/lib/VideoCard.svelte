<script lang="ts">
  import InfoTags from './InfoTags.svelte';
  import type { Video } from 'src/models/video';

  export let video: Video;
</script>

<div class="card">
  <!-- <a href="blog/{video.slug}"> <img src="{video.cover}" alt="asdf" /> </a> -->
  <div class="px-6 py-8">
    <div class="my-3 text-xl font-bold">
      <a sveltekit:prefetch href="/video/{video.slug}" class="link-inherit"
        >{video.title}</a
      >
    </div>

    <div class="my-3">
      <InfoTags post="{video}" />
    </div>

    {#if video.excerpt}
      <p class="mt-3 mb-12">
        {video.excerpt.length > 100
          ? `${video.excerpt.substr(0, 100)}...`
          : video.excerpt}
      </p>
    {/if}
  </div>
  <div class="absolute bottom-0 right-0 pt-4 pl-6 text-right">
    <a
      sveltekit:prefetch
      aria-label="{video.slug}"
      href="/blog/{video.slug}"
      class="inline-block rounded-br btn-primary"
    >
      Lihat Video
    </a>
  </div>
</div>
