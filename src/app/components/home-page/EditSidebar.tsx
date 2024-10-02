// import React, { useState, useEffect } from 'react';
// import { Slider, Switch, Autocomplete, AutocompleteItem, Divider } from "@nextui-org/react";
// import { SketchPicker } from 'react-color';
// import { FaArrowLeft } from 'react-icons/fa';
// import { CgColorPicker } from "react-icons/cg";
// import { BiSolidColorFill } from "react-icons/bi";

// const EditSidebar = ({ show, onClose, onSave, value, styles }: any) => {
//   console.log("\n value : ", value);
//   console.log("\n css styles : ", styles);

//   // Extract font size without the 'px' unit
//   const extractFontSize = (fontSize: string) => {
//     return parseInt(fontSize.replace('px', ''), 10);
//   };

//   const [formData, setFormData] = useState({
//     text: '',
//     style: {
//       fontSize: '16px', // Store as string with 'px'
//       fontWeight: 400,
//       fontFamily: 'Arial',
//       fontStyle: 'normal',
//       textDecoration: 'none',
//       color: '#000000',
//       backgroundColor: '#ffffff',
//     },
//     ...value,
//   });

//   const [showTextColorPicker, setShowTextColorPicker] = useState(false);
//   const [showBgColorPicker, setShowBgColorPicker] = useState(false);

//   useEffect(() => {
//     setFormData({
//       text: '',
//       style: {
//         ...styles,
//       },
//       ...value,
//     });
//   }, [value, styles]);

//   if (!show) return null;

//   const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
//     const { name, value } = e.target;
//     const [field, subfield] = name.split('.');

//     setFormData((prevFormData: any) => ({
//       ...prevFormData,
//       [field]: subfield
//         ? {
//             ...prevFormData[field],
//             [subfield]: value,
//           }
//         : value,
//     }));
//   };

//   // Function to check if the current font style is italic
//   const isFontStyleItalic = () => formData.style.fontStyle === 'italic';

//   const handleFontStyleChange = (isSelected: boolean) => {
//     setFormData((prev: { style: any }) => ({
//       ...prev,
//       style: { ...prev.style, fontStyle: isSelected ? 'italic' : 'normal' },
//     }));
//   };

//   // Function to check if the current text decoration is underline
//   const isTextUnderlined = () => formData.style.textDecoration === 'underline';

//   // Function to handle the underline toggle
//   const handleTextDecorationChange = (isSelected: boolean) => {
//     setFormData((prev: { style: any }) => ({
//       ...prev,
//       style: { ...prev.style, textDecoration: isSelected ? 'underline' : 'none' },
//     }));
//   };

//   const handleColorChange = (color: any, field: string) => {
//     setFormData((prevFormData: any) => ({
//       ...prevFormData,
//       style: {
//         ...prevFormData.style,
//         [field]: color.hex,
//       },
//     }));
//   };

//   const handleFontSizeSliderChange = (value: number, field: string) => {
//     setFormData((prevFormData: any) => ({
//       ...prevFormData,
//       style: {
//         ...prevFormData.style,
//         [field]: `${value}px`, // Store value as 'px'
//       },
//     }));
//   };

//   const handleFontWeightSliderChange = (value: number, field: string) => {
//     setFormData((prevFormData: any) => ({
//       ...prevFormData,
//       style: {
//         ...prevFormData.style,
//         [field]:value, 
//       },
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSave(formData);
//   };

//   const fontFamilies = ['Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Georgia', 'Verdana'];

//   return (
//     <div className={`fixed inset-0 bg-zinc-700 bg-opacity-60 flex justify-end items-start z-50 transition ease-in-out duration-500 transform ${show ? 'translate-x-0' : 'translate-x-full'}`}>
//       <div className="bg-black/50 backdrop-blur-lg text-white w-full sm:w-[400px] h-full shadow-lg transition ease-in-out duration-500 transform overflow-y-auto">
//         <div className="bg-purple-700 text-white px-6 py-4 flex items-center">
//           <button className="mr-4" onClick={onClose}>
//             <FaArrowLeft className="text-xl" /> {/* Back button */}
//           </button>
//           <h2 className="text-lg font-semibold">Edit Element</h2>
//         </div>

