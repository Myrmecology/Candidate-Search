import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('savedCandidates');
    if (saved) {
      setSavedCandidates(JSON.parse(saved));
    }
  }, []);

  const handleReject = (candidateId: number) => {
    const updatedCandidates = savedCandidates.filter(
      candidate => candidate.id !== candidateId
    );
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  if (savedCandidates.length === 0) {
    return <h2 className="text-center text-2xl text-white">No candidates have been accepted</h2>;
  }

  return (
    <div>
      <h1 className="text-4xl text-center text-white mb-8">Potential Candidates</h1>
      <div className="mx-4">
        <table className="w-full bg-black bg-opacity-70 rounded-lg overflow-hidden">
          <thead>
            <tr className="text-left">
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">Location</th>
              <th className="p-4">Email</th>
              <th className="p-4">Company</th>
              <th className="p-4">Bio</th>
              <th className="p-4">Reject</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate) => (
              <tr key={candidate.id} className="border-t border-gray-800">
                <td className="p-4">
                  <img 
                    src={candidate.avatar_url} 
                    alt={candidate.name || 'Profile'} 
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </td>
                <td className="p-4">
                  {candidate.name}
                  <div className="text-gray-400">({candidate.login})</div>
                </td>
                <td className="p-4">{candidate.location || 'Not specified'}</td>
                <td className="p-4">
                  <a href={`mailto:${candidate.email}`} className="text-blue-400 hover:underline">
                    {candidate.email || 'Not provided'}
                  </a>
                </td>
                <td className="p-4">{candidate.company || 'Not specified'}</td>
                <td className="p-4">{candidate.bio || 'Not provided'}</td>
                <td className="p-4">
                  <button
                    onClick={() => handleReject(candidate.id)}
                    className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-700"
                  >
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SavedCandidates;