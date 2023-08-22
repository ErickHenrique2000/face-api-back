import fs from 'fs';
import path from 'path'

export const getFaces = () => {
    const pathr = path.join(__dirname, '../text.txt')
    return  JSON.parse(fs.readFileSync(pathr, 'utf8')).faces;
}

export const saveFaces = (face: any) => {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
    const pathr = path.join(__dirname, '../text.txt')
    const faces = getFaces()
    faces.push(face)

    return  fs.writeFileSync(pathr, JSON.stringify({faces}));
}

export const start = () => {
    const pathr = path.join(__dirname, '../text.txt')
    fs.writeFileSync(pathr, JSON.stringify({faces: []}))
}