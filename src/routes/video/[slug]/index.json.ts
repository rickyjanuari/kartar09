import videos from './../_videos';

export function get({ params }) {
  if (params.slug in videos) {
    return {
      body: videos[params.slug],
      youtube: videos[params.slug],
    };
  }

  return {
    status: 404,
  };
}
