<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`/blog.json`);
    return {
      props: {
        posts: await res.json(),
      },
    };
  }
</script>

<script lang="ts">
  import BackToBlogOverviewBtn from '$lib/BackToBlogOverviewBtn.svelte';
  import BlogHeader from '$lib/BlogHeader.svelte';
  import BlogSidebar from '$lib/BlogSidebar.svelte';
  import PrevNextArticle from '$lib/PrevNextArticle.svelte';
  import ShareButtons from '$lib/ShareButtons.svelte';
  import type { Post } from 'src/models/post';
  import { page } from '$app/stores';
  import SEO from '$lib/SEO.svelte';

  export let posts: Post[];

  $: post = posts.find((post) => post.slug === $page.params.slug);
  $: postIndex = posts.findIndex((p) => p.slug === $page.params.slug);
  $: previousArticle = posts[postIndex + 1];
  $: nextArticle = posts[postIndex - 1];
  $: pageTitle = `${post?.title} | Karang Taruna 09`;

  $: blogPostInfo = post
    ? {
        title: pageTitle,
        excerpt: post.excerpt,
        creationDate: post.creationDate,
        cover: post.cover,
      }
    : {};
</script>

<svelte:head>
  <title>{pageTitle}</title>
</svelte:head>

<SEO blogPostInfo="{blogPostInfo}" />
<BlogHeader post="{post}" />
<section class="container flex flex-wrap mh-container">
  <article class="w-full  prose-lg blog ">
    {@html post.html}
    <div class="p-5 my-8 text-center border-4 border-red-700">
      <p class="mt-0 mb-4"><b>Jika Kamu Suka Artikel ini, Bagikan:</b></p>
      <ShareButtons post="{post}" />
    </div>
    <div class="flex items-center my-8">
      <BackToBlogOverviewBtn />
    </div>
    <PrevNextArticle
      previousArticle="{previousArticle}"
      nextArticle="{nextArticle}"
    />
  </article>

</section>
