# # Linked list implementation in Python


# class Node:
#     # Creating a node
#     def __init__(self, item):
#         self.item = item
#         self.next = None


# class LinkedList:

#     def __init__(self):
#         self.head = None
#     def copy(self):
#         cp_list = LinkedList()
#         cp_list.head = self.head
#         return cp_list
#     def print_list(self):
#         cp_list = LinkedList()
#         cp_list.head = self.head
#         while cp_list.head != None:
#             print(cp_list.head.item, end=" ")
#             cp_list.head = cp_list.head.next
#         print()
#     def insert_at_beginning(self, data):
#         new_node = Node(data)

#         new_node.next = self.head
#         self.head = new_node
#     def insert_at_end(self, data):
#         new_node = Node(data)

#         if self.head is None:
#             self.head = new_node
#             return

#         last = self.head
#         while last.next:
#             last = last.next

#         last.next = new_node


# if __name__ == '__main__':

#     linked_list = LinkedList()

#     # Assign item values
#     linked_list.head = Node(1)
#     second = Node(2)
#     third = Node(3)

#     # Connect nodes
#     linked_list.head.next = second
#     second.next = third

#     cp_list = linked_list.copy()

#     # Print the linked list item
#     print(linked_list.head.item)
#     while cp_list.head != None:
#         print(cp_list.head.item, end=" ")
#         cp_list.head = cp_list.head.next
#     print(linked_list.head.item)
# Python program to demonstrate working of HashTable 

# hashTable = [[],] * 10

# def checkPrime(n):
#     if n == 1 or n == 0:
#         return 0

#     for i in range(2, n//2):
#         if n % i == 0:
#             return 0

#     return 1


# def getPrime(n):
#     if n % 2 == 0:
#         n = n + 1

#     while not checkPrime(n):
#         n += 2

#     return n


# def hashFunction(key):
#     capacity = getPrime(10)
#     return key % capacity


# def insertData(key, data):
#     index = hashFunction(key)
#     hashTable[index] = [key, data]

# def removeData(key):
#     index = hashFunction(key)
#     hashTable[index] = 0

# insertData(123, "apple")
# insertData(432, "mango")
# insertData(213, "banana")
# insertData(654, "guava")

# print(hashTable)

# removeData(123)

# print(hashTable)
# Max-Heap data structure in Python

# def heapify(arr, n, i):
#     largest = i
#     l = 2 * i + 1
#     r = 2 * i + 2 
    
#     if l < n and arr[i] < arr[l]:
#         largest = l
    
#     if r < n and arr[largest] < arr[r]:
#         largest = r
    
#     if largest != i:
#         arr[i],arr[largest] = arr[largest],arr[i]
#         heapify(arr, n, largest)

# def insert(array, newNum):
#     size = len(array)
#     if size == 0:
#         array.append(newNum)
#     else:
#         array.append(newNum);
#         for i in range((size//2)-1, -1, -1):
#             heapify(array, size, i)

# def deleteNode(array, num):
#     size = len(array)
#     i = 0
#     for i in range(0, size):
#         if num == array[i]:
#             break
        
#     array[i], array[size-1] = array[size-1], array[i]

#     array.remove(num)
    
#     for i in range((len(array)//2)-1, -1, -1):
#         heapify(array, len(array), i)
    
# arr = []

# insert(arr, 3)
# insert(arr, 4)
# insert(arr, 9)
# insert(arr, 5)
# insert(arr, 2)

# print ("Max-Heap array: " + str(arr))

# deleteNode(arr, 4)
# print("After deleting an element: " + str(arr))
# Fibonacci Heap in python

# import math

# # Creating fibonacci tree
# class FibonacciTree:
#     def __init__(self, value):
#         self.value = value
#         self.child = []
#         self.order = 0

#     # Adding tree at the end of the tree
#     def add_at_end(self, t):
#         self.child.append(t)
#         self.order = self.order + 1