//         <form className="px-6 py-4" onSubmit={handleSubmit}>
//           <div className="">
//             <h3 className="text-md font-semibold mb-2">Text Content</h3>
//             <textarea
//               id="text"
//               name="text"
//               value={formData.text}
//               onChange={handleInputChange}
//               className="border-2 border-zinc-600 p-2 w-full mb-4 h-32 rounded-xl bg-transparent"
//             ></textarea>
//           </div>

//           <Divider className="mb-4 bg-zinc-600" />

//           <Autocomplete
//             label={<span className="text-white opacity-90">Font Family</span>}
//             placeholder="Select or search font family"
//             variant="bordered"
//             color="secondary"
//             className="mb-4"
//             onSelect={(value: any) =>
//               setFormData((prev: { style: any }) => ({
//                 ...prev,
//                 style: { ...prev.style, fontFamily: value },
//               }))
//             }
//             initialValue={formData.style.fontFamily}
//           >
//             {fontFamilies.map((family) => (
//               <AutocompleteItem key={family} value={family}>
//                 {family}
//               </AutocompleteItem>
//             ))}
//           </Autocomplete>

//           <Divider className="mb-4 bg-zinc-600" />

//           <div className="mb-6">
//             <h3 className="text-md font-semibold mb-3">Text Styling</h3>
//             {/* Italic Switch */}
//             <div className="flex justify-between mb-4 py-1">
//               <label className={`mr-4 ${isFontStyleItalic() ? 'text-white' : 'opacity-60'}`}>Italic</label>
//               <Switch
//                 size='sm'
//                 color="secondary"
//                 isSelected={isFontStyleItalic()}  // Using isSelected instead of checked
//                 onValueChange={handleFontStyleChange} // Using onValueChange instead of onChange
//               />
//             </div>

//             {/* Underline Switch */}
//             <div className="flex justify-between mb-4 py-1">
//             <label className={`mr-4 ${isTextUnderlined()? 'text-white' : 'opacity-60'}`}>Underline</label>
//               <Switch
//                 size='sm'
//                 color="secondary"
//                 isSelected={isTextUnderlined()}  // Use isSelected instead of checked
//                 onValueChange={handleTextDecorationChange} // Use onValueChange instead of onChange
//               />
//             </div>

//             {/* Font Size Slider */}
//             <div className="mb-3">
//               <Slider
//                 size="md"
//                 label="Font Size"
//                 color="secondary"
//                 showTooltip={true}
//                 showSteps={true}
//                 minValue={12}
//                 maxValue={96}
//                 step={2}
//                 value={extractFontSize(formData.style.fontSize)} // Extract the numeric part
//                 onChange={(value) => handleFontSizeSliderChange(value as number, 'fontSize')}
//               />
//             </div>

//             {/* Font Weight Slider */}
//             <div className="mb-3">
//               <Slider
//                 size="md"
//                 label="Font Weight"
//                 color="secondary"
//                 showTooltip={true}
//                 showSteps={true}
//                 minValue={100}
//                 maxValue={900}
//                 step={100}
//                 value={formData.style.fontWeight}
//                 onChange={(value) => handleFontWeightSliderChange(value as number, 'fontWeight')}
//               />
//             </div>

//             {/* Text Color Picker */}
//             <div className="flex justify-between mb-4 py-1">
//               <label htmlFor="style.color" className="block mb-2">
//                 Text Color
//               </label>
//               <button
//                 type="button"
//                 onClick={() => setShowTextColorPicker(!showTextColorPicker)}
//                 className="hover:bg-zinc-600 text-white px-3 py-2 rounded-lg border-2 border-zinc-600"
//               >
//                 <CgColorPicker />
//               </button>
//               {showTextColorPicker && (
//                 <div className="absolute z-50 mt-2">
//                   <SketchPicker className='text-black' color={formData.style.color} onChange={(color) => handleColorChange(color, 'color')} />
//                 </div>
//               )}
//             </div>
//           </div>

//           <Divider className="mb-4 bg-zinc-600" />

