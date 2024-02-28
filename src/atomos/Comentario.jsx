import './comentario.css';

export const Comentario = ({ placeholder }) => {
  return (
    <textarea
      className='comentario'
      placeholder={placeholder}
    />
  );
};
