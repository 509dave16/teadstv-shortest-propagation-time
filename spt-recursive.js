'use strict';
const sptDriver = require('./spt-driver.js');
var fileName = process.argv[2];
sptDriver(fileName, computeShortestPropagationTime);

function computeShortestPropagationTime(nodeNeighbors) {
  let neighborNodeHasBetterSPT = true;
  let computedNodes = [];
  const initialNode = nodeNeighbors.reduce((maxNeighborsNode, neighbors, node, nodeNeighbors) => {
    return neighbors.length > nodeNeighbors[maxNeighborsNode].length ? node : maxNeighborsNode;
  }, 0);//assuming 0 index exists

  let neighbors = nodeNeighbors[initialNode];
  let previousState = computePropagationTime({
    nodeNeighbors: nodeNeighbors,
    spt: 1000000,
    computedNodes: computedNodes
  }, initialNode);

  while (neighborNodeHasBetterSPT) {
    let currentState = neighbors.reduce(computePropagationTime, previousState);
    if (currentState.node === previousState.node) {
      break;
    }
    neighbors = nodeNeighbors[currentState.node];
    neighbors = neighbors.filter((node) => computedNodes[node] === undefined);
    previousState = currentState;
  }

  return {
    numOfNodes: nodeNeighbors.reduce((counter, value) => counter + 1, 0),
    numOfNodesComputed: computedNodes.reduce((counter, value) => counter + 1, 0),
    spt: previousState.spt
  };
}

function computePropagationTime(previousState, node) {
  const nodesVisited = [];
  nodesVisited[node] = 0;
  const finishedComputing = propagate({
    node: node,
    timeToNode: 0,
    nodesVisited: nodesVisited,
    nodeNeighbors: previousState.nodeNeighbors,
    spt: previousState.spt
  });

  if (!finishedComputing) {
    previousState.computedNodes[node] = -1;
    return previousState;
  }

  const maxSpt = nodesVisited.reduce((maxValue, currentValue) => {
    return currentValue > maxValue ? currentValue : maxValue;
  }, -1);
  previousState.computedNodes[node] = maxSpt;


  const properties = {};
  if (maxSpt < previousState.spt) {
    properties.spt = maxSpt;
    properties.node = node;
  }
  return Object.assign({}, previousState, properties);
}

function propagate(state) {
  if (state.timeToNode === state.spt) {
    return false;
  }
  const neighbors = state.nodeNeighbors[state.node];
  const timeToNeighbor = (state.timeToNode + 1);

  const notVisitedNeighbors = neighbors.filter((neighbor) => {
    if (state.nodesVisited[neighbor] !== undefined) {
      const previousTimeToNeighbor = state.nodesVisited[neighbor];
      if (timeToNeighbor < previousTimeToNeighbor) {
        state.nodesVisited[neighbor] = timeToNeighbor;
        return true;
      }
      return false;
    } else {
      return true;
    }
  });

  const neighborsStates = notVisitedNeighbors.map((neighbor) => {
    const neighborState = Object.assign({}, state, {node: neighbor, timeToNode: timeToNeighbor});
    state.nodesVisited[neighbor] = timeToNeighbor;
    return neighborState;
  });

  return neighborsStates.every((neighborState) => propagate(neighborState));
}