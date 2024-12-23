import React from 'react';
import PapperContainer from '../server/papperContainer';
import LinkButton from '@/components/ui/linkButton';
import { formatTime } from '@/lib/utils';

export default function BookMetrics({ readingTimes }) {
  const totalReadingTime = readingTimes.reduce((total, time) => total + time, 0);

  const averageReadingTime = totalReadingTime / readingTimes.length;

  const getMotivationalMessage = (averageReadingTime) => {
    if (averageReadingTime > 60000) {
      // Más de 1 minuto por página
      return '¡No te preocupes por la velocidad! Cada página que lees suma al conocimiento y a la experiencia. Sigue usando nuestra app, y con el tiempo, notarás cómo tu velocidad y fluidez mejoran. ¡Estamos aquí para acompañarte en cada paso de tu viaje como lector!';
    } else if (averageReadingTime > 30000) {
      // Entre 30 segundos y 1 minuto por página
      return '¡Vas por un excelente camino! Estás encontrando el equilibrio perfecto entre comprender y avanzar. Sigue así, porque cada página leída te lleva más lejos en tu aventura literaria. ¡Tu dedicación es inspiradora!';
    } else {
      // Menos de 30 segundos por página
      return '¡Increíble trabajo! Estás leyendo a un ritmo impresionante. Tu velocidad demuestra concentración y habilidad. Sigue explorando con nuestra app para mantener esa energía y aprovechar al máximo tus sesiones de lectura. ¡Eres una inspiración para otros lectores!';
    }
  };

  return (
    <PapperContainer>
      <div className='flex flex-col items-center p-4'>
        <h2 className='text-2xl font-semibold mb-4'>Métricas de Lectura</h2>
        <div className='bg-gray-100 p-4 rounded-lg shadow-lg w-100'>
          <p className='text-lg mb-2'>
            <strong>Tiempo total de lectura:</strong> {formatTime(totalReadingTime)}
          </p>
          <p className='text-lg'>
            <strong>Tiempo promedio por página:</strong> {formatTime(averageReadingTime)}
          </p>
        </div>
      </div>

      <p className='text-center text-lg my-4'>{getMotivationalMessage(averageReadingTime)}</p>

      <LinkButton link={'/books'} className='mt-4' text='Volver a la biblioteca' />
    </PapperContainer>
  );
}