//           <div className="mb-6">
//             <h3 className="text-md font-semibold mb-3">Background Styling</h3>
//             <div className="flex justify-between mb-4 py-1">
//               <label htmlFor="style.backgroundColor" className="block mb-2">
//                 Background Color
//               </label>
//               <button
//                 type="button"
//                 onClick={() => setShowBgColorPicker(!showBgColorPicker)}
//                 className="hover:bg-zinc-600 text-white px-3 py-2 rounded-lg border-2 border-zinc-600"
//               >
//                 <BiSolidColorFill />
//               </button>
//               {showBgColorPicker && (
//                 <div className="absolute z-50 mt-2">
//                   <SketchPicker className='text-black' color={formData.style.backgroundColor} onChange={(color) => handleColorChange(color, 'backgroundColor')} />
//                 </div>
//               )}
//             </div>
//           </div>

//           <Divider className="mb-4 bg-zinc-600" />

//           <div className="flex justify-end">
//             <button
//               type="reset" value="Reset"
//               className="hover:bg-red-500  text-white px-4 py-2 mr-2 rounded-lg"
//             >
//               Reset
//             </button>
//             <button
//               type="submit"
//               className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg "
//             >               Apply Changes
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditSidebar;

//=================================== Live Preview =====================================================
// import React, { useState, useEffect } from 'react';
// import { Slider, Switch, ScrollShadow, Autocomplete, AutocompleteItem, Divider, Accordion, AccordionItem, Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
// import { SketchPicker } from 'react-color';
// import { FaArrowLeft } from 'react-icons/fa';
// import { CgColorPicker } from "react-icons/cg";
// import { BiSolidColorFill } from "react-icons/bi";
// import { GrPowerReset } from "react-icons/gr";
// import { FaEye } from "react-icons/fa";

// const EditSidebar = ({ show, onClose, onSave, value, styles }: any) => {
//   // console.log("\n value : ", value);
//   // console.log("\n css styles : ", styles);

//   // Extract font size without the 'px' unit
//   const extractFontSize = (fontSize: string) => {
//     return parseInt(fontSize.replace('px', ''), 10);
//   };

//   const [formData, setFormData] = useState({
//     text: '',
//     style: {
//       fontSize: '16px', // Store as string with 'px'
//       fontWeight: 400,
//       fontFamily: 'Arial',
//       fontStyle: 'normal',
//       textDecoration: 'none',
//       color: '#000000',
//       backgroundColor: '#ffffff',
//     },
//     ...value,
//   });

//   useEffect(() => {
//     setFormData({
//       text: '',
//       style: {
//         ...styles,
//       },
//       ...value,
//     });
//     if (show) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//   }, [value, styles, show]);

//   if (!show) return null;
  
//   const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
//     const { name, value } = e.target;
//     const [field, subfield] = name.split('.');

//     setFormData((prevFormData: any) => ({
//       ...prevFormData,
//       [field]: subfield
//         ? {
//             ...prevFormData[field],
//             [subfield]: value,
//           }
//         : value,
//     }));
//   };

//   const isFontStyleItalic = () => formData.style.fontStyle === 'italic';

//   const handleFontStyleChange = (isSelected: boolean) => {
//     setFormData((prev: { style: any }) => ({
//       ...prev,
//       style: { ...prev.style, fontStyle: isSelected ? 'italic' : 'normal' },
//     }));
//   };

//   const isTextUnderlined = () => formData.style.textDecoration === 'underline';

//   const handleTextDecorationChange = (isSelected: boolean) => {
//     setFormData((prev: { style: any }) => ({
//       ...prev,
//       style: { ...prev.style, textDecoration: isSelected ? 'underline' : 'none' },
//     }));
//   };

//   const handleColorChange = (color: any, field: string) => {
//     setFormData((prevFormData: any) => ({
//       ...prevFormData,
//       style: {
//         ...prevFormData.style,
//         [field]: color.hex,
//       },
//     }));
//   };

//   const handleFontSizeSliderChange = (value: number, field: string) => {
//     setFormData((prevFormData: any) => ({
//       ...prevFormData,
//       style: {
//         ...prevFormData.style,
//         [field]: `${value}px`, // Store value as 'px'
//       },
//     }));
//   };

