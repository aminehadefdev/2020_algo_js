const prenoms = ["Thomas", "Sarah", "Mélodie", "Alexandre","Alexandre",, "Mélodie", "Jonathan", "Laure", "Sarah"]
for (let i = 0; i < prenoms.length; i++) {
    for (let j = 0; j < prenoms.length; j++) {
        if(prenoms[i] == prenoms[j] && i != j){
            prenoms.splice(i,1)
        }
    }
}
var prenoms2 = prenoms.join(',')
console.log(prenoms2)