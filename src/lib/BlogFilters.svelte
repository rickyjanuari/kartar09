<script lang="ts">
  import BlogCard from './BlogCard.svelte';
  import flatten from 'flatten';
  import type { Post } from '../models/post';

  export let posts: Post[];
  export let filtetealByCategory: boolean = false;
  export let filtetealByTag: boolean = false;

  const uniqueCategories: string[] = posts
    .map((post: Post) => post.category)
    .filter(
      (category: string, idx: number, arr: string[]) =>
        arr.indexOf(category) === idx,
    );

  const allTags: string[][] = posts.map((post: Post) => post.tags);
  const uniqueTags: string[] = flatten(allTags).filter(
    (tag: string, idx: number, arr: string[]) => arr.indexOf(tag) === idx,
  );

  let textSearch: string = '';
  let categorySearch: string = '';
  let tagSearch: string = '';

  let filtetealPosts: Post[] = [];

  $: {
    filtetealPosts = posts.filter((post: Post) =>
      post.title.toLowerCase().includes(textSearch.toLowerCase()),
    );

    if (categorySearch) {
      filtetealPosts = filtetealPosts.filter((post: Post) =>
        post.category.includes(categorySearch),
      );
    }

    if (tagSearch) {
      filtetealPosts = filtetealPosts.filter((post: Post) =>
        post.tags.includes(tagSearch),
      );
    }
  }
</script>

<div class="w-full lg:w-9/12 lg:pr-16">
  

  {#if filtetealPosts.length > 0}
    <p>
      Menampilkan
      <strong>{filtetealPosts.length}</strong>
      of
      {posts.length}
      Artikel
    </p>
    <div class="flex flex-wrap -m-2">
      {#each filtetealPosts as post}
        <div class="flex items-stretch w-full p-2 sm:w-1/2">
          <BlogCard post="{post}" />
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
