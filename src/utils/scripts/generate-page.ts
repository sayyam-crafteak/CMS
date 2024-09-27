//JS CODE
// // Function to generate HTML elements
// export function generateHTML(obj, parentKey = '') {
//   let html = '';
//   for (const key in obj) {
//     const value = obj[key];
//     const [elementName, id] = key.split('-');

//     if (typeof value === 'object' && !Array.isArray(value)) {
//       if (elementName === 'heading') {
//         const tagName = value.type; // Remove the 'h' from 'h1', 'h2', etc.
//         html += `<${tagName}${id ? ` id="${elementName}-${id}"` : ''} className="${value.css}">${value.text}`;
//         html += generateHTML(value, key);
//         html += `</${tagName}>`;
//       } else if (['div', 'section', 'ul', 'a'].includes(elementName)) {
//         let attributes = id ? ` id="${elementName}-${id}"` : '';
//         if (elementName === 'a') {
//           attributes += ` href="${value.href}" target="${value.target}" rel="${value.rel}"`;
//         }
//         html += `<${elementName}${attributes} className="${value.css || ''}" style={${JSON.stringify(value.style)}}>`;
//         html += generateHTML(value, key);
//         html += `</${elementName}>`;
//       } else if (elementName === 'li') {
//         html += `<li className="${value.css}">${value.text}</li>`;
//       } else if (elementName === 'paragraph') {
//         html += `<p${id ? ` id="${elementName}-${id}"` : ''} className="${value.css}">${value.text}</p>`;
//       } else if (elementName === 'Image') {
//         html += `<Image${id ? ` id="${elementName}-${id}"` : ''} src="${value.src}" alt="${value.alt}" width={${value.width}} height={${value.height}} className="${value.css}"/>`;
//       }
//     } else if (Array.isArray(value)) {
//       value.forEach((item, index) => {
//         html += `<${elementName}${id ? ` id="${elementName}-${id}-${index}"` : ''}>`;
//         html += generateHTML(item, key);
//         html += `</${elementName}>`;
//       });
//     } else {
//       if (parentKey === 'text') {
//         html += value;
//       }
//     }
//   }
//   return html;
// }


//================ TS CODE ======================================================================
// export function generateHTML(obj: Record<string, any>, parentKey: string = ''): string {
//   let html: string = '';
//   for (const key in obj) {
//     const value: any = obj[key];
//     const [elementName, id]: string[] = key.split('-');

//     if (typeof value === 'object' && !Array.isArray(value)) {
//       if (elementName === 'heading') {
//         const tagName: string = value.type; 
//         html += `<${tagName}${id ? ` id="${elementName}-${id}"` : ''} className="${value.css}">${value.text}`;
//         html += generateHTML(value, key);
//         html += `</${tagName}>`;
//       } else if (['div', 'section', 'ul', 'a'].includes(elementName)) {
//         let attributes: string = id ? ` id="${elementName}-${id}"` : '';
//         if (elementName === 'a') {
//           attributes += ` href="${value.href}" target="${value.target}" rel="${value.rel}"`;
//         }
//         html += `<${elementName}${attributes} className="${value.css || ''}" style={${JSON.stringify(value.style)}}>`;
//         html += generateHTML(value, key);
//         html += `</${elementName}>`;
//       } else if (elementName === 'li') {
//         html += `<li className="${value.css}">${value.text}</li>`;
//       } else if (elementName === 'paragraph') {
//         html += `<p${id ? ` id="${elementName}-${id}"` : ''} className="${value.css}">${value.text}</p>`;
//       } else if (elementName === 'Image') {
//         html += `<Image${id ? ` id="${elementName}-${id}"` : ''} src="${value.src}" alt="${value.alt}" width={${value.width}} height={${value.height}} className="${value.css}"/>`;
//       }
//     } else if (Array.isArray(value)) {
//       value.forEach((item: any, index: number) => {
//         html += `<${elementName}${id ? ` id="${elementName}-${id}-${index}"` : ''}>`;
//         html += generateHTML(item, key);
//         html += `</${elementName}>`;
//       });
//     } else {
//       if (parentKey === 'text') {
//         html += value;
//       }
//     }
//   }
//   return html;
// }





// // Function to generate HTML elements
// export function generateHTML(obj:any, parentKey = '') {
//   let html = '';
//   for (const key in obj) {
//     const value = obj[key];
//     const [elementName, id] = key.split('-');

