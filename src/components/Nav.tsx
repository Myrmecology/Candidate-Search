import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="p-4">
      <div className="flex gap-4">
        <Link to="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link to="/SavedCandidates" className="text-white hover:text-gray-300">
          Potential Candidates
        </Link>
      </div>
    </nav>
  );
};

export default Nav;