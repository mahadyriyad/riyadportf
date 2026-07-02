/* ============================================================
   PORTFOLIO DEBUG SCRIPT - Run this in browser console (F12)
   ============================================================ */

async function runPortfolioDebug() {
    console.clear();
    console.log('%c🔍 PORTFOLIO DATA SYNC DEBUG TOOL', 'font-size:16px;font-weight:bold;color:#00ff00');
    console.log('=' .repeat(60));
    
    // TEST 1: Supabase Client Initialization
    console.log('\n%c✅ TEST 1: Supabase Client Initialization', 'font-weight:bold;color:#FFD700');
    if (window.supabaseClient) {
        console.log('✅ Supabase client is initialized');
        console.log('   Client:', window.supabaseClient.constructor.name);
    } else {
        console.error('❌ Supabase client NOT initialized!');
        console.log('   Action: Check if Supabase CDN loaded in HTML <head>');
    }
    
    // TEST 2: Data Function Availability
    console.log('\n%c✅ TEST 2: Data Functions Availability', 'font-weight:bold;color:#FFD700');
    const functions = ['getPortfolioData', 'savePortfolioData', 'saveContactMessage', 'getContactMessages'];
    let allFunctionsExist = true;
    functions.forEach(fn => {
        if (typeof window[fn] === 'function') {
            console.log(`✅ ${fn} is available`);
        } else {
            console.error(`❌ ${fn} is NOT available!`);
            allFunctionsExist = false;
        }
    });
    
    if (!allFunctionsExist) {
        console.log('   Action: Check if public/data.js is loaded in HTML');
    }
    
    // TEST 3: Fetch Data from Supabase
    console.log('\n%c✅ TEST 3: Fetching Portfolio Data', 'font-weight:bold;color:#FFD700');
    try {
        const startTime = Date.now();
        const data = await window.getPortfolioData();
        const duration = Date.now() - startTime;
        
        console.log(`✅ Data fetched successfully in ${duration}ms`);
        
        // Check for data presence
        console.log('\n   📊 Data Summary:');
        console.log(`      - Hero: ${data.hero ? '✅ Present' : '❌ Missing'}`);
        console.log(`      - Services: ${data.services?.length || 0} items`);
        console.log(`      - Skills: ${data.skills?.length || 0} items`);
        console.log(`      - Projects: ${data.projects?.length || 0} items`);
        console.log(`      - Certifications: ${data.certifications?.length || 0} items`);
        console.log(`      - Experience: ${data.experience?.length || 0} items`);
        console.log(`      - Education: ${data.education?.length || 0} items`);
        console.log(`      - Blog: ${data.blog?.length || 0} items`);
        console.log(`      - About: ${data.about ? '✅ Present' : '❌ Missing'}`);
        console.log(`      - Resume: ${data.resume ? '✅ Present' : '❌ Missing'}`);
        
        // Check if using Supabase or localStorage
        if (sessionStorage.getItem('supabase_unreachable') === 'true') {
            console.log('\n   ⚠️ Status: Using LOCAL STORAGE (Supabase unavailable)');
        } else {
            console.log('\n   ✅ Status: Using SUPABASE (Live data)');
        }
        
        // Log full data for inspection
        console.log('\n   📋 Full Data Object:');
        console.table(data);
        
        return { success: true, data };
        
    } catch (error) {
        console.error('❌ Failed to fetch data:', error.message);
        console.log('   Action: Check Supabase credentials and RLS policies');
        return { success: false, error };
    }
}

// Also provide a quick test for individual tables
async function testSupabaseTable(tableName) {
    if (!window.supabaseClient) {
        console.error('❌ Supabase client not initialized');
        return;
    }
    
    try {
        console.log(`\n🔍 Testing Supabase table: ${tableName}`);
        const { data, error, status } = await window.supabaseClient.from(tableName).select('*').limit(1);
        
        if (error) {
            console.error(`❌ Error reading ${tableName}:`, error);
            console.log(`   Status: ${status}`);
            if (status === 42501) {
                console.log('   💡 Tip: This is an RLS (Row Level Security) permission error. Run the RLS SQL setup from DEBUG_AND_FIX_GUIDE.md');
            }
        } else {
            console.log(`✅ Successfully read ${tableName} (${data?.length || 0} rows)`);
            if (data && data.length > 0) {
                console.table(data[0]);
            }
        }
    } catch (e) {
        console.error(`❌ Exception reading ${tableName}:`, e);
    }
}

// Test all tables
async function testAllTables() {
    console.clear();
    console.log('%c📊 TESTING ALL SUPABASE TABLES', 'font-size:16px;font-weight:bold;color:#00ff00');
    
    const tables = ['hero', 'services', 'skills', 'projects', 'certifications', 'experience', 'education', 'blog', 'about', 'resume'];
    
    for (const table of tables) {
        await testSupabaseTable(table);
    }
    
    console.log('\n' + '=' .repeat(60));
    console.log('✅ Table testing complete');
}

// Export helpers for manual use
window.debugPortfolio = {
    run: runPortfolioDebug,
    testTable: testSupabaseTable,
    testAllTables: testAllTables,
    data: () => window.getPortfolioData(),
    
    // Quick helpers
    check: async function() {
        console.log('Running comprehensive debug...');
        return await runPortfolioDebug();
    },
    
    // Test adding data
    testAddProject: async function() {
        try {
            if (!window.supabaseClient) {
                console.error('Supabase client not initialized');
                return;
            }
            
            const testProject = {
                title: 'DEBUG TEST PROJECT',
                description: 'This is a test project from browser console',
                category: 'test',
                is_active: true,
                image: 'https://via.placeholder.com/400x300?text=Test+Project',
                display_order: 999
            };
            
            const { data, error } = await window.supabaseClient
                .from('projects')
                .insert([testProject])
                .select();
            
            if (error) {
                console.error('❌ Failed to insert test project:', error);
            } else {
                console.log('✅ Successfully created test project:', data);
            }
        } catch (e) {
            console.error('Exception:', e);
        }
    }
};

console.log('\n%c⚡ DEBUG HELPER LOADED', 'color:cyan;font-weight:bold');
console.log('Usage:');
console.log('  1. runPortfolioDebug()  - Run full debug check');
console.log('  2. testAllTables()      - Test Supabase table access');
console.log('  3. testSupabaseTable("hero") - Test specific table');
console.log('  4. window.getPortfolioData() - Fetch current data');
console.log('  5. debugPortfolio.testAddProject() - Test adding data');
console.log('\n📍 Or use window.debugPortfolio.run() to start...\n');

// Auto-run on first load
console.log('%c🚀 AUTO-RUNNING INITIAL DEBUG', 'color:lightgreen;font-weight:bold');
runPortfolioDebug();
