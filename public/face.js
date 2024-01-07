const p1 = document.getElementById("p1");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const button1 = document.getElementById("itnb");
const forg = document.getElementById("p2");
const button2 = document.getElementById("inptB");
const creer = document.getElementById("ap");
const fora = document.getElementById("sp");
const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const a4 = document.getElementById("a4");
const a5 = document.getElementById("a5");
const a6 = document.getElementById("a6");
const a7 = document.getElementById("a7");
const a8 = document.getElementById("a8");
const a9 = document.getElementById("a9");
const a10 = document.getElementById("a10");
const a11 = document.getElementById("a11");
const a12 = document.getElementById("a12");
const a13 = document.getElementById("a13");
const a14 = document.getElementById("a14");
const a15 = document.getElementById("a15");
const a16 = document.getElementById("a16");
const a17 = document.getElementById("a17");
const a18 = document.getElementById("a18");
const a19 = document.getElementById("a19");
const a20 = document.getElementById("a20");
const a21 = document.getElementById("a21");
const nameP=document.getElementById("name");
const surname=document.getElementById("surname");
const mobile=document.getElementById("mobile");
const password=document.getElementById("password");
const datebirth=document.getElementById("datebirth");
const expli1=document.getElementById("expli1");
const expli2=document.getElementById("expli2");
const gender=document.getElementById("gender");
const M=document.getElementById("M");
const F=document.getElementById("F");
const people=document.getElementById("people");
const more=document.getElementById("more");
const terms=document.getElementById("terms");
const PP=document.getElementById("PP");
const cookies=document.getElementById("cookies");
const sign=document.getElementById("sign");




