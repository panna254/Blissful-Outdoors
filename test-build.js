// Simple build test script
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function testBuild() {
  console.log('🔨 Testing production build...');
  
  try {
    const { stdout, stderr } = await execAsync('npm run build');
    
    if (stderr && !stderr.includes('warning')) {
      console.error('❌ Build failed with errors:');
      console.error(stderr);
      process.exit(1);
    }
    
    console.log('✅ Build completed successfully!');
    console.log(stdout);
    
    // Check if dist folder was created
    const fs = await import('fs');
    if (fs.existsSync('./dist')) {
      console.log('✅ Dist folder created successfully');
      
      // List contents of dist folder
      const distContents = fs.readdirSync('./dist');
      console.log('📁 Dist folder contents:', distContents);
    } else {
      console.log('❌ Dist folder not found');
    }
    
  } catch (error) {
    console.error('❌ Build test failed:', error.message);
    process.exit(1);
  }
}

testBuild();
