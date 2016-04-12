`use strict`;

module.exports = function(fileName, callback) {
  const fs  = require("fs");
  const timeEndPhrase = 'Time to compute SPT';
  console.log('############################################');
  console.log(`Processing: ${fileName}`);
  console.time(timeEndPhrase);
  var inputLines = fs.readFileSync(fileName).toString().split('\n');
  inputLines.shift();//Remove first line which indicates number of relations
  const relationSets = parseInput(inputLines);
  const result = callback(relationSets);
  console.timeEnd(timeEndPhrase);
  console.log(`SPT: ${result.spt}`);
  console.log(`Num Of Nodes: ${result.numOfNodes}`);
  console.log(`Num Of Nodes Computed: ${result.numOfNodesComputed}`);
  console.log('############################################\n');
};

/**
 * Responsible for parsing a number of relations, each of which is a pair of nodes.
 * The resulting data structure that is returned is a 2-D array representing the a set of
 * associations for each node in the network.
 */
function parseInput(inputLines) {
  var relationSets = [];
  for (var relationIndex = 0; relationIndex < inputLines.length; relationIndex++) {
    var rawRelation = inputLines[relationIndex].split(" ");
    var leftSide = parseInt(rawRelation[0]);
    var rightSide = parseInt(rawRelation[1]);
    if (typeof relationSets[leftSide] === 'undefined') {
      relationSets[leftSide] = [];
    }
    relationSets[leftSide].push(rightSide);
    if (typeof relationSets[rightSide] === 'undefined') {
      relationSets[rightSide] = [];
    }
    relationSets[rightSide].push(leftSide);
  }
  return relationSets;
}