/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).


Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.


function removeDuplicates(nums) {
  const count = {};
  let k = 0;

  for (const n of nums) {
    count[n] = (count[n] || 0) + 1;
  }

  for (const n in count) {
    nums[k] = Number(n);
    k++;
  }

  console.log(count);
  return k;
}

const nums = [-1, 0, 0, 0, 0, 3, 3];
const k = removeDuplicates(nums);
console.log(nums.slice(0, k)); // output [ 0, 3, -1 ]
*/

/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
*/

function searchInsert(nums, target) {
  let matchItem;

  for (i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      matchItem = i;
    }
  }

  if (!matchItem) {
    for (i = 0; i < nums.length; i++) {
      if (target - 1 === nums[i]) {
        matchItem = i + 1;
      }
    }
  }

  return matchItem;
}

const nums = [1, 3, 5, 6];
const target = 7;
const output = searchInsert(nums, target);