//   const handleFontWeightSliderChange = (value: number, field: string) => {
//     setFormData((prevFormData: any) => ({
//       ...prevFormData,
//       style: {
//         ...prevFormData.style,
//         [field]: value,
//       },
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSave(formData);
//   };

//   const preview_itemClasses = {
//     base: "py-0 w-full px-0",
//     title: "font-normal text-medium font-semibold",
//     trigger: "px-2 py-3 data-[hover=true]:bg-default-600 data-[open=true]:bg-default-700 rounded-lg flex items-center",
//   };

//   const itemClasses = {
//     base: "py-0 w-full px-0",
//     title: "font-normal text-medium font-semibold",
//     trigger: "px-2 py-0 data-[hover=true]:bg-default-600 data-[open=true]:bg-default-700 rounded-lg h-12 flex items-center",
//     indicator: "text-smaller font-semibold",
//     content: "text-medium px-2",
//   };

//   const fontFamilies = ['Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Georgia', 'Verdana'];

//   return (
//     <div className={`fixed inset-0 bg-zinc-700 bg-opacity-60 flex justify-end items-start z-50 transition duration-700 transform  ease-in-out ${show ? 'translate-x-0' : 'translate-x-full'}`}>
//       <div className="bg-black/50 backdrop-blur-lg text-white w-full sm:w-[400px] h-full shadow-lg transition duration-700  ease-in-out overflow-hidden flex flex-col">
//         <div className="bg-purple-700 text-white px-6 py-4 flex items-center mb-2">
//           <button className="mr-4" onClick={onClose}>
//             <FaArrowLeft className="text-xl" />
//           </button>
//           <h2 className="text-lg font-semibold">Edit Element</h2>
//         </div>
//         {/* Preview Section */}
//         <div className="flex-shrink-0">
//           <Accordion variant="bordered" className='px-4' itemClasses={preview_itemClasses}>
//             <AccordionItem 
//               key="1" 
//               aria-label="Live Preview"         
//               startContent={
//                 <FaEye className="text-default" />
//               } 
//               title="Preview">
//               <div className="rounded-xl">
//                 <div
//                   className="break-words px-2 py-1 rounded-xl text-white hover:border-2 hover:border-purple-500"
//                   style={{
//                     fontSize: formData.style.fontSize,
//                     fontWeight: formData.style.fontWeight,
//                     fontFamily: formData.style.fontFamily,
//                     fontStyle: formData.style.fontStyle,
//                     textDecoration: formData.style.textDecoration,
//                     color: formData.style.color,
//                     backgroundColor: formData.style.backgroundColor,
//                   }}
//                 >
//                   {formData.text || 'Your live preview will appear here.'}
//                 </div>
//               </div>
//             </AccordionItem>
//           </Accordion>
//         </div>
//         <Divider className="my-2 bg-zinc-600" />

//         <ScrollShadow size={15}>
//         <div className='overflow-y-auto flex-grow pt-2 pb-4'>
//           <form className="" onSubmit={handleSubmit}>
//             <Accordion selectionMode="multiple" variant="bordered" itemClasses={itemClasses}>
//               {/* Text Content Accordion */}
//               <AccordionItem key="1" title="Text Content" className='px-0'>
//                 <div className="">
//                   <textarea
//                     id="text"
//                     name="text"
//                     value={formData.text}
//                     onChange={handleInputChange}
//                     className="border-2 border-zinc-600 p-2 w-full mb-4 h-32 rounded-xl bg-transparent caret-purple-500"
//                   ></textarea>
//                 </div>
//               </AccordionItem>

//               <AccordionItem key="2" title="Font Family" className='px-0'>
//                 <Autocomplete
//                   label={<span className="text-white opacity-90">Font Family</span>}
//                   placeholder="Select or search font family"
//                   variant="bordered"
//                   color="secondary"
//                   className="mb-4"
//                   onSelect={(value: any) =>
//                     setFormData((prev: { style: any }) => ({
//                       ...prev,
//                       style: { ...prev.style, fontFamily: value },
//                     }))
//                   }
//                   initialValue={formData.style.fontFamily}
//                 >
//                   {fontFamilies.map((family) => (
//                     <AutocompleteItem key={family} value={family}>
//                       {family}
//                     </AutocompleteItem>
//                   ))}
//                 </Autocomplete>
//               </AccordionItem>

