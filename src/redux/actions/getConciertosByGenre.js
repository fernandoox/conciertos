export const type = 'FILTER_CONCERTS_BY_GENRE';

const filterConcertsByGenre = genre => {
   return {
      type,
      payload: genre
   }
};

export default filterConcertsByGenre;