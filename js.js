function updateHeader() {
    const data = JSON.parse(localStorage.getItem('studentInfo'));
    const authArea = document.getElementById('auth-area');
    if (data && authArea) {
        authArea.innerHTML = `<span style="color:#4ade80">Hello, ${data.name}</span>`;
    }
}
document.addEventListener('DOMContentLoaded', updateHeader); // استدعاء عند التحميل
// // ==========================================
// // 1. نظام خلفية الماتريكس (Matrix Effect)
// // ==========================================
// const canvas = document.getElementById('matrixCanvas');
// if (canvas) {
//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const characters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const fontSize = 16;
//     const columns = canvas.width / fontSize;
//     const drops = Array(Math.floor(columns)).fill(1);

//     function drawMatrix() {
//         ctx.fillStyle = 'rgba(11, 15, 26, 0.05)';
//         ctx.fillRect(0, 0, canvas.width, canvas.height);
//         ctx.fillStyle = '#4ade80';
//         ctx.font = fontSize + 'px monospace';

//         for (let i = 0; i < drops.length; i++) {
//             const text = characters.charAt(Math.floor(Math.random() * characters.length));
//             ctx.fillText(text, i * fontSize, drops[i] * fontSize);
//             if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
//             drops[i]++;
//         }
//     }
//     setInterval(drawMatrix, 50);
// }

// // ==========================================
// // 2. فحص حالة الدخول وتحديث الهيدر
// // ==========================================
// function checkLoginStatus() {
//     const data = JSON.parse(localStorage.getItem('studentInfo'));
//     const authArea = document.getElementById('auth-area');
//     const welcomeMsg = document.getElementById('welcome-msg');

//     if (data && authArea) {
//         authArea.innerHTML = `
//             <div class="user-nav-box" style="display: flex; align-items: center; gap: 10px;">
//                 <img src="${data.profileImage || 'profile-placeholder.png'}" style="width:35px; height:35px; border-radius:50%; border:1px solid #4ade80; object-fit: cover;">
//                 <span style="color:#4ade80; font-weight:bold;">أهلاً، ${data.name.split(' ')[0]}</span>
//                 <a href="dashboard.html" style="color:#fff; text-decoration:none; font-size:12px; border:1px solid #4ade80; padding:4px 10px; border-radius:15px; background: rgba(74, 222, 128, 0.1);">الداشبورد</a>
//             </div>`;
        
//         if (welcomeMsg) {
//             welcomeMsg.innerHTML = `مرحباً بك في <br> <span class="highlight">Ebda Project</span> <br> 
//             <p style="font-size:20px; color:#4ade80; margin-top:10px;">أهلاً يا ${data.name.split(' ')[0]}، مستعد تكمل تعلم؟</p>`;
//         }
//     }
// }

// // ==========================================
// // 3. نظام رفع الصورة وضغطها (Login)
// // ==========================================
// function previewImage() {
//     const file = document.getElementById('profileImageInput').files[0];
//     const preview = document.getElementById('profileImagePreview');
//     const reader = new FileReader();

//     reader.onloadend = function() {
//         const img = new Image();
//         img.src = reader.result;
//         img.onload = function() {
//             const canvas = document.createElement('canvas');
//             const maxWidth = 150; 
//             const scale = maxWidth / img.width;
//             canvas.width = maxWidth;
//             canvas.height = img.height * scale;
//             const ctx = canvas.getContext('2d');
//             ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//             // حفظ الصورة بجودة 0.6 لتقليل المساحة في localStorage
//             preview.src = canvas.toDataURL('image/jpeg', 0.6);
//         };
//     };
//     if (file) reader.readAsDataURL(file);
// }

// function registerStudent() {
//     const name = document.getElementById('studentName').value;
//     const email = document.getElementById('studentEmail').value;
//     const phone = document.getElementById('studentPhone').value;
//     const profileImg = document.getElementById('profileImagePreview').src;

