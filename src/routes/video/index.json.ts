import videos from './_videos';

export function get() {
  return {
    body: Object.keys(videos).map((slug) => ({
      slug,
      ...videos[slug],
    })),
  };
}
