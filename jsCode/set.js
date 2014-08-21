var mySet = {}
mySet["san_francisco"] = true
mySet["seattle"] = true
mySet["portland"] = true
print(Object.keys(mySet).length)
delete mySet["san_francisco"]
print(Object.keys(mySet).length)