//     if(!name || !email || !phone || profileImg.includes('placeholder')) {
//         alert("من فضلك أكمل بياناتك وارفع صورتك الشخصية!");
//         return;
//     }

//     const studentObj = {
//         name: name,
//         email: email,
//         phone: phone,
//         profileImage: profileImg,
//         joined: new Date().toLocaleDateString('ar-EG'),
//         progress: 0
//     };

//     localStorage.setItem('studentInfo', JSON.stringify(studentObj));
//     window.location.href = 'dashboard.html';
// }

// // ==========================================
// // 4. نظام الكورسات والامتحانات (Courses)
// // ==========================================
// const quizzes = {
//     'TeFFCYsFAlU': { q: "ما هو اختصار HTML؟", a: "HyperText Markup Language", options: ["HyperText Markup Language", "High Tech Machine Language", "Home Tool Markup Language"] },
//     '910795551': { q: "ما هو البرنامج المستخدم في الكورس لكتابة الكود؟", a: "VS Code", options: ["VS Code", "Notepad", "Photoshop"] },
//     '910796323': { q: "ما هو العنصر المسؤول عن عمل حاوية (Container)؟", a: "div", options: ["div", "span", "p"] }
// };

// function updateProgress() {
//     const completed = JSON.parse(localStorage.getItem('completed')) || [];
//     const totalLessons = 5; 
//     const percentage = Math.round((completed.length / totalLessons) * 100);
    
//     const bar = document.getElementById('progressBar');
//     const text = document.getElementById('videoPercent');
//     if(bar) bar.style.width = percentage + "%";
//     if(text) text.innerText = percentage + "%";
// }

// function showQuizArea(vId, lessonBox) {
//     const quiz = quizzes[vId];
//     if(!quiz) return;

//     const modal = document.getElementById('quizModal');
//     const questionText = document.getElementById('quizQuestion');
//     const optionsArea = document.getElementById('quizOptions');

//     questionText.innerText = quiz.q;
//     optionsArea.innerHTML = "";
//     modal.style.display = "flex";

//     quiz.options.forEach(opt => {
//         const btn = document.createElement('button');
//         btn.innerText = opt;
//         btn.className = "quiz-opt-btn";
//         btn.onclick = () => {
//             if(opt === quiz.a) {
//                 alert("إجابة صحيحة! تم فتح الدرس التالي 🎉");
//                 modal.style.display = "none";
//                 let completed = JSON.parse(localStorage.getItem('completed')) || [];
//                 if(!completed.includes(vId)) {
//                     completed.push(vId);
//                     localStorage.setItem('completed', JSON.stringify(completed));
//                 }
//                 lessonBox.classList.add('done');
//                 updateProgress();
//             } else {
//                 alert("للأسف إجابة خاطئة، حاول مرة أخرى.");
//             }
//         };
//         optionsArea.appendChild(btn);
//     });
// }

// // ==========================================
// // 5. تهيئة الصفحة عند التحميل (DOMContentLoaded)
// // ==========================================
// document.addEventListener('DOMContentLoaded', () => {
//     checkLoginStatus();
//     updateProgress();

//     const lessonBoxes = document.querySelectorAll('.lesson-box');
//     lessonBoxes.forEach((box, index) => {
//         box.addEventListener('click', function() {
//             const vId = this.getAttribute('data-video-id');
//             const completed = JSON.parse(localStorage.getItem('completed')) || [];
            
//             // حماية الدروس: لا يفتح الدرس إلا لو الأول أو اللي قبله خلص
//             const prevBox = lessonBoxes[index - 1];
//             const prevId = prevBox ? prevBox.getAttribute('data-video-id') : null;

//             if (index === 0 || completed.includes(vId) || (prevId && completed.includes(prevId))) {
//                 document.getElementById('videoPlayer').src = `https://www.youtube.com/embed/${vId}?autoplay=1`;
//                 document.getElementById('currentVideoTitle').innerText = this.querySelector('p').innerText;
                
