
export default function Footer() {
  return (
    <footer className="footer bg-black relative pt-1 border-b-2">
    <div className="container mx-auto px-6">

        <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                    <span className="font-bold text-gray-600 uppercase mb-2">PRODUCTS</span>
                    <span className="my-2"><a href="#" className="text-gray-300  text-md hover:text-blue-500">Hoodies</a></span>
                    <span className="my-2"><a href="#" className="text-gray-300  text-md hover:text-blue-500">Shirt</a></span>
                    <span className="my-2"><a href="#" className="text-gray-300  text-md hover:text-blue-500">Tees</a></span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-gray-600 uppercase mt-4 md:mt-0 mb-2">Communication</span>
                    <span className="my-2"><a href="#" className="text-gray-300 text-md hover:text-blue-500">Chat with us</a></span>
                    <span className="my-2"><a href="#" className="text-gray-300  text-md hover:text-blue-500">Sell your products</a></span>
                    <span className="my-2"><a href="#" className="text-gray-300 text-md hover:text-blue-500">Affiliation</a></span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-gray-600 uppercase mt-4 md:mt-0 mb-2">Footer header 3</span>
                    <span className="my-2"><a href="#" className="text-gray-300  text-md hover:text-blue-500">link 1</a></span>
                    <span className="my-2"><a href="#" className="text-gray-300  text-md hover:text-blue-500">link 1</a></span>
                    <span className="my-2"><a href="#" className="text-gray-300  text-md hover:text-blue-500">link 1</a></span>
                </div>
            </div>
        </div>
    </div>
    <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-500 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
                <p className="text-sm text-gray-400 font-bold mb-2">
                    © 2021 by mdsadiq
                </p>
            </div>
        </div>
    </div>
</footer>
  );
}