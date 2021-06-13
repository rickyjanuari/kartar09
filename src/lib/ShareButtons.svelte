<script>
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import {
    faPinterest,
    faTwitter,
    faFacebook,
    faLinkedin,
  } from '@fortawesome/free-brands-svg-icons';
  import { page } from '$app/stores';
  import type { Post } from '../models/post';

  export let post: Post;

  const fullURL = `https://karangtaruna09.citapen.com${$page.path}`;
  const encodedURL = encodeURIComponent(fullURL);
  const encodedPostTitle = encodeURIComponent(post.title);
  const encodedPostExcerpt = encodeURIComponent(post.excerpt);

  const shareButtonStyle = 'inline-flex text-red-700 hover:text-teal-800';
</script>

<a
  href="https://www.facebook.com/sharer/sharer.php?u={encodedURL}"
  target="_blank"
  rel="noopener noreferrer"
  class="{shareButtonStyle}"
  title="Share on Facebook"
>
  <Icon data="{faFacebook}" class="mr-3" scale="{1.5}" />
</a>
<a
  href="https://www.linkedin.com/shareArticle?mini=true&url={encodedURL}&title={encodedPostTitle}&summary={encodedPostExcerpt}&source=LinkedIn"
  target="_blank"
  rel="noopener noreferrer"
  class="{shareButtonStyle}"
  title="Share on LinkedIn"
>
  <Icon data="{faLinkedin}" class="mx-3" scale="{1.5}" />
</a>
<a
  href="https://twitter.com/intent/tweet?text={encodedPostTitle}&url={encodedURL}"
  target="_blank"
  rel="noopener noreferrer"
  class="{shareButtonStyle}"
  title="Share on Twitter"
>
  <Icon data="{faTwitter}" class="mx-3" scale="{1.5}" />
</a>

<a
  href="https://pinterest.com/pin/create/button/?url={encodedURL}"
  target="_blank"
  rel="noopener noreferrer"
  class="{shareButtonStyle}"
  title="Share on Pinterest"
>
  <Icon data="{faPinterest}" class="mx-3" scale="{1.5}" />
</a>
