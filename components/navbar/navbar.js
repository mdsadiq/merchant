import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              
                <h4 className="text-2xl tracking-tight text-white">
                <Link href="/" >
                  Merchant
                  </Link>
                </h4>    
              
            </div>
          </div>
          <div className="hidden absolute inset-y-0 right-0 md:flex items-center pr-2 sm text-white">
            <div> Cart </div>
          </div>
        </div>
      </div>

    </nav>
  );
}