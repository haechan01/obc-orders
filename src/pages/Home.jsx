import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { firebaseAuth, db, logout } from '../models/firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';

const Home = () => {
  const [user, loading, error] = useAuthState(firebaseAuth);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'Users'), where('uid', '==', user.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/');
    fetchUserName();
  }, [user, loading, logout]);

  if (user) {
    return (
      <div className="home">
        <div className="home__container">
          Logged in as
          <div>{name}</div>
          <div>{user.email}</div>
          <button className="home__btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    );
  }
  return <React.Fragment></React.Fragment>;
};
export default Home;