const contenuLangue = {
    francais: {
        p1: "Avec Facebook, partagez et restez en contact avec votre entourage.",
        emailPlaceholder: "Adresse e-mail ou numéro de téléphone",
        passPlaceholder: "Mot de passe",
        button1Value: "Se connecter",
        forgText: "Mot de passe oublié ?",
        button2Value: "Créer nouveau compte",
        creer: "Créer une Page ",
        fora: "pour une célébrité, une marque ou une entreprise.",
        a1: "S’inscrire",
        a2: "Se connecter",
        a3: "Vidéo",
        a4: "Lieux",
        a5: "Jeux",
        a6: "Collectes de dons",
        a7: "Services",
        a8: "Centre d’information sur les élections",
        a9: "Politique de confidentialité",
        a10: "Centre de confidentialité",
        a11: "Groupes",
        a12: "À propos",
        a13: "Créer une publicité",
        a14: "Créer une Page",
        a15: "Développeurs",
        a16: "Emplois",
        a17: "Cookies",
        a18: "Choisir sa publicité",
        a19: "Conditions générales",
        a20: "Aide",
        a21: "Importation des contacts et non-utilisateurs",
        namePPlaceholder: "Prénom",
        surnamePlaceholder: "Nom de famille",
        mobilePlaceholder: "Numéro mobile ou e-mail",
        passwordPlaceholder: "Nouveau mot de passe",
        datebirth: "Date de naissance",
        
        
    },
    anglais: {
        p1: "Facebook helps you connect and share with the people in your life.",
        emailPlaceholder: "Email address or phone number",
        passPlaceholder: "Password",
        button1Value: "Log in",
        forgText: "Forgotten password?",
        button2Value: "Create new account",
        creer: "Create a Page ",
        fora: "for a celebrity, brand or business.",
        a1: "Sign Up",
        a2: "Log in",
        a3: "Video",
        a4: "Places",
        a5: "Games",
        a6: "Fundraisers",
        a7: "Services",
        a8: "Voting Information Centre",
        a9: "Privacy Policy",
        a10: "Privacy Centre",
        a11: "Groups",
        a12: "About",
        a13: "Create ad",
        a14: "Create Page",
        a15: "Developers",
        a16: "Careers",
        a17: "Cookies",
        a18: "AdChoices",
        a19: "Terms",
        a20: "Help",
        a21: "Contact uploading and non-users",
        namePPlaceholder: "First name",
        surnamePlaceholder: "Surname",
        mobilePlaceholder: "Mobile number or email address",
        passwordPlaceholder: "New password",
        datebirth: "Date of birth",
    },
    amazigh: {
        p1: "ⵙ ⴼⵉⵙⴱⵓⴽ, ⵜⵣⵎⵔⵎ ⴰⴷ ⵜⵣⴷⵉⵎ ⴰⴽⴷ ⵎⴷⴷⵏ ⵍⵍⴰⵏⵉⵏ ⴷⴳ ⵜⵓⴷⵔⵜ ⵏⵏⵓⵏ ⵜⴱⴹⵓⵎ ⴰⴽⵉⴷⵙⵏ ⵜⵉⵖⴰⵡⵙⵉⵡⵉⵏ.",
        emailPlaceholder: "ⵉⵎⴰⵢⵍ ⵏⵉⵖ ⵓⵟⵟⵓⵏ ⵏ ⵜⵜⵉⵍⵉⴼⵓⵏ",
        passPlaceholder: "ⵜⴰⴳⵓⵔⵉ ⵏ ⵓⵣⵔⴰⵢ",
        button1Value: "ⴽⵛⵎ",
        forgText: "ⵜⴻⵜⵜⵓⴷ ⵜⴰⴳⵓⵔⵉ ⵏ ⵓⵣⵔⴰⵢ?",
        button2Value: "ⵙⴽⵔ ⴰⵎⵉⴹⴰⵏ ⴰⵎⴰⵢⵏⵓ",
        creer: "ⵙⵏⴼⵍⵓⵍ ⴽⵔⴰ ⵏ ⵜⴰⵙⵏⴰ ",
        fora: "for a celebrity, brand or business.",
        a1: "ⵣⵎⵎⴻⵎ",
        a2: "ⴽⵛⵎ",
        a3: "ⴰⴼⵉⴷⵢⵓ",
        a4: "ⵉⴷⵖⴰⵔⵏ",
        a5: "ⵓⵔⴰⵔⵏ",
        a6: "ⵉⴳⵔⵔⵓⵜⵏ ⵏ ⵉⴷⵔⵉⵎⵏ",
        a7: "Services",
        a8: "ⴰⵎⵎⴰⵙ ⵏ ⵉⵏⵖⵎⵉⵙⵏ ⵅⴼ ⵉⵙⵙⵜⴰⵢⵏ",
        a9: "Privacy Policy",
        a10: "Privacy Center",
        a11: "ⵜⵉⵔⵓⴱⴱⴰ",
        a12: "ⵅⴼ",
        a13: "ⵙⵏⴼⵍⵓⵍ ⴰⵙⵓⵙⵙⵏ",
        a14: "ⵙⵏⴼⵍⵓⵍ ⵜⴰⵙⵏⴰ",
        a15: "ⵉⵎⵙⵖⵉⵡⵙⵏ",
        a16: "ⵜⵉⵖⴰⵔⴰⵙⵉⵏ ⵜⵉⵣⵣⵓⵍⴰⵏⵉⵏ",
        a17: "ⵉⴽⵓⴽⵉⵜⵏ",
        a18: "ⵜⵉⴷⵖⵔⵉⵏ ⵏ ⵓⵙⵓⵙⵙⵏ",
        a19: "ⵜⵉⴼⴰⴷⵉⵡⵉⵏ",
        a20: "ⵜⵉⵡⵉⵙⵉ",
        a21: "Contact Uploading & Non-Users"
    },
    arabic: {
        p1: "يمنحك فيسبوك إمكانية التواصل مع الأشخاص ومشاركة ما تريد معهم.",
        emailPlaceholder: "البريد الإلكتروني أو رقم الهاتف",
        passPlaceholder: "كلمة السر",
        button1Value: "تسجيل الدخول",
        forgText: "هل نسيت كلمة السر؟",
        button2Value: "إنشاء حساب جديد",
        creer: " إنشاء صفحة ",
        fora: " لشخصية مشهورة أو علامة تجارية أو نشاط تجاري ",
        a1: "إنشاء حساب في فيسبوك",
        a2: "تسجيل الدخول",
        a3: "فيديو",
        a4: "الأماكن",
        a5: "الألعاب",
        a6: "حملات جمع التبرعات",
        a7: "الخدمات",
        a8: "مركز معلومات التصويت",
        a9: "سياسة الخصوصية",
        a10: "مركز الخصوصية",
        a11: "المجموعات",
        a12: "حول",
        a13: "إنشاء إعلان",
        a14: "إنشاء صفحة",
        a15: "المطوّرون",
        a16: "الوظائف",
        a17: "ملفات تعريف الارتباط",
        a18: "اختيارات الإعلانات",
        a19: "الشروط",
        a20: "مساعدة",
        a21: "تحميل جهات الاتصال والإشعار غير المتعلق بالمستخدمين"
    },
    Espanol: {
        p1: "Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.",
        emailPlaceholder: "Correo electrónico o número de teléfono",
        passPlaceholder: "Contraseña",
        button1Value: "Iniciar sesión",
        forgText: "¿Has olvidado la contraseña?",
        button2Value: "Crear cuenta nueva",
        creer: "Crea una página ",
        fora: "para un famoso, una marca o una empresa.",
        a1: "Registrarte",
        a2: "Iniciar sesión",
        a3: "Vídeo",
        a4: "Lugares",
        a5: "Juegos",
        a6: "Recaudaciones de fondos",
        a7: "Servicios",
        a8: "Centro de información de votación",
        a9: "Política de privacidad",
        a10: "Centro de privacidad",
        a11: "Grupos",
        a12: "Información",
        a13: "Crear anuncio",
        a14: "Crear página",
        a15: "Desarrolladores",
        a16: "Empleo",
        a17: "Cookies",
        a18: "Opciones de anuncios",
        a19: "Condiciones",
        a20: "Ayuda",
        a21: "Subir contactos y no usuarios"
    },
    Italiano: {
        p1: "Facebook ti aiuta a connetterti e rimanere in contatto con le persone della tua vita.",
        emailPlaceholder: "E-mail o numero di telefono",
        passPlaceholder: "Password",
        button1Value: "Accedi",
        forgText: "Password dimenticata?",
        button2Value: "Crea nuovo account",
        creer: "Crea una Pagina ",
        fora: "per un personaggio famoso, un brand o un'azienda.",
        a1: "Iscriviti",
        a2: "Accedi",
        a3: "Video",
        a4: "Luoghi",
        a5: "Giochi",
        a6: "Raccolte fondi",
        a7: "Servizi",
        a8: "Centro informazioni sul voto",
        a9: "Informativa sulla privacy",
        a10: "Centro sulla privacy",
        a11: "Gruppi",
        a12: "Informazioni",
        a13: "Crea un'inserzione",
        a14: "Crea una Pagina",
        a15: "Sviluppatori",
        a16: "Opportunità di lavoro",
        a17: "Cookie",
        a18: "Scegli tu!",
        a19: "Condizioni",
        a20: "Centro assistenza",
        a21: "Caricamento dei contatti e non-utenti"
    },
    Deutsch: {
        p1: "Auf Facebook bleibst du mit Menschen in Verbindung und teilst Fotos, Videos und vieles mehr mit ihnen.",
        emailPlaceholder: "E-Mail-Adresse oder Telefonnummer",
        passPlaceholder: "Passwort",
        button1Value: "Anmelden",
        forgText: "Passwort vergessen?",
        button2Value: "Neues Konto erstellen",
        creer: "Erstelle eine Seite ",
        fora: "für einen Star, eine Marke oder ein Unternehmen.",
        a1: "Registrieren",
        a2: "Anmelden",
        a3: "Video",
        a4: "Orte",
        a5: "Spiele",
        a6: "Spendenaktionen",
        a7: "Services",
        a8: "Wahl-Informationszentrum",
        a9: "Datenschutzrichtlinie",
        a10: "Privacy Center",
        a11: "Gruppen",
        a12: "Info",
        a13: "Werbeanzeige erstellen",
        a14: "Seite erstellen",
        a15: "Entwickler",
        a16: "Karriere",
        a17: "Cookies",
        a18: "Werbepräferenzen",
        a19: "Nutzungsbedingungen",
        a20: "Hilfe",
        a21: "Hochladen von Kontakten und Nicht-Nutzer"
    },
    Portugues: {
        p1: "O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.",
        emailPlaceholder: "Email ou telefone",
        passPlaceholder: "Senha",
        button1Value: "Entrar",
        forgText: "Esqueceu a senha?",
        button2Value: "Criar nova conta",
        creer: "Crie uma Página ",
        fora: "para uma celebridade, uma marca ou uma empresa.",
        a1: "Cadastre-se",
        a2: "Entrar",
        a3: "Vídeo",
        a4: "Locais",
        a5: "Jogos",
        a6: "Campanhas de arrecadação de fundos",
        a7: "Serviços",
        a8: "Central de Informações de Votação",
        a9: "Política de Privacidade",
        a10: "Central de Privacidade",
        a11: "Grupos",
        a12: "Sobre",
        a13: "Criar anúncio",
        a14: "Criar Página",
        a15: "Desenvolvedores",
        a16: "Carreiras",
        a17: "Cookies",
        a18: "Escolhas para anúncios",
        a19: "Termos",
        a20: "Ajuda",
        a21: "Carregamento de contatos e não usuáriosConfigurações"
    },
    हिन्दी: {
        p1: "Facebook लोगों से जुड़ने और शेयर करने में आपकी मदद करता है.",
        emailPlaceholder: "ईमेल या फ़ोन नंबर",
        passPlaceholder: "पासवर्ड",
        button1Value: "लॉग इन करें",
        forgText: "पासवर्ड भूल गए?",
        button2Value: "नया अकाउंट बनाएँ",
        creer: "एक पेज बनाएँ ",
        fora: "किसी सेलिब्रिटी, ब्रांड या बिज़नेस के लिए",
        a1: "साइन अप करें",
        a2: "लॉग इन करें",
        a3: "वीडियो",
        a4: "स्थान",
        a5: "खेल",
        a6: "अनुदान",
        a7: "संचयसेवाएँ",
        a8: "वोटिंग सूचना केंद्र",
        a9: "प्राइवेसी पॉलिसी",
        a10: "प्राइवेसी सेंटर",
        a11: "ग्रुप्स",
        a12: "विज्ञापन बनाएँ",
        a13: "पेज बनाएँ",
        a14: "डेवलपर्स",
        a15: "करियर्स",
        a16: "कुकीज़",
        a17: "विज्ञापन विकल्प",
        a18: "शर्तें",
        a19: "हेल्प",
        a20: "संपर्क",
        a21: "अपलोडिंग और नॉन-यूज़र्स सेटिंग"
    },
    中文: {
        p1: "联系你我，分享生活，尽在 Facebook",
        emailPlaceholder: "邮箱或手机号",
        passPlaceholder: "密码",
        button1Value: "登录",
        forgText: "忘记密码？",
        button2Value: "新建帐户",
        creer: "创建公共主页 ",
        fora: "为名人、品牌或公司",
        a1: "注册",
        a2: "登录",
        a3: "视频",
        a4: "地点",
        a5: "游戏",
        a6: "筹款活动",
        a7: "服务",
        a8: "选民信息中心",
        a9: "隐私权政策",
        a10: "隐私中心",
        a11: "小组",
        a12: "关于",
        a13: "创建广告",
        a14: "创建公共主页",
        a15: "开发者",
        a16: "招聘信息",
        a17: "Cookie",
        a18: "Ad Choices",
        a19: "条款",
        a20: "帮助",
        a21: "联系人上传和非用户设置动态记录"
    },
    日本語: {
        p1: "Facebookを使うと、友達や同僚、同級生、仲間たちとつながりを深められます。ケータイ、スマートフォンからもアクセスできます。",
        emailPlaceholder: "メールアドレスまたは電話番号",
        passPlaceholder: "パスワード",
        button1Value: "ログイン",
        forgText: "パスワードを忘れた場合",
        button2Value: "新しいアカウントを作成",
        creer: "Facebookページを作成 ",
        fora: "有名人、ブランドまたはビジネスのために",
        a1: "アカウント登録",
        a2: "ログイン",
        a3: "動画",
        a4: "スポット",
        a5: "ゲーム",
        a6: "募金キャンペーン",
        a7: "サービス",
        a8: "投票情報センター",
        a9: "プライバシーポリシー",
        a10: "プライバシーセンター",
        a11: "グループ",
        a12: "Facebookについて",
        a13: "広告を作成",
        a14: "ページを作成",
        a15: "開発者",
        a16: "採用情報",
        a17: "Cookie",
        a18: "AdChoices",
        a19: "規約",
        a20: "ヘルプ",
        a21: "連絡先のアップロードと非ユーザー設定アクティビティログ"
    },

};

