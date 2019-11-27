import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rectArray: [[0,0,10,10],[11,11,12,12]]
    };
  }

  componentDidMount() {
    alert(this.findTotalAreaOccupied())
  }

  containsPoint(x, y, rect) {
    return x >= rect[0] && x < rect[2] && y >= rect[1] && y < rect[3];
  }

  findTotalAreaOccupied() {
    var rects = this.state.rectArray;
    rects = rects.map(function (e) {
      return e.map(function (f) {
        return f * 10;
      });
    });

    var xmin = Math.min.apply(null, rects.map(function (e) { return e[0]; })),
      xmax = Math.max.apply(null, rects.map(function (e) { return e[2]; })),
      ymin = Math.min.apply(null, rects.map(function (e) { return e[1]; })),
      ymax = Math.max.apply(null, rects.map(function (e) { return e[3]; }));

    var totalAreaOccupied = 0;

    for (var x = xmin; x < xmax; x++) {
      for (var y = ymin; y < ymax; y++) {
        for (var i = 0; i < rects.length; i++) {
          if (this.containsPoint(x, y, rects[i])) {
            totalAreaOccupied = totalAreaOccupied + 1;
            break;
          }
        }
      }
    }

    return totalAreaOccupied / 100;
  }

  render() {
    return (
      <div className="">

      </div>
    );
  }
}

export default App;
