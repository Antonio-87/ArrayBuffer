import ArrayBufferConverter, { getBuffer } from '../app';

test('correct work of load and toString method', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    expect(converter.toString(converter.load(buffer))).toEqual(expected);
});

test('incorrect data', () => {
    const converter = new ArrayBufferConverter();
    const expected = '';
    expect(converter.toString(converter.load(''))).toEqual(expected);
});
