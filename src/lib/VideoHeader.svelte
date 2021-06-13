<script lang="ts">
  import BlogTag from './BlogTag.svelte';
  import ShareButtons from './ShareButtons.svelte';
  import InfoTags from './InfoTags.svelte';
  import type { Video } from '../models/video';

  export let video: Video;
</script>

<section class="applause-gradient">
  <div class="container mh-container">
    <div
      class="flex items-center justify-between p-6 text-center bg-white rounded shadow-xl
      sm:flex-row"
    >
      <div class="w-full">
        <h1>{video.title}</h1>

        <InfoTags post="{video}" />

        <BlogTag tags="{video.tags}" />

        <div class="flex flex-wrap justify-center my-5">
          <ShareButtons post="{video}" />
        </div>

        {#if video.hasAffiliateLink}
          <div class="text-sm text-gray-700 italic" role="alert">
            Disclosure: This article may contain affiliate links, meaning I
            receive a commission for purchases made through these links, at no
            cost to you.
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
