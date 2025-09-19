import { Link } from "react-router";
import { Button } from "./ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="bg-white px-4 lg:px-30 relative z-50 mt-3">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center gap-2">
            <button
              className="md:hidden p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="text-[#FE724C]" size={25} />
              ) : (
                <Menu className="text-[#FE724C]" size={25} />
              )}
            </button>

            <Link className="text-2xl font-bold" to="/">
              Foodify
            </Link>
          </div>
          <div className="flex items-center gap-4 lg:gap-7 ">
            <div className="items-center gap-7 lg:flex ">
              <nav className="hidden md:flex space-x-8">
                {[
                  {
                    path: "/about",
                    label: "About",
                  },
                  {
                    path: "/foods",
                    label: "Foods",
                  },
                  {
                    path: "/pricing",
                    label: "Pricing",
                  },
                ].map((item) => {
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="font-medium hover:text-gray-600"
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
            <Button variant="outline" className=" text-[#FE724C]">
              <Link to="/sign-in">Sign in</Link>
            </Button>
            <Link to="/cart">
              <div className="relative bg-[#FE724C] rounded-2xl p-2 ">
                <div className="absolute -top-2 -right-2 bg-[#414141] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  1
                </div>
                <ShoppingBag className="text-white size-5" />
              </div>
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <div className="space-y-2">
                {[
                  { path: "/about", label: "About" },
                  { path: "/foods", label: "Foods" },
                  { path: "/pricing", label: "Pricing" },
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-3 py-3 text-base font-medium hover:bg-gray-100 rounded-md transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navigation;
