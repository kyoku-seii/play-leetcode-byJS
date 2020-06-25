/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(-1); //虚拟头节点
    let p1 = l1;
    let p2 = l2;
    let p3 = res;
    let acc = 0;
    while(p1||p2){
        let v1 = p1? p1.val:0;
        let v2 = p2? p2.val:0;
        let v3 = v1+v2+acc;
        acc = Math.floor(v3/10);
        p3.next = new ListNode(v3 % 10);
        if(p1) p1=p1.next;
        if(p2) p2=p2.next;
        p3 = p3.next;
    }
    if(acc){
        p3.next = new ListNode(1);
    }
    return res.next;
};