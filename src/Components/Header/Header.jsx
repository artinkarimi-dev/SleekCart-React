import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [active, setActive] = useState("shop");
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // List of menu links
  const menuItems = [
    { id: "home", label: "خانه" },
    { id: "shop", label: "فروشگاه" },
    { id: "categories", label: "دسته‌بندی‌ها" },
    { id: "offers", label: "تخفیف‌ها" },
    { id: "cart", label: "سبد خرید" },
    { id: "account", label: "حساب کاربری" },
  ];

  // Check screen size to decide if it is mobile or desktop
  useEffect(() => {
    const checkSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setOpen(false); // Close mobile menu if screen becomes large
    };

    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // Handle menu item click and close the menu
  const handleClick = (id) => {
    setActive(id);
    setOpen(false);
  };

  return (
    <header dir="rtl" className="sticky top-0 z-[9999] bg-[#0b1220] text-white">
      {/* ===== Top Bar ===== */}
      <div className="flex items-center justify-between px-6 py-5">
        {/* Toggle button for mobile only */}
        {isMobile && (
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-blue-300 hover:text-white transition"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        )}

        {/* Navigation for desktop users */}
        {!isMobile && (
          <nav className="flex items-center gap-8 lg:gap-12 mx-auto">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className="relative text-base font-semibold text-blue-300 hover:text-white transition-all"
              >
                {item.label}
                {/* Visual indicator for the active link */}
                {active === item.id && (
                  <span className="absolute -bottom-2 right-0 w-full h-[2px] bg-blue-400 rounded-full"></span>
                )}
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* ===== Mobile Dropdown Menu ===== */}
      {isMobile && (
        <div
          className={`
            absolute top-full right-0 w-full
            bg-[#0f172a]
            shadow-[0_20px_50px_rgba(0,0,0,0.6)]
            transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]
            ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-6 pointer-events-none"
            }
          `}
        >
          <nav className="flex flex-col py-3 px-5 gap-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`
                  px-8 py-5 text-right text-lg
                  transition-all duration-300
                  ${
                    active === item.id
                      ? "bg-blue-900 text-white"
                      : "text-blue-300 hover:bg-blue-950 hover:text-white"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
