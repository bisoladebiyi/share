import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import HeadComponent from '../components/Head';
import PersonalInfo from '../components/PersonalInfo';
import UserPosts from '../components/UserPosts';
import { auth } from '../firebase';

const Profile = () => {
    const [ user, setUser ] = useState(null)
    useEffect(()=> {
      onAuthStateChanged(auth, user => {
          setUser(user.providerData[0])
      })
    }, [])

  return <div className='container'>
     <HeadComponent text="Your Profile - share" />
   <main>
       <PersonalInfo user={user} />
       <UserPosts user={user} />
   </main>
   <style jsx>
        {`
        div {
            height:100%
        }
          main {
            padding-top: 80px;
            height:100%;
            display: flex;
            justify-content: space-between;
          }
          @media(max-width: 800px){
            main{
              flex-direction: column;
              height: 130%;
            }
          }
        `}
      </style>
  </div>;
};

export default Profile;
