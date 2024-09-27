// 'use client';

// import { useEffect, useState } from 'react';

// const HomePage = () => {
//     const [data, setData] = useState<any>({});
//     const [openSections, setOpenSections] = useState<string[]>([]);
//     const [editContent, setEditContent] = useState<{ [key: string]: any }>({});

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('/api/json/read');
//                 const result = await response.json();
//                 setData(result);
//             } catch (error) {
//                 console.error('Error fetching JSON data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleToggleSection = (sectionName: string) => {
//         setOpenSections((prev) =>
//             prev.includes(sectionName)
//                 ? prev.filter((name) => name !== sectionName)
//                 : [...prev, sectionName]
//         );
//     };

//     const handleEdit = (section: string, field: string, value: string) => {
//         setEditContent((prev) => ({
//             ...prev,
//             [section]: {
//                 ...prev[section],
//                 [field]: value,
//             },
//         }));
//     };

//     const handleSave = async (section: string) => {
//         const updatedData = {
//             ...data,
//             [section]: {
//                 ...data[section],
//                 ...editContent[section],
//             },
//         };
//         setData(updatedData);

//         try {
//             const response = await fetch('/api/json/write', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(updatedData),
//             });

//             if (response.ok) {
//                 alert('Changes saved!');
//                 setEditContent({});
//             } else {
//                 alert('Failed to save changes.');
//             }
//         } catch (error) {
//             console.error('Error saving JSON data:', error);
//         }
//     };

//     // Recursive rendering of content including nested objects
//     const renderContent = (sectionName: string, content: any, prefix: string = ''): JSX.Element[] => {
//         if (typeof content === 'string') {
//             return [
//                 <div key={prefix} className="flex items-center mb-2">
//                     <label className="w-24 font-semibold">{prefix}:</label>
//                     <input
//                         type="text"
//                         value={editContent[sectionName]?.[prefix] || content}
//                         onChange={(e) => handleEdit(sectionName, prefix, e.target.value)}
//                         className="border p-1 rounded flex-grow"
//                     />
//                 </div>
//             ];
//         } else if (typeof content === 'object' && content !== null) {
//             return Object.entries(content).flatMap(([key, value]) =>
//                 renderContent(sectionName, value, `${prefix}${prefix ? '.' : ''}${key}`)
//             );
//         }
//         return [];
//     };

//     return (
//         <div className="p-4 bg-zinc-200 h-screen">
//             {Object.entries(data).map(([sectionName, sectionContent]) => (
//                 <div key={sectionName} className="mb-4 border p-4 rounded shadow text-black relative">
//                     <button
//                         className="font-bold text-lg w-full text-left"
//                         onClick={() => handleToggleSection(sectionName)}
//                     >
//                         {sectionName}
//                     </button>
//                     {openSections.includes(sectionName) && (
//                         <div className="mt-2 text-black">
//                             {renderContent(sectionName, sectionContent)}
//                             <button
//                                 className="absolute bottom-2 right-2 bg-blue-500 text-white px-4 py-2 rounded"
//                                 onClick={() => handleSave(sectionName)}
//                             >
//                                 Save
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default HomePage;



// src/app/home/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import axios from 'axios';

interface HomeContent {
  section1?: Section;
  section2?: Section;
  section3?: Section;
}

interface Section {
  div1?: DivContent;
}

interface DivContent {
  heading?: string;
  paragraph?: string;
  list?: string[];
  image?: string;
}

export default function HomePage() {
  const [homeData, setHomeData] = useState<HomeContent | null>(null);
  const [editing, setEditing] = useState<string | null>(null);
  const [editedContent, setEditedContent] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/json/read');
        setHomeData(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (section: string, field: string, value: string) => {
    setEditing(`${section}-${field}`);
    setEditedContent({ ...editedContent, [`${section}-${field}`]: value });
  };

  const handleSave = async (section: string) => {
    try {
      const updatedData = { ...homeData };
      Object.keys(editedContent).forEach((key) => {
        const [sec, field] = key.split('-');
        if (sec === section) {
          const [div] = sec.split('div');
          updatedData[sec as keyof HomeContent]![div as keyof Section] = editedContent[key];
        }
      });
      await axios.post('/api/json/write', updatedData);
      setHomeData(updatedData);
      setEditing(null);
      setEditedContent({});
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  if (!homeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      {Object.keys(homeData).map((sectionKey) => (
        <div key={sectionKey} className="mb-8">
          <h2 className="text-xl font-bold">{sectionKey}</h2>
          <div className="space-y-4">
            {Object.keys(homeData[sectionKey as keyof HomeContent] || {}).map((divKey) => (
              <div key={divKey} className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold">{divKey}</h3>
                {['heading', 'paragraph', 'image'].map((fieldKey) => {
                  const fieldValue = homeData[sectionKey as keyof HomeContent]?.[divKey as keyof Section]?.[fieldKey as keyof DivContent];

                  if (fieldValue) {
                    return (
                      <div key={fieldKey} className="mt-2">
                        <div className="flex justify-between items-center">
                          <label className="font-medium">{fieldKey}</label>
                          {editing === `${sectionKey}-${fieldKey}` ? (
                            <input
                              type="text"
                              value={editedContent[`${sectionKey}-${fieldKey}`] || fieldValue}
                              onChange={(e) =>
                                setEditedContent({
                                  ...editedContent,
                                  [`${sectionKey}-${fieldKey}`]: e.target.value,
                                })
                              }
                              className="ml-2 p-2 border rounded-md"
                            />
                          ) : (
                            <span className="ml-2">{fieldValue}</span>
                          )}
                          <button
                            onClick={() =>
                              handleEdit(sectionKey, fieldKey, fieldValue as string)
                            }
                            className="ml-4 p-2 text-blue-500"
                          >
                            <FaEdit />
                          </button>
                        </div>
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            ))}
          </div>
          <button
            onClick={() => handleSave(sectionKey)}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Save Section
          </button>
        </div>
      ))}
    </div>
  );
}
