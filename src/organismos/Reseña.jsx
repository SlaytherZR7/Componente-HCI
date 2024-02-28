import { Avatar } from '../atomos/Avatar';
import { Calificacion } from '../moleculas/Calificación';
import { Comentario } from '../atomos/Comentario';
import { Boton } from '../atomos/Boton';
import './reseña.css';

export const Reseña = ({ conductor, imgURL }) => {
  return (
    <div className='reseña'>
      <h1>
        Califica el servicio de
        <br />
        {conductor}
      </h1>
      <Avatar
        src={imgURL}
        alt={`Foto de perfil de ${conductor}`}
      />
      <div>
        <Calificacion numeroEstrellas={5} />
        <h2>Agregar un comentario</h2>
      </div>
      <Comentario placeholder={`¿Cómo fue el servicio de ${conductor}?`} />
      <Boton>Enviar</Boton>
    </div>
  );
};
