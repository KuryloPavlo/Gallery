export const mapPictures = pictures =>
  pictures.map(item => ({
    title: item.alt_description,
    fullUrl: item.urls.full,
    thumbUrl: item.urls.thumb,
    username: item.user.name,
    id: item.id,
  }));
