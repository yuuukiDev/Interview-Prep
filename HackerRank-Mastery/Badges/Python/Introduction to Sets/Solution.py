def average(array):
    # your code goes here
    total_sum = 0
    for nums in set(array):
        total_sum += nums
    return total_sum / len(set(array))
