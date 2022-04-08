import nextExport from 'next/dist/export/index'
import nextBuild from 'next/dist/build/index'

export default async function handler(req, res) {
    await nextBuild()
    await nextExport(process.cwd(),
    {
      outdir: 'export'
    })
    res.status(200).json({ name: 'Static export completed' })
}