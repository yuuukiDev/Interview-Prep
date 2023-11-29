if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())
    
    result = []
    for l in range(1 + x):
        for k in range(1 + y):
            for h in range(1 + z):
                if l + k + h != n:
                    result.append([l, k, h])
print(result)
