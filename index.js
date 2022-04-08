const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors(corsOptions))

var corsOptions = {
  origin: '*'
}

const log = (val, base) => {
  return Math.log(val) / Math.log(base);
}

const tree = (levels=2, children=3) => {
  let nodesCount = (1 - children**levels) / (1 - children); 
  let level = 0;
  let step = 1;
  let prevStep = 0;

  const tree = {
    levels,
    children,
    nodes: [...new Array(nodesCount)].map((el, i) => {
      if (i + 1 > step) {
        prevStep = step;
        step += step * children;
        level++;
      }

      return {
        id: i,
        childrenIds: [...new Array(children)].map((el, j) => i * children + j + 1),
        parentId: i > 0 ? Math.floor((i - 1) / children) : null,
        level,
        inRowPosition: i - prevStep
        //inRowPosition: i === 0 ? 0 : i - (1 - children ** (level - 1)) / (1 - children)
      }
    }) 
  }

  return tree;
}

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/object', (req, res) => {
    res.json({
      value: 123
    });
});

app.get('/tree', (req, res) => {
  const levels = 3;
  const children = 3;

  res.json(tree(levels, children));
});

app.listen(2137);