//               {/* Text Styling Accordion */}
//               <AccordionItem key="3" title="Text Styling" className='px-0'>
//                 <div className="mb-6">
//                   <div className="flex justify-between mb-4 py-1">
//                     <label className={`mr-4 ${isFontStyleItalic() ? 'text-white' : 'opacity-60'}`}>
//                       Italic
//                     </label>
//                     <Switch
//                       size="sm"
//                       color="secondary"
//                       isSelected={isFontStyleItalic()}
//                       onValueChange={handleFontStyleChange}
//                     />
//                   </div>

//                   <div className="flex justify-between mb-4 py-1" >
//                     <label className={`mr-4 ${isTextUnderlined() ? 'text-white' : 'opacity-60'}`}>
//                       Underline
//                     </label>
//                     <Switch
//                       size="sm"
//                       color="secondary"
//                       isSelected={isTextUnderlined()}
//                       onValueChange={handleTextDecorationChange}
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <Slider
//                       size="md"
//                       label="Font Size"
//                       color="secondary"
//                       showTooltip={true}
//                       showSteps={true}
//                       minValue={12}
//                       maxValue={96}
//                       step={2}
//                       value={extractFontSize(formData.style.fontSize)}
//                       onChange={(value) => handleFontSizeSliderChange(value as number, 'fontSize')}
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <Slider
//                       size="md"
//                       label="Font Weight"
//                       color="secondary"
//                       showTooltip={true}
//                       showSteps={true}
//                       minValue={100}
//                       maxValue={900}
//                       step={100}
//                       value={formData.style.fontWeight}
//                       onChange={(value) => handleFontWeightSliderChange(value as number, 'fontWeight')}
//                     />
//                   </div>
                  
//                   <div className="flex justify-between mb-2 py-1">
//                     <label htmlFor="style.color" className="block">Text Color</label>
//                     <Popover placement="left" showArrow={true}>
//                       <PopoverTrigger>
//                         <Button
//                           onClick={() => { }}
//                           className="hover:bg-zinc-600 text-white bg-transparent rounded-lg border-2 border-zinc-600"
//                         >
//                           <CgColorPicker className='w-4 h-5'/>
//                         </Button>
//                       </PopoverTrigger>
//                       <PopoverContent className='bg-transparent p-0'>
//                         <SketchPicker
//                           className="text-black"
//                           color={formData.style.color}
//                           onChange={(color) => handleColorChange(color, 'color')}
//                         />
//                       </PopoverContent>
//                     </Popover>
//                   </div>
//                 </div>
//               </AccordionItem>

//               {/* Background Accordion */}
//               <AccordionItem key="4" title="Background Styling" className='px-0'>
//                 <div>
//                   <div className="flex justify-between py-1 ">
//                     <label htmlFor="style.backgroundColor" className="block mb-2">Background Color</label>
//                     <Popover placement="left" showArrow={true}>
//                       <PopoverTrigger>
//                         <Button
//                           onClick={() => { }}
//                           className="hover:bg-zinc-600 text-white px-1 py-2 bg-transparent rounded-lg border-2 border-zinc-600"
//                         >
//                           <BiSolidColorFill className='w-4 h-5'/>
//                         </Button>
//                       </PopoverTrigger>
//                       <PopoverContent className='bg-transparent p-0'>
//                         <SketchPicker
//                           className="text-black"
//                           color={formData.style.backgroundColor}
//                           onChange={(color) => handleColorChange(color, 'backgroundColor')}
//                         />
//                       </PopoverContent>
//                     </Popover>
//                   </div>
//                 </div>
//               </AccordionItem>
//             </Accordion>

