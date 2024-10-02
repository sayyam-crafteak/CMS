// import fs from 'fs';

// const removeStyles = (line: string, classNamesToRemove: string[]) => {
//   if (line.trim().startsWith('@apply')) {
//     const classes = line.match(/@apply (.*);/)?.[1].split(' ');
//     if (classes) {
//       return `@apply ${classes.filter(cls => !classNamesToRemove.includes(cls)).join(' ')};`;
//     }
//   }
//   return line;
// };

// const addStyles = (line: string, classNamesToAdd: string[]) => {
//   if (line.trim().startsWith('@apply')) {
//     const classes = line.match(/@apply (.*);/)?.[1].split(' ');
//     if (classes) {
//       return `@apply ${[...new Set([...classes, ...classNamesToAdd])].join(' ')};`;
//     }
//   }
//   return line;
// };

// export const updateCSSFile = (filePath: string, elementId: string, existingStyles: Record<string, string>, updatedStyles: Record<string, string>) => {
//   try {
//     // Check if the file exists before reading it
//     console.log("\n file path : ", filePath);
//     if (!fs.existsSync(filePath)) {
//       console.log(`CSS file not found: ${filePath}`);
//     }
//     // Read the CSS file
//     const cssContent = fs.readFileSync(filePath, 'utf8');

//     // Remove existing styles and add updated styles for the specific element ID
//     const updatedContent = cssContent.split('\n').map(line => {
//       if (line.trim().startsWith(`#${elementId}`)) {
//         // Remove existing styles
//         line = removeStyles(line, Object.values(existingStyles));

//         // Add updated styles
//         line = addStyles(line, Object.values(updatedStyles));
//       }
//       return line;
//     }).join('\n');

//     // Write the updated CSS file
//     fs.writeFileSync(filePath, updatedContent);

//     console.log('CSS file updated successfully.');
//   } catch (error) {
//     console.error('Error updating CSS file:', error);
//   }
// };


import fs from 'fs';

const removeStyles = (line: string, classNamesToRemove: string[]) => {
  if (line.trim().startsWith('@apply')) {
    const classes = line.match(/@apply (.*);/)?.[1].split(' ');
    if (classes) {
      return `@apply ${classes.filter(cls => !classNamesToRemove.includes(cls)).join(' ')};`;
    }
  }
  return line;
};

const addStyles = (line: string, classNamesToAdd: string[]) => {
  if (line.trim().startsWith('@apply')) {
    const classes = line.match(/@apply (.*);/)?.[1].split(' ');
    if (classes) {
      return `@apply ${[...new Set([...classes, ...classNamesToAdd])].join(' ')};`;
    }
  }
  return line;
};

export const updateCSSFile = (filePath: string, elementId: string, existingStyles: Record<string, string>, updatedStyles: Record<string, string>) => {
  try {
    // Check if the file exists before reading it
    console.log("\nFile path:", filePath);
    if (!fs.existsSync(filePath)) {
      console.error(`CSS file not found: ${filePath}`);
      return; // Exit early if the file does not exist
    }

    // Read the CSS file
    const cssContent = fs.readFileSync(filePath, 'utf8');

    // Remove existing styles and add updated styles for the specific element ID
    const updatedContent = cssContent.split('\n').map(line => {
      if (line.trim().startsWith(`#${elementId}`)) {
        // Remove existing styles
        line = removeStyles(line, Object.values(existingStyles));

        // Add updated styles
        line = addStyles(line, Object.values(updatedStyles));
      }
      return line;
    }).join('\n');

    // Write the updated CSS file
    fs.writeFileSync(filePath, updatedContent);

    console.log('CSS file updated successfully.');
  } catch (error) {
    console.error('Error updating CSS file:', error);
  }
};