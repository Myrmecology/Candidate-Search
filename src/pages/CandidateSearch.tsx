import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const [noMoreCandidates, setNoMoreCandidates] = useState(false);

  const loadNextCandidate = async () => {
    try {
      const data = await searchGithub();
      if (data?.items?.[0]) {
        const userDetails = await searchGithubUser(data.items[0].login);
        setCurrentCandidate(userDetails);
      } else {
        setNoMoreCandidates(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSaveCandidate = () => {
    if (currentCandidate) {
      const updatedSaved = [...savedCandidates, currentCandidate];
      setSavedCandidates(updatedSaved);
      localStorage.setItem('savedCandidates', JSON.stringify(updatedSaved));
      loadNextCandidate();
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('savedCandidates');
    if (saved) {
      setSavedCandidates(JSON.parse(saved));
    }
    loadNextCandidate();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center text-white mb-8">Candidate Search</h1>
      {currentCandidate && (
        <div className="max-w-md mx-auto bg-black bg-opacity-70 rounded-lg p-6">
          <img 
            src={currentCandidate.avatar_url} 
            alt={currentCandidate.name || 'Profile'} 
            className="w-48 h-48 object-cover rounded-lg mx-auto mb-4"
          />
          <div className="text-center mb-4">
            <h2 className="text-xl text-white">
              {currentCandidate.name}
              <div className="text-gray-400">({currentCandidate.login})</div>
            </h2>
          </div>
          <div className="space-y-2 text-white">
            <p><strong>Location:</strong> {currentCandidate.location || 'Not specified'}</p>
            <p><strong>Email:</strong> {currentCandidate.email || 'Not provided'}</p>
            <p><strong>Company:</strong> {currentCandidate.company || 'Not specified'}</p>
            <p><strong>Bio:</strong> {currentCandidate.bio || 'Not provided'}</p>
            <a 
              href={currentCandidate.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline block text-center mt-4"
            >
              GitHub Profile
            </a>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={loadNextCandidate}
              className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl"
            >
              -
            </button>
            <button 
              onClick={handleSaveCandidate}
              className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl"
            >
              +
            </button>
          </div>
        </div>
      )}
      {noMoreCandidates && (
        <div className="text-center text-white text-xl">
          No more candidates available
        </div>
      )}
    </div>
  );
};

export default CandidateSearch;