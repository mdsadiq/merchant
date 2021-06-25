import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-black">
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
            <div className="cursor-pointer"> 
              <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
            </div>
          </div>
        </div>
      </div>

    </nav>
  );
}