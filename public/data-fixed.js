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
    skills: [],
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
            skills_subtitle: "আধুনিক ওয়েব অ্যাপ্লিকেশান এবং উন্নত AI সমাধান তৈরির দক্ষতা। বাংলাদেশ এবং আন্তর্জাতিক উভয় ক্লায়েন্টদের জন্য কাজ করি।",
            projects_title: "সেরা প্রকল্পসমূহ",
            projects_subtitle: "আমার সাম্প্রতিক কাজের একটি সংগ্রহ",
            contact_title: "যোগাযোগ করুন",
            contact_subtitle: "আপনার প্রকল্পের জন্য বাংলাদেশ বা আন্তর্জাতিক ক্লায়েন্ট - উভয় লক্ষ্যেই আমরা সেরা সমাধান দিতে পারি।",
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
        if (!supabaseClient) {
            console.warn('Supabase client not initialized, using local cache');
            const saved = localStorage.getItem('portfolio_data');
            if (saved) {
                try { return { ...defaultData, ...JSON.parse(saved) }; } catch (err) {}
            }
            return defaultData;
        }
        
        if (sessionStorage.getItem('supabase_unreachable') === 'true') {
            console.log('Supabase marked as unreachable, using local cache');
            const saved = localStorage.getItem('portfolio_data');
            if (saved) {
                try { 
                    const parsed = JSON.parse(saved);
                    if (parsed.skills && parsed.skills.length > 0 && !parsed.skills[0].category) {
                        delete parsed.skills;
                    }
                    return { ...defaultData, ...parsed }; 
                } catch (err) {}
            }
            return defaultData;
        }

        const fetchAll = async () => {
            try {
                const results = await Promise.all([
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
                
                return {
                    hero: results[0].data,
                    services: results[1].data,
                    skills: results[2].data,
                    projects: results[3].data,
                    certifications: results[4].data,
                    experience: results[5].data,
                    education: results[6].data,
                    blog: results[7].data,
                    about: results[8].data,
                    resume: results[9].data,
                    settings: results[10].data
                };
            } catch (err) {
                console.error('Supabase fetch error:', err);
                throw err;
            }
        };

        const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Supabase fetch timed out after 8 seconds')), 8000)
        );
        
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

        if (data.services && Array.isArray(data.services)) {
            mappedData.services = data.services.map(s => ({ 
                id: s.id, 
                title: s.title, 
                description: s.description, 
                icon: s.icon_svg,
                displayOrder: s.display_order
            }));
        }

        if (data.skills && Array.isArray(data.skills)) {
            const hiddenSkills = ['phpMyAdmin', 'PHP', '.NET'];
            mappedData.skills = data.skills
                .filter(s => !hiddenSkills.includes(s.title))
                .map(s => ({ 
                    id: s.id, 
                    title: s.title, 
                    subtitle: s.subtitle, 
                    icon: s.emoji_icon, 
                    progress: s.progress_percentage, 
                    category: s.category,
                    displayOrder: s.display_order
                }));
        }

        if (data.projects && Array.isArray(data.projects)) {
            mappedData.projects = data.projects.map(p => ({ 
                id: p.id, 
                title: p.title, 
                description: p.description, 
                image: p.image, 
                category: p.category, 
                link: p.project_link, 
                github: p.github_link, 
                tags: p.tags || [], 
                featured: p.featured,
                displayOrder: p.display_order
            }));
        }

        if (data.certifications && Array.isArray(data.certifications)) {
            mappedData.certifications = data.certifications.map(c => ({ 
                id: c.id, 
                title: c.title, 
                organization: c.organization, 
                date: c.date, 
                credential_url: c.credential_url, 
                description: c.description, 
                image: c.image,
                displayOrder: c.display_order
            }));
        }

        if (data.experience && Array.isArray(data.experience)) {
            mappedData.experience = data.experience.map(e => ({ 
                id: e.id, 
                title: e.job_title, 
                organization: e.organization, 
                location: e.location, 
                period: e.period, 
                tasks: e.tasks || [],
                displayOrder: e.display_order
            }));
        }

        if (data.education && Array.isArray(data.education)) {
            mappedData.education = data.education.map(e => ({ 
                id: e.id, 
                title: e.institution, 
                degree: e.degree, 
                gpa: e.gpa, 
                period: e.period, 
                location: e.location,
                displayOrder: e.display_order
            }));
        }

        if (data.blog && Array.isArray(data.blog)) {
            mappedData.blog = data.blog.map(b => ({ 
                id: b.id, 
                title: b.title, 
                summary: b.summary, 
                image: b.cover_image, 
                tag: b.tag, 
                readTime: b.read_time, 
                content: b.content, 
                slug: b.slug,
                description: b.summary
            }));
        }

        if (data.about) {
            mappedData.about = { 
                bio: data.about.bio, 
                github_username: data.about.github_username, 
                githubUsername: data.about.github_username,
                id: data.about.id 
            };
        }

        if (data.resume) {
            mappedData.resume = {
                pdfUrl: data.resume.resume_pdf,
                atsUrl: data.resume.ats_resume_url,
                resume_pdf: data.resume.resume_pdf,
                ats_resume_url: data.resume.ats_resume_url,
                summary: data.resume.professional_summary,
                professional_summary: data.resume.professional_summary,
                skills: (data.resume.ats_keywords || '').split(',').map(s => s.trim()).filter(s => s)
            };
        }

        if (data.settings) {
            mappedData.settings = data.settings;
        }

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
            resume: (mappedData.resume && (mappedData.resume.pdfUrl || mappedData.resume.summary)) ? mappedData.resume : defaultData.resume
        };
        
        localStorage.setItem('portfolio_data', JSON.stringify(mergedData));
        console.log('✅ Successfully fetched and cached portfolio data from Supabase');
        return mergedData;
    } catch (e) {
        console.warn('Supabase Fetch failed, falling back to local cache:', e.message || e);
        try { sessionStorage.setItem('supabase_unreachable', 'true'); } catch (_) {}
        
        const saved = localStorage.getItem('portfolio_data');
        if (saved) {
            try { 
                const parsed = JSON.parse(saved);
                console.log('✅ Using cached portfolio data from localStorage');
                return { ...defaultData, ...parsed }; 
            } catch (err) {
                console.error('Failed to parse cached data:', err);
            }
        }
        
        console.log('ℹ️ Using default data');
        return defaultData;
    }
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
        console.warn('Supabase Contact Save failed, falling back to local storage:', e.message || e);
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
        console.warn('Supabase Get Messages failed, falling back to local cache:', e.message || e);
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
        console.warn('Supabase Delete Message failed, falling back to local:', e.message || e);
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
        
        if (data.settings) {
            const { error } = await supabaseClient
                .from('portfolio_settings')
                .upsert({ id: data.settings.id || 1, ...data.settings });
            
            if (error) throw error;
        }
            
        localStorage.setItem('portfolio_data', JSON.stringify(data));
        return true;
    } catch (e) {
        console.warn('Supabase Save failed, falling back to local cache:', e.message || e);
        try {
            localStorage.setItem('portfolio_data', JSON.stringify(data));
            return true;
        } catch (err) {
            console.warn('Local Storage Save failed:', err);
            return false;
        }
    }
}

// Expose functions globally
window.getPortfolioData = getPortfolioData;
window.savePortfolioData = savePortfolioData;
window.saveContactMessage = saveContactMessage;
window.getContactMessages = getContactMessages;
window.deleteContactMessage = deleteContactMessage;
window.sendContactEmail = sendContactEmail;
