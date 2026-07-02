const supabaseUrl = 'https://tblsjkdczntojzzxbhcj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRibHNqa2Rjem50b2p6enhiaGNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI4MzIzMTIsImV4cCI6MjA5ODQwODMxMn0.ZZFCYiaz5KPSO4poXbd9NnubniXsgyrjCZAuL9soKro';

let supabaseClient = null;
try {
    if (window.supabase) {
        supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
        window.supabaseClient = supabaseClient;
    } else {
        console.warn('Supabase CDN not loaded. Falling back to local storage.');
    }
} catch (e) {
    console.warn('Error initializing Supabase:', e);
}

const defaultData = {
    hero: {
        title: "Hi, I am<br><span style=\"color: var(--accent-lime)\">Mahady Hasan Riyad</span>",
        subtitle: "Full Stack Developer",
        bio: "CS undergrad passionate about AI, front-end, and building impactful tech solutions.",
        image: "https://cdn.phototourl.com/free/2026-06-28-91d638fe-7715-475e-b738-9d5088690b2a.jpg"
    },
    services: [],
    skills: [
    {
        "title": "React Js",
        "category": "Frontend",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    {
        "title": "Next Js",
        "category": "Frontend",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
    },
    {
        "title": "HTML",
        "category": "Frontend",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    },
    {
        "title": "CSS",
        "category": "Frontend",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
    },
    {
        "title": "JavaScript",
        "category": "Frontend",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    },
    {
        "title": "Bootstrap",
        "category": "Frontend",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
    },
    {
        "title": "Material UI",
        "category": "Frontend",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
    },
    {
        "title": "Tailwind CSS",
        "category": "Frontend",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
        "title": "Daisy UI",
        "category": "Frontend",
        "icon": "🌼"
    },
    {
        "title": "Node Js",
        "category": "Backend",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
    },
    {
        "title": "Python",
        "category": "Backend",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    },
    {
        "title": "MySQL",
        "category": "Backend",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
    },
    {
        "title": "Postgresql",
        "category": "Backend",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
    },
    {
        "title": "MongoDB",
        "category": "Backend",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
    },
    {
        "title": "Firebase",
        "category": "Backend",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
    },
    {
        "title": "Nest JS",
        "category": "Backend",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"
    },
    {
        "title": "Express Js",
        "category": "Backend",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
    },
    {
        "title": "JavaScript",
        "category": "Programming Languages",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    },
    {
        "title": "TypeScript",
        "category": "Programming Languages",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
    },
    {
        "title": "Python",
        "category": "Programming Languages",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    },
    {
        "title": "C++",
        "category": "Programming Languages",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
    },
    {
        "title": "Java",
        "category": "Programming Languages",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
    },
    {
        "title": "C",
        "category": "Programming Languages",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
    },
    {
        "title": "C#",
        "category": "Programming Languages",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
    },
    {
        "title": "Git",
        "category": "Tools & Platforms",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
    },
    {
        "title": "GitHub",
        "category": "Tools & Platforms",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
    },
    {
        "title": "Netlify",
        "category": "Tools & Platforms",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg"
    },
    {
        "title": "VS Code",
        "category": "Tools & Platforms",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
    },
    {
        "title": "Postman",
        "category": "Tools & Platforms",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
    },
    {
        "title": "Figma",
        "category": "Tools & Platforms",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
    },
    {
        "title": "Canva",
        "category": "Tools & Platforms",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg"
    },
    {
        "title": "Google Colab",
        "category": "Tools & Platforms",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
    },
    {
        "title": "Scikit-learn",
        "category": "Machine Learning",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"
    },
    {
        "title": "Regression",
        "category": "Machine Learning",
        "icon": "📈"
    },
    {
        "title": "Classification",
        "category": "Machine Learning",
        "icon": "🗂️"
    },
    {
        "title": "Clustering",
        "category": "Machine Learning",
        "icon": "🎯"
    },
    {
        "title": "Decision Tree",
        "category": "Machine Learning",
        "icon": "🌳"
    },
    {
        "title": "Random Forest",
        "category": "Machine Learning",
        "icon": "🌲"
    },
    {
        "title": "SVM",
        "category": "Machine Learning",
        "icon": "〽️"
    },
    {
        "title": "KNN",
        "category": "Machine Learning",
        "icon": "k"
    },
    {
        "title": "Naive Bayes",
        "category": "Machine Learning",
        "icon": "B"
    },
    {
        "title": "XGBoost",
        "category": "Machine Learning",
        "icon": "🚀"
    },
    {
        "title": "TensorFlow",
        "category": "Deep Learning",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
    },
    {
        "title": "Keras",
        "category": "Deep Learning",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg"
    },
    {
        "title": "PyTorch",
        "category": "Deep Learning",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
    },
    {
        "title": "CNN",
        "category": "Deep Learning",
        "icon": "👁️"
    },
    {
        "title": "RNN",
        "category": "Deep Learning",
        "icon": "🔄"
    },
    {
        "title": "LSTM",
        "category": "Deep Learning",
        "icon": "🧠"
    },
    {
        "title": "GRU",
        "category": "Deep Learning",
        "icon": "⚙️"
    },
    {
        "title": "Transfer Learning",
        "category": "Deep Learning",
        "icon": "🔁"
    },
    {
        "title": "OpenCV",
        "category": "Deep Learning",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg"
    },
    {
        "title": "YOLO",
        "category": "Deep Learning",
        "icon": "🎯"
    },
    {
        "title": "Artificial Intelligence",
        "category": "Artificial Intelligence",
        "icon": "🤖"
    },
    {
        "title": "Generative AI",
        "category": "Artificial Intelligence",
        "icon": "✨"
    },
    {
        "title": "Prompt Engineering",
        "category": "Artificial Intelligence",
        "icon": "📝"
    },
    {
        "title": "Large Language Models",
        "category": "Artificial Intelligence",
        "icon": "📚"
    },
    {
        "title": "Retrieval Augmented Generation",
        "category": "Artificial Intelligence",
        "icon": "🔍"
    },
    {
        "title": "AI Agents",
        "category": "Artificial Intelligence",
        "icon": "👾"
    },
    {
        "title": "NLP",
        "category": "Artificial Intelligence",
        "icon": "🗣️"
    },
    {
        "title": "Computer Vision",
        "category": "Artificial Intelligence",
        "icon": "👀"
    },
    {
        "title": "Recommendation Systems",
        "category": "Artificial Intelligence",
        "icon": "💡"
    },
    {
        "title": "Reinforcement Learning",
        "category": "Artificial Intelligence",
        "icon": "🎮"
    },
    {
        "title": "Python",
        "category": "Data Science & Tools",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    },
    {
        "title": "Pandas",
        "category": "Data Science & Tools",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
    },
    {
        "title": "NumPy",
        "category": "Data Science & Tools",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
    },
    {
        "title": "Matplotlib",
        "category": "Data Science & Tools",
        "icon": "📊"
    },
    {
        "title": "Seaborn",
        "category": "Data Science & Tools",
        "icon": "📈"
    },
    {
        "title": "Jupyter Notebook",
        "category": "Data Science & Tools",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg"
    },
    {
        "title": "Google Colab",
        "category": "Data Science & Tools",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
    },
    {
        "title": "SQL",
        "category": "Data Science & Tools",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg"
    },
    {
        "title": "Git",
        "category": "Data Science & Tools",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
    },
    {
        "title": "GitHub",
        "category": "Data Science & Tools",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
    }
],
    projects: [],
    certifications: [],
    experience: [],
    education: [],
    blog: [],
    about: {
        bio: "I am a dedicated Computer Science student at Dhaka International University with a strong focus on Artificial Intelligence and Full Stack Web Development. My journey in tech started with a passion for problem-solving and has evolved into building complex applications and exploring the depths of Machine Learning.",
        githubUsername: "mahadyriyad",
        stats: [
            { label: "Years of Coding", value: "3+" },
            { label: "Projects Built", value: "0" },
            { label: "CGPA", value: "3.96" },
            { label: "Certifications", value: "0" }
        ]
    },
    gallery: [],
    resume: {
        pdfUrl: "",
        atsUrl: "",
        summary: "Digital experience designer and developer with 3+ years of experience in AI and Web technologies.",
        skills: ["React", "Next.js", "Python", "AI/ML", "TypeScript", "Node.js"]
    },
    emailSettings: {
        serviceId: "",
        templateId: "",
        publicKey: "",
        receiveEmail: ""
    },
    translations: {
        en: {
            nav_home: "Home",
            nav_portfolio: "Portfolio",
            nav_about: "About",
            nav_contact: "Contact",
            nav_services: "Services",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_resume: "Resume & CV",
            nav_certifications: "Certifications",
            nav_experience: "Experience",
            nav_blog: "Blog",
            hire_badge: "Available for hire",
            hero_btn_profile: "Show Profile",
            hero_btn_more: "Know More",
            services_title: "Our Services",
            services_subtitle: "What I offer",
            skills_title: "My best skills are in:",
            skills_subtitle: "Expertise in building modern web applications and advanced AI solutions.",
            projects_title: "Featured Projects",
            projects_subtitle: "A collection of my recent work",
            contact_title: "Get in Touch",
            contact_subtitle: "Let's build something great together",
            contact_name: "Your Name",
            contact_email: "Your Email",
            contact_subject: "Subject",
            contact_message: "Your Message",
            contact_send: "Send Message",
            footer_text: "© 2024 Mahady Hasan Riyad. All rights reserved."
        },
        bn: {
            nav_home: "হোম",
            nav_portfolio: "পোর্টফোলিও",
            nav_about: "সম্পর্কে",
            nav_contact: "যোগাযোগ",
            nav_services: "সেবাসমূহ",
            nav_skills: "দক্ষতা",
            nav_projects: "প্রকল্প",
            nav_resume: "জীবনবৃত্তান্ত",
            nav_certifications: "সার্টিফিকেশন",
            nav_experience: "অভিজ্ঞতা",
            nav_blog: "ব্লগ",
            hire_badge: "কাজের জন্য উপলব্ধ",
            hero_btn_profile: "প্রোফাইল দেখুন",
            hero_btn_more: "আরও জানুন",
            services_title: "আমার সেবাসমূহ",
            services_subtitle: "আমি যা অফার করি",
            skills_title: "আমার সেরা দক্ষতাগুলো:",
            skills_subtitle: "আধুনিক ওয়েব অ্যাপ্লিকেশান এবং উন্নত AI সমাধান তৈরির দক্ষতা। বাংলাদেশ এবং আন্তর্জাতিক উভয় ক্লায়েন্টদের জন্য কাজ করি।",
            projects_title: "সেরা প্রকল্পসমূহ",
            projects_subtitle: "আমার সাম্প্রতিক কাজের একটি সংগ্রহ",
            contact_title: "যোগাযোগ করুন",
            contact_subtitle: "আপনার প্রকল্পের জন্য বাংলাদেশ বা আন্তর্জাতিক ক্লায়েন্ট - উভয় লক্ষ্যেই আমরা সেরা সমাধান দিতে পারি।",
            contact_name: "আপনার নাম",
            contact_email: "আপনার ইমেইল",
            contact_subject: "বিষয়",
            contact_message: "আপনার বার্তা",
            contact_send: "বার্তা পাঠান",
            footer_text: "© ২০২৪ মাহাদি হাসান রিয়াদ। সর্বস্বত্ব সংরক্ষিত।"
        }
    },
    hero_bn: {
        title: "হাই, আমি<br><span style=\"color: var(--accent-lime)\">মাহাদি হাসান রিয়াদ</span>",
        subtitle: "ফুল স্ট্যাক ডেভেলপার",
        bio: "সিএস আন্ডারগ্র্যাড শিক্ষার্থী, এআই, ফ্রন্ট-এন্ড এবং আধুনিক প্রযুক্তিতে সমাধান তৈরিতে আগ্রহী।"
    },
    about_bn: {
        bio: "আমি ঢাকা ইন্টারন্যাশনাল ইউনিভার্সিটির একজন নিবেদিত সিএস শিক্ষার্থী। আমার দক্ষতা মূলত কৃত্রিম বুদ্ধিমত্তা (AI) এবং ফুল স্ট্যাক ওয়েব ডেভেলপমেন্টে। জটিল অ্যাপ্লিকেশন তৈরি এবং মেশিন লার্নিং এর গভীরে অনুসন্ধানের মাধ্যমে আমার প্রযুক্তি যাত্রা শুরু।"
    }
};

async function getPortfolioData() {
    try {
        if (!supabaseClient) throw new Error('Supabase client not initialized');
        
        if (sessionStorage.getItem('supabase_unreachable') === 'true') {
            const saved = localStorage.getItem('portfolio_data');
            if (saved) {
                try { 
                    const parsed = JSON.parse(saved);
                    if (parsed.skills && parsed.skills.length > 0 && !parsed.skills[0].category) {
                        delete parsed.skills; // Force reset to new format
                    }
                    return { ...defaultData, ...parsed }; 
                } catch (err) {}
            }
            return defaultData;
        }

        const fetchAll = async () => {
            const [
                { data: hero }, { data: services }, { data: skills },
                { data: projects }, { data: certifications }, { data: experience },
                { data: education }, { data: blog }, { data: about },
                { data: resume }, { data: settings }
            ] = await Promise.all([
                supabaseClient.from('hero').select('*').eq('is_active', true).maybeSingle(),
                supabaseClient.from('services').select('*').eq('is_active', true).order('display_order', { ascending: true }),
                supabaseClient.from('skills').select('*').eq('is_active', true).order('display_order', { ascending: true }),
                supabaseClient.from('projects').select('*').eq('is_active', true).order('display_order', { ascending: true }),
                supabaseClient.from('certifications').select('*').eq('is_active', true).order('display_order', { ascending: true }),
                supabaseClient.from('experience').select('*').eq('is_active', true).order('display_order', { ascending: true }),
                supabaseClient.from('education').select('*').eq('is_active', true).order('display_order', { ascending: true }),
                supabaseClient.from('blog').select('*').eq('published', true),
                supabaseClient.from('about').select('*').maybeSingle(),
                supabaseClient.from('resume').select('*').eq('is_active', true).maybeSingle(),
                supabaseClient.from('portfolio_settings').select('*').maybeSingle()
            ]);

            return { hero, services, skills, projects, certifications, experience, education, blog, about, resume, settings };
        };

        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Supabase fetch timed out')), 5000));
        
        const data = await Promise.race([fetchAll(), timeoutPromise]);
            
        sessionStorage.removeItem('supabase_unreachable');

        // Map database schema to frontend expectations
        const mappedData = {};
        
        if (data.hero) {
            mappedData.hero = {
                title: data.hero.title,
                subtitle: data.hero.subtitle,
                bio: data.hero.bio,
                buttonText: data.hero.button_text,
                buttonUrl: data.hero.button_url,
                socials: {
                    github: data.hero.github,
                    linkedin: data.hero.linkedin,
                    facebook: data.hero.facebook,
                    instagram: data.hero.instagram,
                    twitter: data.hero.twitter
                },
                contact: {
                    email: data.hero.email,
                    phone: data.hero.phone,
                    location: data.hero.location
                },
                image: data.hero.image,
                id: data.hero.id
            };
        }

        if (data.services) {
            mappedData.services = data.services.map(s => ({ id: s.id, title: s.title, description: s.description, icon: s.icon_svg }));
        }

        if (data.skills) {
            const hiddenSkills = ['phpMyAdmin', 'PHP', '.NET'];
            mappedData.skills = data.skills
                .filter(s => !hiddenSkills.includes(s.title))
                .map(s => ({ id: s.id, title: s.title, subtitle: s.subtitle, icon: s.emoji_icon, progress: s.progress_percentage, category: s.category }));
        }

        if (data.projects) {
            mappedData.projects = data.projects.map(p => ({ id: p.id, title: p.title, description: p.description, image: p.image, category: p.category, link: p.project_link, github: p.github_link, tags: p.tags, featured: p.featured }));
        }

        if (data.certifications) {
            mappedData.certifications = data.certifications.map(c => ({ id: c.id, title: c.title, organization: c.organization, date: c.date, credential_url: c.credential_url, description: c.description, image: c.image }));
        }

        if (data.experience) {
            mappedData.experience = data.experience.map(e => ({ id: e.id, title: e.job_title, organization: e.organization, location: e.location, period: e.period, tasks: e.tasks }));
        }

        if (data.education) {
            mappedData.education = data.education.map(e => ({ id: e.id, title: e.institution, degree: e.degree, gpa: e.gpa, period: e.period, location: e.location }));
        }

        if (data.blog) {
            mappedData.blog = data.blog.map(b => ({ id: b.id, title: b.title, summary: b.summary, image: b.cover_image, tag: b.tag, readTime: b.read_time, content: b.content, slug: b.slug }));
        }

        if (data.about) {
            mappedData.about = { bio: data.about.bio, github_username: data.about.github_username, id: data.about.id };
        }

        if (data.resume) {
            mappedData.resume = data.resume;
        }

        if (data.settings) {
            mappedData.settings = data.settings;
        }

        const mergeByName = (defaults, savedArr) => {
            if (!savedArr) return defaults;
            const merged = [...savedArr];
            defaults.forEach(def => {
                if (!merged.find(s => s.title === def.title)) {
                    merged.push(def);
                }
            });
            return merged;
        };

        // Merge with defaults if missing
        const mergedData = {
            ...defaultData,
            ...mappedData,
            hero: (mappedData.hero && mappedData.hero.title) ? mappedData.hero : defaultData.hero,
            about: (mappedData.about && mappedData.about.bio) ? mappedData.about : defaultData.about,
            services: (mappedData.services && mappedData.services.length > 0) ? mappedData.services : defaultData.services,
            skills: (mappedData.skills && mappedData.skills.length > 0) ? mappedData.skills : defaultData.skills,
            projects: (mappedData.projects && mappedData.projects.length > 0) ? mappedData.projects : defaultData.projects,
            certifications: (mappedData.certifications && mappedData.certifications.length > 0) ? mappedData.certifications : defaultData.certifications,
            experience: (mappedData.experience && mappedData.experience.length > 0) ? mappedData.experience : defaultData.experience,
            education: (mappedData.education && mappedData.education.length > 0) ? mappedData.education : defaultData.education,
            blog: (mappedData.blog && mappedData.blog.length > 0) ? mappedData.blog : defaultData.blog,
            resume: (mappedData.resume && (mappedData.resume.resume_pdf || mappedData.resume.professional_summary)) ? mappedData.resume : defaultData.resume
        };
        
        localStorage.setItem('portfolio_data', JSON.stringify(mergedData));
        return mergedData;
    } catch (e) {
        console.warn('Supabase Fetch fallback:', e.message || e);
        try { sessionStorage.setItem('supabase_unreachable', 'true'); } catch (_) {}
        const saved = localStorage.getItem('portfolio_data');
        if (saved) {
            try { return { ...defaultData, ...JSON.parse(saved) }; } catch (err) {}
        }
    }
    return defaultData;
}

async function saveContactMessage(messageData) {
    try {
        if (!supabaseClient) throw new Error('Supabase client not initialized');
        
        const { error } = await supabaseClient
            .from('contact_messages')
            .insert([{
                ...messageData,
                created_at: new Date().toISOString()
            }]);
            
        if (error) throw error;
        return { success: true };
    } catch (e) {
        console.warn('Supabase Contact Save fall back to local:', e.message || e);
        try {
            const existing = JSON.parse(localStorage.getItem('contact_messages') || '[]');
            existing.push({ ...messageData, id: Date.now(), created_at: new Date().toISOString() });
            localStorage.setItem('contact_messages', JSON.stringify(existing));
            return { success: true, local: true };
        } catch (err) {
            return { success: false, error: e.message };
        }
    }
}

async function getContactMessages() {
    try {
        if (!supabaseClient) throw new Error('Supabase client not initialized');
        
        const { data, error } = await supabaseClient
            .from('contact_messages')
            .select('*')
            .order('created_at', { ascending: false });
            
        if (error) throw error;

        try {
            const localMsgs = JSON.parse(localStorage.getItem('contact_messages') || '[]');
            localMsgs.forEach(lm => {
                if (!data.find(dm => dm.email === lm.email && dm.message === lm.message)) {
                    data.push(lm);
                }
            });
            data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        } catch(err) {}
            
        return data || [];
    } catch (e) {
        console.warn('Supabase Get Messages fallback:', e.message || e);
        return JSON.parse(localStorage.getItem('contact_messages') || '[]').sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }
}

async function deleteContactMessage(id) {
    try {
        if (!supabaseClient) throw new Error('Supabase client not initialized');
        
        if (typeof id === 'number') {
            const existing = JSON.parse(localStorage.getItem('contact_messages') || '[]');
            const filtered = existing.filter(m => m.id !== id);
            localStorage.setItem('contact_messages', JSON.stringify(filtered));
            return true;
        }

        const { error } = await supabaseClient
            .from('contact_messages')
            .delete()
            .eq('id', id);
            
        if (error) throw error;
        return true;
    } catch (e) {
        console.warn('Supabase Delete Message fallback:', e.message || e);
        try {
            const existing = JSON.parse(localStorage.getItem('contact_messages') || '[]');
            const filtered = existing.filter(m => m.id !== id);
            localStorage.setItem('contact_messages', JSON.stringify(filtered));
            return true;
        } catch (err) {}
        return false;
    }
}

async function sendContactEmail(formData) {
    try {
        const data = await getPortfolioData();
        const settings = data.emailSettings;
        
        if (!settings || !settings.serviceId || !settings.templateId || !settings.publicKey) {
            console.log('EmailJS settings not fully configured.');
            return { success: false, error: 'Not configured' };
        }

        if (window.emailjs) {
            const result = await window.emailjs.send(
                settings.serviceId,
                settings.templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: settings.receiveEmail || 'Portfolio Admin'
                },
                settings.publicKey
            );
            return { success: true, result };
        }
        return { success: false, error: 'EmailJS SDK not found' };
    } catch (e) {
        console.warn('Email Send error:', e.message || e);
        return { success: false, error: e.message };
    }
}

async function savePortfolioData(data) {
    try {
        if (!supabaseClient) throw new Error('Supabase client not initialized');
        
        // Settings are stored in portfolio_settings. Other tables are handled individually by admin.html
        if (data.settings) {
            const { error } = await supabaseClient
                .from('portfolio_settings')
                .upsert({ id: data.settings.id || 1, ...data.settings });
        }
            
        localStorage.setItem('portfolio_data', JSON.stringify(data));
        return true;
    } catch (e) {
        console.warn('Supabase Save fallback to local cache:', e.message || e);
        try {
            localStorage.setItem('portfolio_data', JSON.stringify(data));
            return true;
        } catch (err) {
            console.warn('Local Storage Save fallback failure:', err);
            return false;
        }
    }
}

window.getPortfolioData = getPortfolioData;
window.savePortfolioData = savePortfolioData;
window.saveContactMessage = saveContactMessage;
window.getContactMessages = getContactMessages;
window.deleteContactMessage = deleteContactMessage;
window.sendContactEmail = sendContactEmail;