//                 // تنظيف الحالة النشطة
//                 lessonBoxes.forEach(b => b.classList.remove('active'));
//                 this.classList.add('active');

//                 // إظهار زر الامتحان لو الدرس لم يكتمل
//                 if (!completed.includes(vId)) {
//                     // مسح أي زر قديم قبل إضافة الجديد
//                     const existingBtn = this.querySelector('.quiz-trigger-btn');
//                     if(!existingBtn){
//                         const btn = document.createElement('button');
//                         btn.className = 'quiz-trigger-btn';
//                         btn.innerText = 'ابدأ الامتحان 📝';
//                         btn.onclick = (e) => {
//                             e.stopPropagation();
//                             showQuizArea(vId, this);
//                         };
//                         this.appendChild(btn);
//                     }
//                 }
//             } else {
//                 alert("🔒 عذراً! يجب النجاح في اختبار الدرس السابق أولاً.");
//             }
//         });
//     });
// });

// // تسجيل الخروج
// function logoutUser() {
//     localStorage.removeItem('studentInfo');
//     window.location.href = 'index.html';
// }
// document.addEventListener('DOMContentLoaded', () => {
//     const lessonBoxes = document.querySelectorAll('.lesson-box');
//     const player = document.getElementById('videoPlayer');

//     // وظيفة تغيير الفيديو عند الضغط
//     lessonBoxes.forEach((box) => {
//         box.addEventListener('click', function() {
//             const vId = this.getAttribute('data-video-id');
            
//             if (player && vId) {
//                 // تغيير الرابط لصيغة embed الصحيحة
//                 player.src = `https://www.youtube.com/embed/${vId}?autoplay=1&rel=0`;

//                 // تحديث العنوان
//                 const titleText = this.querySelector('p').innerText;
//                 document.getElementById('currentVideoTitle').innerText = titleText;

//                 // تغيير الشكل للدرس النشط
//                 lessonBoxes.forEach(b => b.classList.remove('active'));
//                 this.classList.add('active');
//             }
//         });
//     });
// });

// // دالة تسجيل الخروج
// function logoutUser() {
//     localStorage.removeItem('studentInfo');
//     window.location.href = 'index.html';
// }
// document.addEventListener('DOMContentLoaded', () => {
//     const lessonBoxes = document.querySelectorAll('.lesson-box');
//     const previewContainer = document.getElementById('videoPreviewContainer');
//     const titleElement = document.getElementById('currentVideoTitle');

//     lessonBoxes.forEach((box) => {
//         box.addEventListener('click', function() {
//             // سحب البيانات يدوياً من الـ HTML
//             const vId = this.getAttribute('data-video-id');
//             const lessonTitle = this.querySelector('p').innerText;
//             const customImage = this.getAttribute('data-image'); // سحب مسار الصورة

//             if (vId && customImage) {
//                 // 1. تحديث العنوان
//                 titleElement.innerText = lessonTitle;

//                 // 2. تحديث منطقة العرض بالصورة اليدوية وزر التشغيل
//                 previewContainer.innerHTML = `
//                     <div class="thumbnail-wrapper" onclick="window.open('https://www.youtube.com/watch?v=${vId}', '_blank')">
//                         <img src="${customImage}" alt="${lessonTitle}">
//                         <div class="play-btn-overlay">
//                             <div class="play-icon"></div>
//                         </div>
//                         <span class="play-hint">اضغط للمشاهدة على يوتيوب</span>
//                     </div>
//                 `;

//                 // 3. تمييز الدرس النشط
//                 lessonBoxes.forEach(b => b.classList.remove('active'));
//                 this.classList.add('active');
//             }
//         });
//     });
// });
// // ==========================================
// // 1. نظام تسجيل الدخول وحفظ البيانات
// // ==========================================

// // دالة لمعاينة الصورة وحفظها مؤقتاً
// function previewImage() {
//     const file = document.getElementById('profileImageInput').files[0];
//     const preview = document.getElementById('profileImagePreview');
//     const reader = new FileReader();

