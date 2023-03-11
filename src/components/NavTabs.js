import React from 'react';
import { NavLink } from 'react-router-dom';


function NavTabs() {
  return (
    <nav>
        <ul className="flex space-x-40">
          <li className="text-xl hover:text-gray-300"><NavLink
          to="/design-portfolio-with-react/"
          end
        >
          Home
        </NavLink></li>
          <li className="text-xl hover:text-gray-300"><NavLink
          to="/design-portfolio-with-react/about"
          end
        //   className={({ isActive }) =>
        //     isActive ? 'nav-link active' : 'nav-link'
        //   }
        >
          About
        </NavLink></li>
          <li className="text-xl hover:text-gray-300"><NavLink
          to="/design-portfolio-with-react/project"
        >
          Project
        </NavLink></li>
          <li className="text-xl hover:text-gray-300"><NavLink
          to="/design-portfolio-with-react/contact"
          end
        >
          Contact
        </NavLink></li>
        </ul>
      </nav>
  );
}

export default NavTabs;
