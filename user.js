
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// إعدادات Firebase الخاصة بك
const firebaseConfig = {
  apiKey: "AIzaSyCLMAil66B9IDXJE4w4IR36Gxu0IEKaJ-o",
  authDomain: "eee1-95ee9.firebaseapp.com",
  projectId: "eee1-95ee9",
  storageBucket: "eee1-95ee9.firebasestorage.app",
  messagingSenderId: "342455666250",
  appId: "1:342455666250:web:f37becaa0589095db088b3",
  measurementId: "G-27YR61WPK8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function registerUser() {
    const name = document.getElementById('studentName').value;
    const email = document.getElementById('studentEmail').value;
    const phone = document.getElementById('studentPhone').value;

    if (name && email && phone) {
        try {
            // حفظ البيانات في مجموعة "users" بالسحابة
            const docRef = await addDoc(collection(db, "users"), {
                name: name,
                email: email,
                phone: phone,
                createdAt: new Date()
            });
            
            // تخزين الـ ID فقط في الجهاز للتعرف على المستخدم لاحقاً
            localStorage.setItem('userId', docRef.id);
            
            alert("✅ تم الحفظ في قاعدة البيانات السحابية!");
            window.location.href = 'index.html'; 
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    } else {
        alert("يرجى إدخال كافة البيانات");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.main-btn');
    if(btn) btn.addEventListener('click', registerUser);
});