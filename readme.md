# QuickSort QuickSelect RMedian performance analysis

### Introduction

In this project we explore three different methods for finding the mean of a list of integers. The first method is based on the use of the Quicksort algorithm, the second method is based on the Quickselect algorithm and the third method is based on the RMedian randomised algorithm. The report document mentioned above describe some details about the three implementations and the different experiments that have been done in order to compare the performance between the algorithms. I have implemented all the code in Node.js using only native libraries. I have also implemented an R script to generate the graphs included in this document.

![Algorithms complexity comparison](https://raw.githubusercontent.com/gerardcd/RA_assignment/master/complexity.png "Algorithms complexity comparison")

See the detailed explanation in the document [gerard.cegarra.RA.report.pdf](https://github.com/gerardcd/RA_assignment/blob/master/gerard.cegarra.RA.report.pdf) of this repository.

### Run the code

`node --stack-size=16000 main.js`

### See the results

`Rscript Rcode.r`
