# Dung Argumentation Framework GUI

Powered by [heureka](https://github.com/nilsgeilen/heureka) by Nils Geilen and Matthias Thimm and [dagre-d3](https://github.com/dagrejs/dagre-d3).

Find Preferred, Complete, stable and ground extensions of a given graph built in real time.


![./argGUI.gif](argGUI.gif)


## Dependencies

- git
- gcc
- node with npm ```sudo apt-get install nodejs``` on Linux, ```brew install node``` on OSX
- bower (can be installed with npm : ```sudo npm install bower -g``` )
- eigen3 : ```sudo apt install libeigen3-dev``` on Linux, ```brew install eigen``` on OSX


## Installation


```
git clone https://github.com/ibaaj/DungArgumentationFrameworkGUI
cd DungArgumentationFrameworkGUI
bower install
npm install
git submodule add https://github.com/nilsgeilen/heureka
chmod +x ./heureka/build
```

If you are on OSX you need to change the include path to build heureka.
Edit the file ```./heureka/build``` and replace the line 3 with : 

```/usr/local/bin/g++-7 --std=c++11 -O3 -I /usr/local/include/eigen3 -o heureka *.cpp```

instead of what it is written, considering you have installed gcc with ```brew```. If not, run ```brew install gcc``` before, because heureka doesn't work when it is compiled with ```clang``` on OSX.

### Install heureka

```
cd ./heureka && ./build && cd ..
```

# Run

```
npm start
```

open your favorite browser and go to [http://localhost:3000](http://localhost:3000)

# Reference  

[Nils Geilen, Matthias Thimm: Heureka: A General Heuristic Backtracking Solver for Abstract Argumentation (TAFA'17)](http://argumentationcompetition.org/2017/heureka.pdf)
