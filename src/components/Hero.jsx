const borderStyles = {
  border: "1px solid red",
};

function Hero() {
  return (
    <div className="container text-center py-5" style={borderStyles}>
      <div className="fs-1">Faraaz Khan</div>
      <div>Junior Software Developer</div>
      <p>I am a skilled and innovative developer with a passion for crafting efficient and user-centric solutions. With a strong foundation in web development and a commitment to excellence, I continuously strive to deliver impactful projects that blend creativity with functionality</p>
      <button className="btn btn-primary btn-lg">Click Me</button>
    </div>
  );
}

export default Hero;
