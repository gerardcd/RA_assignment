setwd("/home/gerard/Documents/RA/assignment");

quickSort_random <- read.csv("quickSort_random.csv");
quickSelect_random <- read.csv("quickSelect_random.csv");
RMedian_random <- read.csv("RMedian_random.csv");

#quickSort_sorted <- read.csv("quickSort_sorted.csv");
#quickSelect_sorted <- read.csv("quickSelect_sorted.csv");
#RMedian_sorted <- read.csv("RMedian_sorted.csv");

compare <- function(data1, data2, data3){
  
  maxY = max(max(data1$Time), max(data2$Time),  max(data3$Time))
  plot(data1$Size, data1$Time, ylim=c(0, maxY), type='l', col='yellow', ylab='Time', xlab='Data size (K)');
  par(new=TRUE)
  plot(data2$Size, data2$Time, ylim=c(0, maxY), type='l', col='green', ylab='', xlab='');
  par(new=TRUE)
  plot(data3$Size, data3$Time, ylim=c(0, maxY), type='l', col='blue', ylab='', xlab='');
}

compare(quickSort_random, quickSelect_random, RMedian_random);
#compare(quickSort_sorted, quickSelect_sorted, RMedian_sorted);
