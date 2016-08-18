function bufferFrom (value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  return new Buffer(value, encodingOrOffset, length)
}

module.exports = (Buffer.from || bufferFrom)
