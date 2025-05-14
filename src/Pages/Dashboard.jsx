import {React , useState , useEffect} from 'react'
import { getDocs , collection, query } from 'firebase/firestore';
import { db } from '../firebase';

const Dashboard = () => {
    const [user, setUser] = useState([]);


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

  return (
    <div>
        <h1>useremail</h1>
        {user.map((item ,index) => (
            <div key={item.index}>
                <h1>{item.email}</h1>
            </div>
        ))}
    </div>
  )
}

export default Dashboard