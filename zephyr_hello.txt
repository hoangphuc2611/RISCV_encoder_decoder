auipc x5, 0
addi x5, x5, 16
csrrw x0, mtvec, x5
jal x0, 1496
addi x2, x2, -80
sw x1, 0(x2)
sw x3, 4(x2)
sw x4, 8(x2)
sw x5, 12(x2)
sw x6, 16(x2)
sw x7, 20(x2)
sw x28, 24(x2)
sw x29, 28(x2)
sw x30, 32(x2)
sw x31, 36(x2)
sw x10, 40(x2)
sw x11, 44(x2)
sw x12, 48(x2)
sw x13, 52(x2)
sw x14, 56(x2)
sw x15, 60(x2)
sw x16, 64(x2)
sw x17, 68(x2)
csrrs x5, mepc, x0
sw x5, 72(x2)
csrrs x5, mstatus, x0
sw x5, 76(x2)
jal x1, 488
addi x6, x0, 0
bne x10, x0, 60
csrrs x5, mcause, x0
lui x7, -524288
addi x7, x7, -1
and x5, x5, x7
addi x6, x0, 11
beq x5, x6, 20
addi x10, x2, 0
auipc x1, 0
addi x1, x1, 300
jal x0, 1152
lw x5, 72(x2)
addi x5, x5, 4
sw x5, 72(x2)
jal x0, 136
addi x5, x2, 0
auipc x7, 2
addi x7, x7, -492
lw x2, 4(x7)
addi x2, x2, -16
sw x5, 0(x2)
lw x28, 0(x7)
addi x28, x28, 1
sw x28, 0(x7)
beq x6, x0, 16
auipc x1, 0
addi x1, x1, 60
jal x0, 1224
csrrs x10, mcause, x0
lui x5, -524288
addi x5, x5, -1
and x10, x10, x5
jal x1, 336
auipc x5, 1
addi x5, x5, 2028
slli x10, x10, 3
add x5, x5, x10
lw x10, 0(x5)
lw x6, 4(x5)
jalr x1, 0(x6)
auipc x6, 2
addi x6, x6, -588
lw x7, 0(x6)
addi x7, x7, -1
sw x7, 0(x6)
lw x5, 0(x2)
addi x2, x5, 0
jal x0, 144
auipc x5, 2
addi x5, x5, -620
lw x6, 8(x5)
sw x8, 44(x6)
sw x9, 48(x6)
sw x18, 52(x6)
sw x19, 56(x6)
sw x20, 60(x6)
sw x21, 64(x6)
sw x22, 68(x6)
sw x23, 72(x6)
sw x24, 76(x6)
sw x25, 80(x6)
sw x26, 84(x6)
sw x27, 88(x6)
sw x2, 40(x6)
auipc x7, 2
addi x7, x7, -1036
lw x28, 0(x7)
sw x28, 108(x6)
lw x6, 32(x5)
sw x6, 8(x5)
lw x2, 40(x6)
lw x8, 44(x6)
lw x9, 48(x6)
lw x18, 52(x6)
lw x19, 56(x6)
lw x20, 60(x6)
lw x21, 64(x6)
lw x22, 68(x6)
lw x23, 72(x6)
lw x24, 76(x6)
lw x25, 80(x6)
lw x26, 84(x6)
lw x27, 88(x6)
lw x5, 72(x2)
csrrw x0, mepc, x5
lw x5, 76(x2)
csrrw x0, mstatus, x5
lw x1, 0(x2)
lw x3, 4(x2)
lw x4, 8(x2)
lw x5, 12(x2)
lw x6, 16(x2)
lw x7, 20(x2)
lw x28, 24(x2)
lw x29, 28(x2)
lw x30, 32(x2)
lw x31, 36(x2)
lw x10, 40(x2)
lw x11, 44(x2)
lw x12, 48(x2)
lw x13, 52(x2)
lw x14, 56(x2)
lw x15, 60(x2)
lw x16, 64(x2)
lw x17, 68(x2)
addi x2, x2, 80
mret
ecall
auipc x5, 2
addi x5, x5, -860
lw x6, 8(x5)
lw x7, 108(x6)
andi x10, x10, 8
csrrs x5, mstatus, x10
addi x10, x7, 0
jalr x0, 0(x1)
addi x6, x0, 1
sll x5, x6, x10
csrrc x6, mip, x5
jalr x0, 0(x1)
csrrs x5, mcause, x0
lui x6, -524288
and x5, x5, x6
addi x10, x0, 0
beq x5, x0, 8
addi x10, x10, 1
jalr x0, 0(x1)
beq x12, x0, 32
addi x15, x0, 32
sub x15, x15, x12
blt x0, x15, 24
addi x10, x12, -32
addi x14, x0, 0
srl x10, x11, x10
addi x11, x14, 0
jalr x0, 0(x1)
srl x14, x11, x12
srl x10, x10, x12
sll x11, x11, x15
or x10, x10, x11
jal x0, -24
addi x12, x10, 0
addi x10, x0, 0
andi x13, x11, 1
beq x13, x0, 8
add x10, x10, x12
srli x11, x11, 1
slli x12, x12, 1
bne x11, x0, -20
jalr x0, 0(x1)
blt x10, x0, 96
blt x11, x0, 108
addi x12, x11, 0
addi x11, x10, 0
addi x10, x0, -1
beq x12, x0, 56
addi x13, x0, 1
bgeu x12, x11, 20
bge x0, x12, 16
slli x12, x12, 1
slli x13, x13, 1
bltu x12, x11, -12
addi x10, x0, 0
bltu x11, x12, 12
sub x11, x11, x12
or x10, x10, x13
srli x13, x13, 1
srli x12, x12, 1
bne x13, x0, -20
jalr x0, 0(x1)
addi x5, x1, 0
jal x1, -76
addi x10, x11, 0
jalr x0, 0(x5)
sub x10, x0, x10
bge x11, x0, 16
sub x11, x0, x11
jal x0, -100
sub x11, x0, x11
addi x5, x1, 0
jal x1, -112
sub x10, x0, x10
jalr x0, 0(x5)
addi x5, x1, 0
blt x11, x0, 20
blt x10, x0, 24
jal x1, -136
addi x10, x11, 0
jalr x0, 0(x5)
sub x11, x0, x11
bge x10, x0, -16
sub x10, x0, x10
jal x1, -160
sub x10, x0, x11
jalr x0, 0(x5)
lui x11, 2
lui x10, 2
addi x11, x11, -1696
addi x10, x10, -1688
jal x0, 2676
addi x2, x2, -16
sw x1, 12(x2)
sw x8, 8(x2)
addi x15, x0, 6
beq x10, x15, 40
jal x1, 4592
beq x10, x0, 40
jal x1, 4584
bne x10, x0, 76
lui x11, 2
addi x11, x11, -980
lui x10, 2
addi x10, x10, -960
jal x1, 2620
jal x1, 2680
jal x0, -4
jal x1, 4564
bne x10, x0, -40
lui x8, 2
addi x8, x8, -312
lw x11, 8(x8)
lui x10, 2
addi x10, x10, -928
jal x1, 2580
lw x10, 8(x8)
jal x1, 4668
jal x0, -48
lui x11, 2
addi x11, x11, -984
jal x0, -72
addi x2, x2, -80
sw x8, 72(x2)
sw x9, 68(x2)
sw x1, 76(x2)
addi x15, x0, 6
addi x9, x10, 0
addi x8, x11, 0
bltu x15, x10, 224
lui x14, 2
slli x15, x10, 2
addi x14, x14, -1668
add x15, x15, x14
lw x15, 0(x15)
jalr x0, 0(x15)
lui x10, 2
addi x10, x10, -1364
jal x1, 2488
jal x1, 4412
lw x15, 68(x8)
lw x17, 16(x8)
lw x16, 12(x8)
sw x15, 48(x2)
lw x15, 64(x8)
lw x14, 4(x8)
lw x13, 0(x8)
sw x15, 44(x2)
lw x15, 60(x8)
lw x12, 72(x8)
addi x11, x10, 0
sw x15, 40(x2)
lw x15, 56(x8)
lui x10, 2
addi x10, x10, -1232
sw x15, 36(x2)
lw x15, 52(x8)
sw x15, 32(x2)
lw x15, 48(x8)
sw x15, 28(x2)
lw x15, 44(x8)
sw x15, 24(x2)
lw x15, 40(x8)
sw x15, 20(x2)
lw x15, 36(x8)
sw x15, 16(x2)
lw x15, 32(x8)
sw x15, 12(x2)
lw x15, 28(x8)
sw x15, 8(x2)
lw x15, 24(x8)
sw x15, 4(x2)
lw x15, 20(x8)
sw x15, 0(x2)
lw x15, 8(x8)
jal x1, 2340
addi x11, x8, 0
addi x10, x9, 0
jal x1, -344
lui x10, 2
addi x10, x10, -1324
jal x0, -172
lui x10, 2
addi x10, x10, -1296
jal x0, -184
lui x10, 2
addi x11, x9, 0
addi x10, x10, -1268
jal x1, 2288
jal x0, -200
addi x2, x2, -16
sw x8, 8(x2)
sw x1, 12(x2)
addi x8, x10, 0
csrrs x12, mcause, x0
slli x12, x12, 1
srli x12, x12, 1
addi x15, x0, 5
bltu x15, x12, 48
lui x14, 2
slli x15, x12, 2
addi x14, x14, -1640
add x15, x14, x15
lw x11, 0(x15)
lui x10, 2
addi x10, x10, -1608
jal x1, 2216
addi x11, x8, 0
addi x10, x0, 0
jal x1, -348
lui x11, 2
addi x11, x11, -1616
jal x0, -32
addi x2, x2, -16
sw x1, 12(x2)
csrrs x11, mcause, x0
lui x10, 2
slli x11, x11, 1
srli x11, x11, 1
addi x10, x10, -888
jal x1, 2160
lui x11, 2
addi x11, x11, -1580
addi x10, x0, 4
jal x1, -408
lui x15, 2
addi x15, x15, -568
lw x14, 0(x15)
beq x14, x0, 24
lw x6, 0(x15)
sw x0, 0(x15)
lui x15, 2
lw x10, -564(x15)
jalr x0, 0(x6)
jalr x0, 0(x1)
addi x2, x2, -16
sw x1, 12(x2)
jal x1, 3512
jal x1, 2180
jal x1, 3536
auipc x2, 2
addi x2, x2, -1780
lui x5, 1
addi x5, x5, -2048
add x2, x2, x5
jal x1, -40
slli x15, x11, 1
add x15, x15, x11
slli x14, x15, 2
lw x15, 12(x10)
add x15, x15, x14
lb x14, 11(x10)
bge x14, x11, 8
lw x15, 0(x15)
srai x14, x12, 31
andi x14, x14, 31
add x14, x14, x12
srai x14, x14, 5
slli x14, x14, 2
add x15, x15, x14
sw x15, 0(x13)
andi x10, x12, 31
jalr x0, 0(x1)
addi x2, x2, -32
addi x13, x2, 12
sw x1, 28(x2)
jal x1, -80
lw x14, 12(x2)
addi x15, x0, 1
sll x10, x15, x10
lw x15, 0(x14)
lw x1, 28(x2)
or x15, x15, x10
sw x15, 0(x14)
addi x2, x2, 32
jalr x0, 0(x1)
addi x2, x2, -32
sw x9, 20(x2)
lw x9, 4(x10)
sw x8, 24(x2)
addi x8, x10, 0
lhu x10, 8(x10)
addi x11, x9, 0
sw x18, 16(x2)
sw x19, 12(x2)
sw x20, 8(x2)
sw x21, 4(x2)
sw x22, 0(x2)
sw x1, 28(x2)
jal x1, -1024
lw x19, 0(x8)
lbu x21, 10(x8)
addi x15, x0, -1
addi x20, x10, 0
add x19, x19, x10
sb x15, 11(x8)
addi x18, x0, 0
addi x22, x0, 31
blt x18, x21, 56
addi x9, x0, 0
lhu x15, 8(x8)
blt x9, x15, 152
lw x1, 28(x2)
lw x8, 24(x2)
lw x9, 20(x2)
lw x18, 16(x2)
lw x19, 12(x2)
lw x20, 8(x2)
lw x21, 4(x2)
lw x22, 0(x2)
addi x2, x2, 32
jalr x0, 0(x1)
addi x11, x9, 0
addi x10, x20, 0
jal x1, -1080
slli x14, x18, 1
add x14, x14, x18
slli x15, x14, 2
lw x14, 12(x8)
add x14, x14, x15
addi x15, x14, 4
sw x15, 4(x14)
sw x15, 8(x14)
blt x22, x10, 28
sb x18, 11(x8)
srli x9, x9, 2
addi x9, x9, 3
andi x9, x9, -4
addi x18, x18, 1
jal x0, -124
addi x10, x10, 31
srai x15, x10, 31
andi x15, x15, 31
add x15, x15, x10
srai x15, x15, 5
slli x15, x15, 2
sw x19, 0(x14)
add x19, x19, x15
jal x0, -52
lw x11, 4(x8)
addi x10, x9, 0
jal x1, -1232
lw x15, 0(x8)
addi x12, x9, 0
addi x11, x0, 0
add x10, x15, x10
lw x15, 12(x8)
addi x9, x9, 1
addi x14, x15, 4
sw x14, 0(x10)
lw x14, 8(x15)
sw x14, 4(x10)
lw x14, 8(x15)
sw x10, 0(x14)
sw x10, 8(x15)
addi x10, x8, 0
jal x1, -372
jal x0, -228
addi x10, x0, 0
jalr x0, 0(x1)
addi x2, x2, -16
sw x8, 8(x2)
addi x8, x10, 0
addi x10, x0, 69
sw x1, 12(x2)
sw x9, 4(x2)
addi x9, x11, 0
jalr x1, 0(x8)
addi x11, x9, 0
addi x10, x0, 82
jalr x1, 0(x8)
addi x6, x8, 0
lw x8, 8(x2)
lw x1, 12(x2)
addi x11, x9, 0
lw x9, 4(x2)
addi x10, x0, 82
addi x2, x2, 16
jalr x0, 0(x6)
lw x15, 0(x11)
addi x15, x15, 1
sw x15, 0(x11)
lui x15, 2
lw x6, -688(x15)
jalr x0, 0(x6)
addi x2, x2, -64
sw x8, 56(x2)
sw x19, 44(x2)
sw x20, 40(x2)
sw x22, 32(x2)
sw x26, 16(x2)
sw x1, 60(x2)
sw x9, 52(x2)
sw x18, 48(x2)
sw x21, 36(x2)
sw x23, 28(x2)
sw x24, 24(x2)
sw x25, 20(x2)
sw x27, 12(x2)
addi x19, x10, 0
addi x20, x11, 0
addi x26, x12, 0
addi x22, x13, 0
addi x8, x0, 1
bge x0, x14, 8
addi x8, x14, 0
addi x15, x0, 1
addi x25, x0, 32
bne x22, x15, 8
addi x25, x0, 48
lui x9, 244141
addi x18, x0, 1
addi x21, x0, 10
addi x24, x0, 0
addi x9, x9, -1537
addi x27, x0, 2
addi x23, x9, 1
bne x24, x0, 8
bgeu x9, x26, 164
addi x11, x23, 0
addi x10, x26, 0
jal x1, -1508
addi x11, x20, 0
addi x10, x10, 48
jalr x1, 0(x19)
addi x18, x18, 1
addi x24, x0, 1
addi x11, x23, 0
addi x10, x26, 0
jal x1, -1468
addi x26, x10, 0
addi x11, x0, 10
addi x10, x9, 0
jal x1, -1556
addi x21, x21, -1
addi x15, x0, 1
addi x9, x10, 0
bne x21, x15, -84
addi x11, x20, 0
addi x10, x26, 48
jalr x1, 0(x19)
addi x15, x0, 3
sub x8, x8, x18
beq x22, x15, 108
lw x1, 60(x2)
lw x8, 56(x2)
lw x9, 52(x2)
lw x18, 48(x2)
lw x19, 44(x2)
lw x20, 40(x2)
lw x21, 36(x2)
lw x22, 32(x2)
lw x23, 28(x2)
lw x24, 24(x2)
lw x25, 20(x2)
lw x26, 16(x2)
lw x27, 12(x2)
addi x2, x2, 64
jalr x0, 0(x1)
blt x8, x21, -128
bltu x27, x22, -132
addi x11, x20, 0
addi x10, x25, 0
jalr x1, 0(x19)
addi x18, x18, 1
jal x0, -152
addi x11, x20, 0
addi x10, x0, 32
jalr x1, 0(x19)
addi x8, x8, -1
blt x0, x8, -16
jal x0, -108
lui x15, 2
sw x10, -688(x15)
jalr x0, 0(x1)
addi x2, x2, -80
sw x8, 72(x2)
sw x9, 68(x2)
sw x18, 64(x2)
sw x19, 60(x2)
sw x20, 56(x2)
sw x21, 52(x2)
sw x25, 36(x2)
sw x26, 32(x2)
sw x27, 28(x2)
sw x1, 76(x2)
sw x22, 48(x2)
sw x23, 44(x2)
sw x24, 40(x2)
addi x8, x10, 0
addi x9, x11, 0
addi x21, x12, 0
addi x26, x13, 0
addi x20, x0, 0
addi x18, x0, -1
addi x19, x0, 0
addi x25, x0, 0
lui x27, -524288
lbu x10, 0(x21)
bne x10, x0, 64
lw x1, 76(x2)
lw x8, 72(x2)
lw x9, 68(x2)
lw x18, 64(x2)
lw x19, 60(x2)
lw x20, 56(x2)
lw x21, 52(x2)
lw x22, 48(x2)
lw x23, 44(x2)
lw x24, 40(x2)
lw x25, 36(x2)
lw x26, 32(x2)
lw x27, 28(x2)
addi x2, x2, 80
jalr x0, 0(x1)
bne x25, x0, 28
addi x13, x0, 37
beq x10, x13, 888
addi x11, x9, 0
jalr x1, 0(x8)
addi x21, x21, 1
jal x0, -92
addi x13, x0, 100
beq x10, x13, 288
bltu x13, x10, 100
addi x13, x0, 57
bltu x13, x10, 52
addi x13, x0, 49
bgeu x10, x13, 232
addi x13, x0, 45
beq x10, x13, 856
addi x15, x0, 48
beq x10, x15, 192
addi x14, x0, 37
bne x10, x14, 36
addi x11, x9, 0
addi x10, x0, 37
jalr x1, 0(x8)
jal x0, 352
addi x13, x0, 88
beq x10, x13, 448
addi x14, x0, 99
beq x10, x14, 768
addi x11, x9, 0
addi x10, x0, 37
jalr x1, 0(x8)
addi x11, x9, 0
lbu x10, 0(x21)
jal x0, -44
addi x13, x0, 112
beq x10, x13, 376
bltu x13, x10, 32
addi x13, x0, 105
beq x10, x13, 168
addi x13, x0, 108
beq x10, x13, 152
addi x13, x0, 104
beq x10, x13, -148
jal x0, -60
addi x13, x0, 117
beq x10, x13, 272
bltu x13, x10, 60
addi x14, x0, 115
bne x10, x14, -80
lw x24, 0(x26)
addi x22, x26, 4
addi x23, x24, 0
lbu x10, 0(x23)
bne x10, x0, 628
addi x15, x0, 3
bne x19, x15, 16
sub x23, x23, x24
sub x23, x18, x23
blt x0, x23, 624
addi x26, x22, 0
jal x0, 204
addi x13, x0, 120
beq x10, x13, 300
addi x13, x0, 122
jal x0, -88
bge x18, x0, 28
beq x19, x0, 660
addi x18, x10, -48
bne x19, x0, -252
addi x19, x0, 2
jal x0, -260
blt x18, x0, -16
slli x13, x18, 2
add x18, x13, x18
slli x18, x18, 1
addi x18, x18, -48
add x18, x10, x18
jal x0, -36
addi x20, x20, 1
jal x0, -296
bne x20, x0, 68
lw x12, 0(x26)
addi x26, x26, 4
bge x12, x0, 32
addi x11, x9, 0
addi x10, x0, 45
sw x12, 0(x2)
jalr x1, 0(x8)
lw x12, 0(x2)
addi x18, x18, -1
sub x12, x0, x12
addi x14, x18, 0
addi x13, x19, 0
addi x11, x9, 0
addi x10, x8, 0
jal x1, -900
jal x0, 60
addi x14, x0, 1
beq x20, x14, -68
addi x15, x26, 7
andi x14, x15, -8
lw x12, 0(x14)
lw x13, 4(x14)
addi x26, x14, 8
add x14, x12, x27
sltu x14, x14, x12
add x14, x14, x13
beq x14, x0, -96
addi x11, x9, 0
addi x10, x8, 0
jal x1, -1060
addi x25, x0, 0
jal x0, -428
bne x20, x0, 16
lw x12, 0(x26)
addi x26, x26, 4
jal x0, -100
addi x14, x0, 1
beq x20, x14, -16
addi x15, x26, 7
andi x14, x15, -8
addi x26, x14, 8
lw x12, 0(x14)
lw x14, 4(x14)
bne x14, x0, -64
lui x15, -524288
xori x15, x15, -1
bgeu x15, x12, -144
jal x0, -80
addi x11, x9, 0
addi x10, x0, 48
jalr x1, 0(x8)
addi x11, x9, 0
addi x10, x0, 120
jalr x1, 0(x8)
addi x18, x0, 8
addi x19, x0, 1
addi x13, x0, 1
blt x13, x20, 164
lw x15, 0(x26)
sw x0, 8(x2)
addi x26, x26, 4
sw x15, 4(x2)
addi x24, x0, 16
addi x23, x0, 0
sw x0, 0(x2)
addi x17, x0, 16
lw x10, 4(x2)
lw x11, 8(x2)
addi x22, x17, -1
slli x12, x22, 2
sw x17, 12(x2)
jal x1, -2592
andi x10, x10, 15
bne x10, x0, 144
lw x15, 0(x2)
addi x13, x0, 48
bne x15, x0, 16
lw x17, 12(x2)
addi x15, x0, 1
bne x17, x15, 140
add x10, x13, x10
slli x10, x10, 24
addi x11, x9, 0
srai x10, x10, 24
jalr x1, 0(x8)
addi x23, x23, 1
bne x22, x0, 80
addi x13, x0, 3
addi x25, x0, 0
bne x19, x13, -660
slli x14, x18, 1
sub x23, x14, x23
bge x0, x23, -248
addi x11, x9, 0
addi x10, x0, 32
jalr x1, 0(x8)
addi x23, x23, -1
jal x0, -20
addi x15, x26, 7
andi x13, x15, -8
lw x15, 0(x13)
addi x26, x13, 8
sw x15, 4(x2)
lw x15, 4(x13)
sw x15, 8(x2)
jal x0, -172
sw x25, 0(x2)
addi x17, x22, 0
jal x0, -168
addi x15, x0, 9
addi x13, x0, 87
bltu x15, x10, -124
addi x13, x0, 48
jal x0, -132
addi x15, x24, -1
sw x15, 12(x2)
blt x18, x24, 24
addi x15, x0, 1
bne x19, x15, 24
addi x11, x9, 0
addi x10, x0, 48
jalr x1, 0(x8)
lw x24, 12(x2)
jal x0, -64
addi x15, x0, 2
bne x19, x15, -12
addi x11, x9, 0
addi x10, x0, 32
jal x0, -28
addi x11, x9, 0
addi x23, x23, 1
jalr x1, 0(x8)
jal x0, -644
addi x11, x9, 0
addi x10, x0, 32
jalr x1, 0(x8)
addi x23, x23, -1
jal x0, -640
lw x10, 0(x26)
addi x11, x9, 0
addi x22, x26, 4
jalr x1, 0(x8)
jal x0, -656
addi x20, x0, 0
addi x18, x0, -1
addi x19, x0, 0
addi x25, x0, 1
jal x0, -892
addi x19, x0, 3
jal x0, -900
addi x19, x0, 1
jal x0, -908
addi x2, x2, -32
addi x12, x10, 0
lui x10, 1
addi x13, x11, 0
addi x10, x10, -2032
addi x11, x2, 12
sw x1, 28(x2)
sw x0, 12(x2)
jal x1, -1124
lw x1, 28(x2)
addi x2, x2, 32
jalr x0, 0(x1)
addi x2, x2, -64
sw x11, 36(x2)
addi x11, x2, 36
sw x1, 28(x2)
sw x12, 40(x2)
sw x13, 44(x2)
sw x14, 48(x2)
sw x15, 52(x2)
sw x16, 56(x2)
sw x17, 60(x2)
sw x11, 12(x2)
jal x1, -92
lw x1, 28(x2)
addi x2, x2, 64
jalr x0, 0(x1)
jalr x0, 0(x1)
addi x15, x0, 8
csrrs x15, mstatus, x15
jalr x0, 0(x1)
addi x15, x0, 1
sll x10, x15, x10
csrrs x10, mie, x10
jalr x0, 0(x1)
addi x15, x0, 8
csrrc x15, mstatus, x15
csrrwi x0, mie, 0
csrrwi x0, mip, 0
jalr x0, 0(x1)
addi x2, x2, -16
sw x8, 8(x2)
sw x9, 4(x2)
lui x8, 2
sw x1, 12(x2)
addi x15, x0, 10
addi x9, x10, 0
addi x8, x8, -552
bne x10, x15, 24
lw x10, 0(x8)
addi x11, x0, 13
lw x15, 4(x10)
lw x15, 4(x15)
jalr x1, 0(x15)
lw x10, 0(x8)
andi x11, x9, 255
lw x15, 4(x10)
lw x15, 4(x15)
jalr x1, 0(x15)
lw x1, 12(x2)
lw x8, 8(x2)
addi x10, x9, 0
lw x9, 4(x2)
addi x2, x2, 16
jalr x0, 0(x1)
addi x2, x2, -16
sw x8, 8(x2)
lui x8, 1
addi x10, x8, -396
sw x1, 12(x2)
jal x1, 484
addi x10, x8, -396
lw x8, 8(x2)
lw x1, 12(x2)
addi x2, x2, 16
jal x0, -1404
lui x10, 2
addi x2, x2, -16
addi x10, x10, -840
sw x1, 12(x2)
jal x1, 992
lui x15, 2
sw x10, -552(x15)
jal x1, -72
lw x1, 12(x2)
addi x10, x0, 0
addi x2, x2, 16
jalr x0, 0(x1)
addi x2, x2, -32
sw x9, 20(x2)
sw x1, 28(x2)
sw x8, 24(x2)
sw x18, 16(x2)
sw x19, 12(x2)
sw x20, 8(x2)
addi x9, x0, 8
csrrc x9, mstatus, x9
lui x20, 2
lui x15, -524288
addi x20, x20, -548
lw x19, 0(x15)
lw x18, 0(x20)
lui x8, 39
addi x11, x8, 256
sub x10, x19, x18
jal x1, -3236
addi x11, x8, 256
jal x1, -3288
add x10, x10, x18
addi x8, x8, 256
add x8, x10, x8
sw x10, 0(x20)
sub x19, x8, x19
addi x15, x0, 999
andi x9, x9, 8
blt x15, x19, 16
lui x8, 78
addi x8, x8, 512
add x8, x10, x8
lui x15, -524288
sw x8, 0(x15)
csrrs x9, mstatus, x9
lw x8, 24(x2)
lw x1, 28(x2)
lw x9, 20(x2)
lw x18, 16(x2)
lw x19, 12(x2)
lw x20, 8(x2)
addi x10, x0, 1
addi x2, x2, 32
jal x0, 1944
lui x13, -524288
lw x15, 0(x13)
lui x14, 39
addi x2, x2, -16
addi x14, x14, 256
sw x1, 12(x2)
add x15, x15, x14
addi x10, x0, 7
sw x15, 0(x13)
jal x1, -436
lw x1, 12(x2)
addi x10, x0, 0
addi x2, x2, 16
jalr x0, 0(x1)
jalr x0, 0(x1)
addi x10, x0, 0
jalr x0, 0(x1)
lbu x15, 0(x10)
lbu x14, 0(x11)
bne x15, x14, 8
bne x15, x0, 12
sub x10, x15, x14
jalr x0, 0(x1)
addi x10, x10, 1
addi x11, x11, 1
jal x0, -32
andi x13, x11, 255
addi x15, x10, 0
andi x14, x15, 3
bne x14, x0, 72
andi x11, x11, 255
slli x14, x11, 8
or x11, x14, x11
slli x14, x11, 16
or x11, x14, x11
add x6, x15, x12
addi x14, x15, 0
addi x16, x0, 3
sub x17, x6, x14
bltu x16, x17, 52
srli x14, x12, 2
slli x11, x14, 2
add x15, x15, x11
sub x12, x12, x11
add x12, x15, x12
bne x15, x12, 40
jalr x0, 0(x1)
beq x12, x0, -4
addi x15, x15, 1
sb x13, -1(x15)
addi x12, x12, -1
jal x0, -92
addi x14, x14, 4
sw x11, -4(x14)
jal x0, -64
addi x15, x15, 1
sb x13, -1(x15)
jal x0, -48
addi x10, x0, -1
jalr x0, 0(x1)
lui x15, 2
sw x10, -684(x15)
jalr x0, 0(x1)
lw x14, 8(x10)
andi x15, x13, 2
or x11, x15, x11
lw x10, 0(x14)
bne x11, x0, 84
addi x15, x0, 1
sll x12, x15, x12
lw x15, 4(x10)
addi x10, x0, -22
and x15, x12, x15
beq x15, x0, 64
andi x15, x13, -130
addi x10, x0, -35
bne x15, x0, 52
andi x10, x13, 128
lw x15, 4(x14)
beq x10, x0, 20
or x12, x12, x15
sw x12, 4(x14)
addi x10, x0, 0
jalr x0, 0(x1)
xori x12, x12, -1
and x12, x12, x15
sw x12, 4(x14)
jalr x0, 0(x1)
addi x10, x0, -35
jalr x0, 0(x1)
lw x15, 8(x10)
lw x10, 0(x15)
lw x15, 4(x15)
lw x17, 0(x10)
lw x16, 4(x10)
bne x11, x0, 32
addi x14, x0, 1
sll x14, x14, x12
and x16, x16, x14
addi x10, x0, -22
beq x16, x0, 56
beq x13, x0, 8
addi x13, x16, 0
addi x14, x0, 8
csrrc x14, mstatus, x14
lw x12, 0(x17)
andi x14, x14, 8
xor x15, x12, x15
xor x15, x15, x13
and x15, x15, x16
xor x15, x15, x12
sw x15, 0(x17)
csrrs x14, mstatus, x14
addi x10, x0, 0
jalr x0, 0(x1)
lw x10, 8(x10)
lw x14, 0(x10)
lw x10, 4(x10)
lw x15, 0(x14)
lw x15, 0(x15)
xor x15, x15, x10
lw x10, 4(x14)
and x15, x15, x10
bne x11, x0, 48
srl x15, x15, x12
andi x15, x15, 1
sw x15, 0(x13)
addi x15, x0, 1
sll x15, x15, x12
lw x12, 4(x14)
and x15, x15, x12
bne x15, x0, 8
addi x11, x0, -22
addi x10, x11, 0
jalr x0, 0(x1)
sw x15, 0(x13)
addi x11, x0, 0
jal x0, -16
lw x14, 0(x10)
lw x15, 8(x10)
lw x14, 8(x14)
sw x14, 0(x15)
lui x15, 2
addi x15, x15, -820
sw x15, 4(x10)
addi x10, x0, 0
jalr x0, 0(x1)
slli x11, x11, 1
ori x11, x11, 512
addi x15, x0, 8
csrrc x15, mstatus, x15
lui x14, 262144
andi x15, x15, 8
sw x11, 0(x14)
srai x11, x11, 1
addi x0, x0, 0
addi x0, x0, 0
bne x11, x0, -16
csrrs x15, mstatus, x15
jalr x0, 0(x1)
lui x15, 262144
lw x15, 0(x15)
addi x10, x0, 0
sb x15, 0(x11)
jalr x0, 0(x1)
lui x15, 262144
addi x14, x0, 1
sw x14, 0(x15)
addi x10, x0, 0
jalr x0, 0(x1)
slli x14, x10, 2
lui x15, 2
addi x10, x10, 1
addi x15, x15, -772
slli x10, x10, 2
addi x2, x2, -16
add x14, x15, x14
add x15, x15, x10
sw x8, 8(x2)
sw x9, 4(x2)
lw x8, 0(x14)
lw x9, 0(x15)
sw x1, 12(x2)
bltu x8, x9, 24
lw x1, 12(x2)
lw x8, 8(x2)
lw x9, 4(x2)
addi x2, x2, 16
jalr x0, 0(x1)
lw x15, 0(x8)
addi x10, x8, 0
lw x15, 4(x15)
jalr x1, 0(x15)
beq x10, x0, 8
sw x0, 4(x8)
addi x8, x8, 12
jal x0, -52
addi x2, x2, -16
lui x15, 2
sw x9, 4(x2)
lui x9, 2
sw x8, 8(x2)
sw x1, 12(x2)
addi x8, x15, -656
sw x18, 0(x2)
addi x15, x15, -656
addi x9, x9, -596
bne x8, x9, 24
addi x18, x10, 0
addi x8, x15, 0
bne x8, x9, 40
addi x8, x0, 0
jal x0, 68
lw x14, 4(x8)
beq x14, x0, 16
lw x14, 0(x8)
lw x14, 0(x14)
beq x14, x10, 48
addi x8, x8, 12
jal x0, -48
lw x15, 4(x8)
bne x15, x0, 12
addi x8, x8, 12
jal x0, -52
lw x15, 0(x8)
addi x10, x18, 0
lw x11, 0(x15)
jal x1, -840
bne x10, x0, -24
addi x10, x8, 0
lw x1, 12(x2)
lw x8, 8(x2)
lw x9, 4(x2)
lw x18, 0(x2)
addi x2, x2, 16
jalr x0, 0(x1)
lui x10, 2
lui x15, 2
addi x12, x10, -576
addi x15, x15, -272
sub x12, x15, x12
addi x11, x0, 0
addi x10, x10, -576
jal x0, -868
lui x15, 2
addi x2, x2, -16
lui x14, 2
addi x15, x15, 1776
addi x10, x0, 0
sw x15, -308(x14)
sw x1, 12(x2)
jal x1, -324
addi x10, x0, 1
jal x1, -332
addi x10, x0, 2
jal x1, -340
lui x10, 2
addi x10, x10, -752
jal x1, -1508
addi x10, x0, 3
jal x1, -360
jal x1, -4212
lui x15, 2
addi x15, x15, -424
lbu x14, 12(x15)
andi x14, x14, -2
sb x14, 12(x15)
addi x15, x0, 8
csrrc x15, mstatus, x15
jal x0, 0
lw x14, 4(x10)
lw x15, 0(x10)
sw x15, 0(x14)
sw x14, 4(x15)
sw x0, 0(x10)
sw x0, 4(x10)
jalr x0, 0(x1)
addi x2, x2, -16
sw x8, 8(x2)
sw x9, 4(x2)
sw x1, 12(x2)
addi x9, x10, 0
addi x8, x0, 8
csrrc x8, mstatus, x8
jal x1, -56
lbu x15, 13(x9)
andi x8, x8, 8
andi x15, x15, -3
sb x15, 13(x9)
csrrs x8, mstatus, x8
lw x1, 12(x2)
lw x8, 8(x2)
sw x0, 8(x9)
lw x9, 4(x2)
addi x2, x2, 16
jalr x0, 0(x1)
lui x15, 2
lw x15, -312(x15)
bne x15, x0, 12
addi x10, x11, 0
jal x0, -4720
andi x11, x11, 8
csrrs x11, mstatus, x11
jalr x0, 0(x1)
lw x15, 0(x10)
bne x10, x15, 8
addi x15, x0, 0
addi x10, x15, 0
jalr x0, 0(x1)
addi x2, x2, -16
sw x8, 8(x2)
lui x8, 2
sw x9, 4(x2)
addi x9, x10, 0
addi x10, x8, -312
addi x10, x10, 32
sw x1, 12(x2)
jal x1, -52
addi x15, x8, -312
bne x10, x0, 8
lw x10, 12(x15)
bne x9, x0, 56
lw x14, 8(x15)
lbu x13, 13(x14)
andi x13, x13, 31
bne x13, x0, 40
lui x13, 2
lw x13, -660(x13)
beq x14, x13, 28
sw x14, 28(x15)
lw x1, 12(x2)
lw x8, 8(x2)
lw x9, 4(x2)
addi x2, x2, 16
jalr x0, 0(x1)
sw x10, 28(x15)
jal x0, -24
addi x2, x2, -16
sw x8, 8(x2)
sw x9, 4(x2)
sw x1, 12(x2)
addi x9, x10, 0
addi x8, x0, 8
csrrc x8, mstatus, x8
lbu x15, 13(x10)
andi x8, x8, 8
andi x15, x15, 64
beq x15, x0, 20
jal x1, -312
lbu x15, 13(x9)
andi x15, x15, -65
sb x15, 13(x9)
lui x15, 2
lw x10, -304(x15)
sub x10, x10, x9
sltiu x10, x10, 1
jal x1, -188
csrrs x8, mstatus, x8
lw x1, 12(x2)
lw x8, 8(x2)
lw x9, 4(x2)
addi x2, x2, 16
jalr x0, 0(x1)
lui x15, 2
lw x10, -304(x15)
jalr x0, 0(x1)
lui x15, 2
lw x10, -312(x15)
sltu x10, x0, x10
jalr x0, 0(x1)
lui x15, 2
lw x15, -304(x15)
lbu x10, 12(x15)
andi x10, x10, 1
jalr x0, 0(x1)
lw x15, 96(x10)
addi x2, x2, -16
sw x8, 8(x2)
sw x1, 12(x2)
addi x8, x10, 0
beq x15, x0, 8
jalr x1, 0(x15)
lbu x15, 13(x8)
andi x14, x15, 31
bne x14, x0, 48
lw x14, 24(x8)
bne x14, x0, 40
addi x10, x8, 0
jal x1, -204
lbu x15, 13(x8)
lw x1, 12(x2)
ori x15, x15, 8
sb x15, 13(x8)
lw x8, 8(x2)
addi x2, x2, 16
jalr x0, 0(x1)
andi x15, x15, 2
beq x15, x0, 12
addi x10, x8, 0
jal x1, -488
lw x15, 24(x8)
beq x15, x0, -48
addi x10, x8, 24
jal x1, 260
jal x0, -60
addi x2, x2, -48
sw x1, 44(x2)
addi x11, x0, 8
csrrc x11, mstatus, x11
andi x11, x11, 8
sw x11, 12(x2)
jal x1, -144
lw x11, 12(x2)
addi x10, x2, 28
jal x1, -472
lw x1, 44(x2)
addi x2, x2, 48
jalr x0, 0(x1)
lui x15, 2
lw x15, -544(x15)
bne x15, x0, 8
jal x0, -1624
addi x10, x0, 0
jalr x0, 0(x1)
lw x15, 0(x10)
beq x10, x0, 36
lui x14, 2
lw x14, -676(x14)
beq x10, x14, 24
beq x15, x0, 20
lw x14, 8(x15)
lw x13, 8(x10)
add x14, x14, x13
sw x14, 8(x15)
lw x14, 4(x10)
sw x15, 0(x14)
sw x14, 4(x15)
sw x0, 0(x10)
sw x0, 4(x10)
jalr x0, 0(x1)
lui x15, 2
lbu x15, -540(x15)
addi x2, x2, -16
sw x1, 12(x2)
sw x8, 8(x2)
sw x9, 4(x2)
addi x10, x0, -1
bne x15, x0, 12
lui x10, -524288
xori x10, x10, -1
lui x15, 2
addi x15, x15, -680
lw x8, 0(x15)
beq x8, x15, 40
beq x8, x0, 36
lw x9, 8(x8)
jal x1, -152
sub x9, x9, x10
addi x10, x0, 0
blt x9, x0, 16
lw x8, 8(x8)
jal x1, -172
sub x10, x8, x10
lw x1, 12(x2)
lw x8, 8(x2)
lw x9, 4(x2)
addi x2, x2, 16
jalr x0, 0(x1)
addi x2, x2, -16
sw x8, 8(x2)
sw x1, 12(x2)
addi x8, x0, 8
csrrc x8, mstatus, x8
lw x15, 0(x10)
andi x8, x8, 8
beq x15, x0, 32
jal x1, -208
addi x10, x0, 0
csrrs x8, mstatus, x8
lw x1, 12(x2)
lw x8, 8(x2)
addi x2, x2, 16
jalr x0, 0(x1)
addi x10, x0, -22
jal x0, -24
addi x2, x2, -32
sw x8, 24(x2)
sw x1, 28(x2)
sw x9, 20(x2)
sw x18, 16(x2)
sw x19, 12(x2)
sw x20, 8(x2)
sw x21, 4(x2)
addi x8, x0, 8
csrrc x8, mstatus, x8
lui x19, 2
lui x20, 2
lui x18, 2
sw x10, -544(x19)
andi x8, x8, 8
addi x19, x19, -544
addi x20, x20, -680
addi x18, x18, -576
addi x21, x0, 8
lw x9, 0(x20)
lw x15, 0(x19)
lw x13, 0(x18)
lw x10, 4(x18)
beq x9, x20, 24
beq x9, x0, 20
lw x14, 8(x9)
bge x15, x14, 96
sub x14, x14, x15
sw x14, 8(x9)
add x13, x15, x13
srai x14, x15, 31
add x14, x14, x10
sltu x15, x13, x15
add x15, x15, x14
sw x13, 0(x18)
sw x15, 4(x18)
sw x0, 0(x19)
jal x1, -328
addi x11, x0, 0
jal x1, -2040
csrrs x8, mstatus, x8
lw x1, 28(x2)
lw x8, 24(x2)
lw x9, 20(x2)
lw x18, 16(x2)
lw x19, 12(x2)
lw x20, 8(x2)
lw x21, 4(x2)
addi x2, x2, 32
jalr x0, 0(x1)
add x13, x14, x13
srai x11, x14, 31
add x11, x11, x10
sltu x12, x13, x14
add x12, x12, x11
sub x15, x15, x14
sw x0, 8(x9)
addi x10, x9, 0
sw x13, 0(x18)
sw x12, 4(x18)
sw x15, 0(x19)
jal x1, -488
csrrs x8, mstatus, x8
lw x15, 12(x9)
addi x10, x9, 0
jalr x1, 0(x15)
csrrc x8, mstatus, x21
andi x8, x8, 8
jal x0, -196
addi x2, x2, -16
sw x8, 8(x2)
sw x9, 4(x2)
lui x8, 2
lui x9, 2
sw x1, 12(x2)
addi x8, x8, -596
addi x9, x9, -596
bltu x8, x9, 28
lw x1, 12(x2)
lw x8, 8(x2)
lw x9, 4(x2)
addi x10, x0, 0
addi x2, x2, 16
jalr x0, 0(x1)
addi x15, x8, 20
addi x10, x8, 0
sw x15, 20(x8)
sw x15, 24(x8)
jal x1, -4704
addi x8, x8, 28
jal x0, -52
jalr x0, 0(x1)
addi x0, x0, 0
c.addi4spn x14, 652
addi x0, x0, 0
c.addi4spn x14, 652
addi x0, x0, 0
c.addi4spn x14, 652
addi x0, x0, 0
c.addi4spn x14, 652
addi x0, x0, 0
c.addi4spn x14, 652
addi x0, x0, 0
c.addi4spn x14, 652
addi x0, x0, 0
c.addi4spn x14, 652
addi x0, x0, 0
c.addi4spn x13, 920
c.addi4spn x12, 632
c.addi4spn x10, 288
c.addi4spn x8, 700
c.addi4spn x12, 244
c.addi4spn x9, 912
addi x0, x0, 0
c.addi4spn x8, 628
c.addi4spn x8, 988
addi x0, x0, 0
c.addi4spn x14, 632
c.addi4spn x13, 300
addi x0, x0, 0
c.addi4spn x12, 244
c.addi4spn x10, 112
addi x0, x0, 0
csrrsi x10, 0x767, 4
c.lui x6, 26
c.flw f10, 12(x10)
jal x0, 470772
c.flwsp f24, 28
c.fld f8, 72(x10)
addi x0, x0, 0
c.addi4spn x12, 516
c.addi4spn x10, 640
c.addi4spn x10, 640
c.addi4spn x9, 516
c.addi4spn x12, 516
c.addi4spn x12, 588
c.addi4spn x15, 588
c.addi4spn x9, 312
c.addi4spn x9, 308
c.addi4spn x8, 316
c.addi4spn x13, 316
c.addi4spn x8, 368
c.addi4spn x14, 368
c.lui x28, 29
jal x14, 946182
c.lui x16, -15
c.flw f12, 108(x8)
c.fldsp f0, 216
c.lui x6, -3
c.lui x6, -23
c.lui x8, 9
addi x0, x0, 0
c.j -1670
c.j -1670
c.j -1670
c.j -1670
c.j -1670
c.j -1670
c.j -1670
c.j -1670
c.j -1670
c.j -1670
c.j -1670
c.j -1670
c.j -1670
c.j -1670
c.j -1670
c.j -1670
c.j -1670
c.j -1670
c.j -1670
c.j -1670
c.lui x28, 18
c.flwsp f10, 60
c.lui x30, 26
c.lui x8, 24
c.lui x6, -7
c.lui x18, 27
c.flw f11, 84(x10)
c.lui x8, 25
c.lui x28, 18
c.flwsp f10, 60
c.lui x30, 26
c.lui x6, 16
csrrci x6, 0x662, 0
c.lui x10, -8
addi x0, x0, 0
c.lui x24, 18
jalr x2, 518(x24)
c.lui x28, 26
c.flwsp f10, 60
c.lui x30, 26
c.flwsp f4, 48
addi x0, x0, 0
c.flwsp f8, 248
c.flw f11, 28(x14)
c.flw f8, 64(x10)
c.flwsp f10, 28
c.flw f8, 88(x10)
c.lui x24, 24
c.flwsp f10, 216
c.flw f11, 28(x14)
c.flw f8, 64(x10)
c.lui x6, -7
c.flwsp f2, 88
c.addi4spn x13, 12
c.fldsp f20, 136
c.lw x8, 80(x14)
c.flwsp f10, 216
c.lui x24, 16
bltu x8, x23, 1666
jal x28, 25698
c.lui x18, 24
c.flwsp f10, 28
c.fldsp f20, 136
addi x0, x0, 0
c.fldsp f20, 136
c.fldsp f0, 136
c.flwsp f28, 28
c.lw x8, 88(x14)
addi x0, x0, 0
c.fldsp f20, 136
addi x0, x0, 0
c.fldsp f20, 136
c.fldsp f0, 136
c.flwsp f28, 28
c.lw x8, 96(x8)
c.lui x6, 26
c.fldsp f20, 136
c.slli x20, 10
c.fldsp f20, 136
c.lw x8, 104(x10)
c.flwsp f30, 216
c.lw x8, 72(x12)
c.lui x24, 24
c.flwsp f4, 60
c.fld f8, 72(x10)
c.fld f8, 80(x12)
c.slli x20, 10
fmadd.d f10, f4, f7, f14
c.lui x28, 25
c.flw f13, 84(x8)
c.lui x8, 24
c.fld f9, 128(x8)
addi x0, x0, 0
c.lui x10, -8
c.lui x28, 26
c.lui x28, 26
c.flwsp f10, 60
c.lui x30, 26
c.lui x8, 24
c.lui x6, -7
c.jal 46
c.lui x16, -23
c.flw f8, 96(x12)
c.fld f8, 96(x8)
c.fld f14, 192(x8)
c.fld f12, 240(x12)
c.fld f14, 200(x10)
c.flw f8, 104(x8)
c.fld f8, 96(x8)
c.fld f14, 192(x8)
c.fld f12, 112(x12)
c.fld f14, 200(x10)
c.fld f8, 64(x8)
c.fldsp f0, 392
c.lui x16, -23
c.fld f13, 224(x12)
c.flw f12, 112(x8)
c.fld f8, 64(x8)
c.fldsp f0, 392
c.lui x16, -23
c.fld f13, 232(x8)
c.flw f12, 112(x8)
c.fldsp f0, 128
c.jal -1732
c.fld f14, 200(x10)
c.flw f8, 104(x8)
c.fld f8, 96(x8)
c.fld f14, 192(x8)
c.fld f12, 112(x12)
c.fld f14, 200(x10)
c.flw f8, 64(x10)
c.fld f8, 96(x8)
c.addi4spn x14, 284
c.jal -1656
c.flw f12, 112(x8)
c.fld f8, 64(x8)
c.fldsp f0, 392
c.lui x16, -23
c.jal -1400
c.flw f12, 112(x8)
c.fld f8, 64(x8)
c.fldsp f0, 392
c.lui x16, -23
c.flw f8, 64(x10)
c.fld f8, 96(x8)
c.fld f14, 192(x8)
lui x20, 197123
c.fld f14, 200(x10)
addi x0, x0, 0
c.li x6, -14
c.lui x6, -7
c.flwsp f8, 248
c.fld f11, 192(x8)
c.flwsp f10, 28
addi x0, x0, 0
c.flwsp f2, 80
c.fld f11, 192(x8)
c.lui x24, 29
c.lui x28, 26
csrrs x2, 0x532, x0
c.flw f12, 84(x10)
c.lui x28, 26
c.fldsp f28, 200
c.flwsp f2, 80
c.fld f11, 192(x8)
c.lui x24, 29
c.lui x28, 26
c.flw f10, 100(x12)
c.fld f9, 192(x8)
c.jal 8
jal x4, 294550
c.flwsp f14, 216
addi x0, x0, 0
addi x0, x0, 0
c.lui x30, 26
c.flw f8, 80(x10)
c.lui x4, -7
c.flw f12, 108(x8)
c.lui x8, -7
c.flw f13, 76(x10)
c.lw x8, 80(x10)
c.fldsp f0, 392
addi x0, x0, 0
c.lw x11, 12(x10)
addi x0, x0, 0
c.addi16sp 368
c.addi4spn x12, 8
csrrci x18, 0x5f7, 6
bltu x30, x22, 1592
addi x0, x0, 0
c.addi4spn x15, 100
c.addi4spn x10, 164
c.addi4spn x11, 232
addi x0, x0, 0
addi x0, x0, 0
addi x0, x0, 0
addi x0, x0, 0
c.addi4spn x8, 300
c.addi4spn x11, 296
addi x0, x0, 0
addi x0, x0, 0
addi x0, x0, 0
c.addi4spn x12, 700
c.addi4spn x8, 760
c.addi4spn x11, 760
c.addi4spn x11, 760
c.addi4spn x11, 760
c.fldsp f20, 136
c.fldsp f0, 136
jal x8, 620262
jalr x0, 1621(x20)
c.flw f12, 84(x8)
c.lw x8, 88(x14)
c.flwsp f10, 156
c.lui x4, -2
c.jal 796
c.fldsp f2, 232
c.lui x14, 11
addi x0, x0, 0
c.fldsp f10, 296
c.flwsp f10, 88
c.fldsp f20, 136
addi x0, x0, 0
c.addi4spn x15, 968
c.addi4spn x10, 100
c.addi4spn x14, 692
c.addi4spn x14, 692
addi x0, x0, 0
c.nop
c.bnez x15, -4
c.addi4spn x10, 764
c.addi4spn x13, 180
addi x0, x0, 0
addi x0, x0, 0
c.addi4spn x9, 184
addi x0, x0, 0
c.addi4spn x12, 756
c.addi4spn x10, 180
c.addi4spn x10, 636
addi x0, x0, 0
c.addi4spn x12, 184
addi x0, x0, 0
addi x0, x0, 0
c.addi4spn x15, 184
addi x0, x0, 0
addi x0, x0, 0
c.addi4spn x11, 760
c.addi4spn x11, 760
addi x0, x0, 0
addi x0, x0, 0
addi x0, x0, 0
