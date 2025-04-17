import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa'; // You can switch to another icon if needed

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname
    .split('/')
    .filter((x) => x)
    .map((path) => path.toLowerCase());

  const generateLabel = (str) =>
    str
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <nav aria-label="Breadcrumb" className="p-4 px-6 text-sm text-gray-600">
      <ol className="flex items-center gap-2 flex-wrap">
        <li>
          <Link to="/" className="hover:underline font-medium text-blue-600">
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const to = '/' + pathnames.slice(0, index + 1).join('/');
          return (
            <li key={to} className="flex items-center gap-2">
              <ChevronRight size={16} />
              {index !== pathnames.length - 1 ? (
                <Link to={to} className="hover:underline text-blue-600">
                  {generateLabel(name)}
                </Link>
              ) : (
                <span className="text-gray-800 font-semibold">
                  {generateLabel(name)}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

