//=================================================================================================================
// CSS Extraction -

"use client";

import React, { useState, useEffect } from 'react';
import { generateHTML } from '@/utils/scripts/generate-page';
import EditSidebar from '../components/home-page/EditSidebar';
import '../styles/home.css';

const HomePage = () => {
  const [data, setData] = useState<any>({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedData, setUpdatedData] = useState<any>({});
  const [modalData, setModalData] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalKey, setModalKey] = useState(0); // Unique key for modal
  const [cssStyles, setCssStyles] = useState<any>(null); // To store extracted CSS styles

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/json/read');
        const result = await response.json();
        console.log("\n result: " ,result);
        setData(result);
        setUpdatedData(result);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("\n setData : ", data);
  }, [data]);

  useEffect(() => {
    console.log("\n updated data : ", updatedData);
  }, [updatedData]);

  useEffect(() => {
    if (isEditMode) {
      // Add click event listeners to editable elements
      document.querySelectorAll('[id^="heading-"], [id^="paragraph-"]').forEach((element) => {
        element.addEventListener('click', handleClick);
      });
    }

    return () => {
      // Remove event listeners to avoid memory leaks
      document.querySelectorAll('[id^="heading-"], [id^="paragraph-"]').forEach((element) => {
        element.removeEventListener('click', handleClick);
      });
    };
  }, [isEditMode, updatedData]);

  const extractCssStyles = (id: string) => {
    const styleElement = document.querySelector(`#${id}`);
    if (!styleElement) return {};

    const computedStyles = window.getComputedStyle(styleElement);
    const extractedStyles = {
      fontSize: computedStyles.fontSize || '',
      fontWeight: computedStyles.fontWeight || '',
      backgroundColor: computedStyles.backgroundColor || '',
      textColor: computedStyles.color || 'white',
      textDecoration: computedStyles.textDecoration || '',
      fontStyle: computedStyles.fontStyle || false,
      fontFamily: computedStyles.fontFamily || '',
    };

    console.log("\n Extracted CSS styles:", extractedStyles);
    return extractedStyles;
  };

  const handleClick = (e: any) => {
    console.log("\n id : ", e.target.id);
    const id = e.target.id;
    let temp = updatedData;

    const findNestedObject = (obj: any, key: string): any => {
      if (obj.hasOwnProperty(key)) {
        return obj[key];
      }
      for (let k in obj) {
        if (typeof obj[k] === 'object') {
          const result = findNestedObject(obj[k], key);
          if (result) {
            return result;
          }
        }
      }
      return null;
    };

    temp = findNestedObject(temp, id);

    if (temp) {
      console.log("\n temp : ", temp);
      
      // Extract CSS styles using the helper function
      const extractedStyles = extractCssStyles(id);
      setCssStyles(extractedStyles);

      setModalData({ key: id, value: temp });
      setShowModal(false); // Close the modal first
      setTimeout(() => {
        setShowModal(true);
        setModalKey(prevKey => prevKey + 1); // Update modal key to force re-render
      }, 500); // Reopen the modal after a brief delay
    } else {
      console.error(`Key ${id} not found in updatedData`);
    }
  };

  // Handle save from modal
  const handleSave = (updatedElement: any) => {
   console.log("\n updatedElement.style : ", updatedElement.style); 
   const { key } = modalData;
    let tempData = { ...updatedData };

    const findAndUpdateNestedObject = (obj: any, key: string, value: any): any => {
      if (obj.hasOwnProperty(key)) {
        obj[key] = value;
        return true;
      }
      for (let k in obj) {
        if (typeof obj[k] === 'object') {
          const result = findAndUpdateNestedObject(obj[k], key, value);
          if (result) {
            return true;
          }
        }
      }
      return false;
    };

    const updated = findAndUpdateNestedObject(tempData, key, updatedElement);
    console.log("\n isUpdated : ", updated);
    if (updated) {
      setUpdatedData(tempData);
      setShowModal(false);
    } else {
      console.error(`Key ${key} not found in updatedData`);
    }
  };

  // Save the entire updatedData to the server
  const saveChanges = async () => {
    try {
      const response = await fetch('/api/json/write', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Failed to save changes');
      }

      alert('Changes saved successfully!');
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

  let htmlCode = '';
  for (const section in updatedData) {
    htmlCode += `<section class="${section}">${generateHTML(updatedData[section], handleClick, '', isEditMode)}</section>`;
  }

  return (
    <div className='bg-black'>
      {/* Toggle Edit Mode Button */}
      <button 
        className="border px-4 py-2 w-fit bg-zinc-200 hover:opacity-80 text-neutral-900 rounded-lg font-semibold" 
        onClick={() => setIsEditMode(!isEditMode)}>{isEditMode ? 'Cancel' : 'Edit'}
      </button>

      {/* Save Changes Button */}
      {isEditMode && 
        <button 
          className="px-4 py-2 ml-2 w-fit bg-green-500 hover:opacity-80 text-neutral-900 rounded-lg font-semibold" 
          onClick={saveChanges}>Publish Site
        </button>
      }

      {/* Render generated HTML */}
      <div dangerouslySetInnerHTML={{ __html: htmlCode }}></div>

      {/* Edit Modal */}
      <EditSidebar 
        show={showModal} 
        onClose={() => setShowModal(false)} 
        onSave={handleSave}
        value={modalData?.value}
        styles={cssStyles}  // Pass the extracted CSS styles
      />
    </div>
  );
};

export default HomePage;



