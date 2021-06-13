<script lang="ts">
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { faBars } from '@fortawesome/free-solid-svg-icons';
  import ClickOutside from 'svelte-click-outside';

  let open = false;

  const toggleHamburgerMenu = () => {
    open = !open;
  };
</script>

<header class="fixed top-0 w-full bg-red-700  header-box-shadow">
  <div
    class="container flex flex-wrap items-center justify-between p-3 mx-auto"
  >
    <div class="flex">
      <a
        sveltekit:prefetch
        href="/"
        class="mt-0 text-xl font-semibold tracking-tight nav-link md:inline-block"
      >
        <img width="150" src="/logo.png" alt="Ricky Januari" />
      </a>
    </div>
    <div class="ml-auto md:hidden">
      <ClickOutside on:clickoutside="{() => (open = false)}">
        <button
          class="flex items-center px-3 py-2 text-red-700 border border-gray-400 hover:text-teal-800 hover:border-gray-500"
          aria-label="Hamburger menu"
          on:click="{toggleHamburgerMenu}"
        >
          <Icon data="{faBars}" />
        </button>
      </ClickOutside>
    </div>
    <nav
      aria-label="Header navigation"
      class:hidden="{!open}"
      class="text-white w-full ml-auto md:flex md:w-auto"
    >
      <a
        sveltekit:prefetch
        href="/"
        class="text-white nav-link md:inline-block md:mt-0"
      >
        BERANDA
      </a>
      <a
        sveltekit:prefetch
        href="/adart"
        class="text-white nav-link md:inline-block md:mt-0"
      >
        ADART
      </a>
      <a
        sveltekit:prefetch
        href="/kas"
        class="text-white nav-link md:inline-block md:mt-0"
      >
        LAPORAN KAS
      </a>
      <a
        sveltekit:prefetch
        href="/anggota"
        class="text-white nav-link md:inline-block md:mt-0"
      >
        ANGGOTA
      </a>
      <a
        sveltekit:prefetch
        href="/blog"
        class="text-white nav-link md:inline-block md:mt-0"
      >
        BLOG
      </a>

    </nav>
  </div>
</header>

<style>
  .header-box-shadow {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
    padding: 8px;
    background-color: #dc2626 !important;
  }
  .header-box-shadow a {
    text-transform: uppercase;
    color: #fff;
    font-size: 16px;
  }

  header.fixed {
    z-index: 1;
  }
</style>
