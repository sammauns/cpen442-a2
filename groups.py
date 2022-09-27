def groupsOfFive(cipher):
    map5 = {}
    map3 = {}
    for i in range(len(cipher)):
    for i in range(len(cipher)-5):
        map5[cipher[i:i+5]] = 1 + map5.get(cipher[i:i+5], 0)
    for i in range(len(cipher)-3):
        map3[cipher[i:i+3]] = 1 + map3.get(cipher[i:i+3], 0)
    print(map5)
    print(map3)
    for k in map3:
        if k[1] == “Y”:
            print((k, map3[k]))
groupsOfFive(cipher)
‘’'
A = C
Y = O
L = M
D = A
T = W
U = E
P = L
‘’'