//     reader.onloadend = function() {
//         preview.src = reader.result;
//         // حفظ الصورة في الـ localStorage مؤقتاً عند اختيارها
//         localStorage.setItem('tempProfileImg', reader.result);
//     }

//     if (file) {
//         reader.readAsDataURL(file);
//     }
// }

// // دالة حفظ بيانات المستخدم (عند الضغط على زر التسجيل)
// function registerUser() {
//     const name = document.getElementById('studentName').value;
//     const email = document.getElementById('studentEmail').value;
//     const phone = document.getElementById('studentPhone').value;
//     const profileImg = localStorage.getItem('tempProfileImg');

//     if (name && email && phone) {
//         const studentInfo = {
//             name: name,
//             email: email,
//             phone: phone,
//             profileImage: profileImg || 'profile-placeholder.png', // صورة افتراضية لو مرفعش
//             joined: new Date().toLocaleDateString('ar-EG')
//         };

//         // حفظ البيانات نهائياً
//         localStorage.setItem('studentInfo', JSON.stringify(studentInfo));
        
//         alert('تم إنشاء حسابك بنجاح! جاري تحويلك للوحة التحكم...');
        
//         // التحويل لصفحة الداش بورد
//         window.location.href = 'لوحة تحكم.html';
//     } else {
//         alert('من فضلك أكمل جميع البيانات');
//     }
// }

// // ==========================================
// // 2. تحديث لوحة التحكم (الداش بورد) عند الفتح
// // ==========================================
// document.addEventListener('DOMContentLoaded', () => {
//     // التأكد أننا في صفحة لوحة التحكم
//     const dashName = document.getElementById('dashName');
//     if (dashName) {
//         const data = JSON.parse(localStorage.getItem('studentInfo'));
//         const plan = localStorage.getItem('subscribedPlan');

//         if (data) {
//             document.getElementById('dashName').innerText = data.name;
//             document.getElementById('dashEmail').innerText = data.email;
//             document.getElementById('dashPhone').innerText = data.phone;
            
//             // تحديث الصورة في الداش بورد
//             const dashImg = document.getElementById('dashImage');
//             if (dashImg) dashImg.src = data.profileImage;
            
//             // تحديث اسم الباقة
//             const dashPlan = document.getElementById('dashPlan');
//             if (dashPlan) dashPlan.innerText = plan || "لم تشترك في باقة بعد";
//         }
//     }
// });
// // ==========================================
// // 1. نظام تسجيل الدخول وتحديث الهيدر
// // ==========================================
// function checkLoginStatus() {
//     const data = JSON.parse(localStorage.getItem('studentInfo'));
//     const authArea = document.getElementById('auth-area'); // تأكد أن هذا الـ ID موجود في الهيدر

//     if (data && authArea) {
//         // إزالة زر اللوجين ووضع رسالة الترحيب
//         authArea.innerHTML = `
//             <div class="user-nav-box" style="display: flex; align-items: center; gap: 10px; background: rgba(74, 222, 128, 0.1); padding: 5px 15px; border-radius: 20px; border: 1px solid #4ade80;">
//                 <img src="${data.profileImage || 'profile-placeholder.png'}" style="width:30px; height:30px; border-radius:50%; object-fit: cover;">
//                 <span style="color:#4ade80; font-weight:bold; font-size:14px;">هالو، ${data.name.split(' ')[0]}</span>
//                 <a href="dashboard.html" style="color:#fff; text-decoration:none; font-size:12px; background:#4ade80; color:#000; padding:2px 8px; border-radius:10px; font-weight:bold;">لوحة التحكم</a>
//             </div>`;
//     }
// }

// // ==========================================
// // 2. نظام الاشتراك في الكورسات
// // ==========================================
// function subscribeToHTML() {
//     // حفظ نوع الباقة في الـ localStorage
//     localStorage.setItem('subscribedPlan', 'دورة HTML الاحترافية');
//     // التحويل لصفحة الكورس
//     window.location.href = 'لوحة التحكم.html';
// }

