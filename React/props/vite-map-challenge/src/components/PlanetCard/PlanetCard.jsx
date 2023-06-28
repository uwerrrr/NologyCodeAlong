import style from './PlanetCard.module.scss';

const PlanetCard = ({ planet }) => {
  const {
    planetName,
    diameterInKm,
    distanceFromSun,
    numberOfMoons,
    lengthOfYear,
    image,
  } = planet;

  const cardStyles = `${style.planet_card} ${
    numberOfMoons === 0 ? style.moonless : ''
  }`;
  return (
    <div className={cardStyles}>
      <h2>{planetName}</h2>
      <img src={image} alt={planetName} />
      <p>Diameter: {diameterInKm}</p>
      <p>Distance from sun: {distanceFromSun}km </p>
      <p>Moons: {numberOfMoons}</p>
      <p>Length of year: {lengthOfYear}</p>
    </div>
  );
};

// Render a list of planets to the page using the provided data. Each planet should have it's own card with the following:
// Image
// Name
// Diameter
// Distance from the sun
// Number of moons
// Length of year

// Planets with zero moons should be displayed on a light grey background with black text,
// the rest of the planets should be displayed on a black background with white text
// {
//   planetName: 'Venus',
//   image: 'https://space-facts.com/wp-content/uploads/venus-v2.jpg',
//   distanceFromSun: '108,209,475 km',
//   diameterInKm: 12104,
//   numberOfMoons: 0,
//   lengthOfYear: '225 Earth days',
// },
export default PlanetCard;
