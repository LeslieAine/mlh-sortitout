.data

    HelloWorldString:
    .ascii "Hello World!\n"

.text

.globl start

start:
    movl $0x2000004, %eax
    movl $1, %ebx
    movq HelloWorldString@GOTPCREL(%rip), %rsi
    movq $100, %rdx

    syscall


    movl $0x2000001, %eax
    movl $0, %ebx
    syscall