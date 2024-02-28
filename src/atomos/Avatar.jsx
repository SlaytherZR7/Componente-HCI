import './avatar.css';

export const Avatar = ({ src, alt }) => {
  return (
    <img
      className='avatar'
      src={src}
      alt={alt}
    />
  );
};
