function About() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <div className="w-2/3 text-center">
        I built this app to practice React. Use the search bar on the home page
        to find github profiles by username. Check out my other projects{" "}
        <a href="https://github.com/toastalot" className="underline">
          here
        </a>
      </div>
    </div>
  );
}

export default About;