# # Creating Fibonacci heap
# class FibonacciHeap:
#     def __init__(self):
#         self.trees = []
#         self.least = None
#         self.count = 0

#     # Insert a node
#     def insert_node(self, value):
#         new_tree = FibonacciTree(value)
#         self.trees.append(new_tree)
#         if (self.least is None or value < self.least.value):
#             self.least = new_tree
#         self.count = self.count + 1

#     # Get minimum value
#     def get_min(self):
#         if self.least is None:
#             return None
#         return self.least.value

#     # Extract the minimum value
#     def extract_min(self):
#         smallest = self.least
#         if smallest is not None:
#             for child in smallest.child:
#                 self.trees.append(child)
#             self.trees.remove(smallest)
#             if self.trees == []:
#                 self.least = None
#             else:
#                 self.least = self.trees[0]
#                 self.consolidate()
#             self.count = self.count - 1
#             return smallest.value

#     # Consolidate the tree
#     def consolidate(self):
#         aux = (floor_log(self.count) + 1) * [None]

#         while self.trees != []:
#             x = self.trees[0]
#             order = x.order
#             self.trees.remove(x)
#             while aux[order] is not None:
#                 y = aux[order]
#                 if x.value > y.value:
#                     x, y = y, x
#                 x.add_at_end(y)
#                 aux[order] = None
#                 order = order + 1
#             aux[order] = x

#         self.least = None
#         for k in aux:
#             if k is not None:
#                 self.trees.append(k)
#                 if (self.least is None
#                         or k.value < self.least.value):
#                     self.least = k


# def floor_log(x):
#     return math.frexp(x)[1] - 1


# fibonacci_heap = FibonacciHeap()

# fibonacci_heap.insert_node(7)
# fibonacci_heap.insert_node(3)
# fibonacci_heap.insert_node(17)
# fibonacci_heap.insert_node(24)

# print('the minimum value of the fibonacci heap: {}'.format(fibonacci_heap.get_min()))

# print('the minimum value removed: {}'.format(fibonacci_heap.extract_min()))

# print('the values in heap: {}', fibonacci_heap.trees[2].value)
# Huffman Coding in python

# string = 'ad6bbbbbbbbbbc'


# # Creating tree nodes
# class NodeTree(object):

#     def __init__(self, left=None, right=None):
#         self.left = left
#         self.right = right

#     def children(self):
#         return (self.left, self.right)

#     def nodes(self):
#         return (self.left, self.right)

#     def __str__(self):
#         return '%s_%s' % (self.left, self.right)


# # Main function implementing huffman coding
# def huffman_code_tree(node, left=True, binString=''):
#     if type(node) is str:
#         return {node: binString}
#     (l, r) = node.children()
#     d = dict()
#     d.update(huffman_code_tree(l, True, binString + '0'))
#     d.update(huffman_code_tree(r, False, binString + '1'))
#     return d


# # Calculating frequency
# freq = {}
# for c in string:
#     if c in freq:
#         freq[c] += 1
#     else:
#         freq[c] = 1

# freq = sorted(freq.items(), key=lambda x: x[1], reverse=True)

# nodes = freq

# while len(nodes) > 1:
#     (key1, c1) = nodes[-1]
#     (key2, c2) = nodes[-2]
#     nodes = nodes[:-2]
#     node = NodeTree(key1, key2)
#     nodes.append((node, c1 + c2))

#     nodes = sorted(nodes, key=lambda x: x[1], reverse=True)

# huffmanCode = huffman_code_tree(nodes[0][0])

# print(' Char | Huffman code ')
# print('----------------------')
# for (char, frequency) in freq:
#     print(' %-4r |%12s' % (char, huffmanCode[char]))

 #// pip install requests
import requests 
url = 'https://api.jsonsilo.com/public/64006f81-6be4-4264-a1b4-7640b07b9063'
headers = {
    'Content-Type': 'application/json'
  }
response = requests.get(url, headers=headers)
print(response.text)