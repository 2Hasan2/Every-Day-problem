# Every Day problem


# How to install nodemon with node
--make sure you have node installed in your system
```bash
npm install -g nodemon
```


## Watch and run typescript file
```bash
nodemon --quiet --watch test.ts --exec "clear && ts-node" test.ts
```

## Watch and run python file
```bash
nodemon --quiet --watch test.py --exec "clear && python" test.py
```

## Watch and run javascript file
```bash
nodemon --quiet --watch test.js --exec "clear && node" test.js
```

## Watch and run c++ file
```bash
nodemon --quiet --watch test.cpp --exec "clear && g++ -o test test.cpp && ./test"
```

## Watch and run c file
```bash
nodemon --quiet --watch test.c --exec "clear && gcc -o test test.c && ./test"
```

## Watch and run bash file
```bash
nodemon --quiet --watch test.sh --exec "clear && bash" test.sh
```