function changerLangue(langue) {
    const contenu = contenuLangue[langue];
    p1.textContent = contenu.p1;
    email.placeholder = contenu.emailPlaceholder;
    pass.placeholder = contenu.passPlaceholder;
    button1.value = contenu.button1Value;
    forg.textContent = contenu.forgText;
    button2.value = contenu.button2Value;
    creer.textContent = contenu.creer;
    fora.textContent = contenu.fora;
    a1.textContent = contenu.a1;
    a2.textContent = contenu.a2;
    a3.textContent = contenu.a3;
    a4.textContent = contenu.a4;
    a5.textContent = contenu.a5;
    a6.textContent = contenu.a6;
    a7.textContent = contenu.a7;
    a8.textContent = contenu.a8;
    a9.textContent = contenu.a9;
    a10.textContent = contenu.a10;
    a11.textContent = contenu.a11;
    a12.textContent = contenu.a12;
    a13.textContent = contenu.a13;
    a14.textContent = contenu.a14;
    a15.textContent = contenu.a15;
    a16.textContent = contenu.a16;
    a17.textContent = contenu.a17;
    a18.textContent = contenu.a18;
    a19.textContent = contenu.a19;
    a20.textContent = contenu.a20;
    a21.textContent = contenu.a21;
    nameP.placeholder= contenu.namePPlaceholder;
}

