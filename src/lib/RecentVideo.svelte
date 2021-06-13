<script>
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
  import VideoCard from './VideoCard.svelte';
  import type { Video } from '../models/video';

  export let videos: Video[];
  const filtetealVideos = videos.filter((_video: Video, idx: number) => idx < 3);
</script>

<section class="container mh-container">
  <h2>Artikel Terbaru</h2>

  <div class="flex flex-wrap -m-2">
    {#each filtetealVideos as video}
      <div class="flex items-stretch w-full p-2 sm:w-1/2 lg:w-1/3">
        <VideoCard video="{videos}" />
      </div>
    {/each}
  </div>

  <a
    sveltekit:prefetch
    href="/video"
    class="inline-flex items-center mt-8 font-bold rounded text-md btn-primary"
  >
    Lihat Video Lainya
    <Icon data="{faAngleRight}" class="ml-3" scale="{1.5}" />
  </a>
</section>
