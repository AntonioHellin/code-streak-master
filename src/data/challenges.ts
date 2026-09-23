export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Challenge {
  slug: string;
  title: string;
  difficulty: Difficulty;
  points: number;
  category: string;
  description: string;
  problem: string;
  examples: { input: string; output: string; explanation?: string }[];
  constraints: string[];
  starterCode: string;
  completed: boolean;
}

export const challenges: Challenge[] = [
  {
    slug: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    points: 60,
    category: "Arrays & Hashing",
    description: "Return indices of the two numbers such that they add up to a specific target.",
    problem:
      "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input has exactly one solution, and you may not use the same element twice.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "nums[0] + nums[1] == 9",
      },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "Only one valid answer exists.",
    ],
    starterCode: `function twoSum(nums, target) {\n  // Your code here\n}`,
    completed: true,
  },
  {
    slug: "fizzbuzz",
    title: "FizzBuzz",
    difficulty: "Easy",
    points: 40,
    category: "Math",
    description: "Print numbers from 1 to n with Fizz, Buzz and FizzBuzz substitutions.",
    problem:
      "Given an integer `n`, return a string array `answer` where `answer[i]` is 'FizzBuzz' if i is divisible by 3 and 5, 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, otherwise the number itself.",
    examples: [{ input: "n = 5", output: '["1","2","Fizz","4","Buzz"]' }],
    constraints: ["1 <= n <= 10^4"],
    starterCode: `function fizzBuzz(n) {\n  // Your code here\n}`,
    completed: true,
  },
  {
    slug: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    points: 80,
    category: "Searching",
    description: "Search a target value in a sorted integer array.",
    problem:
      "Given a sorted array of integers `nums` and a target value, return the index if the target is found. Otherwise return -1. You must write an algorithm with O(log n) runtime complexity.",
    examples: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" },
      { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1" },
    ],
    constraints: ["1 <= nums.length <= 10^4", "All values are unique and sorted ascending."],
    starterCode: `function search(nums, target) {\n  // Your code here\n}`,
    completed: true,
  },
  {
    slug: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    points: 70,
    category: "Stack",
    description: "Check if a string of brackets is balanced and properly nested.",
    problem:
      "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if open brackets are closed by the same type and in the correct order.",
    examples: [
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
    ],
    constraints: ["1 <= s.length <= 10^4"],
    starterCode: `function isValid(s) {\n  // Your code here\n}`,
    completed: false,
  },
  {
    slug: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "Medium",
    points: 120,
    category: "Linked List",
    description: "Reverse a singly linked list iteratively or recursively.",
    problem:
      "Given the `head` of a singly linked list, reverse the list and return the reversed list.",
    examples: [{ input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]" }],
    constraints: ["The number of nodes is in the range [0, 5000]."],
    starterCode: `function reverseList(head) {\n  // Your code here\n}`,
    completed: false,
  },
  {
    slug: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    points: 150,
    category: "Sorting",
    description: "Merge all overlapping intervals into the minimum non-overlapping set.",
    problem:
      "Given an array of `intervals` where intervals[i] = [start_i, end_i], merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    examples: [
      { input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]" },
    ],
    constraints: ["1 <= intervals.length <= 10^4"],
    starterCode: `function merge(intervals) {\n  // Your code here\n}`,
    completed: false,
  },
  {
    slug: "longest-substring",
    title: "Longest Substring Without Repeating",
    difficulty: "Medium",
    points: 160,
    category: "Sliding Window",
    description: "Find the length of the longest substring without repeating characters.",
    problem:
      "Given a string `s`, find the length of the longest substring without repeating characters.",
    examples: [
      { input: 's = "abcabcbb"', output: "3", explanation: 'The answer is "abc", with length 3.' },
    ],
    constraints: ["0 <= s.length <= 5 * 10^4"],
    starterCode: `function lengthOfLongestSubstring(s) {\n  // Your code here\n}`,
    completed: false,
  },
  {
    slug: "best-time-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    points: 90,
    category: "Dynamic Programming",
    description: "Maximize profit by choosing a single day to buy and a future day to sell.",
    problem:
      "You are given an array `prices` where prices[i] is the price of a given stock on the i-th day. Return the maximum profit you can achieve. If no profit is possible, return 0.",
    examples: [{ input: "prices = [7,1,5,3,6,4]", output: "5" }],
    constraints: ["1 <= prices.length <= 10^5"],
    starterCode: `function maxProfit(prices) {\n  // Your code here\n}`,
    completed: false,
  },
  {
    slug: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    points: 70,
    category: "Dynamic Programming",
    description: "Count the distinct ways to climb to the top, taking 1 or 2 steps.",
    problem:
      "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    examples: [{ input: "n = 3", output: "3" }],
    constraints: ["1 <= n <= 45"],
    starterCode: `function climbStairs(n) {\n  // Your code here\n}`,
    completed: false,
  },
  {
    slug: "quick-sort",
    title: "Quick Sort",
    difficulty: "Hard",
    points: 240,
    category: "Sorting",
    description: "Implement the in-place quicksort algorithm with average O(n log n).",
    problem:
      "Implement the Quick Sort algorithm in place. Given an array of integers `nums`, sort it in ascending order using a divide-and-conquer approach.",
    examples: [{ input: "nums = [5,2,3,1]", output: "[1,2,3,5]" }],
    constraints: ["1 <= nums.length <= 5 * 10^4"],
    starterCode: `function quickSort(nums) {\n  // Your code here\n}`,
    completed: false,
  },
  {
    slug: "maximum-subarray",
    title: "Maximum Subarray (Kadane)",
    difficulty: "Medium",
    points: 140,
    category: "Dynamic Programming",
    description: "Find the contiguous subarray with the largest sum.",
    problem:
      "Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    examples: [{ input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6" }],
    constraints: ["1 <= nums.length <= 10^5"],
    starterCode: `function maxSubArray(nums) {\n  // Your code here\n}`,
    completed: false,
  },
  {
    slug: "n-queens",
    title: "N-Queens",
    difficulty: "Hard",
    points: 280,
    category: "Backtracking",
    description: "Place N queens on an N×N board so that no two queens attack each other.",
    problem:
      "The n-queens puzzle is the problem of placing `n` queens on an n×n chessboard such that no two queens attack each other. Return all distinct solutions.",
    examples: [{ input: "n = 4", output: '[[".Q..","...Q","Q...","..Q."],...]' }],
    constraints: ["1 <= n <= 9"],
    starterCode: `function solveNQueens(n) {\n  // Your code here\n}`,
    completed: false,
  },
];

export const leaderboard = [
  { name: "Nova Starlight", points: 12480, avatar: "N", rank: 1 },
  { name: "Orion Vale", points: 11320, avatar: "O", rank: 2 },
  { name: "Luna Ortiz", points: 10870, avatar: "L", rank: 3 },
  { name: "Comet Chen", points: 9540, avatar: "C", rank: 4 },
  { name: "Stardust Kim", points: 8910, avatar: "S", rank: 5 },
  { name: "You", points: 1947, avatar: "Y", rank: 12, isYou: true },
];

export const currentUser = {
  name: "Alex Rivera",
  handle: "@alex",
  avatar: "A",
  streak: 14,
  points: 1947,
};
