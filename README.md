This is a modified RISCV translator.
Assuming you already have NodeJS, the translating process is simple.
You only need to run this command.

node run.js source dest type

- source: This is the source file of your program, can be in assembly, hex, or binary.
- dest: This is the output file of your in assembly.
- type: Selected output file type. (asm / bin / hex)

The goal is to translate zephyr_test.hex from hex file to readable assembly. However, the file contains some illegal/incorrect commands, so I changed all illegal/incorrect commands into nop command and save into zephyr_hello_test.hex.
The result in assembly can be read in zephyr_hello.txt or test_asm.s. The result in binary can be read in test_bin.bin.
