import { db } from "./firebase";
import { doc, setDoc, getDoc, updateDoc, arrayUnion, addDoc, collection, getDocs, query, where, collectionGroup } from "firebase/firestore";
import { auth } from "./firebase";
import { storage } from "./firebase";

export async function addNewUser(email,username){

    try{

        await setDoc(doc(db,"users",auth.currentUser.uid),{
            user:username,
            email:email,
            userid:auth.currentUser.uid,
            admin:false
        })
    }
    catch(e){
        console.error(e)
    }

}



export async function getUserDetails(){
    const docRef = doc(db,"users",auth.currentUser.uid);

    try{
        const docSnap = await  getDoc(docRef);
        if(docSnap.exists()){
            return docSnap.data();
        }
        else
        {
            console.warn("NO SUCH USER DOCUMENT EXISTS")
        }
    }
    catch(e){
        console.error(e)
    }

    
}

async function addReview(heading,content){
    try{
         await    addDoc(db,"reviews",{
                addedby:auth.currentUser.uid,
                status:"pending",
                heading:heading,
                content:content

            })
    }
    catch(e){
        console.error(e)
    }

}



async function getUserSpecificReviews(){
    const reviewList = []

    try{
        const reviewsRef = collection(db,"reviews");
        const q = query(reviewsRef,where("userid","==",auth.currentUser.uid));
        const docSnap = await getDocs(q);
        docSnap.forEach((doc)=>{
            const data = doc.data();
            reviewList.push(data);

        })

        return reviewList

    }
    catch(e){
        console.error(e)
        return []
    }

}

async function getAllReviews(){

    const allReviews = []

    try{
            const reviewRef = collection(db,"reviews");
            const querySnap = await getDocs(reviewRef);
            querySnap.forEach((doc)=>{
                const data = doc.data();
                allReviews.push(data);
            })

            return allReviews


    }
    catch(e){
        console.error(e)
        return []
    }

}


async function getAllPendingReviews(){
    const allReviews = []

    try{
            const reviewRef = collection(db,"reviews");
            const q = query(reviewRef,where("status","==","pending"))
            const querySnap = await getDocs(q);
            querySnap.forEach((doc)=>{
                const data = doc.data();
                allReviews.push(data);
            })

            return allReviews


    }
    catch(e){
        console.error(e)
        return []
    }


}



async function getAllApprovedReviews(){
    const allReviews = []

    try{
            const reviewRef = collection(db,"reviews");
            const q = query(reviewRef,where("status","==","approved"))
            const querySnap = await getDocs(q);
            querySnap.forEach((doc)=>{
                const data = doc.data();
                allReviews.push(data);
            })

            return allReviews


    }
    catch(e){
        console.error(e)
        return []
    }

}