//     if (typeof value === 'object' && !Array.isArray(value)) {
//       if (elementName === 'heading') {
//         const tagName = value.type; // Remove the 'h' from 'h1', 'h2', etc.
//         html += `<${tagName}${id ? ` id="${elementName}-${id}"` : ''} className="${value.css}">${value.text}`;
//         html += generateHTML(value, key);
//         html += `</${tagName}>`;
//       } else if (['div', 'section', 'ul', 'a'].includes(elementName)) {
//         let attributes = id ? ` id="${elementName}-${id}"` : '';
//         if (elementName === 'a') {
//           attributes += ` href="${value.href}" target="${value.target}" rel="${value.rel}"`;
//         }
//         html += `<${elementName}${attributes} className="${value.css || ''}" style="{${JSON.stringify(value.style)}}">`;
//         html += generateHTML(value, key);
//         html += `</${elementName}>`;
//       } else if (elementName === 'li') {
//         html += `<li className="${value.css}">${value.text}</li>`;
//       } else if (elementName === 'paragraph') {
//         html += `<p${id ? ` id="${elementName}-${id}"` : ''} className="${value.css}">${value.text}</p>`;
//       } else if (elementName === 'Image') {
//         html += `<Image${id ? ` id="${elementName}-${id}"` : ''} src="${value.src}" alt="${value.alt}" width="${value.width}" height="${value.height}" className="${value.css}"/>`;
//       }
//     } else if (Array.isArray(value)) {
//       value.forEach((item, index) => {
//         html += `<${elementName}${id ? ` id="${elementName}-${id}-${index}"` : ''}>`;
//         html += generateHTML(item, key);
//         html += `</${elementName}>`;
//       });
//     } else {
//       if (parentKey === 'text') {
//         html += value;
//       }
//     }
//   }
//   return html;
// }


//=================CHATGPT===============================================================================================================
// Function to generate editable HTML elements little bit correct due to css is coming partial proper
// export function generateHTML(obj: any, onChange: (key: string, value: string) => void, parentKey = '', isEditMode = false) {
//   let html = '';
//   for (const key in obj) {
//     const value = obj[key];
//     const [elementName, id] = key.split('-');

//     if (typeof value === 'object' && !Array.isArray(value)) {
//       if (elementName === 'heading') {
//         const tagName = value.type;
//         html += `<${tagName}${id ? ` id="${elementName}-${id}"` : ''} class="${value.css}">`;
//         if (isEditMode) {
//           html += `<input type="text" value="${value.text}" onchange="handleChange('${key}', this.value)" class="editable-input" />`;
//         } else {
//           html += value.text;
//         }
//         html += generateHTML(value, onChange, key, isEditMode);
//         html += `</${tagName}>`;
//       } else if (['div', 'section', 'ul', 'a'].includes(elementName)) {
//         let attributes = id ? ` id="${elementName}-${id}"` : '';
//         if (elementName === 'a') {
//           attributes += ` href="${value.href}" target="${value.target}" rel="${value.rel}"`;
//         }
//         html += `<${elementName}${attributes} class="${value.css || ''}" style={${JSON.stringify(value.style)}}>`;
//         html += generateHTML(value, onChange, key, isEditMode);
//         html += `</${elementName}>`;
//       } else if (elementName === 'li') {
//         html += `<li class="${value.css}">${value.text}</li>`;
//       } else if (elementName === 'paragraph') {
//         if (isEditMode) {
//           html += `<textarea id="${elementName}-${id}" class="${value.css}" onchange="handleChange('${key}', this.value)">${value.text}</textarea>`;
//         } else {
//           html += `<p${id ? ` id="${elementName}-${id}"` : ''} class="${value.css}">${value.text}</p>`;
//         }
//       } else if (elementName === 'Image') {
//         html += `<Image${id ? ` id="${elementName}-${id}"` : ''} src="${value.src}" alt="${value.alt}" width="${value.width}" height="${value.height}" class="${value.css}"/>`;
//       }
//     }
//   }
//   return html;
// }


//Function to generate editable HTML elements this is accurate one but editing is not well implemented 
// export function generateHTML(
//   obj: any, 
//   onChange: (key: string, value: string) => void, 
//   parentKey = '', 
//   isEditMode = false
// ) {
//   let html = '';
  
//   for (const key in obj) {
//     const value = obj[key];
//     const [elementName, id] = key.split('-');

//     if (typeof value === 'object' && !Array.isArray(value)) {
//       // Helper function to format the style object correctly
//       const formatStyleObject = (styleObj: any) => {
//         return Object.entries(styleObj)
//           .map(([k, v]) => `${k}: ${v}`)
//           .join('; ');
//       };

//       // Check if a valid style object exists
//       const style = value.style && Object.keys(value.style).length > 0 
//         ? ` style="${formatStyleObject(value.style)}"` 
//         : ''; 

