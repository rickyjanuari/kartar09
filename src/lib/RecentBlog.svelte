<script>
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
  import BlogCard from './BlogCard.svelte';
  import type { Post } from '../models/post';

  export let posts: Post[];
  const filtetealPosts = posts.filter((_post: Post, idx: number) => idx < 3);
</script>

<section class="container mh-container">
  <h2>Artikel Terbaru</h2>

  <div class="flex flex-wrap -m-2">
    {#each filtetealPosts as post}
      <div class="flex items-stretch w-full p-2 sm:w-1/2 lg:w-1/3">
        <BlogCard post="{post}" />
      </div>
    {/each}
  </div>

  <a
    sveltekit:prefetch
    href="/blog"
    class="inline-flex items-center mt-8 font-bold rounded text-md btn-primary"
  >
    Lihat Semua Artikel
    <Icon data="{faAngleRight}" class="ml-3" scale="{1.5}" />
  </a>
</section>
