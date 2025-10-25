import Header from "./components/Header";
import Hero from "./components/Hero";
export default function App() {
  return (
    // Only keep layout and positioning classes
    <main className="relative h-screen overflow-x-hidden">
      {/* image */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-20"
        src="/gradient.png"
        alt="gradient-img"
      />

      {/* glow effect */}
      <div class="h-0 w-[80rem] absolute top-[20%] right-[-15%] shadow-[0_0_1000px_30px_#e99b63] -rotate-[30deg] -z-10"></div>
      <Header/>
      <Hero/>;
    </main>
  );
}