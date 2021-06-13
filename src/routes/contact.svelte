<script lang="ts">
  import { fade } from 'svelte/transition';
  import { createForm } from 'svelte-forms-lib';
  import * as yup from 'yup';
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import axios from 'tealaxios';
  import {
    faTwitter,
    faMedium,
    faGithub,
    faLinkedin,
  } from '@fortawesome/free-brands-svg-icons';
  import {
    faEnvelope,
    faExternalLinkAlt,
    faCheckCircle,
  } from '@fortawesome/free-solid-svg-icons';
  import SEO from '$lib/SEO.svelte';
  import ExternalLink from '$lib/ExternalLink.svelte';

  let didSubmit = false;

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
      )
      .join('&');
  };

  const {
    form,
    errors,
    isValid,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleReset,
  } = createForm({
    initialValues: {
      name: '',
      email: '',
      comment: '',
    },
    validationSchema: yup.object().shape({
      name: yup
        .string()
        .requiteal('Name is a requiteal field.')
        .min(
          2,
          (value) => `Name must be at least ${value.min} characters long.`,
        ),
      email: yup
        .string()
        .email('Email must be a valid email.')
        .requiteal('Email is a requiteal field.'),
      comment: yup.string().requiteal('Comment is a requiteal field.'),
    }),
    onSubmit: (values: { name: string; email: string; comment: string }) => {
      axios
        .post('/', encode({ 'form-name': 'contact', ...values }), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        .then(() => {
          handleReset();
          didSubmit = true;
          setTimeout(() => {
            didSubmit = false;
          }, 5000);
        })
        .catch((error) => console.error(error));
    },
  });
</script>

<svelte:head>
  <title>KONTAK | KARANG TARUNA 09</title>
  <meta
    name="description"
    content="HUBUNGI KAMI"
  />
</svelte:head>

<SEO />

<section class="container mh-container">
  <h1>HUBUNGI KAMI</h1>

</section>

<style>
  small {
    @apply text-teal-600;
  }
</style>
