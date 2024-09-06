import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Vote = () => {
    const [candidates, setCandidates] = useState([]);
    const [voted, setVoted] = useState(false);
    const navigate = useNavigate();

    // Fetch all candidates when the component loads
    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await axios.get('http://localhost:3000/candidate', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setCandidates(response.data);
            } catch (err) {
                console.error('Error fetching candidates:', err);
            }
        };

        fetchCandidates();
    }, []);

    // Handle the voting process
    const handleVote = async (candidateId) => {
        try {
            const response = await axios.post(
                `http://localhost:3000/candidate/votes/${candidateId}`,
                {}, // no request body needed
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );

            if (response.status === 200) {
                alert('Vote recorded successfully');
                setVoted(true);
            }
        } catch (err) {
            console.error('Error casting vote:', err);
            alert(err.response.data.message || 'An error occurred while voting');
        }
    };

    if (voted) {
        return <h2>You have successfully voted!</h2>;
    }

    return (
        <div>
            <h2>Vote for a Candidate</h2>
            {candidates.length === 0 ? (
                <p>Loading candidates...</p>
            ) : (
                <ul>
                    {candidates.map((candidate) => (
                        <li key={candidate._id}>
                            <h3>{candidate.name}</h3>
                            <p>Party: {candidate.party}</p>
                            <button onClick={() => handleVote(candidate._id)}>Vote</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Vote;
