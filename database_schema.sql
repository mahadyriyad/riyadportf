-- =======================================================================================
-- SUPABASE PRODUCTION-READY SQL SCRIPT
-- Contains: Extensions, Functions, Triggers, Storage, Tables, Indexes, RLS Policies, Sample Data
-- =======================================================================================

-- =======================================================================================
-- 01. EXTENSIONS
-- =======================================================================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =======================================================================================
-- 02. FUNCTIONS & TRIGGERS
-- =======================================================================================
-- Function to automatically update 'updated_at' timestamp
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- =======================================================================================
-- 03. STORAGE BUCKETS
-- =======================================================================================
INSERT INTO storage.buckets (id, name, public) VALUES 
('hero-images', 'hero-images', true),
('project-images', 'project-images', true),
('blog-images', 'blog-images', true),
('certificate-images', 'certificate-images', true),
('resume-files', 'resume-files', true),
('profile-images', 'profile-images', true),
('service-icons', 'service-icons', true)
ON CONFLICT (id) DO NOTHING;

-- =======================================================================================
-- 04. TABLES
-- =======================================================================================

-- 4.1 HERO TABLE
CREATE TABLE IF NOT EXISTS hero (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    image TEXT,
    title TEXT NOT NULL,
    subtitle TEXT,
    bio TEXT,
    button_text TEXT,
    button_url TEXT,
    github TEXT,
    linkedin TEXT,
    facebook TEXT,
    instagram TEXT,
    twitter TEXT,
    email TEXT,
    phone TEXT,
    location TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4.2 SERVICES TABLE
CREATE TABLE IF NOT EXISTS services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    icon_svg TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4.3 SKILLS TABLE
CREATE TABLE IF NOT EXISTS skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    subtitle TEXT,
    emoji_icon TEXT,
    progress_percentage INTEGER CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
    category TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4.4 PROJECTS TABLE
CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    image TEXT,
    title TEXT NOT NULL,
    description TEXT,
    category TEXT,
    project_link TEXT,
    github_link TEXT,
    tags TEXT[],
    featured BOOLEAN DEFAULT false,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4.5 CERTIFICATIONS TABLE
CREATE TABLE IF NOT EXISTS certifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    image TEXT,
    title TEXT NOT NULL,
    organization TEXT,
    date TEXT,
    credential_url TEXT,
    description TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4.6 EXPERIENCE TABLE
CREATE TABLE IF NOT EXISTS experience (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    job_title TEXT NOT NULL,
    organization TEXT NOT NULL,
    location TEXT,
    period TEXT,
    tasks TEXT[],
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4.7 EDUCATION TABLE
CREATE TABLE IF NOT EXISTS education (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    institution TEXT NOT NULL,
    degree TEXT NOT NULL,
    gpa TEXT,
    period TEXT,
    location TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4.8 BLOG TABLE
CREATE TABLE IF NOT EXISTS blog (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    cover_image TEXT,
    title TEXT NOT NULL,
    summary TEXT,
    tag TEXT,
    read_time TEXT,
    content TEXT,
    slug TEXT UNIQUE,
    published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4.9 ABOUT TABLE
CREATE TABLE IF NOT EXISTS about (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    github_username TEXT,
    bio TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4.10 ABOUT STATS TABLE (Relation with About)
CREATE TABLE IF NOT EXISTS about_stats (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    about_id UUID REFERENCES about(id) ON DELETE CASCADE,
    label TEXT NOT NULL,
    value TEXT NOT NULL,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4.11 RESUME TABLE
CREATE TABLE IF NOT EXISTS resume (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    resume_pdf TEXT,
    ats_resume_url TEXT,
    professional_summary TEXT,
    ats_keywords TEXT,
    version TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4.12 CONTACT MESSAGES TABLE
CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    ip_address TEXT,
    read_status BOOLEAN DEFAULT false,
    reply_status BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4.13 EMAIL SETTINGS TABLE
CREATE TABLE IF NOT EXISTS email_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    smtp_host TEXT,
    smtp_port INTEGER,
    smtp_username TEXT,
    smtp_password TEXT,
    from_name TEXT,
    from_email TEXT,
    enable_smtp BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4.14 PORTFOLIO SETTINGS TABLE
CREATE TABLE IF NOT EXISTS portfolio_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    site_title TEXT NOT NULL,
    logo TEXT,
    favicon TEXT,
    primary_color TEXT,
    secondary_color TEXT,
    footer_text TEXT,
    meta_description TEXT,
    meta_keywords TEXT,
    google_analytics TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =======================================================================================
-- 05. INDEXES
-- =======================================================================================
CREATE INDEX IF NOT EXISTS idx_services_order ON services(display_order);
CREATE INDEX IF NOT EXISTS idx_skills_order ON skills(display_order);
CREATE INDEX IF NOT EXISTS idx_projects_order ON projects(display_order);
CREATE INDEX IF NOT EXISTS idx_certifications_order ON certifications(display_order);
CREATE INDEX IF NOT EXISTS idx_experience_order ON experience(display_order);
CREATE INDEX IF NOT EXISTS idx_education_order ON education(display_order);
CREATE INDEX IF NOT EXISTS idx_blog_published ON blog(published);
CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_messages(created_at);

-- =======================================================================================
-- 06. TRIGGERS
-- =======================================================================================
CREATE TRIGGER set_timestamp_hero BEFORE UPDATE ON hero FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp_services BEFORE UPDATE ON services FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp_skills BEFORE UPDATE ON skills FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp_projects BEFORE UPDATE ON projects FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp_certifications BEFORE UPDATE ON certifications FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp_experience BEFORE UPDATE ON experience FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp_education BEFORE UPDATE ON education FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp_blog BEFORE UPDATE ON blog FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp_about BEFORE UPDATE ON about FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp_about_stats BEFORE UPDATE ON about_stats FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp_resume BEFORE UPDATE ON resume FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp_email_settings BEFORE UPDATE ON email_settings FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp_portfolio_settings BEFORE UPDATE ON portfolio_settings FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();

-- =======================================================================================
-- 07. ROW LEVEL SECURITY (RLS) & POLICIES
-- =======================================================================================
ALTER TABLE hero ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog ENABLE ROW LEVEL SECURITY;
ALTER TABLE about ENABLE ROW LEVEL SECURITY;
ALTER TABLE about_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE resume ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_settings ENABLE ROW LEVEL SECURITY;

-- PUBLIC SELECT (Read-only for public visitors where applicable)
CREATE POLICY "Public Read Hero" ON hero FOR SELECT USING (is_active = true);
CREATE POLICY "Public Read Services" ON services FOR SELECT USING (is_active = true);
CREATE POLICY "Public Read Skills" ON skills FOR SELECT USING (is_active = true);
CREATE POLICY "Public Read Projects" ON projects FOR SELECT USING (is_active = true);
CREATE POLICY "Public Read Certifications" ON certifications FOR SELECT USING (is_active = true);
CREATE POLICY "Public Read Experience" ON experience FOR SELECT USING (is_active = true);
CREATE POLICY "Public Read Education" ON education FOR SELECT USING (is_active = true);
CREATE POLICY "Public Read Blog" ON blog FOR SELECT USING (published = true);
CREATE POLICY "Public Read About" ON about FOR SELECT USING (true);
CREATE POLICY "Public Read About Stats" ON about_stats FOR SELECT USING (true);
CREATE POLICY "Public Read Resume" ON resume FOR SELECT USING (is_active = true);
CREATE POLICY "Public Read Portfolio Settings" ON portfolio_settings FOR SELECT USING (true);

-- CONTACT MESSAGES (Public can insert messages, only Authenticated Admin can select/update/delete)
CREATE POLICY "Public Insert Messages" ON contact_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Auth Read Messages" ON contact_messages FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Auth Update Messages" ON contact_messages FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Auth Delete Messages" ON contact_messages FOR DELETE USING (auth.role() = 'authenticated');

-- EMAIL SETTINGS (Only Authenticated Admin)
CREATE POLICY "Auth Full Access Email Settings" ON email_settings FOR ALL USING (auth.role() = 'authenticated');

-- AUTHENTICATED FULL ACCESS FOR OTHER TABLES (Admin panel operations)
CREATE POLICY "Auth Full Access Hero" ON hero FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth Full Access Services" ON services FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth Full Access Skills" ON skills FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth Full Access Projects" ON projects FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth Full Access Certifications" ON certifications FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth Full Access Experience" ON experience FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth Full Access Education" ON education FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth Full Access Blog" ON blog FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth Full Access About" ON about FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth Full Access About Stats" ON about_stats FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth Full Access Resume" ON resume FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth Full Access Portfolio Settings" ON portfolio_settings FOR ALL USING (auth.role() = 'authenticated');

-- =======================================================================================
-- 08. STORAGE POLICIES
-- =======================================================================================
-- Allow public select on all image/file buckets
CREATE POLICY "Public View Any Bucket" ON storage.objects FOR SELECT USING (
  bucket_id IN ('hero-images', 'project-images', 'blog-images', 'certificate-images', 'resume-files', 'profile-images', 'service-icons')
);

-- Allow authenticated uploads and management
CREATE POLICY "Auth Upload Any Bucket" ON storage.objects FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Auth Update Any Bucket" ON storage.objects FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Auth Delete Any Bucket" ON storage.objects FOR DELETE USING (auth.role() = 'authenticated');

-- =======================================================================================
-- 09. SAMPLE DATA (OPTIONAL INITIALIZATION)
-- =======================================================================================
INSERT INTO portfolio_settings (site_title, meta_description, primary_color, secondary_color) 
VALUES ('Mahady Hasan Riyad - Portfolio', 'Full Stack Web Developer & AI Enthusiast', '#ccff00', '#111111')
ON CONFLICT DO NOTHING;

INSERT INTO hero (title, subtitle, bio) 
VALUES ('Hi, I am Mahady Hasan Riyad', 'Full Stack Developer', 'I build interactive web applications.')
ON CONFLICT DO NOTHING;
