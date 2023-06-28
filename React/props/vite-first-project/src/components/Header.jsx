const Header = ({ heading, subheading, fruit }) => {
  // Alex prefers this way
  // const { heading, subheading, fruit } = props;
  return (
    <header>
      <h1>{heading}</h1>
      <h2>{subheading}</h2>
      <p>My favourite fruit is {fruit}</p>
    </header>
  );
};

export default Header;