//             <Divider className="my-2 bg-zinc-600" />
//             <div className="flex justify-between items-stretch px-4 py-2">
//               <Button
//                 type="reset"
//                 value="reset"
//                 variant='light'
//                 className="text-white border-2 border-zinc-600 w-full px-4 py-2 mr-2 rounded-lg font-semibold text-md"
//               >
//                 <GrPowerReset className='w-4 h-4'/>
//                 Reset all
//               </Button>
//               <Button
//                 type="submit"
//                 variant='solid'
//                 color='secondary'
//                 className="hover:bg-purple-600 text-white w-full px-4 py-2 rounded-lg font-semibold text-md"
//               >
//                 Apply Changes
//               </Button>
//             </div>
//           </form>
//         </div>
//         </ScrollShadow>
//       </div>
//     </div>
//   );
// };

// export default EditSidebar;


import React, { useState, useEffect } from 'react';
import { Slider, Switch, ScrollShadow, Autocomplete, AutocompleteItem, Divider, Accordion, AccordionItem, Popover, PopoverTrigger, PopoverContent, Button, Tooltip } from "@nextui-org/react";
import { SketchPicker } from 'react-color';
import { FaArrowLeft } from 'react-icons/fa';
import { CgColorPicker } from "react-icons/cg";
import { BiSolidColorFill } from "react-icons/bi";
import { GrPowerReset } from "react-icons/gr";
import { FaEye } from "react-icons/fa";

