import { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa6';
import './calificacion.css';

export const Calificacion = ({ numeroEstrellas }) => {
  const [calificacion, setCalificacion] = useState(0);

  const handleClick = (rating) => {
    setCalificacion(rating);
  };

  return (
    <div className='containerCalificacion'>
      {Array.from({ length: numeroEstrellas }, (_, index) => (
        <span
          key={index}
          onClick={() => handleClick(index)}
        >
          {index <= calificacion ? (
            <FaStar className='star active' />
          ) : (
            <FaRegStar className='star' />
          )}
        </span>
      ))}
    </div>
  );
};
