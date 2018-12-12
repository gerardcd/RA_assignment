compare2 <- function(data1, color1, data2, color2, main=''){
  data1 <- read.csv(data1);
  data2 <- read.csv(data2);
  
  maxY = max(max(data1$Time), max(data2$Time));
  plot(data1$Size, data1$Time, ylim=c(0, maxY), type='l', col=color1, ylab='Time (s)', xlab='Data size (K)', main=main);
  par(new=TRUE)
  plot(data2$Size, data2$Time, ylim=c(0, maxY), type='l', col=color2, ylab='', xlab='');
}

compare3 <- function(data1, color1, data2, color2, data3, color3, main=''){
  data1 <- read.csv(data1);
  data2 <- read.csv(data2);
  data3 <- read.csv(data3);
  
  maxY = max(max(data1$Time), max(data2$Time),  max(data3$Time));
  plot(data1$Size, data1$Time, ylim=c(0, maxY), type='l', col=color1, ylab='Time (s)', xlab='Data size (K)');
  par(new=TRUE)
  plot(data2$Size, data2$Time, ylim=c(0, maxY), type='l', col=color2, ylab='', xlab='', main=main);
  par(new=TRUE)
  plot(data3$Size, data3$Time, ylim=c(0, maxY), type='l', col=color3, ylab='', xlab='');
}

# Experiment 1 Quickselect

setwd("/home/gerard/Documents/RA/assignment/qselect_experiment");

par(mfrow=c(1,2))
# Bad Qselect even sorted vs Bad Qselect with odd sorted data
compare2('bad_quickSelect_odd_sorted.csv', 'green', 'bad_quickSelect_even_sorted.csv', 'darkgreen', 'Bad Quickselect: even vs odd sorted data');
# Good Qselect even sorted vs Good Qselect odd sorted
compare2('good_quickSelect_odd_sorted.csv', 'green', 'good_quickSelect_even_sorted.csv', 'darkgreen', 'Good Quickselect: even vs odd sorted data');

# Experiment 2 RMedian

setwd("/home/gerard/Documents/RA/assignment/rmedian_experiment");

par(mfrow=c(1,2));
# Bad RMedian vs Good RMedian random data
compare2('bad_RMedian_random.csv', 'cyan', 'good_RMedian_random.csv', 'blue', 'Random data: bad vs good RMedian');
compare2('bad_RMedian_sorted.csv', 'cyan', 'good_RMedian_sorted.csv', 'blue', 'Sorted data: bad vs good RMedian');

# Experiment 3 Benchmark

setwd("/home/gerard/Documents/RA/assignment/benchmark_experiment");

qSortRandomTime <- read.csv('quickSort_random.csv')[1, 'Time'];
qSortSortedTime <- read.csv('quickSort_sorted.csv')[1, 'Time'];

qSelectRandomTime <- read.csv('quickSelect_random.csv')[1, 'Time'];
qSelectSortedTime <- read.csv('quickSelect_sorted.csv')[1, 'Time'];

RMedianRandomTime <- read.csv('RMedian_random.csv')[1, 'Time'];
RMedianSortedTime <- read.csv('RMedian_sorted.csv')[1, 'Time'];

randomTimes <- c(qSortRandomTime, qSelectRandomTime,RMedianRandomTime);
sortedTimes <- c(qSortSortedTime, qSelectSortedTime, RMedianSortedTime);

par(mfrow=c(1,2))
barplot(randomTimes, main='Benchmark random data', names.arg=c('Quicksort', 'Quickselect', 'RMedian'), ylab="Time (s)", 
        col=c('yellow', 'green', 'blue'));
barplot(sortedTimes, main='Benchmark sorted data', names.arg=c('Quicksort', 'Quickselect', 'RMedian'), ylab="Time (s)",
        col=c('yellow', 'green', 'blue'));


# Experiment 4 Complexity

setwd("/home/gerard/Documents/RA/assignment/complexity_experiment");

par(mfrow=c(1,2));
# Qsort vs Qselect vs RMedian random data
compare3('quickSort_random.csv', 'yellow', 'quickSelect_random.csv', 'green', 'RMedian_random.csv' , 'blue', 'Qsort vs Qselect vs RMedian random data');
# Qsort vs Qselect vs RMedian sorted data
compare3('quickSort_sorted.csv', 'yellow', 'quickSelect_sorted.csv', 'green', 'RMedian_sorted.csv' , 'blue', 'Qsort vs Qselect vs RMedian sorted data');