const EditSidebar = ({ show, onClose, onSave, value, styles }: any) => {
  // console.log("\n value : ", value);
 // console.log("\n css styles : ", styles);
  const [sidebarWidth, setSidebarWidth] = useState(400); // initial width for desktop
  const [isResizing, setIsResizing] = useState(false);
  
  const startResizing = () => {
    if (window.innerWidth > 768) { // Only allow resizing for screens larger than 768px
      setIsResizing(true);
    }
  };
  
  const resizeSidebar = (e: { clientX: number; }) => {
    if (isResizing && window.innerWidth > 768) {
      // Calculate the new width based on the distance from the right side of the screen
      const newWidth = Math.min(Math.max(window.innerWidth - e.clientX, 370), window.innerWidth / 2); // min: 300px, max: 50% of viewport
      setSidebarWidth(newWidth);
    }
  };
  // Extract font size without the 'px' unit
  const extractFontSize = (fontSize: string) => {
    return parseInt(fontSize.replace('px', ''), 10);
  };

  const [formData, setFormData] = useState({
    text: '',
    style: {
      fontSize: '16px', // Store as string with 'px'
      fontWeight: 400,
      fontFamily: 'Arial',
      fontStyle: 'normal',
      textDecoration: 'none',
      textColor: '#000000',
      backgroundColor: '#ffffff',
    },
    ...value,
  });

// here, we used two different hooks because if we put the side resizing in other hoook it is affecting the current states of stored value fo form fields.
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  
    const stopResizing = () => setIsResizing(false);
    window.addEventListener('mousemove', resizeSidebar);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resizeSidebar);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [show, isResizing]);
  
  useEffect(() => {
    setFormData({
      text: '',
      style: {
        ...styles,
      },
      ...value,
    });
  }, [value, styles]);

  if (!show) return null;
  
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    const [field, subfield] = name.split('.');

    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [field]: subfield
        ? {
            ...prevFormData[field],
            [subfield]: value,
          }
        : value,
    }));
  };

  const isFontStyleItalic = () => formData.style.fontStyle === 'italic';

  const handleFontStyleChange = (isSelected: boolean) => {
    setFormData((prev: { style: any }) => ({
      ...prev,
      style: { ...prev.style, fontStyle: isSelected ? 'italic' : 'normal' },
    }));
  };

  const isTextUnderlined = () => formData.style.textDecoration === 'underline';

  const handleTextDecorationChange = (isSelected: boolean) => {
    setFormData((prev: { style: any }) => ({
      ...prev,
      style: { ...prev.style, textDecoration: isSelected ? 'underline' : 'none' },
    }));
  };

  const handleColorChange = (color: any, field: string) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      style: {
        ...prevFormData.style,
        [field]: color.hex,
      },
    }));
  };

  const handleFontSizeSliderChange = (value: number, field: string) => {
    
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      style: {
        ...prevFormData.style,
        [field]: `${value}px`, // Store value as 'px'
      },
    }));
  };

  const handleFontWeightSliderChange = (value: number, field: string) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      style: {
        ...prevFormData.style,
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("\n fromdata : ", formData);
    onSave(formData);
  };

  const preview_itemClasses = {
    base: "py-0 w-full px-0",
    title: "font-normal text-medium font-semibold",
    trigger: "px-2 py-3 data-[hover=true]:bg-default-600 data-[open=true]:bg-default-700 rounded-lg flex items-center",
  };

  const itemClasses = {
    base: "py-0 w-full px-0",
    title: "font-normal text-medium font-semibold",
    trigger: "px-2 py-0 data-[hover=true]:bg-default-600 data-[open=true]:bg-default-700 rounded-lg h-12 flex items-center",
    indicator: "text-smaller font-semibold",
    content: "text-medium px-2",
  };

  const fontFamilies = ['Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Georgia', 'Verdana'];

  return (
    <div className={`fixed inset-0 bg-zinc-700 bg-opacity-60 flex justify-end items-start z-50 transition duration-700 transform  ease-in-out ${show ? 'translate-x-0' : 'translate-x-full'}`}>
      <div 
        style={{ width: window.innerWidth > 768 ? sidebarWidth : '100%' }} 
        className="bg-black/50 backdrop-blur-lg text-white w-full sm:w-[400px] h-full shadow-lg transition duration-700  ease-in-out overflow-hidden flex flex-col">
        <div className="bg-purple-700 text-white px-6 py-4 flex items-center mb-2">
          <Tooltip content="Back" placement="top" className="font-semibold">
            <button className="mr-4" onClick={onClose}>
              <FaArrowLeft className="text-xl" />
            </button>
          </Tooltip>
          <h2 className="text-lg font-semibold select-none">Edit Element</h2>
        </div>
        {/* Preview Section */}
        <div className="flex-shrink-0">
          <Accordion variant="bordered" className='px-4' itemClasses={preview_itemClasses}>
            <AccordionItem 
              key="1" 
              aria-label="Live Preview"         
              startContent={
                <FaEye className="text-default" />
              } 
              title="Preview">
              <div className="rounded-xl">
                <div
                  className="break-words px-2 py-1 rounded-xl text-white hover:border-2 hover:border-purple-500"
                  style={{
                    fontSize: formData.style.fontSize,
                    fontWeight: formData.style.fontWeight,
                    fontFamily: formData.style.fontFamily,
                    fontStyle: formData.style.fontStyle,
                    textDecoration: formData.style.textDecoration,
                    color: formData.style.color,
                    backgroundColor: formData.style.backgroundColor,
                  }}
                >
                  {formData.text || 'Your live preview will appear here.'}
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <Divider className="my-2 bg-zinc-600" />

        <ScrollShadow size={15}>
        <div className='overflow-y-auto flex-grow pt-2 pb-4'>
          <form className="" onSubmit={handleSubmit}>
            <Accordion selectionMode="multiple" variant="bordered" itemClasses={itemClasses}>
              {/* Text Content Accordion */}
              <AccordionItem key="1" title="Text Content" className='px-0 select-none'>
                <div className="">
                  <textarea
                    id="text"
                    name="text"
                    value={formData.text}
                    onChange={handleInputChange}
                    className="border-2 border-zinc-600 p-2 w-full mb-4 h-32 rounded-xl bg-transparent caret-purple-500"
                  ></textarea>
                </div>
              </AccordionItem>

              <AccordionItem key="2" title="Font Family" className='px-0'>
                <Autocomplete
                  label={<span className="text-white opacity-90 select-none">Font Family</span>}
                  placeholder="Select or search font family"
                  variant="bordered"
                  color="secondary"
                  className="mb-4"
                  onSelect={(value: any) =>
                    setFormData((prev: { style: any }) => ({
                      ...prev,
                      style: { ...prev.style, fontFamily: value },
                    }))
                  }
                  initialValue={formData.style.fontFamily}
                >
                  {fontFamilies.map((family) => (
                    <AutocompleteItem key={family} value={family}>
                      {family}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
              </AccordionItem>

              {/* Text Styling Accordion */}
              <AccordionItem key="3" title="Text Styling" className='px-0 select-none'>
                <div className="mb-6">
                  <div className="flex justify-between mb-4 py-1">
                    <label className={`mr-4 select-none ${isFontStyleItalic() ? 'text-white' : 'opacity-60'}`}>
                      Italic
                    </label>
                    <Switch
                      size="sm"
                      color="secondary"
                      isSelected={isFontStyleItalic()}
                      onValueChange={handleFontStyleChange}
                    />
                  </div>

                  <div className="flex justify-between mb-4 py-1" >
                    <label className={`mr-4 select-none ${isTextUnderlined() ? 'text-white' : 'opacity-60'}`}>
                      Underline
                    </label>
                    <Switch
                      size="sm"
                      color="secondary"
                      isSelected={isTextUnderlined()}
                      onValueChange={handleTextDecorationChange}
                    />
                  </div>

                  <div className="mb-3">
                    <Slider
                      size="md"
                      label="Font Size"
                      color="secondary"
                      showTooltip={true}
                      showSteps={true}
                      minValue={12}
                      maxValue={96}
                      step={2}
                      value={extractFontSize(formData.style.fontSize)}
                      onChange={(value) => handleFontSizeSliderChange(value as number, 'fontSize')}
                    />
                  </div>

                  <div className="mb-3">
                    <Slider
                      size="md"
                      label="Font Weight"
                      color="secondary"
                      showTooltip={true}
                      showSteps={true}
                      minValue={100}
                      maxValue={900}
                      step={100}
                      value={formData.style.fontWeight}
                      onChange={(value) => handleFontWeightSliderChange(value as number, 'fontWeight')}
                    />
                  </div>
                  
                  <div className="flex justify-between mb-2 py-1">
                    <label htmlFor="style.color" className="block select-none">Text Color</label>
                    <Popover placement="left" showArrow={true}>
                      <PopoverTrigger>
                        <Button
                          onClick={() => { }}
                          className="hover:bg-zinc-600 text-white bg-transparent rounded-lg border-2 border-zinc-600"
                        >
                          <CgColorPicker className='w-4 h-5'/>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className='bg-transparent p-0'>
                        <SketchPicker
                          className="text-black"
                          color={formData.style.textColor}
                          onChange={(color) => handleColorChange(color, 'textColor')}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </AccordionItem>

              {/* Background Accordion */}
              <AccordionItem key="4" title="Background Styling" className='px-0 select-none'>
                <div>
                  <div className="flex justify-between py-1 ">
                    <label htmlFor="style.backgroundColor" className="block mb-2">Background Color</label>
                    <Popover placement="left" showArrow={true}>
                      <PopoverTrigger>
                        <Button
                          onClick={() => { }}
                          className="hover:bg-zinc-600 text-white px-1 py-2 bg-transparent rounded-lg border-2 border-zinc-600"
                        >
                          <BiSolidColorFill className='w-4 h-5'/>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className='bg-transparent p-0'>
                        <SketchPicker
                          className="text-black"
                          color={formData.style.backgroundColor}
                          onChange={(color) => handleColorChange(color, 'backgroundColor')}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </AccordionItem>
            </Accordion>

            <Divider className="my-2 bg-zinc-600" />
            <div className="flex justify-between items-stretch px-4 py-2">
              <Button
                type="reset"
                value="reset"
                variant='light'
                className="text-white border-2 border-zinc-600 w-full px-4 py-2 mr-2 rounded-lg font-semibold text-md"
              >
                <GrPowerReset className='w-4 h-4'/>
                Reset all
              </Button>
              <Button
                type="submit"
                variant='solid'
                color='secondary'
                className="hover:bg-purple-600 text-white w-full px-4 py-2 rounded-lg font-semibold text-md"
              >
                Apply Changes
              </Button>
            </div>
          </form>
        </div>
        </ScrollShadow>

        {window.innerWidth > 768 && (
          <div
            onMouseDown={startResizing}
            className="absolute left-0 top-0 w-2 h-full cursor-ew-resize bg-transparent z-50"
          />
        )}
      </div>
    </div>
  );
};

export default EditSidebar;