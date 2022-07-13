import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import './Home.css';
import { firebaseAuth, db, logout } from '../models/firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { currentUserState } from '../models/users';

const Home = () => {
  const [user, loading, error] = useAuthState(firebaseAuth);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const setCurrentUser = useSetRecoilState(currentUserState);

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'Users'), where('uid', '==', user.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      setCurrentUser({
        id: data.uid,
        name: data.name,
        email: data.email,
      });
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
          <Link to="/order">
            <button className="home__btn" onClick={logout}>
              Order
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return <React.Fragment></React.Fragment>;
};
export default Home;
