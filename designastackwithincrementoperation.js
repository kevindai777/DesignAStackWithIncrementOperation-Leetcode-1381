//Objective is to design a stack with three methods:
//push: pushes the given element to the top of the stack
//pop: pops the top element out of the stack
//inc: increment the k bottom elements of the stack by the given val


//O(1) solution for all 3 methods

class CustomStack {
    constructor(maxSize) {
        this.stack = []
        this.max = maxSize
    }

    push(x) {
        if (this.stack.length < this.max) {
            this.stack[this.stack.length] = x
        }
    }

    pop() {
        //As a note, 'deleting' an element in an array makes it an empty element
        if (this.stack.length > 0) {
            let val = this.stack[this.stack.length - 1]
            delete this.stack[this.stack.length - 1]
            this.stack.length--
            return val
        }

        return -1
    }

    increment(k, val) {
        //Don't go over the stack length and add NaN's
        for (let i = 0; i < k && this.stack.length >= i + 1; i++) {
            this.stack[i] += val
        }
    }
}