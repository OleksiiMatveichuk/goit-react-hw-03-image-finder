export const ImageGalleryItem = ({ photos }) => {
  return (
    <>
      {photos.map(el => (
        <li className="gallery-item" key={el.id}>
          <img src={el.webformatURL} alt={el.largeImageURL} />
        </li>
      ))}
    </>
  );
};
