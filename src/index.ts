import { Command } from 'commander'
import minimist from 'minimist'
import fs from 'fs-extra'
import glob from 'glob'
import { promisify } from 'util'
import { __VERSION__ } from './env'

const asyncGlob = promisify(glob)

const program = new Command('cfr')
    .description('草梅批量查找和替换器')
    .action(async (args) => {
        const { debug = false, input, output, find, replace, ignore = [] } = args
        if (!input) {
            console.error('必须指定 扫描目录！')
            return
        }
        if (!find) {
            console.error('必须指定 查找关键词！')
            return
        }
        const inputPath = input.replaceAll('\\', '/')
        const files: string[] = await asyncGlob(inputPath, {
            ignore: ['node_modules/**', '**/node_modules/**', './node_modules/**', '/node_modules/**', 'dist/**', './dist/**', '**/dist/**', '/dist/**', ...ignore],
            absolute: true,
        })
        if (debug) {
            console.log('files', files)
        }
        if (!files?.length) {
            console.error('未匹配到任何指定文件')
            return
        }

        if (debug) {
            if (replace) {
                // 如果指定了 替换后的关键词，则为 替换模式
                console.log('替换模式')
            } else {
                // 查找模式
                console.log('查找模式')
            }
        }
        const foundFiles: string[] = [] // 找到的文件的路径
        for await (const filePath of files) {
            try {
                const rawFile = (await fs.readFile(filePath)).toString()
                if (rawFile.includes(find)) {
                    console.log(`查找到文件：${filePath}`)
                    foundFiles.push(filePath)
                    if (replace) {
                        // 如果为 替换模式
                        const newFile = rawFile.replaceAll(find, replace)
                        await fs.writeFile(filePath, newFile)
                        console.log(`成功替换文件：${filePath}`)
                    }
                }
            } catch (error) {
                console.error(error)
            }
        }
        const outputFile = foundFiles.join('\n')
        if (debug) {
            console.log(`成功查找到以下包含关键词 ${find} 的文件`)
            console.log(outputFile)
        }
        if (output) {
            const outputPath = typeof output === 'string' ? output : 'output.txt'
            await fs.writeFile(outputPath, outputFile)
            if (debug) {
                console.log(`输出结果成功写入到路径 ${outputPath} ！`)
            }
        }
    })

program.version(__VERSION__ || '1.0.0', '-v, --version')

const args = process.argv.slice(2)
const argv = minimist(args)

program.option('-d, --debug', 'debug')
program.option('-i, --input <dir>', '指定扫描目录，支持 glob 语法')
program.option('-o, --output [path]', '指定输出结果的路径，默认为当前目录的 output.txt')
program.option('-f, --find <keyword>', '查找的关键词，默认为查找模式')
program.option('-r, --replace <keyword>', '替换后的关键词，如果设置该项则为替换模式')
program.option('-g, --ignore <dirs...>', '需要忽略的 dirs')

program.parse(process.argv)

const opts = program.opts()

if (opts.debug) {
    console.log(args)
    console.log(argv)
    console.log(opts)
}
