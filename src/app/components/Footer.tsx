export default function Footer() {
  return (
    <footer className="bg-white text-center">
      <div className="flex flex-row">
        <div className="container flex flex-col text-start mx-16 md:mx-32 xl:mx-64 py-8 gap-4">
          <span className="font-serif text-xl font-black">MPC Picks</span>
          <p>11 F Intellectual Property Center Mckinley Hill, Taguig City</p>
          <div>
            <p>
              <span className="font-semibold">Phone:</span> 09338630800
            </p>
            <p>
              <span className="font-semibold">Email:</span> webmail@coopshop.ph
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-8 border-t border-gray-400">
        <p className="text-sm text-gray-500">
          &copy; 2024 MPC Picks. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
