if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    temp = set(arr)
    output = sorted(temp)
    print(output[-2])
