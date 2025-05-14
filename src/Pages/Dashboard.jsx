import {React , useState , useEffect} from 'react'
import { getDocs , collection, query } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate()

    const getEmails = async () => {
        const q=query(collection(db, "users"));
        const qureySnapshot = await getDocs(q);
        const arr = [];
        qureySnapshot.forEach((doc) => {
            arr.push(doc.data());
        });
           setUser(arr);
           console.log(user)
}
    useEffect(() => {
        

        getEmails()
    }, []);

    const handleSignOut = async()=>{
        await auth.signOut().then((data)=>console.log(data))

        navigate('/login')
    }

  return (
    <div>
        <h1>useremail</h1>
        {user.map((item ,i) => (
            <div key={i}>
                <h1>{item.email}</h1>
                <button onClick={(e)=>handleSignOut(e)} className='bg-red-300 rounded px-3 font-semibold py-2' >Logout</button>
            </div>
        ))}
    </div>
  )
}

export default Dashboard