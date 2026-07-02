-- ================================================================
-- SUPABASE RLS (Row Level Security) POLICIES - QUICK FIX
-- ================================================================
-- Run this SQL in your Supabase SQL Editor to enable public read access
-- This fixes the 42501 permission error and allows frontend to fetch data
-- ================================================================

-- Step 1: Enable RLS on all portfolio tables
ALTER TABLE IF EXISTS hero ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS services ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS education ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS blog ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS about ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS about_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS resume ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS contact_messages ENABLE ROW LEVEL SECURITY;

-- Step 2: Create PUBLIC READ policies for unauthenticated users
-- This allows your frontend to fetch data without authentication

-- HERO: Show active hero section to public
DROP POLICY IF EXISTS "Public Read Hero" ON hero;
CREATE POLICY "Public Read Hero" ON hero
  FOR SELECT
  USING (is_active = true);

-- SERVICES: Show active services to public  
DROP POLICY IF EXISTS "Public Read Services" ON services;
CREATE POLICY "Public Read Services" ON services
  FOR SELECT
  USING (is_active = true);

-- SKILLS: Show active skills to public
DROP POLICY IF EXISTS "Public Read Skills" ON skills;
CREATE POLICY "Public Read Skills" ON skills
  FOR SELECT
  USING (is_active = true);

-- PROJECTS: Show active projects to public
DROP POLICY IF EXISTS "Public Read Projects" ON projects;
CREATE POLICY "Public Read Projects" ON projects
  FOR SELECT
  USING (is_active = true);

-- CERTIFICATIONS: Show active certifications to public
DROP POLICY IF EXISTS "Public Read Certifications" ON certifications;
CREATE POLICY "Public Read Certifications" ON certifications
  FOR SELECT
  USING (is_active = true);

-- EXPERIENCE: Show active experience to public
DROP POLICY IF EXISTS "Public Read Experience" ON experience;
CREATE POLICY "Public Read Experience" ON experience
  FOR SELECT
  USING (is_active = true);

-- EDUCATION: Show active education to public
DROP POLICY IF EXISTS "Public Read Education" ON education;
CREATE POLICY "Public Read Education" ON education
  FOR SELECT
  USING (is_active = true);

-- BLOG: Show published blog posts to public
DROP POLICY IF EXISTS "Public Read Blog" ON blog;
CREATE POLICY "Public Read Blog" ON blog
  FOR SELECT
  USING (published = true);

-- ABOUT: Show about section to public (no filter needed)
DROP POLICY IF EXISTS "Public Read About" ON about;
CREATE POLICY "Public Read About" ON about
  FOR SELECT
  USING (true);

-- ABOUT_STATS: Show about stats to public
DROP POLICY IF EXISTS "Public Read About Stats" ON about_stats;
CREATE POLICY "Public Read About Stats" ON about_stats
  FOR SELECT
  USING (true);

-- RESUME: Show active resume to public
DROP POLICY IF EXISTS "Public Read Resume" ON resume;
CREATE POLICY "Public Read Resume" ON resume
  FOR SELECT
  USING (is_active = true);

-- CONTACT_MESSAGES: Allow anyone to insert (form submissions)
DROP POLICY IF EXISTS "Allow Public Insert" ON contact_messages;
CREATE POLICY "Allow Public Insert" ON contact_messages
  FOR INSERT
  WITH CHECK (true);

-- Step 3: CREATE ADMIN policies (for authenticated admin users)
-- These allow authenticated users to perform all operations

-- For admin authentication to work, ensure your auth is set up and
-- admin users are properly authenticated before admin.html operations

-- ================================================================
-- VERIFY RLS POLICIES ARE WORKING
-- ================================================================
-- After running the above SQL, run this query to verify policies were created:

SELECT schemaname, tablename, policyname, permissive
FROM pg_policies 
WHERE schemaname = 'public' 
ORDER BY tablename, policyname;

-- If you see results (multiple rows), all RLS policies are successfully created!

-- ================================================================
-- DISABLE RLS (Alternative Quick Fix - Use if Above Doesn't Work)
-- ================================================================
-- If RLS policies still cause issues, you can disable RLS entirely
-- This is less secure but useful for development/testing

/*
ALTER TABLE hero DISABLE ROW LEVEL SECURITY;
ALTER TABLE services DISABLE ROW LEVEL SECURITY;
ALTER TABLE skills DISABLE ROW LEVEL SECURITY;
ALTER TABLE projects DISABLE ROW LEVEL SECURITY;
ALTER TABLE certifications DISABLE ROW LEVEL SECURITY;
ALTER TABLE experience DISABLE ROW LEVEL SECURITY;
ALTER TABLE education DISABLE ROW LEVEL SECURITY;
ALTER TABLE blog DISABLE ROW LEVEL SECURITY;
ALTER TABLE about DISABLE ROW LEVEL SECURITY;
ALTER TABLE about_stats DISABLE ROW LEVEL SECURITY;
ALTER TABLE resume DISABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages DISABLE ROW LEVEL SECURITY;
*/

-- ================================================================
-- HOW TO USE THIS FILE
-- ================================================================
-- 1. Copy all the SQL above (without comment blocks)
-- 2. Go to Supabase Dashboard → Select your project
-- 3. Go to SQL Editor (left sidebar) → New Query
-- 4. Paste the SQL
-- 5. Click "Run" button
-- 6. Wait for confirmation messages
-- 7. Return to your portfolio and refresh the page
-- 8. Check browser console for "✅ Successfully fetched portfolio data from Supabase"
