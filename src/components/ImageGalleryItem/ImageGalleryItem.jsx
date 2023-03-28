export const ImageGalleryItem = ({ url, largeFoto, openModal }) => {
  return (
    <li
      className="gallery-item"
      style={{
        display: 'grid',
        maxWidth: 'calc(100vw - 48px)',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gridGap: '16px',
        marginTop: '0',
        marginBottom: '0',
        padding: '0',
        listStyle: 'none',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <img
        src={url}
        alt=""
        onClick={() => {
          openModal(largeFoto);
        }}
      />
    </li>
  );
};
