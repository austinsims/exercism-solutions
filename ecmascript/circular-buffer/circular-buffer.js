class CircularBuffer {
  constructor(size) {
    this.size = size;
    this.clear();
  }

  read() {
    if (!this.array.length) {
      throw bufferEmptyException();
    }
    return this.array.shift();
  }

  write(element) {
    this.writeInternal(element, false /* force */);
  }

  forceWrite(element) {
    this.writeInternal(element, true /* force */);
  }

  writeInternal(element, force) {
    if (element === null || element === undefined) {
      return;
    }

    const isFull = this.array.length === this.size;
    if (isFull && force) {
      this.read();
    } else if (isFull && !force) {
      throw bufferFullException();
    }

    this.array.push(element);
  }

  clear() {
    this.array = [];
  }
}

function circularBuffer(size) {
  return new CircularBuffer(size);
}

function bufferFullException() {
  return 'Buffer is full';
}

function bufferEmptyException() {
  return 'Buffer is empty';
}

export default circularBuffer;
export {bufferFullException, bufferEmptyException};