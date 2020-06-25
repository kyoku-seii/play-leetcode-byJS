/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let p = head;
    while(p&&p.next){
        if(p.next.val==p.val){
            p.next = p.next.next;
        }else{
            p = p.next;
        }
    }
    return head;
};