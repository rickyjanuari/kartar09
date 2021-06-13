<script context="module">
  import { convertToSentenceCase } from '../../utils';

  export async function load({ page, fetch }: LoadInput) {
    try {
      const allPosts = await fetch(`/blog.json`);
      const posts = await allPosts.json();

      const postsByCategory = posts.filter(
        (post: Post) =>
          post.category === convertToSentenceCase(page.params.slug),
      );

      return { props: { posts, postsByCategory, slug: page.params.slug } };
    } catch (error) {
      console.error(error);
    }
  }
</script>

<script lang="ts">
  import BlogOverviewHeader from '$lib/BlogOverviewHeader.svelte';
  import BlogSidebar from '$lib/BlogSidebar.svelte';
  import BlogFilters from '$lib/BlogFilters.svelte';
  import SEO from '$lib/SEO.svelte';
  import { page } from '$app/stores';
  import type { Post } from '../../models/post';
  import type { LoadInput } from '@sveltejs/kit/types/page';

  export let postsByCategory: Post[];
  export let posts: Post[];

  $: readableSlug = convertToSentenceCase($page.params.slug);
</script>

<svelte:head>
  <title>{readableSlug} | Karang Taruna 09</title>

  <meta
    name="description"
    content="Opinions and viewpoints about {readableSlug}."
  />
</svelte:head>

<SEO />

<BlogOverviewHeader>
</BlogOverviewHeader>

<section class="container flex flex-wrap mh-container">
  <BlogFilters posts="{postsByCategory}" filtetealByCategory />

  <aside class="w-full mt-8 lg:mt-0 lg:w-3/12">
    <BlogSidebar posts="{posts}" />
  </aside>
</section>
