'use strict';

const HashTable = require('../../hashtable/hashtable');
let hash1 = new HashTable(1);
let hash2 = new HashTable(10);


const leftJoin = require('../left-join');

describe('left join testing', () => {
  it('Hash tables are both empty', () => {
    let result = leftJoin(hash1, hash2);
    expect(result).toMatchObject([]);
  });
  it('No shared keys', () => {
    hash2.add('saml', 'smith');
    hash1.add('sam', 'smh');
    let result = leftJoin(hash1, hash2);
    expect(result).toMatchObject([{sam: ['smh', null]}]);
  });
  it('Tables share null values', () => {
    hash2.add('sa', null);
    hash1.add('sa', null);
    let result = leftJoin(hash1, hash2);
    expect(result).toMatchObject([{ sa: [null, null] }, { sam: ['smh', null] }]);
  });
  it('Hash tables are varying sizes', () => {
    hash1.add('a', 'woah');
    let result = leftJoin(hash1, hash2);
    console.log(result);
    expect(result).toMatchObject([
      { a: ['woah', null] },
      { sa: [null, null] },
      { sam: ['smh', null] },
    ]);
  });
  it('Hash tables are the same size', () => {
    //Already tested above
  });
  it('Hash tables have a collision', () => {
    //Already tested above hash table 1's bucket is size 1
  });
});