//       if (elementName === 'heading') {
//         const tagName = value.type;
//         html += `<${tagName}${id ? ` id="${elementName}-${id}"` : ''} class="${value.css}"${style}>`;
//         if (isEditMode) {
//           html += `<input type="text" value="${value.text}" onchange="handleChange('${key}', this.value)" class="editable-input" />`;
//         } else {
//           html += value.text;
//         }
//         html += generateHTML(value, onChange, key, isEditMode);
//         html += `</${tagName}>`;
//       } else if (['div', 'section', 'ul', 'a'].includes(elementName)) {
//         let attributes = id ? ` id="${elementName}-${id}"` : '';
//         if (elementName === 'a') {
//           attributes += ` href="${value.href}" target="${value.target}" rel="${value.rel}"`;
//         }
//         html += `<${elementName}${attributes} class="${value.css || ''}"${style}>`;
//         html += generateHTML(value, onChange, key, isEditMode);
//         html += `</${elementName}>`;
//       } else if (elementName === 'li') {
//         if (isEditMode) {
//           html += `<textarea id="${elementName}-${id}" class="bg-zinc-100 text-black rounded-lg sm:px-4 px-2 py-2 sm:w-full w-fit" onchange="handleChange('${key}', this.value)">${value.text}</textarea>`;
//         } else{
//           html += `<li class="${value.css}">${value.text}</li>`;
//         }
//       } else if (elementName === 'paragraph') {
//         if (isEditMode) {
//           html += `<textarea id="${elementName}-${id}" class="bg-zinc-100 text-black rounded-lg sm:px-4 px-2 py-2 w-fit" onchange="handleChange('${key}', this.value)">${value.text}</textarea>`;
//         } else {
//           html += `<p${id ? ` id="${elementName}-${id}"` : ''} class="${value.css}"${style}>${value.text}</p>`;
//         }
//       } else if (elementName === 'Image') {
//         html += `<Image${id ? ` id="${elementName}-${id}"` : ''} src="${value.src}" alt="${value.alt}" width="${value.width}" height="${value.height}" class="${value.css}"${style}/>`;
//       }
//     }
//   }
//   return html;
// }


//With Modal 
//Function to generate editable HTML elements
export function generateHTML(
  obj: any,
  openModal: (key: string, value: any) => void, // Pass function to open modal
  parentKey = '',
  isEditMode = false
) {
  let html = '';

  for (const key in obj) {
    const value = obj[key];
    const [elementName, id] = key.split('-');

    if (typeof value === 'object' && !Array.isArray(value)) {
      // Helper function to format the style object correctly
      const formatStyleObject = (styleObj: any) => {
        return Object.entries(styleObj)
          .map(([k, v]) => `${k}: ${v}`)
          .join('; ');
      };

      // Check if a valid style object exists
      const style = value.style && Object.keys(value.style).length > 0
        ? ` style="${formatStyleObject(value.style)}"`
        : '';

      // Add click handler to open modal for editing if in edit mode
      const clickHandler = isEditMode ? ` onclick="openModal('${key}', ${JSON.stringify(value)})"` : '';

      if (elementName === 'heading') {
        const tagName = value.type;
        html += `<${tagName}${id ? ` id="${elementName}-${id}"` : ''} class="${value.css}"${style} ${clickHandler}>${value.text}</${tagName}>`;
      } else if (elementName === 'paragraph') {
        html += `<p${id ? ` id="${elementName}-${id}"` : ''} class="${value.css}"${style} ${clickHandler}>${value.text}</p>`;
      } else if (elementName === 'div' || elementName === 'section' || elementName === 'ul' || elementName === 'a') {
        let attributes = id ? ` id="${elementName}-${id}"` : '';
        if (elementName === 'a') {
          attributes += ` href="${value.href}" target="${value.target}" rel="${value.rel}"`;
        }
        html += `<${elementName}${attributes} class="${value.css || ''}"${style} ${clickHandler}>`;
        html += generateHTML(value, openModal, key, isEditMode);
        html += `</${elementName}>`;
      } else if (elementName === 'li') {
        html += `<li${id ? ` id="${elementName}-${id}"` : ''} class="${value.css}"${style} ${clickHandler}>${value.text}</li>`;
      }
      else if (elementName === 'Image') {
        html += `<img${id ? ` id="${elementName}-${id}"` : ''} src="${value.src}" alt="${value.alt}" width="${value.width}" height="${value.height}" class="${value.css}"${style} ${clickHandler} />`;
      }
    }
  }

  return html;
}
