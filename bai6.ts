import {question} from "readline-sync";

/**
 * Lấy ra số nguyên dương m từ bàn phím
 * @returns số nguyên dương m
 */
function nhapM(): number {
    let M: number;
    do{
        console.log('Nhap lai (M>0)');
        M = Number(question('Nhap so nguyen duong m: '));
    }while(M<=0);
    return M;
}

/**
 * Lấy ra số nguyên dương n từ bàn phím
 * @returns số nguyên dương n
 */
function nhapN(): number {
    let N: number;
    do{
        console.log('Nhap lai (N>0)');
        N = Number(question('Nhap so nguyen duong n: '));
    }while(N<=0);
    return N;
}

/**
 * Kiểm tra số chính phương đầu tiên
 * @param m số nguyên dương
 * @param n số nguyên dương
 * @returns số nguyên dương đầu tiên.
 */
function first_Sochinhphuong(m: number, n: number): string {
    let s: string = "";
    if(m<n) {
        for( let i: number = m ; i<=n ; i++) {
            if(i%Math.sqrt(i) == 0) {
                s += i;
                break;
            }
        }
    }
    else {
        console.log('m >=n không hợp lệ!');
        s = "";
    }
    return s;
}

/**
 * Chạy hàm lấy ra số chính phương đầu tiên
 */
function run_first_Sochinhphuong(): void {
    let m: number = nhapM();
    let n: number = nhapN();

    let result: string = first_Sochinhphuong(m, n);
    console.log(result);
}

run_first_Sochinhphuong();