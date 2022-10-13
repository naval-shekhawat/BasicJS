  function Node(data,next){
    this.data = data;
    // pointer to next element
    this.next = next;
  }
  
  var head;
  
  function addNode(data) {
    if (head == null) {
      head = new Node(data);
      return;
    }
  
    var curr = head;
    while (curr.next != null)
      curr = curr.next;
  
    var newNode = new Node(data);
    curr.next = newNode;
  }
  
  function print(n) {
    while (n != null) {
      console.log(n.data);
      n = n.next;
    }
  }
  
  
  function partitionWithPivotAtEnd(start, end) {
    if (start == end || start == null || end == null)
      return start;
  
    var pivot_prev = start;
    var curr = start;
    var pivot = end.data;
  
    while (start != end) {
      if (start.data < pivot) {
  
        pivot_prev = curr;
        var temp = curr.data;
        curr.data = start.data;
        start.data = temp;
        curr = curr.next;
      }
      start = start.next;
    }
  
  
    var temp = curr.data;
    curr.data = pivot;
    end.data = temp;
  
    return pivot_prev;
  }
  
  function sort(start, end) {
    if (start == null || start == end || start == end.next)
      return;
  
    var pivot_prev = partitionWithPivotAtEnd(start, end);
    sort(start, pivot_prev);
  
    if (pivot_prev != null && pivot_prev == start)
      sort(pivot_prev.next, end);
  
  
    else if (pivot_prev != null && pivot_prev.next != null)
      sort(pivot_prev.next.next, end);
  }
  
  
  addNode(30);
  addNode(31);
  addNode(14);
  addNode(20);
  addNode(15);
  
  var n = head;
  while (n.next != null)
    n = n.next;
  
  console.log("Linked List before ");
  print(head);
  
  sort(head, n);
  
  console.log("Linked List after ");
  print(head);
  