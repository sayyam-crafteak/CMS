export const hexToRgb = (hex:string) => {
    // Remove the leading '#' if present
    console.log("hex : ", hex);
    hex = hex.replace(/^#/,'');
  
    // Ensure the hex string is 6 characters long
    if (hex.length !== 6) {
      throw new Error('Invalid hex color: ' + hex);
    }
  
    // Convert each pair of characters to a decimal value
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
  
    const rgb_color = `rgb(${r},${g},${b})`;
    return rgb_color;
};