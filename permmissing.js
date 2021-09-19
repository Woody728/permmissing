function solution(A){
    let mymap = new Map();
    for(i=1;i<=A.length+1;i++){
        mymap.set(i,0);
    }
    for(i=0;i<A.length;i++){
        let val = mymap.get(A[i]);
        mymap.set(A[i], val+1);
    }
    for(let [key,value] of mymap){
        if(value===0){
         answer = key;
        }
    }
    return answer;
}