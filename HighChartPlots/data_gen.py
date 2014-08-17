import math
a = []
for i in range(1,50):
    # a.append([i, i])
    # a.append([i, math.log(i, 2)])
    a.append([i, i*math.log(i, 2)])
    # a.append([i, i**2])
    # a.append([i, i**3])
print a