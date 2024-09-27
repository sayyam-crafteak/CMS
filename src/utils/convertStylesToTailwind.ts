const convertStylesToTailwind = (styles: any) => {
    const tailwindStyles = {fontSize : "" ,fontWeight : ""};
  
    // Convert fontSize to Tailwind class
    if (styles.fontSize) {
      const fontSize = parseInt(styles.fontSize.replace('px', ''), 10);
      switch (fontSize) {
        case 12:
            tailwindStyles.fontSize = 'text-xs';
          break;
        case 14:
          tailwindStyles['fontSize'] = 'text-sm';
          break;
        case 16:
          tailwindStyles['fontSize'] = 'text-base';
          break;
        case 18:
          tailwindStyles['fontSize'] = 'text-lg';
          break;
        case 20:
          tailwindStyles['fontSize'] = 'text-xl';
          break;
        // Add more cases as needed
      }
    }
  
    // // Convert fontWeight to Tailwind class
    // if (styles.fontWeight) {
    //   switch (styles.fontWeight) {
    //     case 400:
    //       tailwindStyles['fontWeight'] = 'font-normal';
    //       break;
    //     case 600:
    //       tailwindStyles['fontWeight'] = 'font-semibold';
    //       break;
    //     case 700:
    //       tailwindStyles['fontWeight'] = 'font-bold';
    //       break;
    //     // Add more cases as needed
    //   }
    // }
  
    // // Convert textColor to Tailwind class
    // if (styles.textColor) {
    //   const color = styles.textColor.replace('rgb(', '').replace(')', '').split(',');
    //   const r = parseInt(color[0].trim());
    //   const g = parseInt(color[1].trim());
    //   const b = parseInt(color[2].trim());
  
    //   // You can use a library like `tinycolor2` to convert RGB to Tailwind color
    //   // For simplicity, we'll just use a placeholder class here
    //   tailwindStyles['textColor'] = 'text-gray-500';
    // }
  
    // // Convert backgroundColor to Tailwind class
    // if (styles.backgroundColor) {
    //   // Similar conversion as textColor
    //   tailwindStyles['backgroundColor'] = 'bg-white';
    // }
  
    // // Convert textDecoration to Tailwind class
    // if (styles.textDecoration) {
    //   tailwindStyles['textDecoration'] = styles.textDecoration === 'underline' ? 'underline' : 'no-underline';
    // }
  
    // // Convert fontStyle to Tailwind class
    // if (styles.fontStyle) {
    //   tailwindStyles['fontStyle'] = styles.fontStyle === 'italic' ? 'italic' : 'normal';
    // }
  
    // Convert fontFamily to Tailwind class
    // Note: Tailwind does not provide font family classes by default
    // You would need to extend Tailwind with custom font families
  
    return tailwindStyles;
  };

  const styles = {fontSize : "24px"};
  const result = convertStylesToTailwind (styles);
  console.log("\n result : ", result);