import {Instruction} from "./core/Instruction.js"
import "./core/Trie.js"
import "./core/Constants.js"
import "./core/Completion.js"
import "./core/Config.js"
import "./core/Decoder.js"
import "./core/Encoder.js"
import * as fs from 'fs'
import * as readline from 'readline'

// Create a readable stream from the input file
const inputFile = process.argv[2];
const outputFile = process.argv[3];
const outFileType = process.argv[4];

console.log("Input file: " + inputFile);
console.log("Output file: " + outputFile);
console.log("Output type: " + outFileType);

const readStream = fs.createReadStream(inputFile);
const writeStream = fs.createWriteStream(outputFile);

const rl = readline.createInterface({
    input: readStream,
    output: writeStream,
    terminal: false
});

// Process each line
rl.on('line', (line) => {
//	console.log(line);
    // Modify the line in some way; for example, append " - processed"
    const inst  = new Instruction(line,
	{
		ABI:0,
		ISA:"AUTO"
	}
    );
//	console.log(inst.asm);
    // Write the modified line to the output file
    	if (outFileType == "asm") {
    		writeStream.write(inst.asm + '\n');
	} else if (outFileType == "hex") {
		writeStream.write(inst.hex + '\n');
	} else {
		writeStream.write(inst.bin + '\n');
	}
});

// Handle the end of the file
rl.on('close', () => {
    console.log('Processing complete. Output written to', outputFile);
});

// Handle errors
readStream.on('error', (err) => {
    console.error('Error reading file:', err);
});

writeStream.on('error', (err) => {
    console.error('Error writing file:', err);
});