// // ==========================================
// // 3. تحديث لوحة التحكم بالبيانات والباقت
// // ==========================================
// function updateDashboard() {
//     const data = JSON.parse(localStorage.getItem('studentInfo'));
//     const plan = localStorage.getItem('subscribedPlan');

//     if (data) {
//         if(document.getElementById('dashName')) document.getElementById('dashName').innerText = data.name;
//         if(document.getElementById('dashEmail')) document.getElementById('dashEmail').innerText = data.email;
//         if(document.getElementById('dashPhone')) document.getElementById('dashPhone').innerText = data.phone;
//         if(document.getElementById('dashImage')) document.getElementById('dashImage').src = data.profileImage;
//     }

//     if (plan && document.getElementById('dashPlan')) {
//         const planElement = document.getElementById('dashPlan');
//         planElement.innerText = plan;
//         planElement.style.color = "#4ade80";
//         planElement.style.background = "rgba(74, 222, 128, 0.1)";
//         planElement.style.padding = "2px 10px";
//         planElement.style.borderRadius = "5px";
//     }
// }

// // تشغيل الوظائف عند تحميل الصفحة
// document.addEventListener('DOMContentLoaded', () => {
//     checkLoginStatus();
//     updateDashboard();
// });
// function checkLoginStatus() {
//     const data = JSON.parse(localStorage.getItem('studentInfo'));
//     const authArea = document.getElementById('auth-area');

//     if (data && authArea) {
//         // إذا كان المستخدم مسجلاً، نعرض اسمه وزر لوحة التحكم
//         authArea.innerHTML = `
//             <div class="user-nav-box" style="display: flex; align-items: center; gap: 10px;">
//                 <img src="${data.profileImage}" style="width:35px; height:35px; border-radius:50%; border:1px solid #4ade80; object-fit: cover;">
//                 <span style="color:#4ade80; font-weight:bold;">Hello ${data.name.split(' ')[0]}</span>
//                 <a href="لوحة تحكم.html" class="dash-link-btn">لوحة التحكم</a>
//             </div>`;
//     }
// }

// function logout() {
//     localStorage.removeItem('studentInfo');
//     localStorage.removeItem('subscribedPlan');
//     window.location.href = 'index.html'; // العودة للرئيسية
// }
// // 1. دالة تسجيل الحساب مع الاحتفال
// function registerUser() {
//     const name = document.getElementById('studentName').value;
//     const email = document.getElementById('studentEmail').value;
//     const phone = document.getElementById('studentPhone').value;
//     const profileImg = localStorage.getItem('tempProfileImg');

//     if (name && email && phone) {
//         const studentInfo = {
//             name: name,
//             email: email,
//             phone: phone,
//             profileImage: profileImg || 'profile-placeholder.png',
//             isSubscribed: false // الوضع الافتراضي غير مشترك
//         };

//         localStorage.setItem('studentInfo', JSON.stringify(studentInfo));
        
//         // تأثير الزينة والرسالة
//         confetti({
//             particleCount: 150,
//             spread: 70,
//             origin: { y: 0.6 }
//         });

//         alert('مبروك يا بطل! تم إنشاء حسابك بنجاح.');
        
//         // التحويل لصفحة اختيار الباقات
//         setTimeout(() => {
//             window.location.href = 'Courses hub.html';
//         }, 1500);
//     } else {
//         alert('من فضلك أكمل البيانات');
//     }
// }

// // 2. دالة الاشتراك في HTML
// function subscribeToHTML() {
//     const data = JSON.parse(localStorage.getItem('studentInfo'));
//     if (data) {
//         data.isSubscribed = true; // تفعيل الحساب
//         localStorage.setItem('studentInfo', JSON.stringify(data));
//         localStorage.setItem('subscribedPlan', 'دورة HTML الاحترافية');
        
