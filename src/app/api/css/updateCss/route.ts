// import { NextResponse } from 'next/server';
// import { promises as fs } from 'fs';
// import path from 'path';

// const removeStyles = (line: string, classNamesToRemove: string[]) => {
//     console.log("\n remoStyles -> line : ", line);

//     if (line.trim().startsWith('@apply')) {
//         const classes = line.match(/@apply (.*);/)?.[1].split(' ');
//         console.log("\n remoStyles -> classes : ", classes);
//         if (classes) {
//             console.log("\n remoStyles -> return line without ; : ", `@apply ${classes.filter(cls => !classNamesToRemove.includes(cls)).join(' ')}`);
//             console.log("\n remoStyles -> return line with ; : ", `@apply ${classes.filter(cls => !classNamesToRemove.includes(cls)).join(' ')};`)
//             return `@apply ${classes.filter(cls => !classNamesToRemove.includes(cls)).join(' ')};`;
//         }
//     }
//     else{
//         console.log("\n this is not the same line found we are looking for : ", line);
//     }
//     return line;
// };

// const addStyles = (line: string, classNamesToAdd: string[]) => {
//     if (line.trim().startsWith('@apply')) {
//         const classes = line.match(/@apply (.*)/)?.[1].split(' ');
//         if (classes) {
//             return `@apply ${[...new Set([...classes, ...classNamesToAdd])].join(' ')};`;
//         }
//     }
//     return line;
// };

// export async function POST(request: Request) {
//     try {
//         const { elementId, existingStyles, updatedStyles } = await request.json();

//         const filePath = path.join(process.cwd(), 'src', 'app', 'styles', 'home.css');

//         // Read the CSS file
//         const cssContent = await fs.readFile(filePath, 'utf-8');
//        // console.log("\n cssContent after reading : ", cssContent);
//         // Remove existing styles and add updated styles for the specific element ID
//         const updatedContent = cssContent.split('\n').map(line => {
//             if (line.trim().startsWith(`#${elementId}`)) {
//                 // Remove existing styles
//                 line = removeStyles(line, Object.values(existingStyles));

//                 // Add updated styles
//                 line = addStyles(line, Object.values(updatedStyles));
//             }
//             return line;
//         }).join('\n');

//         //console.log("\n updateContent : ", updatedContent);
//         // Write the updated CSS file
//       //  await fs.writeFile(filePath, updatedContent);

//         return NextResponse.json({ message: 'CSS file updated successfully.' });
//     } catch (error) {
//         console.error('Error updating CSS file:', error);
//         return NextResponse.json({ error: 'Error updating CSS file' }, { status: 500 });
//     }
// }


import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const removeStyles = (line: string, classNamesToRemove: string[]) => {
    console.log("\n removeStyles -> line : ", line);

    if (line.trim().startsWith('@apply')) {
        const classes = line.match(/@apply (.*)/)?.[1].split(' ');
        console.log("\n removeStyles -> classes : ", classes);
        console.log("\n classNametoremove : ", classNamesToRemove);
        if (classes) {
            //here existing match classes are removed
            console.log("\n removeStyles -> return line without ; : ", `@apply ${classes.filter(cls => !classNamesToRemove.includes(cls)).join(' ')}`);
            return `@apply ${classes.filter(cls => !classNamesToRemove.includes(cls)).join(' ')}`;
        }
    }
    else{
        console.log("\n this is not the same line found we are looking for : ", line);
    }
    return line;
};

const addStyles = (line: string, classNamesToAdd: string[]) => {
    if (line.trim().startsWith('@apply')) {
        const classes = line.match(/@apply (.*)/)?.[1].split(' ');
        if (classes) {
            console.log("\n addStyles line : ", `@apply ${[...new Set([...classes, ...classNamesToAdd])].join(' ')}`);
            return `@apply ${[...new Set([...classes, ...classNamesToAdd])].join(' ')}`;
        }
    }
    return line;
};

export async function POST(request: Request) {
    try {
        const { elementId, existingStyles, updatedStyles } = await request.json();

        const filePath = path.join(process.cwd(), 'src', 'app', 'styles', 'home.css');

        // Read the CSS file
        const cssContent = await fs.readFile(filePath, 'utf-8');
       // console.log("\n cssContent after reading : ", cssContent);
        // Remove existing styles and add updated styles for the specific element ID
        const lines = cssContent.split('\n');
        const updatedContent = lines.map((line, index) => {
            if (line.trim().startsWith(`#${elementId}`)) {
                const nextLine = lines[index + 1];
                if (nextLine && nextLine.trim().startsWith('@apply')) {
                    // Remove existing styles
                    lines[index + 1] = removeStyles(nextLine, Object.values(existingStyles));

                    // Add updated styles
                    lines[index + 1] = addStyles(lines[index + 1], Object.values(updatedStyles));
                }
            }
            return line;
        }).join('\n');

        console.log("\n updateContent : ", updatedContent);
        // Write the updated CSS file
      //  await fs.writeFile(filePath, updatedContent);

        return NextResponse.json({ message: 'CSS file updated successfully.' });
    } catch (error) {
        console.error('Error updating CSS file:', error);
        return NextResponse.json({ error: 'Error updating CSS file' }, { status: 500 });
    }
}
