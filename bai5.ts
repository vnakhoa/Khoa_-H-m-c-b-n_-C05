import {question} from "readline-sync";

/**
 * Lấy số nguyên duong n từ bàn phím.
 * @returns số nguyên dương n
 */
function nhapN(): number {
    let N: number;
    do{
        console.log('Nhap lai (n > 0)');
        N = Number(question('Nhap so nguyen duong n: '));
    }while(N <= 0);
    return N;
}

/**
 * Kiểm tra số hoàn thiện
 * @param n Số nguyên dương 
 * @returns Đúng hoặc sai theo kiểu boolean
 */
function laSohoanthien(n: number): boolean {
    let sum: number = 0;
    for( let i: number = 1; i<n; i++) {
        if(n%i ==0)
            sum += i;
    }
    if(sum == n)
        return true;
    else 
        return false;
}

/**
 * Chạy hàm kiểm tra số hoàn thiện.
 */
function run_laSohoanthien(): void {
    let n: number = nhapN();
    let result: boolean = laSohoanthien(n);

    if(result == true)
        console.log('Yes');
    else
        console.log('No');
}

run_laSohoanthien();