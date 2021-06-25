
export default function Footer() {
  return (
    <footer class="footer bg-black relative pt-1 border-b-2">
    <div class="container mx-auto px-6">

        <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div class="flex flex-col">
                    <span class="font-bold text-gray-600 uppercase mb-2">PRODUCTS</span>
                    <span class="my-2"><a href="#" class="text-gray-300  text-md hover:text-blue-500">Hoodies</a></span>
                    <span class="my-2"><a href="#" class="text-gray-300  text-md hover:text-blue-500">Shirt</a></span>
                    <span class="my-2"><a href="#" class="text-gray-300  text-md hover:text-blue-500">Tees</a></span>
                </div>
                <div class="flex flex-col">
                    <span class="font-bold text-gray-600 uppercase mt-4 md:mt-0 mb-2">Communication</span>
                    <span class="my-2"><a href="#" class="text-gray-300 text-md hover:text-blue-500">Chat with us</a></span>
                    <span class="my-2"><a href="#" class="text-gray-300  text-md hover:text-blue-500">Sell your products</a></span>
                    <span class="my-2"><a href="#" class="text-gray-300 text-md hover:text-blue-500">Affiliation</a></span>
                </div>
                <div class="flex flex-col">
                    <span class="font-bold text-gray-600 uppercase mt-4 md:mt-0 mb-2">Footer header 3</span>
                    <span class="my-2"><a href="#" class="text-gray-300  text-md hover:text-blue-500">link 1</a></span>
                    <span class="my-2"><a href="#" class="text-gray-300  text-md hover:text-blue-500">link 1</a></span>
                    <span class="my-2"><a href="#" class="text-gray-300  text-md hover:text-blue-500">link 1</a></span>
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto px-6">
        <div class="mt-16 border-t-2 border-gray-500 flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
                <p class="text-sm text-gray-400 font-bold mb-2">
                    © 2021 by mdsadiq
                </p>
            </div>
        </div>
    </div>
</footer>
  );
}