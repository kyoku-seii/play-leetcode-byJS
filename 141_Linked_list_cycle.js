var hasCycle = function(head) {
    let nodeSet = new Set();
    let p = head;
    while(p){
        if(nodeSet.has(p)){
            return true
        }
        nodeSet.add(p);
        p=p.next;
    }
    return false
};