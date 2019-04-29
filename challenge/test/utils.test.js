import recordList from './dataset.json';
import { findChildRecord } from '../src/utils';

const RECORD_ID = 2;
const RESULT_LIST = [30, 40];

describe("Find Child Records", () => {
  
  test("should returns their child record's", () => {
    expect(findChildRecord(RECORD_ID,recordList)).toEqual(RESULT_LIST);
  });
  
});