fr.addEventListener('click', function () {
    changerLangue('francais');
});

engl.addEventListener('click', function () {
    changerLangue('anglais');
});
amazigh.addEventListener('click', function () {
    changerLangue('amazigh');
});
arabic.addEventListener('click', function () {
    changerLangue('arabic');
});
Espanol.addEventListener('click', function () {
    changerLangue('Espanol');
});
Italiano.addEventListener('click', function () {
    changerLangue('Italiano');
});
Deutsch.addEventListener('click', function () {
    changerLangue('Deutsch');
});
Portugues.addEventListener('click', function () {
    changerLangue('Portugues');
});
हिन्दी.addEventListener('click', function () {
    changerLangue('हिन्दी');
});
中文.addEventListener('click', function () {
    changerLangue('中文');
});
日本語.addEventListener('click', function () {
    changerLangue('日本語');
});



function showSignupForm() {
    var signupForm = document.getElementById('signup');
    signupForm.style.display = 'block';
    document.getElementById("overlay").style.display = "block";
}
function hideSignupForm() {
    var signupForm = document.getElementById('signup');
    var overlay=document.getElementById('overlay');
    signupForm.style.display = 'none';
    overlay.style.display = "none";
}

function submitForm() {
    alert('Formulaire soumis avec succès!');
}

function showexplication1(){
    var expli2=document.getElementById('expli2');
    var expli1=document.getElementById('expli1');


    if (expli1.style.display === 'none') {
        expli1.style.display = 'block';
        expli2.style.display = 'none';
    } else {
        expli1.style.display = 'none';
    }

}

function showexplication2(){
    if (expli2.style.display === 'none') {
        expli2.style.display = 'block';
        expli1.style.display = 'none';
    } else {
        expli2.style.display = 'none';
    }
}

function hidexplications(){
    var expli1=document.getElementById('expli1');
    var expli2=document.getElementById('expli2');
    
    expli1.style.display='none';
    expli2.style.display='none';

    }

