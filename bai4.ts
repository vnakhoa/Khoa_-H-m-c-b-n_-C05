import {question} from "readline-sync";

function nhapN(): number {
    let N: number;
    do{
        N = Number(question('Nhap so nguyen (2 chu so): '));
    }while(N <= -100 || (N>=-9 && N <= 9) || N>=100);
    return N;
}

let list1: string[] = ['Muoi', 'Hai muoi', 'Ba muoi', 'Bon muoi', 'Nam muoi', 'Sau muoi', 'Bay muoi', 'Tam muoi', 'Chin muoi'];
let list2: string[] = [' mot', ' hai', ' ba', ' bon', ' nam', ' sau', ' bay', ' tam', ' chin'];

let doc: string = "";

function docSo(n: number): string {
    n =n;
    if(n>0) {
        if(String(n)[1] == "0"){
            for(let i: number = 1; i<=9; i++){
                if(String(n)[0] == String(i))
                    doc = list1[i-1];
            }
        }
        else if(String(n)[1] != "0"){
            for( let i: number = 1; i<=9; i++){
                if(String(n)[0] == String(i)){
                    for(let k: number =1; k<=9; k++){
                        if(String(n)[1] == String(k)){
                            doc = list1[i-1] + list2[k-1];
                        }
                    }
                }
            }
        }
    }
    if(n<0){
        if(String(n)[2] == "0"){
            for(let i: number = 1; i<=9; i++){
                if(String(n)[1] == String(i))
                    doc = 'am ' + list1[i-1];
            }
        }
        else if(String(n)[2] != "0"){
            for( let i: number = 1; i<=9; i++){
                if(String(n)[1] == String(i)){
                    for(let k: number =1; k<=9; k++){
                        if(String(n)[2] == String(k)){
                            doc = 'am ' + list1[i-1] + list2[k-1];
                        }
                    }
                }
            }
        }
    }
    return doc;
}

function run_docSo():void {
    let n: number = nhapN();
    let result: string = docSo(n);
    console.log(result);
}

run_docSo();
