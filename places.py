def fibonacci_sequence(limit):
     a, b = 0, 1
     while (a < limit):
         yield a
         a, b = b, a + b
         
for n in fibonacci_sequence(10)+3:
    print(n)