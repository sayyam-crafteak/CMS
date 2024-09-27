import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'public', 'home.json');
        const fileContents = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(fileContents);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Error reading JSON file' }, { status: 500 });
    }
}

