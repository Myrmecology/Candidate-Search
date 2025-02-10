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
     console.log('Search data:', data);
     if (data?.items?.[0]) {
       const userDetails = await searchGithubUser(data.items[0].login);
       console.log('User details:', userDetails);
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

 if (noMoreCandidates) {
   return <h2 className="text-center text-2xl p-4">No more candidates available</h2>;
 }

 return (
   <div className="container mx-auto p-4">
     {currentCandidate && (
       <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl mx-auto">
         <img 
           src={currentCandidate.avatar_url} 
           alt={currentCandidate.name || 'Profile'} 
           className="w-32 h-32 rounded-full mx-auto object-cover"
         />
         <h2 className="text-2xl font-bold mt-4 text-center">{currentCandidate.name || 'No name provided'}</h2>
         <p className="text-center text-gray-600">@{currentCandidate.login}</p>
         <div className="mt-4 space-y-2">
           <p><strong>Location:</strong> {currentCandidate.location || 'Not specified'}</p>
           <p><strong>Email:</strong> {currentCandidate.email || 'Not provided'}</p>
           <p><strong>Company:</strong> {currentCandidate.company || 'Not specified'}</p>
           <a 
             href={currentCandidate.html_url}
             target="_blank"
             rel="noopener noreferrer"
             className="text-blue-500 hover:underline block"
           >
             GitHub Profile
           </a>
         </div>
         <div className="mt-6 flex justify-center space-x-4">
           <button 
             onClick={handleSaveCandidate}
             className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-colors"
           >
             +
           </button>
           <button 
             onClick={loadNextCandidate}
             className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-colors"
           >
             -
           </button>
         </div>
       </div>
     )}
   </div>
 );
};

export default CandidateSearch;