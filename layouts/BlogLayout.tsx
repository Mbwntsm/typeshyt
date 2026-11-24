
import { Link, Outlet, useLocation } from "react-router-dom";

function BlogLayout() {
  const location = useLocation();

  const getProfileColor = () => {
    switch (location.pathname.toLowerCase()) {
      case "/amaan":
        return "bg-black";
      case "/rishabh":
        return "bg-black";
      case "/sulabh":
        return "bg-black";
      default:
        return "bg-black";
    }
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col bg-[#dafb2b] text-gray-900">

      {/* Main Website Container */}
      <div
        className={`mx-auto w-full max-w-6xl h-full overflow-hidden px-5 sm:px-8 flex flex-col ${getProfileColor()}`}
      >

        {/* Header */}
        <header className="w-full px-4 sm:px-6 py-5 shrink-0">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 pt-6">

            {/* Logo */}
            <Link
              to="/"
              className="text-xl sm:text-2xl font-bold tracking-tight text-white/50 whitespace-nowrap"
            >
              &lt; TYPESHYT &gt;
            </Link>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3 text-xs sm:text-sm font-medium text-white/50">
              <Link
                to="/"
                className="transition hover:text-blue-400"
              >
                HOME
              </Link>
            </nav>

          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 min-h-0 overflow-y-auto py-10 sm:py-14 pt-0 scrollbar-hide">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="shrink-0 border-t border-gray-200 py-6 text-center text-sm text-gray-500">
          &lt; TYPESHYT &gt; © 2026
        </footer>

      </div>
    </div>
  );
}

export default BlogLayout;
