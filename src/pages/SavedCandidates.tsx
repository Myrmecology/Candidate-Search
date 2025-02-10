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

 if (savedCandidates.length === 0) {
   return <h2>No candidates have been accepted yet</h2>;
 }

 return (
   <div className="container mx-auto p-4">
     <h1 className="text-2xl font-bold mb-4">Potential Candidates</h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {savedCandidates.map((candidate) => (
         <div key={candidate.id} className="bg-white shadow-lg rounded-lg p-6">
           <img 
             src={candidate.avatar_url}
             alt={candidate.name}
             className="w-32 h-32 rounded-full mx-auto"
           />
           <h2 className="text-xl font-bold mt-4">{candidate.name}</h2>
           <p>@{candidate.username}</p>
           <p>Location: {candidate.location}</p>
           <p>Email: {candidate.email}</p>
           <p>Company: {candidate.company}</p>
           <a 
             href={candidate.html_url}
             target="_blank"
             rel="noopener noreferrer"
             className="text-blue-500 hover:underline"
           >
             GitHub Profile
           </a>
         </div>
       ))}
     </div>
   </div>
 );
};

export default SavedCandidates;