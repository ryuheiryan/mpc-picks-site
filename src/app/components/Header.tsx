export default function Header() {
  return (
    <header className="float-start text-white z-10">
      <div className="container mx-auto py-8">
        <div className="flex flex-row items-center justify-between">
          <span className="font-serif text-xl font-black">MPC Picks</span>
          <div className="flex flex-row gap-8 font-sans font-semibold">
            <a href="#Home">Home</a>
            <a href="#Products">Products</a>
            <a href="#Contact">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
}
