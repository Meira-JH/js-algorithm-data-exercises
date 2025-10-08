import {
  deleteDuplicates,
  mockDeleteDuplicatesList,
} from './hackerRank/softwareEngineerPrepKit/deleteDuplicates.js';

function main() {
  const result = deleteDuplicates(mockDeleteDuplicatesList);

  console.dir(result, { depth: null });
}

main();
