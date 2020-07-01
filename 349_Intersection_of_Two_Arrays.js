var intersection = function (nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let res = [...set1].filter(item => set2.has(item));
    return res;
};