//         alert('تم تفعيل الكورس بنجاح!');
//         window.location.href = 'cors.html';
//     }
// }

// // 3. حماية صفحة الكورس (توضع في بداية ملف js.js أو في صفحة cors.html)
// function checkAccess() {
//     const data = JSON.parse(localStorage.getItem('studentInfo'));
//     // إذا حاول الدخول لصفحة الكورس وهو غير مشترك أو لم يسجل
//     if (!data || data.isSubscribed !== true) {
//         alert('يجب تفعيل حسابك والاشتراك في الكورس أولاً!');
//         window.location.href = 'Courses hub.html';
//     }
// }

// // 4. حذف الحساب (تسجيل الخروج)
// function deleteAccount() {
//     if(confirm('هل أنت متأكد من حذف حسابك نهائياً؟')) {
//         localStorage.clear();
//         window.location.href = 'index.html';
//     }
// }
// document.addEventListener('DOMContentLoaded', () => {
//     const data = JSON.parse(localStorage.getItem('studentInfo'));
//     const authArea = document.getElementById('auth-area');
    
//     if (data && authArea) {
//         authArea.innerHTML = `
//             <div style="display:flex; align-items:center; gap:10px;">
//                 <span style="color:#4ade80; font-weight:bold;">Hello, ${data.name}</span>
//                 <button onclick="deleteAccount()" class="logout-btn">حذف الحساب</button>
//             </div>
//         `;
//     }
// });


// ==========================================
// 1. نظام الحماية ومنع الدخول بدون حساب
// ==========================================
function checkAuth() {
    const user = JSON.parse(localStorage.getItem('studentInfo'));
    const currentPage = window.location.pathname;

    // القائمة الصفحات التي تتطلب تسجيل حساب
    const protectedPages = ['cors.html', 'Courses hub.html', 'لوحة تحكم.html'];
    
    const isProtected = protectedPages.some(page => currentPage.includes(page));

    if (isProtected && !user) {
        alert("عذراً يا بطل! لازم تسجل حساب الأول عشان تقدر تشوف المحتوى ده.");
        window.location.href = 'login.html';
    }
}

// ==========================================
// 2. تحديث الهيدر (إظهار زر لوحة التحكم والاسم)
// ==========================================
function updateHeader() {
    const user = JSON.parse(localStorage.getItem('studentInfo'));
    const authArea = document.getElementById('auth-area');
    
    if (user && authArea) {
        authArea.innerHTML = `
            <div class="user-nav">
                <img src="${user.profileImage}" class="nav-avatar">
                <span>هالو، ${user.name.split(' ')[0]}</span>
                <a href="لوحة تحكم.html" class="dash-btn-nav">لوحة التحكم</a>
                <button onclick="logoutProcess()" class="logout-minimal">خروج</button>
            </div>
        `;
    }
}

// ==========================================
// 3. عملية الخروج مع اللودنج (Loading)
// ==========================================
function logoutProcess() {
    // إنشاء عنصر اللودنج برمجياً
    const loader = document.createElement('div');
    loader.className = 'global-loader';
    loader.innerHTML = '<div class="spinner"></div><p>جاري تسجيل الخروج...</p>';
    document.body.appendChild(loader);

    setTimeout(() => {
        localStorage.clear();
        window.location.href = 'index.html';
    }, 1500); // لودنج لمدة ثانية ونصف
}

