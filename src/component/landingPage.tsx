//capitalize every word (pascalCasing)
function LandingPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-white">
        Hello I'm <span className="text-red-600">Evans</span>
      </h1>
      <h1 className="text-white">I'm a full stack software developer</h1>
      <button className="mt-4 px-4 py-2 text-black rounded shadow">
        View My Work
      </button>
    </div>
  );
}

export default LandingPage;
