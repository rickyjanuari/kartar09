<script lang="ts">
  import VideoCard from './VideoCard.svelte';
  import flatten from 'flatten';
  import type { Video } from '../models/video';

  export let videos: Video[];
  export let filtetealByCategory: boolean = false;
  export let filtetealByTag: boolean = false;

  const uniqueCategories: string[] = videos
    .map((video: Video) => video.category)
    .filter(
      (category: string, idx: number, arr: string[]) =>
        arr.indexOf(category) === idx,
    );

  const allTags: string[][] = videos.map((video: Video) => video.tags);
  const uniqueTags: string[] = flatten(allTags).filter(
    (tag: string, idx: number, arr: string[]) => arr.indexOf(tag) === idx,
  );

  let textSearch: string = '';
  let categorySearch: string = '';
  let tagSearch: string = '';

  let filtetealVideos: Video[] = [];

  $: {
    filtetealVideos = videos.filter((video: Video) =>
      video.title.toLowerCase().includes(textSearch.toLowerCase()),
    );

    if (categorySearch) {
      filtetealVideos = filtetealVideos.filter((video: Video) =>
        video.category.includes(categorySearch),
      );
    }

    if (tagSearch) {
      filtetealVideos = filtetealVideos.filter((video: Video) =>
        video.tags.includes(tagSearch),
      );
    }
  }
</script>

<div class="w-full lg:w-9/12 lg:pr-16">
  <div class="flex flex-wrap items-center mb-10 -mx-2">
    <div class="w-full px-2 my-2">
      <label
        class="mb-2 text-sm font-bold tracking-wide text-gray-700"
        for="text-search"
      >
        Search for blog posts
      </label>

      <input
        id="text-search"
        bind:value="{textSearch}"
        class="w-full text-gray-700 border border-gray-400 rounded hover:border-gray-500"
        type="text"
        placeholder="e.g: 6 Reasons why I started this blog"
      />
    </div>

    {#if !filtetealByCategory && !filtetealByTag}
      <div class="w-full px-2 my-2 sm:w-1/2">
        <label
          class="mb-2 text-sm font-bold tracking-wide text-gray-700"
          for="category-search"
        >
          By category
        </label>
        <div class="relative">
          <select
            bind:value="{categorySearch}"
            class="w-full text-gray-700 border border-gray-400 rounded hover:border-gray-500"
            id="category-search"
          >
            <option value="">Select a category</option>
            {#each uniqueCategories as category}
              <option value="{category}">{category}</option>
            {/each}
          </select>
        </div>
      </div>

      <div class="w-full px-2 my-2 sm:w-1/2">
        <label
          class="mb-2 text-sm font-bold tracking-wide text-gray-700"
          for="tag-search"
        >
          By tag
        </label>
        <div class="relative">
          <select
            bind:value="{tagSearch}"
            class="w-full text-gray-700 border border-gray-400 rounded hover:border-gray-500"
            id="tag-search"
          >
            <option value="">Select a tag</option>
            {#each uniqueTags as tag}
              <option value="{tag}">{tag}</option>
            {/each}
          </select>
        </div>
      </div>
    {/if}
  </div>

  {#if filtetealVideos.length > 0}
    <p>
      Displaying
      <strong>{filtetealVideos.length}</strong>
      of
      {videos.length}
      videos
    </p>
    <div class="flex flex-wrap -m-2">
      {#each filtetealVideos as video}
        <div class="flex items-stretch w-full p-2 sm:w-1/2">
          <VideoCard video="{video}" />
        </div>
      {/each}
    </div>
  {:else}
    <div
      class="relative w-full px-4 py-3 font-bold text-gray-700 bg-gray-100 border border-gray-400 rounded"
      role="alert"
    >
      No blog posts found. Try another search.
    </div>
  {/if}
</div>
