// import { NextRequest, NextResponse } from 'next/server';
// import { promises as fs } from 'fs';
// import path from 'path';

// export async function POST(request: NextRequest) {
//     try {
//         const data = await request.json();
//         const filePath = path.join(process.cwd(), 'public', 'home.json');
//         await fs.writeFile(filePath, JSON.stringify(data, null, 2));
//         return NextResponse.json({ message: 'File saved successfully' });
//     } catch (error) {
//         return NextResponse.json({ error: 'Error writing JSON file' }, { status: 500 });
//     }
// }


// src/pages/api/json/write.ts

import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const data = req.body;

      // Path to the JSON file
      const filePath = path.join(process.cwd(), 'public', 'home_v1.json');

      // Save the new version of the JSON file
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

      return res.status(200).json({ message: 'File saved successfully' });
    } catch (error) {
      console.error('Error writing JSON file:', error);
      return res.status(500).json({ message: 'Error saving file' });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}