// ==========================================
// 4. نظام تفاصيل الباقة (Modal) في الداشبورد
// ==========================================
function showPlanDetails() {
    const plan = localStorage.getItem('subscribedPlan');
    const date = localStorage.getItem('subscribeDate') || "غير محدد";
    
    if(!plan) {
        alert("أنت غير مشترك في أي باقة حالياً.");
        return;
    }

    const modal = document.createElement('div');
    modal.className = 'plan-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>تفاصيل الاشتراك 🚀</h3>
            <p><strong>الباقة:</strong> ${plan}</p>
            <p><strong>تاريخ الاشتراك:</strong> ${date}</p>
            <p><strong>حالة الدفع:</strong> <span style="color:#4ade80">نشط ✅</span></p>
            <button onclick="this.parentElement.parentElement.remove()" class="main-btn">إغلاق</button>
        </div>
    `;
    document.body.appendChild(modal);
}

// ==========================================
// 5. تسجيل الحساب والاحتفال
// ==========================================
function registerUser() {
    const name = document.getElementById('studentName').value;
    const email = document.getElementById('studentEmail').value;
    const phone = document.getElementById('studentPhone').value;
    const profileImg = localStorage.getItem('tempProfileImg') || 'profile-placeholder.png';

    if (name && email && phone) {
        const studentInfo = { name, email, phone, profileImage: profileImg };
        localStorage.setItem('studentInfo', JSON.stringify(studentInfo));
        
        // حفظ تاريخ اليوم للاشتراك لاحقاً
        const now = new Date();
        localStorage.setItem('subscribeDate', now.toLocaleDateString('ar-EG'));

        if (typeof confetti === 'function') {
            confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
        }

        alert('مبروك يا بطل! تم إنشاء حسابك.');
        setTimeout(() => { window.location.href = 'cors.html'; }, 1000);
    } else {
        alert('من فضلك املأ بياناتك');
    }
}

// تشغيل الوظائف عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    updateHeader();
});

// 1. معالجة وحفظ الصورة
function previewImage() {
    const file = document.getElementById('profileImageInput').files[0];
    const preview = document.getElementById('profileImagePreview');
    const reader = new FileReader();

    reader.onloadend = function() {
        preview.src = reader.result;
        // حفظ الصورة في الـ LocalStorage فوراً
        localStorage.setItem('tempProfileImg', reader.result);
    }
    if (file) reader.readAsDataURL(file);
}

// 2. إنشاء الحساب مع الصورة
function registerUser() {
    const name = document.getElementById('studentName').value;
    const email = document.getElementById('studentEmail').value;
    const phone = document.getElementById('studentPhone').value;
    const img = localStorage.getItem('tempProfileImg') || 'profile-placeholder.png';

    if (name && email && phone) {
        const studentInfo = { name, email, phone, profileImage: img, isSubscribed: false };
        localStorage.setItem('studentInfo', JSON.stringify(studentInfo));
        
        if (typeof confetti === 'function') confetti({ particleCount: 150, spread: 70 });

        alert('مبروك يا بطل!');
        setTimeout(() => { window.location.href = 'cors.html'; }, 1000);
    } else {
        alert('أكمل بياناتك يا بطل!');
    }
}

// 3. زر الاشتراك وتفعيل الباقة
function subscribeCourse(courseName) {
    let data = JSON.parse(localStorage.getItem('studentInfo'));
    if (!data) {
        alert('سجل حسابك الأول!');
        window.location.href = 'login.html';
        return;
    }
    data.isSubscribed = true;
    localStorage.setItem('studentInfo', JSON.stringify(data));
    localStorage.setItem('subscribedPlan', courseName);
    localStorage.setItem('subscribeDate', new Date().toLocaleDateString('ar-EG'));

    alert(`تم تفعيل ${courseName} بنجاح!`);
    window.location.href = 'لوحة تحكم.html';
}
document.addEventListener('DOMContentLoaded', () => {
    const data = JSON.parse(localStorage.getItem('studentInfo'));
    const plan = localStorage.getItem('subscribedPlan');

    if (data) {
        document.getElementById('dashName').innerText = data.name;
        document.getElementById('dashImage').src = data.profileImage;
        document.getElementById('dashPlan').innerText = plan || "لم تشترك بعد";
    }
});
function updateHeader() {
    const data = JSON.parse(localStorage.getItem('studentInfo'));
    const authArea = document.getElementById('auth-area');

    if (data && authArea) {
        // الاسم كامل + هلو بالإنجليزية + تنسيق الزرار الأحمر
        authArea.innerHTML = `
            <div class="user-nav-wrapper">
                <img src="${data.profileImage}" class="nav-avatar">
                <span class="user-greeting">Hello, ${data.name}</span>
                <a href="لوحة تحكم.html" class="dash-btn-nav">Dashboard</a>
                <button onclick="deleteAccount()" class="delete-btn">Delete Account</button>
            </div>
        `;
        
        // إخفاء أي زرار خروج قديم كان موجود بره الـ auth-area
        const oldLogoutBtn = document.querySelector('.logout-btn');
        if (oldLogoutBtn) oldLogoutBtn.style.display = 'none';
    }
}

// دالة حذف الحساب النهائية
function deleteAccount() {
    if (confirm('Are you sure you want to delete your account permanently?')) {
        localStorage.clear();
        window.location.href = 'index.html';
    }
}
// 1. دالة اللودينج الاحترافية
function showLoading(message, callback) {
    const loader = document.createElement('div');
    loader.className = 'global-loader';
    loader.innerHTML = `
        <div class="spinner"></div>
        <p style="margin-top:15px; color:#4ade80; font-weight:bold;">${message}</p>
    `;
    document.body.appendChild(loader);

    setTimeout(() => {
        loader.remove();
        if (callback) callback();
    }, 1500); // مدة اللودينج ثانية ونصف
}

// 2. تحديث الهيدر (تنظيف الزحمة وتكبير الاسم)
function updateHeader() {
    const data = JSON.parse(localStorage.getItem('studentInfo'));
    const authArea = document.getElementById('auth-area');
    
    // إخفاء زر تسجيل الخروج القديم لو موجود
    const oldBtn = document.querySelector('.logout-btn');
    if (oldBtn) oldBtn.style.display = 'none';

    if (data && authArea) {
        authArea.innerHTML = `
            <div class="user-nav-wrapper">
                <img src="${data.profileImage}" class="nav-avatar">
                <span class="user-greeting">Hello, ${data.name}</span>
                <a href="لوحة تحكم.html" class="dash-btn-nav">Dashboard</a>
                <button onclick="confirmDelete()" class="delete-btn">Delete Account</button>
            </div>
        `;
    }
}

// 3. حذف الحساب مع لودينج
function confirmDelete() {
    if (confirm('هل أنت متأكد من حذف الحساب نهائياً؟')) {
        showLoading('جاري حذف البيانات...', () => {
            localStorage.clear();
            window.location.href = 'index.html';
        });
    }
}

// 4. تشغيل أزرار الدروس (نظام الـ Video Player)
function initVideoPlayer() {
    const lessonBoxes = document.querySelectorAll('.lesson-box');
    const titleElement = document.getElementById('currentVideoTitle');
    const previewContainer = document.getElementById('videoPreviewContainer');

    if (!lessonBoxes.length || !previewContainer) return;

    lessonBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const vId = this.getAttribute('data-video-id');
            const lessonTitle = this.querySelector('p').innerText;
            const customImg = this.getAttribute('data-image');

            // تحديث الفيديو والعنوان
            titleElement.innerText = lessonTitle;
            previewContainer.innerHTML = `
                <div class="thumbnail-wrapper" onclick="window.open('https://www.youtube.com/watch?v=${vId}', '_blank')">
                    <img src="${customImg}" alt="${lessonTitle}">
                    <div class="play-btn-overlay"><div class="play-icon"></div></div>
                    <span class="play-hint">اضغط للمشاهدة الآن</span>
                </div>
            `;

            // تمييز الزر النشط
            lessonBoxes.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// تشغيل كل شيء عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    updateHeader();
    initVideoPlayer();

});
// وظيفة القائمة الجانبية للموبايل
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-list');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // تحويل التلات شرط لعلامة X (اختياري لشكل أشيك)
            menuBtn.classList.toggle('is-active');
        });
    }
}

// تشغيلها عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    // ... باقي الكود بتاعك ...
});
