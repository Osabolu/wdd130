// Image Verification Script
const fs = require('fs');
const path = require('path');

const htmlFiles = [
    'index.html',
    'wdd_week1/index.html', 
    'wdd_week2/temple.html'
];

htmlFiles.forEach(file => {
    console.log('Checking:', file);
    const content = fs.readFileSync(file, 'utf8');
    const imageRegex = /src=["']([^"']+)["']/g;
    let match;
    
    while ((match = imageRegex.exec(content)) !== null) {
        const imagePath = match[1];
        const fullPath = path.join(path.dirname(file), imagePath);
        console.log('  Image:', imagePath);
        console.log('  Exists:', fs.existsSync(fullPath));
        if (fs.existsSync(fullPath)) {
            const stats = fs.statSync(fullPath);
            console.log('  Size:', Math.round(stats.size / 1024) + ' KB');
        }
        console.log('  ---');
    }
});
