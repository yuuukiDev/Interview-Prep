M = int(input().strip())
m_set = set(map(int, input().strip().split(' ')))
N = int(input().strip())
n_set = set(map(int, input().strip().split(' ')))

for i in sorted(m_set ^ n_set):
    print(i)
